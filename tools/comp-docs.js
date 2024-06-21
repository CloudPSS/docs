#!/bin/env node
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsdoc/require-param-description */
/* eslint-disable no-console */

/**
 * 配置项及说明见 {@link main}
 * @typedef {import("@cloudpss/resource-types/model").Model & {type: 'model', owner: string, key: string}} Model
 * @typedef {import("@cloudpss/resource-types/model").ParameterGroup} ParameterGroup
 * @typedef {import("@cloudpss/resource-types/model").PinDefinition} PinDefinition
 * @typedef {import("@cloudpss/resource-types/model").ParameterGroup['items'][number]} Parameter
 */

import fs from 'node:fs/promises';
import path from 'node:path';

const escapeMarkdown = /[[\]<>{}()\\|*_#!&=`'".$~+-]/g;
const hasUnescapedMarkdown = new RegExp(escapeMarkdown.source);

/**
 * 转义 MARKDOWN 字符串
 * @param {{} | undefined} str 字符串
 */
export function escape(str) {
    const s = String(str ?? '');
    if (s && hasUnescapedMarkdown.test(s)) {
        return s.replace(escapeMarkdown, String.raw`\$&`);
    }
    return s;
}

/**
 * 转义 MARKDOWN 字符串，用合适的 `` ` `` 字符括起来
 * @param {{} | undefined} str 字符串
 */
export function escapeCode(str) {
    const s = String(str ?? '');
    if (!s) return '` `';
    const backtick = s.indexOf('`');
    if (backtick < 0) return `\`${s}\``;
    const lastBacktick = s.lastIndexOf('`');

    const braces = '`'.repeat(lastBacktick - backtick + 2);
    return `${braces} ${s} ${braces}`;
}

/**
 * 生成标题
 * @param {number} level 标题等级
 */
export function h(level) {
    return '#'.repeat(level);
}

/**
 * 参数
 * @param {Parameter} param
 */
function genParam(param) {
    let type = '';
    // const input = param?.input === 'variable' ? '变量' : '常量';
    switch (param.type) {
        case 'real':
            type = `实数`;
            if (param['unit']) type += ` [${escape(param['unit'])}]`;
            break;
        case 'integer':
            type = `整数`;
            if (param['unit']) type += ` [${escape(param['unit'])}]`;
            break;
        case 'logical':
            type = '布尔';
            break;
        case 'choice':
            type = '选择';
            break;
        case 'multiSelect':
            type = '多选';
            break;
        case 'pinLike':
            type = `虚拟引脚（${connectionType(/** @type {PinDefinition['connection']} */ (param['connection']))}）`;
            break;
        case 'table':
            type = '表格';
            break;
        case 'text':
            type = '文本';
            break;
        case 'file':
            type = '文件';
            break;
        case 'code':
            type = '代码';
            break;
        default: {
            // param.type satisfies undefined;
            type = ' ';
            break;
        }
    }
    const name = param.name ? param.name : param.key;

    return `| ${escape(name)} | ${escapeCode(param.key)} | ${type ?? ''} | ${param.description ?? ''} |`;
}
/**
 * 参数组
 * @param {ParameterGroup} params
 * @param {number} index
 * @param {number} level
 */
function genParamGroup(params, index, level) {
    if (!params.items) return '\n';
    return `${h(level)} ${escape(params.name) || `[${index + 1}]`}

${params.description ?? ''}

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
${params.items.map((p) => genParam(p)).join('\n')}
`;
}

/**
 * 参数列表
 * @param {ParameterGroup[]} params
 * @param {number} level
 */
function genParams(params, level) {
    if (!params || params.length === 0) return '';
    return `
${params.map((p, i) => genParamGroup(p, i, level + 1)).join('\n')}
`;
}

/**
 * 链接类型
 * @param {PinDefinition['connection']} connection
 */
function connectionType(connection) {
    switch (connection) {
        case 'electrical':
            return '电气';
        case 'input':
            return '输入';
        case 'output':
            return '输出';
        case 'electricalAc':
            return '交流';
        case 'electricalDc':
            return '直流';
        case 'hydrogen':
            return '氢气';
        case 'water':
            return '水';
        default:
            // connection satisfies '' | undefined;
            return String(connection ?? '');
    }
}

/**
 * 引脚
 * @param {PinDefinition} pin
 */
function genPin(pin) {
    const dim = pin.dim ? `${String(pin.dim?.[0] ?? '')} x ${String(pin.dim[1] ?? '')}` : '';
    const name = pin.name ? pin.name : pin.key;
    return `| ${escape(name)} | ${escapeCode(pin.key)} | ${connectionType(pin.connection)} | ${dim} | ${pin.description ?? ''} |`;
}

/**
 * 引脚列表
 * @param {PinDefinition[]} pins
 * @param {number} level
 */
function genPins(pins, level) {
    if (!pins || pins.length === 0) return '';
    return `
| 引脚名 | 键名 | 类型 | 维度 | 描述 |
|:------ |:---- |:----:|:----:|:---- |
${pins.map((p) => genPin(p)).join('\n')}
`;
}

/**
 * 生成标题
 * @param {string | undefined} name
 * @param {number} level
 */
function genName(name, level) {
    if (!name) return `${h(level)} &nbsp;`;
    return `${h(level)} ${escape(name)}`;
}
/**
 * 生成描述
 * @param {string} description
 */
function genDescription(description) {
    if (!description) return '> &nbsp;';
    return description.replace(/(^|\n)/g, `\n> `);
}

/**
 * 获取模型
 * @param {string} token token
 * @param {string} owner 所有者
 * @returns {Promise<Model[]>} 模型列表
 */
async function fetchModels(token, owner) {
    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            query: `query {
                models(input: {owner: "${owner}", limit: 1000000, orderBy: [] }) {
                    items {
                        rid
                        type
                        owner
                        key
                        name
                        description
                        revision {
                            parameters
                            pins
                            documentation
                            graphic
                        }
                    }
                }
            }`,
        }),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status} ${await response.text()}`);

    const payload = await /** @type {Promise<{ data: { models: { items: Model[] } } }>} */ (response.json());
    return payload.data.models.items;
}

/**
 * 生成文档
 * @param {Model} resource 资源
 * @param {string} dir 输出路径
 */
async function documentation(resource, dir) {
    await fs.mkdir(dir, { recursive: true });
    try {
        await fs.stat(path.join(dir, 'index.md'));
    } catch (e) {
        await fs.writeFile(
            path.join(dir, 'index.md'),
            `---
title: ${JSON.stringify(resource.name ?? '')}
description: ${JSON.stringify(resource.description ?? '')}
---

## 元件定义

## 元件说明

${escape(resource.name)}元件参数标签页包括**属性**、**参数**、**引脚**三类参数，下面对每类参数进行详细说明。

### 属性

CloudPSS 提供了一套统一的元件属性功能，关于元件属性参数的配置，详见 [参数卡](docs/documents/software/10-xstudio/20-simstudio/40-workbench/20-function-zone/30-design-tab/30-param-panel/index.md) 页面。

### 参数

import Parameters from './_parameters.md'

<Parameters/>

### 引脚

import Pins from './_pins.md'

<Pins/>

## 案例

## 常见问题

`,
        );
    }
    const generatorHint = `<!--
DO NOT EDIT THIS FILE DIRECTLY.
This file is generated by tools/comp-docs.js.
All changes will be overwritten by regeneration.
-->
`;
    if (resource.revision && 'parameters' in resource.revision) {
        await fs.writeFile(
            path.join(dir, '_parameters.md'),
            `${generatorHint}
<slot class="model-parameters">
${genParams(resource.revision.parameters, 3)}
</slot>
`,
        );
    }
    if (resource.revision && 'pins' in resource.revision) {
        await fs.writeFile(
            path.join(dir, '_pins.md'),
            `${generatorHint}
<slot class="model-pins">
${genPins(resource.revision.pins, 3)}
</slot>
`,
        );
    }
}

/**
 * 在此处配置 GraphQL 服务地址
 */
const URL = 'https://dev.local.ddns.cloudpss.net/graphql';

/**
 * 在此处配置需要加载的模型
 */
const OWNERS = ['CloudPSS'];

/**
 * 在此处配置需要生成文档的模型及其输出路径
 */
const MODELS = {
    'model/CloudPSS/_GOV2': 'cases/10-comp_GOV2',
};

/**
 * 运行 `pnpm comp-docs <token>` 生成文档，其中 `<token>` 为 API 访问令牌
 */
async function main() {
    if (process.argv.length !== 3) {
        console.error(`Usage: node ${path.relative(process.cwd(), process.argv[1])} <token>`);
        process.exitCode = -1;
        return;
    }
    const token = process.argv[2];
    const out = path.resolve(import.meta.dirname, '../docs');
    const models = (await Promise.all(OWNERS.map((owner) => fetchModels(token, owner)))).flat();
    await fs.mkdir(out, { recursive: true });
    const map = new Map(models.map((model) => [model.rid, model]));
    for (const [rid, dist] of Object.entries(MODELS)) {
        const model = map.get(/** @type {Model['rid']} */ (rid));
        if (!model) {
            console.error(`Model ${rid} not found`);
            continue;
        }
        await documentation(model, path.join(out, dist));
    }
}

void main().catch(console.error);
