#!/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';

const escapeMarkdown = /[[\]<>{}()\\|*_#!&=`'".$~+-]/g;
const hasUnescapedMarkdown = new RegExp(escapeMarkdown.source);

/**
 * 转义 MARKDOWN 字符串
 * @param {string | undefined} s 字符串
 */
export function escape(s) {
    s = String(s ?? '');
    if (s && hasUnescapedMarkdown.test(s)) {
        return s.replace(escapeMarkdown, String.raw`\$&`);
    }
    return s;
}

/**
 * 转义 MARKDOWN 字符串，用合适的 `` ` `` 字符括起来
 * @param {string | undefined} s 字符串
 */
export function escapeCode(s) {
    s = String(s ?? '');
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
 */
function genParam(param) {
    let type = '';
    // const input = param?.input === 'variable' ? '变量' : '常量';
    switch (param.type) {
        case 'real':
            type = `实数`;
            if (param.unit) type += ` [${escape(param.unit)}]`;
            break;
        case 'integer':
            type = `整数`;
            if (param.unit) type += ` [${escape(param.unit)}]`;
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
            type = `虚拟引脚（${connectionType(param.connection)}）`;
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
 */
function genParams(params, level) {
    if (!params || params.length === 0) return '';
    return `${h(level)} 参数

${params.map((p, i) => genParamGroup(p, i, level + 1)).join('\n')}
`;
}

/**
 * 链接类型
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
 */
function genPin(pin) {
    const dim = pin.dim ? `${String(pin.dim?.[0] ?? '')} x ${String(pin.dim[1] ?? '')}` : '';
    const name = pin.name ? pin.name : pin.key;
    return `| ${escape(name)} | ${escapeCode(pin.key)} | ${connectionType(pin.connection)} | ${dim} | ${pin.description ?? ''} |`;
}

/**
 * 引脚列表
 */
function genPins(pins, level) {
    if (!pins || pins.length === 0) return '';
    return `${h(level)} 引脚

| 引脚名 | 键名 | 类型 | 维度 | 描述 |
|:------ |:---- |:----:|:----:|:---- |
${pins.map((p) => genPin(p)).join('\n')}
`;
}

/**
 * 生成标题
 */
function genName(name, level) {
    if (!name) return `${h(level)} &nbsp;`;
    return `${h(level)} ${escape(name)}`;
}
/**
 * 生成描述
 */
function genDescription(description) {
    if (!description) return '> &nbsp;';
    return description.replace(/(^|\n)/g, `\n> `);
}

/**
 * 生成文档
 */
function documentation(resource, options = {}) {
    const level = options.level ?? 1;
    const ret = [];
    if (options.name) ret.push(genName(resource.name, level));
    if (options.description !== false) ret.push(genDescription(resource.description));
    if (options.parameters !== false && resource.revision && 'parameters' in resource.revision)
        ret.push(genParams(resource.revision.parameters, level + 1));
    if (options.pins !== false && resource.revision && 'pins' in resource.revision)
        ret.push(genPins(resource.revision.pins, level + 1));
    if (options.documentation !== false && resource.revision?.documentation) ret.push(resource.revision.documentation);
    return ret.join('\n\n');
}

async function fetchModels(token, owner) {
    const response = await fetch(`https://dev.local.ddns.cloudpss.net/graphql`, {
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
                        name
                        owner
                        key
                        description
                        revision {
                            parameters
                            pins
                            documentation
                        }
                    }
                }
            }`,
        }),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status} ${await response.text()}`);
    const payload = await response.json();
    return payload.data.models.items;
}

async function main() {
    if (process.argv.length !== 5) {
        console.error(`Usage: node ${path.relative(process.cwd(), process.argv[1])} <token> <owner> <output>`);
        process.exitCode = -1;
        return;
    }
    const token = process.argv[2];
    const owner = process.argv[3];
    const out = path.resolve(process.argv[4]);
    const models = await fetchModels(token, owner);
    for (const model of models) {
        const docs = documentation(model, { level: 2, name: false, description: false, documentation: false });
        await fs.mkdir(out, { recursive: true });
        await fs.writeFile(
            `${out}/comp${model.key}.md`,
            [
                '---',
                `title: ${model.name || "''"}`,
                `description: ${JSON.stringify(model.description)}`,
                '---\n',
                docs,
            ].join('\n'),
        );
    }
}

void main().catch(console.error);
