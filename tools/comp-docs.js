#!/bin/env node
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */

/**
 * 配置项及说明见 {@link main}
 * @typedef {import('@cloudpss/resource-types/model').Model & {type: 'model', owner: string, key: string}} Model
 * @typedef {import('@cloudpss/resource-types/model').ParameterGroup} ParameterGroup
 * @typedef {import('@cloudpss/resource-types/model').PinDefinition} PinDefinition
 * @typedef {import('@cloudpss/resource-types/model').ParameterGroup['items'][number]} Parameter
 */

import fs from 'node:fs/promises';
import path from 'node:path';

const escapeMarkdown = /[[\]<>{}()\\|*_#!&=`'".$~+-]/g;
const hasUnescapedMarkdown = new RegExp(escapeMarkdown.source);

/**
 * 转义 MARKDOWN 字符串
 * @param {unknown} str 字符串
 * @returns {string} 转义后的字符串
 */
export function escape(str) {
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    const s = String(str ?? '');
    if (s && hasUnescapedMarkdown.test(s)) {
        return s.replace(escapeMarkdown, String.raw`\$&`);
    }
    return s;
}

/**
 * 转义 MARKDOWN 字符串，用合适的 `` ` `` 字符括起来
 * @param {unknown} str 字符串
 * @returns {string} 转义后的字符串
 */
export function escapeCode(str) {
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
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
 * @returns {string} 标题 # 字符串
 */
export function h(level) {
    return '#'.repeat(level);
}

/**
 * 生成维数
 * @param {string[]} [dim] 维数
 * @returns {string} 维数字符串
 */
export function dim(dim) {
    if (!dim?.length) {
        return ``;
    }
    if (dim.every((d) => Number(d) === 0)) {
        return `<samp style={{fontStyle: 'italic'}}>ANY</samp>`;
    }
    const dimHtml = dim.map((d) => {
        const num = Number(d);
        if (Number.isSafeInteger(num) && num >= 0) {
            return `<samp>${num}</samp>`;
        }
        if (d.length > 20 || d.includes('\n')) {
            return `<code title="${d.replace(/["'\n<>&]/g, (c) => `&#${c.codePointAt(0)};`)}">...</code>`;
        }
        return escapeCode(d);
    });
    return dimHtml.join(' × ');
}

/**
 * 参数
 * @param {Parameter} param
 * @returns {string} 参数字符串
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
 * @returns {string} 参数组字符串
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
 * @returns {string} 参数列表字符串
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
 * @returns {string} 链接类型字符串
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
 * @returns {string} 引脚字符串
 */
function genPin(pin) {
    const name = pin.name ? pin.name : pin.key;
    return `| ${escape(name)} | ${escapeCode(pin.key)} | ${connectionType(pin.connection)} | ${dim(pin.dim)} | ${pin.description ?? ''} |`;
}

/**
 * 引脚列表
 * @param {PinDefinition[]} pins
 * @param {number} level
 * @returns {string} 引脚列表字符串
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
 * @returns {string} 标题字符串
 */
function genName(name, level) {
    if (!name) return `${h(level)} &nbsp;`;
    return `${h(level)} ${escape(name)}`;
}
/**
 * 生成描述
 * @param {string} description
 * @returns {string} 描述字符串
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
 * @returns {Promise<void>}
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



### 属性

CloudPSS 元件包含统一的**属性**选项，其配置方法详见 [参数卡](docs/documents/software/10-xstudio/20-simstudio/40-workbench/20-function-zone/30-design-tab/30-param-panel/index.md) 页面。

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
const URL = 'http://cloudpss-calculate.local.ddns.cloudpss.net/graphql';

/**
 * 在此处配置需要加载的模型
 */
const OWNERS = ['CloudPSS'];

/**
 * 在此处配置需要生成文档的模型及其输出路径
 */

// eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJDbG91ZFBTUyIsInNjb3BlcyI6WyJtb2RlbDo5ODM2NyIsImZ1bmN0aW9uOjk4MzY3IiwiYXBwbGljYXRpb246MzI4MzEiXSwicm9sZXMiOlsiQ2xvdWRQU1MiXSwidHlwZSI6ImFwcGx5IiwiZXhwIjoxNzQ2OTM2NDc4LCJub3RlIjoidHpkMTExIiwiaWF0IjoxNzE1ODMyNDc4fQ.laSVmITluju6kYaciv9NwFkIg2TIPB_xDh9Oje2LqwYhVUj6P9h_-dXuuneK-6ZmB6HyOdjsnCJu9JzRtA-ynQ

const MODELS = {
    'model/CloudPSS/GND':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/10-passive-elements/10-GND',
    'model/CloudPSS/newResistorRouter':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/10-passive-elements/20-newResistorRouter',
    'model/CloudPSS/newInductorRouter':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/10-passive-elements/30-newInductorRouter',
    'model/CloudPSS/newCapacitorRouter':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/10-passive-elements/40-newCapacitorRouter',
    'model/CloudPSS/newCapacitorRouterWithInitValue':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/10-passive-elements/50-newCapacitorRouterWithInitValue',
    'model/CloudPSS/_newFaultResistor':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/10-passive-elements/60-_newFaultResistor',
    'model/CloudPSS/_newFaultResistor_3p':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/10-passive-elements/70-_newFaultResistor_3p',
    'model/CloudPSS/_newTransformer_1p':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/10-passive-elements/80-_newTransformer_1p',
    'model/CloudPSS/_newBreaker_1p':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/10-passive-elements/90-_newBreaker_1p',
    'model/CloudPSS/_newBreaker_3p':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/10-passive-elements/100-_newBreaker_3p',
    'model/CloudPSS/_Arrestor':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/10-passive-elements/110-_Arrestor',
    'model/CloudPSS/_BusConnector':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/10-passive-elements/120-_BusConnector',
    'model/CloudPSS/VariableRLCSeries':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/10-passive-elements/130-VariableRLCSeries',
    'model/CloudPSS/_newDCCurrentSource':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/20-sources/10-_newDCCurrentSource',
    'model/CloudPSS/_newDCVoltageSource':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/20-sources/20-_newDCVoltageSource',
    'model/CloudPSS/_newACVoltageSource_1p':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/20-sources/30-_newACVoltageSource_1p',
    'model/CloudPSS/_newCtrlCurrentSource':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/20-sources/40-_newCtrlCurrentSource',
    'model/CloudPSS/_newCtrlVoltageSource':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/20-sources/50-_newCtrlVoltageSource',
    'model/CloudPSS/_newCtrlAcVoltageSource':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/20-sources/60-_newCtrlAcVoltageSource',
    'model/CloudPSS/_newCtrlVPAcVoltageSource':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/20-sources/70-_newCtrlVPAcVoltageSource',
    'model/CloudPSS/_HarmonicCurrentSource':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/20-sources/80-_HarmonicCurrentSource',
    'model/CloudPSS/_HarmonicVoltageSource':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/20-sources/90-_HarmonicVoltageSource',
    'model/CloudPSS/_newShuntLC_3p':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/40-three-phase-ac-components/10-_newShuntLC_3p',
    'model/CloudPSS/_newCtrlLoad_3p':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/40-three-phase-ac-components/20-_newCtrlLoad_3p',
    'model/CloudPSS/_newExpLoad_3p':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/40-three-phase-ac-components/30-_newExpLoad_3p',
    'model/CloudPSS/LineCluster':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/40-three-phase-ac-components/40-LineCluster',
    'model/CloudPSS/Thevenin_3p':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/40-three-phase-ac-components/50-Thevenin_3p',
    'model/CloudPSS/TranssmissionLineRouter':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/40-three-phase-ac-components/60-TransmissionLine',
    'model/CloudPSS/TransmissionLine':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/40-three-phase-ac-components/60-TransmissionLine',
    'model/CloudPSS/_TLine_Bergeron_3p_SinglePort':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/40-three-phase-ac-components/70-_TLine_Bergeron_3p_SinglePort',
    'model/CloudPSS/_newBus_3p':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/40-three-phase-ac-components/80-_newBus_3p',
    'model/CloudPSS/_newACVoltageSource_3p':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/40-three-phase-ac-components/90-_newACVoltageSource_3p',
    'model/CloudPSS/_newTransformer_3p2w':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/40-three-phase-ac-components/100-_newTransformer_3p2w',
    'model/CloudPSS/_newTransformer_3p3w':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/40-three-phase-ac-components/110-_newTransformer_3p3w',
    'model/CloudPSS/SyncGeneratorRouter':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/40-three-phase-ac-components/120-SyncGeneratorRouter',
    'model/CloudPSS/_TLine_Bergeron_3p_Decoupled':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/40-three-phase-ac-components/130-_TLine_Bergeron_3p_Decoupled',
    'model/CloudPSS/SyntheticLoad':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/40-three-phase-ac-components/140-SyntheticLoad',
    'model/CloudPSS/FaultSet':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/40-three-phase-ac-components/150-FaultSet',
    'model/CloudPSS/GroundingTransformer':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/40-three-phase-ac-components/160-GroundingTransformer',
    'model/CloudPSS/PMSM':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/50-rotating-machines/10-PMSM',
    'model/CloudPSS/WoundRotorIMRouter':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/50-rotating-machines/20-WoundRotorIMRouter',
    'model/CloudPSS/BLDC':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/50-rotating-machines/30-BLDC',
    'model/CloudPSS/SyncGeneratorBase12p':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/50-rotating-machines/40-SyncGeneratorBase12p',
    'model/CloudPSS/AsynchronousMotor':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/50-rotating-machines/50-AsynchronousMotor',
    'model/CloudPSS/_DCMachine':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/50-rotating-machines/60-_DCMachine',
    'model/CloudPSS/_newDiode':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/30-power-electronic-switches/10-_newDiode',
    'model/CloudPSS/_newThyristor':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/30-power-electronic-switches/20-_newThyristor',
    'model/CloudPSS/_newIGBT':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/30-power-electronic-switches/30-_newIGBT',
    'model/CloudPSS/_DABModule':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/60-power-electronic-modules/10-_DABModule',
    'model/CloudPSS/_MultiHalfBridgeModule':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/60-power-electronic-modules/20-_MultiHalfBridgeModule',
    'model/CloudPSS/MultiHalfBridgeModuleCM':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/60-power-electronic-modules/25-MultiHalfBridgeModuleCM',
    'model/CloudPSS/newSixPulseBridgeRouter':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/60-power-electronic-modules/30-newSixPulseBridgeRouter',
    'model/CloudPSS/_HalfBridgeModule':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/60-power-electronic-modules/40-_HalfBridgeModule',
    'model/CloudPSS/_HBridgeModule':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/60-power-electronic-modules/50-_HBridgeModule',
    'model/CloudPSS/_HBridgeWithInductanceModule':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/60-power-electronic-modules/60-_HBridgeWithInductanceModule',
    'model/CloudPSS/_HBridgeWithTransformerModule':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/60-power-electronic-modules/70-_HBridgeWithTransformerModule',
    'model/CloudPSS/_BacktoBackModule':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/60-power-electronic-modules/80-_BacktoBackModule',
    'model/CloudPSS/_ThreePhaseHBridgeModule':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/60-power-electronic-modules/90-_ThreePhaseHBridgeModule',
    'model/CloudPSS/_NSSTsModule':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/60-power-electronic-modules/100-_NSSTsModule',
    'model/CloudPSS/_ThreeLevelHModule':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/60-power-electronic-modules/110-_ThreeLevelHModule',
    'model/CloudPSS/_newPVSource':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/70-renewable-energy-sources/10-_newPVSource',
    'model/CloudPSS/_newStorageBattery':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/70-renewable-energy-sources/20-_newStorageBattery',
    'model/CloudPSS/FD_TLine':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/80-advanced/10-FD_TLine',
    'model/CloudPSS/FD_Line':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/80-advanced/20-FD_Line',
    'model/CloudPSS/FDNE':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/80-advanced/30-FDNE',
    'model/CloudPSS/RLCMatrix':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/80-advanced/40-RLCMatrix',
    'model/CloudPSS/_ChannelDeMerge':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/10-control-basic/10-_ChannelDeMerge',
    'model/CloudPSS/_ChannelMerge':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/10-control-basic/20-_ChannelMerge',
    'model/CloudPSS/_newConstant':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/10-control-basic/30-_newConstant',
    'model/CloudPSS/ConstantMultiDim':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/10-control-basic/40-ConstantMultiDim',
    'model/CloudPSS/DataExtraction':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/10-control-basic/50-DataExtraction',
    'model/CloudPSS/_newLoopNodeMultiDim':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/10-control-basic/60-_newLoopNodeMultiDim',
    'model/CloudPSS/_newTime':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/10-control-basic/70-_newTime',
    'model/CloudPSS/_newDeltaT':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/10-control-basic/80-_newDeltaT',
    'model/CloudPSS/ElectricalLable':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/10-control-basic/90-ElectricalLable',
    'model/CloudPSS/_Sleep':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/10-control-basic/100-_Sleep',
    'model/CloudPSS/_newLoopNode':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/10-control-basic/110-_newLoopNode',
    'model/CloudPSS/_EventLog':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/10-control-basic/120-_EventLog',
    'model/CloudPSS/timer':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/10-control-basic/130-timer',
    'model/CloudPSS/_newSum':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/20-control-basic-math-functions/10-_newSum',
    'model/CloudPSS/_newMultiply':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/20-control-basic-math-functions/20-_newMultiply',
    'model/CloudPSS/_newDivide':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/20-control-basic-math-functions/30-_newDivide',
    'model/CloudPSS/_newAbs':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/20-control-basic-math-functions/40-_newAbs',
    'model/CloudPSS/_newSgn':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/20-control-basic-math-functions/50-_newSgn',
    'model/CloudPSS/_RoundComponent':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/20-control-basic-math-functions/60-_RoundComponent',
    'model/CloudPSS/_newTrigonometric':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/20-control-basic-math-functions/70-_newTrigonometric',
    'model/CloudPSS/_newPower':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/20-control-basic-math-functions/80-_newPower',
    'model/CloudPSS/_newExp':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/20-control-basic-math-functions/90-_newExp',
    'model/CloudPSS/_newLog':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/20-control-basic-math-functions/100-_newLog',
    'model/CloudPSS/_newMaxMin':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/20-control-basic-math-functions/110-_newMaxMin',
    'model/CloudPSS/_newMaxMinOneCycle':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/20-control-basic-math-functions/120-_newMaxMinOneCycle',
    'model/CloudPSS/_MeanValue':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/20-control-basic-math-functions/130-_MeanValue',
    'model/CloudPSS/_newGain':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/30-control-linear-transfer-functions/10-_newGain',
    'model/CloudPSS/_newIntegrator':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/30-control-linear-transfer-functions/20-_newIntegrator',
    'model/CloudPSS/_newDerivative':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/30-control-linear-transfer-functions/30-_newDerivative',
    'model/CloudPSS/_newPICtrl':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/30-control-linear-transfer-functions/40-_newPICtrl',
    'model/CloudPSS/_newZero':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/30-control-linear-transfer-functions/50-_newZero',
    'model/CloudPSS/_newRealPole':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/30-control-linear-transfer-functions/60-_newRealPole',
    'model/CloudPSS/_newDiffPole':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/30-control-linear-transfer-functions/70-_newDiffPole',
    'model/CloudPSS/_newLeadLag':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/30-control-linear-transfer-functions/80-_newLeadLag',
    'model/CloudPSS/_newComplexPole':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/30-control-linear-transfer-functions/90-_newComplexPole',
    'model/CloudPSS/state-space_model':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/30-control-linear-transfer-functions/100-state-space_model',
    'model/CloudPSS/_newLimiter':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/40-control-nonlinear-functions/10-_newLimiter',
    'model/CloudPSS/_newDelay':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/40-control-nonlinear-functions/20-_newDelay',
    'model/CloudPSS/_newAngleResolver':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/40-control-nonlinear-functions/30-_newAngleResolver',
    'model/CloudPSS/_newPiecewiseLinear':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/40-control-nonlinear-functions/40-_newPiecewiseLinear',
    'model/CloudPSS/_ratelimit1':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/40-control-nonlinear-functions/50-_ratelimit1',
    'model/CloudPSS/UserDefinedCurve':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/40-control-nonlinear-functions/60-UserDefinedCurve',
    'model/CloudPSS/_newParkTransform':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/70-control-coordinate-transform-functions/10-_newParkTransform',
    'model/CloudPSS/_newClarkTransform':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/70-control-coordinate-transform-functions/20-_newClarkTransform',
    'model/CloudPSS/_newXYtoDQ':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/70-control-coordinate-transform-functions/30-_newXYtoDQ',
    'model/CloudPSS/_newPRCoordinate':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/70-control-coordinate-transform-functions/40-_newPRCoordinate',
    'model/CloudPSS/newLogicGate':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/60-control-digital-signal-functions/10-newLogicGate',
    'model/CloudPSS/newLogicGate1':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/60-control-digital-signal-functions/20-newLogicGate1',
    'model/CloudPSS/newLogicGate2':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/60-control-digital-signal-functions/30-newLogicGate2',
    'model/CloudPSS/newLogicGate3':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/60-control-digital-signal-functions/40-newLogicGate3',
    'model/CloudPSS/_newBinaryDelay':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/60-control-digital-signal-functions/50-_newBinaryDelay',
    'model/CloudPSS/_newMonoStable':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/60-control-digital-signal-functions/60-_newMonoStable',
    'model/CloudPSS/_newFlipFlop':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/60-control-digital-signal-functions/70-_newFlipFlop',
    'model/CloudPSS/_newSelector':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/60-control-digital-signal-functions/80-_newSelector',
    'model/CloudPSS/_newEdgeDetector':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/60-control-digital-signal-functions/90-_newEdgeDetector',
    'model/CloudPSS/pulsecounter':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/60-control-digital-signal-functions/100-pulsecounter',
    'model/CloudPSS/_newComparator':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/50-control-analog-signal-functions/10-_newComparator',
    'model/CloudPSS/_newHysteresis':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/50-control-analog-signal-functions/20-_newHysteresis',
    'model/CloudPSS/_newZeroDetector':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/50-control-analog-signal-functions/30-_newZeroDetector',
    'model/CloudPSS/_newSample':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/50-control-analog-signal-functions/40-_newSample',
    'model/CloudPSS/_newSampleHold':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/50-control-analog-signal-functions/50-_newSampleHold',
    'model/CloudPSS/_newTriGen':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/80-control-signal-generators/10-_newTriGen',
    'model/CloudPSS/_newSquareGen':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/80-control-signal-generators/20-_newSquareGen',
    'model/CloudPSS/_StepClimbing':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/80-control-signal-generators/30-_StepClimbing',
    'model/CloudPSS/_newSinGen':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/80-control-signal-generators/40-_newSinGen',
    'model/CloudPSS/_newAFPMGen':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/80-control-signal-generators/50-_newAFPMGen',
    'model/CloudPSS/_newSinglePulse':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/80-control-signal-generators/60-_newSinglePulse',
    'model/CloudPSS/_newPulseGen':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/80-control-signal-generators/70-_newPulseGen',
    'model/CloudPSS/_newStepGen':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/80-control-signal-generators/80-_newStepGen',
    'model/CloudPSS/_newRampGen':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/80-control-signal-generators/90-_newRampGen',
    'model/CloudPSS/_newSurgeGen':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/80-control-signal-generators/100-_newSurgeGen',
    'model/CloudPSS/_newDropGen':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/80-control-signal-generators/110-_newDropGen',
    'model/CloudPSS/RandomGeneratorRouter':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/80-control-signal-generators/120-RandomGeneratorRouter',
    'model/CloudPSS/_ST5B':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/100-control-ac-system-controls/10-_ST5B',
    'model/CloudPSS/_GOV2':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/100-control-ac-system-controls/20-_GOV2',
    'model/CloudPSS/_TUR1':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/100-control-ac-system-controls/30-_TUR1',
    'model/CloudPSS/_FirePulseGenSST':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/90-control-dc-system-controls/10-_FirePulseGenSST',
    'model/CloudPSS/_EXST1_PTI':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/170-ieee-standard-excitors/10-_EXST1_PTI',
    'model/CloudPSS/_PSS1A':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/190-ieee-standard-pss/10-_PSS1A',
    'model/CloudPSS/_STEAM_GOV_1':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/180-ieee-standard-governors/10-_STEAM_GOV_1',
    'model/CloudPSS/_STEAM_TUR_1':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/180-ieee-standard-governors/20-_STEAM_TUR_1',
    'model/CloudPSS/_F_MNOPQRST_Exciter':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/110-bpa-excitors/10-_F_MNOPQRST_Exciter',
    'model/CloudPSS/_F_UV_Exciter':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/110-bpa-excitors/20-_F_UV_Exciter',
    'model/CloudPSS/_GAGoverner':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/120-bpa-governors/10-_GAGoverner',
    'model/CloudPSS/_GJGoverner':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/120-bpa-governors/20-_GJGoverner',
    'model/CloudPSS/_GMGoverner':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/120-bpa-governors/30-_GMGoverner',
    'model/CloudPSS/_GXGoverner':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/120-bpa-governors/40-_GXGoverner',
    'model/CloudPSS/_TBTurbine':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/120-bpa-governors/50-_TBTurbine',
    'model/CloudPSS/_TWTurbine':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/120-bpa-governors/60-_TWTurbine',
    'model/CloudPSS/_GIGoverner':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/120-bpa-governors/70-_GIGoverner',
    'model/CloudPSS/_GNGoverner':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/120-bpa-governors/80-_GNGoverner',
    'model/CloudPSS/_GHGoverner':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/120-bpa-governors/90-_GHGoverner',
    'model/CloudPSS/_TVTurbine':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/120-bpa-governors/100-_TVTurbine',
    'model/CloudPSS/_SIPSS':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/130-bpa-pss/10-_SIPSS',
    'model/CloudPSS/_SF_P_S_GPSS':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/130-bpa-pss/20-_SF_P_S_GPSS',
    'model/CloudPSS/GVCOMPEN':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/140-psasp-excitors/10-GVCOMPEN',
    'model/CloudPSS/_PSASP_AVR_14':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/140-psasp-excitors/20-_PSASP_AVR_14',
    'model/CloudPSS/_PSASP_AVR_1':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/140-psasp-excitors/30-_PSASP_AVR_1',
    'model/CloudPSS/_PSASP_AVR_3to10':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/140-psasp-excitors/40-_PSASP_AVR_3to10',
    'model/CloudPSS/_PSASP_AVR_2':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/140-psasp-excitors/50-_PSASP_AVR_2',
    'model/CloudPSS/_PSASP_AVR_11to12':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/140-psasp-excitors/60-_PSASP_AVR_11to12',
    'model/CloudPSS/_PSASP_GOV_3':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/150-psasp-governors/10-_PSASP_GOV_3',
    'model/CloudPSS/_PSASP_GOV_4':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/150-psasp-governors/20-_PSASP_GOV_4',
    'model/CloudPSS/_PSASP_GOV_7':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/150-psasp-governors/30-_PSASP_GOV_7',
    'model/CloudPSS/_PSASP_GOV_8':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/150-psasp-governors/40-_PSASP_GOV_8',
    'model/CloudPSS/_PSASP_GOV_1':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/150-psasp-governors/50-_PSASP_GOV_1',
    'model/CloudPSS/_PSASP_PSS_4':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/160-psasp-pss/10-_PSASP_PSS_4',
    'model/CloudPSS/_PSASP_PSS_1':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/160-psasp-pss/20-_PSASP_PSS_1',
    'model/CloudPSS/_PSASP_PSS_2':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/160-psasp-pss/30-_PSASP_PSS_2',
    'model/CloudPSS/_PSASP_PSS_5':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/160-psasp-pss/40-_PSASP_PSS_5',
    'model/CloudPSS/LineRelay':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/200-protection-basic/10-LineRelay',
    'model/CloudPSS/CircleRelay':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/200-protection-basic/20-CircleRelay',
    'model/CloudPSS/PolygonalRelay':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/200-protection-basic/30-PolygonalRelay',
    'model/CloudPSS/CurrentProtection':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/210-protection-modules/10-CurrentProtection',
    'model/CloudPSS/ZeroSequenceCurrentProtection':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/210-protection-modules/20-ZeroSequenceCurrentProtection',
    'model/CloudPSS/DistanceProtection':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/210-protection-modules/30-DistanceProtection',
    'model/CloudPSS/DifferentialProtection':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/210-protection-modules/40-DifferentialProtection',
    'model/CloudPSS/OverVoltageProtection':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/210-protection-modules/45-OverVoltageProtection',
    'model/CloudPSS/LowVoltageProtection':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/210-protection-modules/46-LowVoltageProtection',

    'model/CloudPSS/ZeroSequenceOverVoltageProtection':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/210-protection-modules/50-ZeroSequenceOverVoltageProtection',
    'model/CloudPSS/CompoundVoltageOverCurrentProtection':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/210-protection-modules/60-CompoundVoltageOverCurrentProtection',
    'model/CloudPSS/BUSDifferentialProtection':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/210-protection-modules/70-BUSDifferentialProtection',
    'model/CloudPSS/BZT_10kV':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/210-protection-modules/80-BZT_10kV',
    'model/CloudPSS/Reclose':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/210-protection-modules/90-Reclose',

    'model/CloudPSS/_newChannel':
        'documents/software/20-emtlab/110-component-library/10-basic/40-output/10-output/10-_newChannel',
    'model/CloudPSS/XYChannel':
        'documents/software/20-emtlab/110-component-library/10-basic/40-output/10-output/20-XYChannel',
    'model/CloudPSS/shapeCircle':
        'documents/software/20-emtlab/110-component-library/10-basic/40-output/20-scope-shapes/10-shapeCircle',
    'model/CloudPSS/shapeLine':
        'documents/software/20-emtlab/110-component-library/10-basic/40-output/20-scope-shapes/20-shapeLine',
    'model/CloudPSS/shapePolygon':
        'documents/software/20-emtlab/110-component-library/10-basic/40-output/20-scope-shapes/30-shapePolygon',

    'model/CloudPSS/_NewBranchVoltageMeter':
        'documents/software/20-emtlab/110-component-library/10-basic/30-measurement/10-basic/10-_NewBranchVoltageMeter',
    'model/CloudPSS/_NewVoltageMeter':
        'documents/software/20-emtlab/110-component-library/10-basic/30-measurement/10-basic/20-_NewVoltageMeter',
    'model/CloudPSS/_NewCurrentMeter':
        'documents/software/20-emtlab/110-component-library/10-basic/30-measurement/10-basic/30-_NewCurrentMeter',
    'model/CloudPSS/RMSRouter':
        'documents/software/20-emtlab/110-component-library/10-basic/30-measurement/10-basic/40-RMSRouter',
    'model/CloudPSS/_newPowerMeter_3p':
        'documents/software/20-emtlab/110-component-library/10-basic/30-measurement/10-basic/50-_newPowerMeter_3p',
    'model/CloudPSS/_newPLL':
        'documents/software/20-emtlab/110-component-library/10-basic/30-measurement/10-basic/60-_newPLL',
    'model/CloudPSS/_newFFT':
        'documents/software/20-emtlab/110-component-library/10-basic/30-measurement/10-basic/70-_newFFT',
    'model/CloudPSS/_ImpedanceAnalysis':
        'documents/software/20-emtlab/110-component-library/10-basic/30-measurement/10-basic/80-_ImpedanceAnalysis',
    'model/CloudPSS/SequenceDecomposition':
        'documents/software/20-emtlab/110-component-library/10-basic/30-measurement/10-basic/90-SequenceDecomposition',
    'model/CloudPSS/pinLikePort':
        'documents/software/20-emtlab/110-component-library/10-basic/50-module/10-basic/10-pinLikePort',
    'model/CloudPSS/_SubSysPort':
        'documents/software/20-emtlab/110-component-library/10-basic/50-module/10-basic/20-_SubSysPort',
    'model/CloudPSS/probeChannel':
        'documents/software/20-emtlab/110-component-library/10-basic/50-module/10-basic/30-probeChannel',

    'model/CloudPSS/WGSource':
        'documents/software/20-emtlab/110-component-library/20-renewable-energy-modules/10-wgsource',
    'model/CloudPSS/WGSource_external_ctrl':
        'documents/software/20-emtlab/110-component-library/20-renewable-energy-modules/20-wgsource-external-ctrl',
    'model/CloudPSS/DFIG_WindFarm_Equivalent_Model':
        'documents/software/20-emtlab/110-component-library/20-renewable-energy-modules/30-dfig-windfarm-equivalent-model',
    'model/CloudPSS/DFIG_external_ctrl':
        'documents/software/20-emtlab/110-component-library/20-renewable-energy-modules/40-dfig-external-ctrl',
    'model/CloudPSS/PVStation':
        'documents/software/20-emtlab/110-component-library/20-renewable-energy-modules/50-pvstation',
    'model/CloudPSS/PVStation_external_ctrl':
        'documents/software/20-emtlab/110-component-library/20-renewable-energy-modules/60-pvstation-external-ctrl',

    'model/CloudPSS/DCLine':
        'documents/software/20-emtlab/110-component-library/30-dc-modules/10-dc-electrical-modules/10-DCLine',
    'model/CloudPSS/DCLine_sp':
        'documents/software/20-emtlab/110-component-library/30-dc-modules/10-dc-electrical-modules/20-DCLine_sp',
    'model/CloudPSS/HLFNBC':
        'documents/software/20-emtlab/110-component-library/30-dc-modules/10-dc-electrical-modules/30-HLFNBC',
    'model/CloudPSS/HLFZCL':
        'documents/software/20-emtlab/110-component-library/30-dc-modules/10-dc-electrical-modules/40-HLFZCL',
    'model/CloudPSS/_newPLO':
        'documents/software/20-emtlab/110-component-library/30-dc-modules/20-dc-control-modules/10-_newPLO',
    'model/CloudPSS/_FirePulseGenNLM2Ref':
        'documents/software/20-emtlab/110-component-library/30-dc-modules/20-dc-control-modules/20-_FirePulseGenNLM2Ref',
    'model/CloudPSS/ACfilter1':
        'documents/software/20-emtlab/110-component-library/30-dc-modules/20-dc-control-modules/30-ACfilter1',
    'model/CloudPSS/DCfilter1':
        'documents/software/20-emtlab/110-component-library/30-dc-modules/20-dc-control-modules/40-DCfilter1',
    'model/CloudPSS/DLKZ':
        'documents/software/20-emtlab/110-component-library/30-dc-modules/20-dc-control-modules/50-DLKZ',
    'model/CloudPSS/DYKZ':
        'documents/software/20-emtlab/110-component-library/30-dc-modules/20-dc-control-modules/60-DYKZ',
    'model/CloudPSS/GKZ':
        'documents/software/20-emtlab/110-component-library/30-dc-modules/20-dc-control-modules/70-GKZ',
    'model/CloudPSS/HCDVKZQ':
        'documents/software/20-emtlab/110-component-library/30-dc-modules/20-dc-control-modules/80-HCDVKZQ',
    'model/CloudPSS/HLFNBC_24_H':
        'documents/software/20-emtlab/110-component-library/30-dc-modules/20-dc-control-modules/90-HLFNBC_24_H',
    'model/CloudPSS/HLFZLC_24':
        'documents/software/20-emtlab/110-component-library/30-dc-modules/20-dc-control-modules/100-HLFZLC_24',
    'model/CloudPSS/HXSBYC':
        'documents/software/20-emtlab/110-component-library/30-dc-modules/20-dc-control-modules/110-HXSBYC',
    'model/CloudPSS/VDCOL':
        'documents/software/20-emtlab/110-component-library/30-dc-modules/20-dc-control-modules/120-VDCOL',
    'model/CloudPSS/XHJKZ':
        'documents/software/20-emtlab/110-component-library/30-dc-modules/20-dc-control-modules/130-XHJKZ',
    'model/CloudPSS/ZKHJ':
        'documents/software/20-emtlab/110-component-library/30-dc-modules/20-dc-control-modules/140-ZKHJ',
    'model/CloudPSS/_SpaceVectorPWM':
        'documents/software/20-emtlab/110-component-library/30-dc-modules/20-dc-control-modules/150-_SpaceVectorPWM',
    'model/CloudPSS/ZXCFJ':
        'documents/software/20-emtlab/110-component-library/30-dc-modules/20-dc-control-modules/160-ZXCFJ',

    'model/CloudPSS/CoHIL_Half_Line':
        'documents/software/20-emtlab/110-component-library/40-co-simulation/10-coHIL-half-line',
    'model/CloudPSS/_SFPAPI': 'documents/software/20-emtlab/110-component-library/40-co-simulation/20-sfpapi',

    'model/CloudPSS/_AuroraAI': 'documents/software/20-emtlab/110-component-library/50-hardware-in-loop/10-_AuroraAI',
    'model/CloudPSS/_AuroraAO': 'documents/software/20-emtlab/110-component-library/50-hardware-in-loop/20-_AuroraAO',
    'model/CloudPSS/_AuroraDI': 'documents/software/20-emtlab/110-component-library/50-hardware-in-loop/30-_AuroraDI',
    'model/CloudPSS/_AuroraDO': 'documents/software/20-emtlab/110-component-library/50-hardware-in-loop/40-_AuroraDO',
    'model/CloudPSS/RefIn': 'documents/software/20-emtlab/110-component-library/50-hardware-in-loop/50-RefIn',
    'model/CloudPSS/RefOut': 'documents/software/20-emtlab/110-component-library/50-hardware-in-loop/60-RefOut',
    'model/CloudPSS/_VirtualInput':
        'documents/software/20-emtlab/110-component-library/50-hardware-in-loop/70-_VirtualInput',
    'model/CloudPSS/_VirtualOutput':
        'documents/software/20-emtlab/110-component-library/50-hardware-in-loop/80-_VirtualOutput',
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
    const models = (await Promise.all(OWNERS.map(async (owner) => fetchModels(token, owner)))).flat();
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
