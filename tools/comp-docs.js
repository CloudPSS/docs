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
    const dim = pin.dim ? `${String(pin.dim?.[0] ?? '')} x ${String(pin.dim[1] ?? '')}` : '';
    const name = pin.name ? pin.name : pin.key;
    return `| ${escape(name)} | ${escapeCode(pin.key)} | ${connectionType(pin.connection)} | ${dim} | ${pin.description ?? ''} |`;
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
    'model/CloudPSS/newResistorRouter':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/10-ele-Basic-passive/20-newResistorRouter',
    'model/CloudPSS/newInductorRouter':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/10-ele-Basic-passive/30-newInductorRouter',
    'model/CloudPSS/newCapacitorRouter':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/10-ele-Basic-passive/40-newCapacitorRouter',
    'model/CloudPSS/newCapacitorRouterWithInitValue':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/10-ele-Basic-passive/50-newCapacitorRouterWithInitValue',
    'model/CloudPSS/_newFaultResistor':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/10-ele-Basic-passive/60-_newFaultResistor',
    'model/CloudPSS/_newFaultResistor_3p':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/10-ele-Basic-passive/70-_newFaultResistor_3p',
    'model/CloudPSS/_newTransformer_1p':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/10-ele-Basic-passive/80-_newTransformer_1p',
    'model/CloudPSS/_newBreaker_1p':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/10-ele-Basic-passive/90-_newBreaker_1p',
    'model/CloudPSS/_newBreaker_3p':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/10-ele-Basic-passive/100-_newBreaker_3p',
    'model/CloudPSS/_Arrestor':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/10-ele-Basic-passive/110-_Arrestor',
    'model/CloudPSS/_BusConnector':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/10-ele-Basic-passive/120-_BusConnector',
    'model/CloudPSS/VariableRLCSeries':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/10-ele-Basic-passive/130-VariableRLCSeries',
    'model/CloudPSS/_newDCCurrentSource':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/20-ele-Basic-electrical-power-components/10-_newDCCurrentSource',
    'model/CloudPSS/_newDCVoltageSource':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/20-ele-Basic-electrical-power-components/20-_newDCVoltageSource',
    'model/CloudPSS/_newACVoltageSource_1p':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/20-ele-Basic-electrical-power-components/30-_newACVoltageSource_1p',
    'model/CloudPSS/_newCtrlCurrentSource':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/20-ele-Basic-electrical-power-components/40-_newCtrlCurrentSource',
    'model/CloudPSS/_newCtrlVoltageSource':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/20-ele-Basic-electrical-power-components/50-_newCtrlVoltageSource',
    'model/CloudPSS/_newCtrlAcVoltageSource':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/20-ele-Basic-electrical-power-components/60-_newCtrlAcVoltageSource',
    'model/CloudPSS/_newCtrlVPAcVoltageSource':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/20-ele-Basic-electrical-power-components/70-_newCtrlVPAcVoltageSource',
    'model/CloudPSS/_HarmonicCurrentSource':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/20-ele-Basic-electrical-power-components/80-_HarmonicCurrentSource',
    'model/CloudPSS/_HarmonicVoltageSource':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/20-ele-Basic-electrical-power-components/90-_HarmonicVoltageSource',
    'model/CloudPSS/_newShuntLC_3p':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/30-ele-Three-phase-AC-components/10-_newShuntLC_3p',
    'model/CloudPSS/_newCtrlLoad_3p':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/30-ele-Three-phase-AC-components/20-_newCtrlLoad_3p',
    'model/CloudPSS/_newExpLoad_3p':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/30-ele-Three-phase-AC-components/30-_newExpLoad_3p',
    'model/CloudPSS/LineCluster':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/30-ele-Three-phase-AC-components/40-LineCluster',
    'model/CloudPSS/Thevenin_3p':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/30-ele-Three-phase-AC-components/50-Thevenin_3p',
    'model/CloudPSS/TranssmissionLineRouter':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/30-ele-Three-phase-AC-components/60-TranssmissionLineRouter',
    'model/CloudPSS/_TLine_Bergeron_3p_SinglePort':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/30-ele-Three-phase-AC-components/70-_TLine_Bergeron_3p_SinglePort',
    'model/CloudPSS/_newBus_3p':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/30-ele-Three-phase-AC-components/80-_newBus_3p',
    'model/CloudPSS/_newACVoltageSource_3p':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/30-ele-Three-phase-AC-components/90-_newACVoltageSource_3p',
    'model/CloudPSS/_newTransformer_3p2w':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/30-ele-Three-phase-AC-components/100-_newTransformer_3p2w',
    'model/CloudPSS/_newTransformer_3p3w':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/30-ele-Three-phase-AC-components/110-_newTransformer_3p3w',
    'model/CloudPSS/SyncGeneratorRouter':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/30-ele-Three-phase-AC-components/120-SyncGeneratorRouter',
    'model/CloudPSS/_TLine_Bergeron_3p_Decoupled':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/30-ele-Three-phase-AC-components/130-_TLine_Bergeron_3p_Decoupled',
    'model/CloudPSS/SyntheticLoad':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/30-ele-Three-phase-AC-components/140-SyntheticLoad',
    'model/CloudPSS/PMSM':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/40-ele-Machine/10-PMSM',
    'model/CloudPSS/WoundRotorIMRouter':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/40-ele-Machine/20-WoundRotorIMRouter',
    'model/CloudPSS/BLDC':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/40-ele-Machine/30-BLDC',
    'model/CloudPSS/SyncGeneratorBase12p':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/40-ele-Machine/40-SyncGeneratorBase12p',
    'model/CloudPSS/AsynchronousMotor':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/40-ele-Machine/50-AsynchronousMotor',
    'model/CloudPSS/_DCMachine':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/40-ele-Machine/60-_DCMachine',
    'model/CloudPSS/_newDiode':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/50-ele-Electrical-power-electronic-switch/10-_newDiode',
    'model/CloudPSS/_newThyristor':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/50-ele-Electrical-power-electronic-switch/20-_newThyristor',
    'model/CloudPSS/_newIGBT':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/50-ele-Electrical-power-electronic-switch/30-_newIGBT',
    'model/CloudPSS/_DABModule':
        'documents/software/20-emtlab/110-component-library/10-basic/50-module/60-ele-Power-electronics-module/10-_DABModule',
    'model/CloudPSS/_MultiHalfBridgeModule':
        'documents/software/20-emtlab/110-component-library/10-basic/50-module/60-ele-Power-electronics-module/20-_MultiHalfBridgeModule',
    'model/CloudPSS/newSixPulseBridgeRouter':
        'documents/software/20-emtlab/110-component-library/10-basic/50-module/60-ele-Power-electronics-module/30-newSixPulseBridgeRouter',
    'model/CloudPSS/_HalfBridgeModule':
        'documents/software/20-emtlab/110-component-library/10-basic/50-module/60-ele-Power-electronics-module/40-_HalfBridgeModule',
    'model/CloudPSS/_HBridgeModule':
        'documents/software/20-emtlab/110-component-library/10-basic/50-module/60-ele-Power-electronics-module/50-_HBridgeModule',
    'model/CloudPSS/_HBridgeWithInductanceModule':
        'documents/software/20-emtlab/110-component-library/10-basic/50-module/60-ele-Power-electronics-module/60-_HBridgeWithInductanceModule',
    'model/CloudPSS/_HBridgeWithTransformerModule':
        'documents/software/20-emtlab/110-component-library/10-basic/50-module/60-ele-Power-electronics-module/70-_HBridgeWithTransformerModule',
    'model/CloudPSS/_BacktoBackModule':
        'documents/software/20-emtlab/110-component-library/10-basic/50-module/60-ele-Power-electronics-module/80-_BacktoBackModule',
    'model/CloudPSS/_ThreePhaseHBridgeModule':
        'documents/software/20-emtlab/110-component-library/10-basic/50-module/60-ele-Power-electronics-module/90-_ThreePhaseHBridgeModule',
    'model/CloudPSS/_NSSTsModule':
        'documents/software/20-emtlab/110-component-library/10-basic/50-module/60-ele-Power-electronics-module/100-_NSSTsModule',
    'model/CloudPSS/_ThreeLevelHModule':
        'documents/software/20-emtlab/110-component-library/10-basic/50-module/60-ele-Power-electronics-module/110-_ThreeLevelHModule',
    'model/CloudPSS/_newPVSource':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/70-ele-Renewable-energy/10-_newPVSource',
    'model/CloudPSS/_newStorageBattery':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/70-ele-Renewable-energy/20-_newStorageBattery',
    'model/CloudPSS/FD_TLine':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/80-ele-Advanced-electrical/10-FD_TLine',
    'model/CloudPSS/FD_Line':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/80-ele-Advanced-electrical/20-FD_Line',
    'model/CloudPSS/FDNE':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/80-ele-Advanced-electrical/30-FDNE',
    'model/CloudPSS/RLCMatrix':
        'documents/software/20-emtlab/110-component-library/10-basic/10-electrical/80-ele-Advanced-electrical/40-RLCMatrix',
    'model/CloudPSS/_ChannelDeMerge':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/10-control-fundamentals/10-_ChannelDeMerge',
    'model/CloudPSS/_ChannelMerge':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/10-control-fundamentals/20-_ChannelMerge',
    'model/CloudPSS/_newConstant':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/10-control-fundamentals/30-_newConstant',
    'model/CloudPSS/ConstantMultiDim':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/10-control-fundamentals/40-ConstantMultiDim',
    'model/CloudPSS/DataExtraction':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/10-control-fundamentals/50-DataExtraction',
    'model/CloudPSS/_newLoopNodeMultiDim':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/10-control-fundamentals/60-_newLoopNodeMultiDim',
    'model/CloudPSS/_newTime':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/10-control-fundamentals/70-_newTime',
    'model/CloudPSS/_newDeltaT':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/10-control-fundamentals/80-_newDeltaT',
    'model/CloudPSS/ElectricalLable':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/10-control-fundamentals/90-ElectricalLable',
    'model/CloudPSS/_Sleep':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/10-control-fundamentals/100-_Sleep',
    'model/CloudPSS/_newLoopNode':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/10-control-fundamentals/110-_newLoopNode',
    'model/CloudPSS/_EventLog':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/10-control-fundamentals/120-_EventLog',
    'model/CloudPSS/_newSum':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/20-control-Basic-mathematical-functions/10-_newSum',
    'model/CloudPSS/_newMultiply':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/20-control-Basic-mathematical-functions/20-_newMultiply',
    'model/CloudPSS/_newDivide':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/20-control-Basic-mathematical-functions/30-_newDivide',
    'model/CloudPSS/_newAbs':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/20-control-Basic-mathematical-functions/40-_newAbs',
    'model/CloudPSS/_newSgn':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/20-control-Basic-mathematical-functions/50-_newSgn',
    'model/CloudPSS/_RoundComponent':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/20-control-Basic-mathematical-functions/60-_RoundComponent',
    'model/CloudPSS/_newTrigonometric':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/20-control-Basic-mathematical-functions/70-_newTrigonometric',
    'model/CloudPSS/_newPower':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/20-control-Basic-mathematical-functions/80-_newPower',
    'model/CloudPSS/_newExp':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/20-control-Basic-mathematical-functions/90-_newExp',
    'model/CloudPSS/_newLog':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/20-control-Basic-mathematical-functions/100-_newLog',
    'model/CloudPSS/_newMaxMin':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/20-control-Basic-mathematical-functions/110-_newMaxMin',
    'model/CloudPSS/_newMaxMinOneCycle':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/20-control-Basic-mathematical-functions/120-_newMaxMinOneCycle',
    'model/CloudPSS/_MeanValue':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/20-control-Basic-mathematical-functions/130-_MeanValue',
    'model/CloudPSS/_newGain':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/30-control-Linear-transfer-functions/10-_newGain',
    'model/CloudPSS/_newIntegrator':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/30-control-Linear-transfer-functions/20-_newIntegrator',
    'model/CloudPSS/_newDerivative':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/30-control-Linear-transfer-functions/30-_newDerivative',
    'model/CloudPSS/_newPICtrl':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/30-control-Linear-transfer-functions/40-_newPICtrl',
    'model/CloudPSS/_newZero':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/30-control-Linear-transfer-functions/50-_newZero',
    'model/CloudPSS/_newRealPole':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/30-control-Linear-transfer-functions/60-_newRealPole',
    'model/CloudPSS/_newDiffPole':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/30-control-Linear-transfer-functions/70-_newDiffPole',
    'model/CloudPSS/_newLeadLag':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/30-control-Linear-transfer-functions/80-_newLeadLag',
    'model/CloudPSS/_newComplexPole':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/30-control-Linear-transfer-functions/90-_newComplexPole',
    'model/CloudPSS/state-space_model':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/30-control-Linear-transfer-functions/100-state-space_model',
    'model/CloudPSS/_newLimiter':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/40-control-Nonlinear-functions/10-_newLimiter',
    'model/CloudPSS/_newDelay':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/40-control-Nonlinear-functions/20-_newDelay',
    'model/CloudPSS/_newAngleResolver':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/40-control-Nonlinear-functions/30-_newAngleResolver',
    'model/CloudPSS/_newPiecewiseLinear':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/40-control-Nonlinear-functions/40-_newPiecewiseLinear',
    'model/CloudPSS/_ratelimit1':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/40-control-Nonlinear-functions/50-_ratelimit1',
    'model/CloudPSS/UserDefinedCurve':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/40-control-Nonlinear-functions/60-UserDefinedCurve',
    'model/CloudPSS/_newParkTransform':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/50-control-Coordinate-transformation/10-_newParkTransform',
    'model/CloudPSS/_newClarkTransform':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/50-control-Coordinate-transformation/20-_newClarkTransform',
    'model/CloudPSS/_newXYtoDQ':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/50-control-Coordinate-transformation/30-_newXYtoDQ',
    'model/CloudPSS/_newPRCoordinate':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/50-control-Coordinate-transformation/40-_newPRCoordinate',
    'model/CloudPSS/newLogicGate':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/60-control-Digital-signals/10-newLogicGate',
    'model/CloudPSS/newLogicGate1':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/60-control-Digital-signals/20-newLogicGate1',
    'model/CloudPSS/newLogicGate2':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/60-control-Digital-signals/30-newLogicGate2',
    'model/CloudPSS/newLogicGate3':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/60-control-Digital-signals/40-newLogicGate3',
    'model/CloudPSS/_newBinaryDelay':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/60-control-Digital-signals/50-_newBinaryDelay',
    'model/CloudPSS/_newMonoStable':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/60-control-Digital-signals/60-_newMonoStable',
    'model/CloudPSS/_newFlipFlop':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/60-control-Digital-signals/70-_newFlipFlop',
    'model/CloudPSS/_newSelector':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/60-control-Digital-signals/80-_newSelector',
    'model/CloudPSS/_newEdgeDetector':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/60-control-Digital-signals/90-_newEdgeDetector',
    'model/CloudPSS/pulsecounter':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/60-control-Digital-signals/100-pulsecounter',
    'model/CloudPSS/_newComparator':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/70-control-Analog-signals/10-_newComparator',
    'model/CloudPSS/_newHysteresis':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/70-control-Analog-signals/20-_newHysteresis',
    'model/CloudPSS/_newZeroDetector':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/70-control-Analog-signals/30-_newZeroDetector',
    'model/CloudPSS/_newSample':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/70-control-Analog-signals/40-_newSample',
    'model/CloudPSS/_newSampleHold':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/70-control-Analog-signals/50-_newSampleHold',
    'model/CloudPSS/_newTriGen':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/80-control-Signal-generator/10-_newTriGen',
    'model/CloudPSS/_newSquareGen':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/80-control-Signal-generator/20-_newSquareGen',
    'model/CloudPSS/_StepClimbing':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/80-control-Signal-generator/30-_StepClimbing',
    'model/CloudPSS/_newSinGen':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/80-control-Signal-generator/40-_newSinGen',
    'model/CloudPSS/_newAFPMGen':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/80-control-Signal-generator/50-_newAFPMGen',
    'model/CloudPSS/_newSinglePulse':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/80-control-Signal-generator/60-_newSinglePulse',
    'model/CloudPSS/_newPulseGen':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/80-control-Signal-generator/70-_newPulseGen',
    'model/CloudPSS/_newStepGen':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/80-control-Signal-generator/80-_newStepGen',
    'model/CloudPSS/_newRampGen':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/80-control-Signal-generator/90-_newRampGen',
    'model/CloudPSS/_newSurgeGen':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/80-control-Signal-generator/100-_newSurgeGen',
    'model/CloudPSS/_newDropGen':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/80-control-Signal-generator/110-_newDropGen',
    'model/CloudPSS/RandomGeneratorRouter':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/80-control-Signal-generator/120-RandomGeneratorRouter',
    'model/CloudPSS/_ST5B':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/90-control-AC-systems/10-_ST5B',
    'model/CloudPSS/_GOV2':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/90-control-AC-systems/20-_GOV2',
    'model/CloudPSS/_TUR1':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/90-control-AC-systems/30-_TUR1',
    'model/CloudPSS/_FirePulseGenSST':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/100-control-DC-systems/10-_FirePulseGenSST',
    'model/CloudPSS/_EXST1_PTI':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/110-control-IEEE-Standard-Excitation-System/10-_EXST1_PTI',
    'model/CloudPSS/_PSS1A':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/120-control-IEEE-Standard-Power-System-Stabilizer/10-_PSS1A',
    'model/CloudPSS/_STEAM_GOV_1':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/130-control-IEEE-Standard-Prime-Mover-and-Governor/10-_STEAM_GOV_1',
    'model/CloudPSS/_STEAM_TUR_1':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/130-control-IEEE-Standard-Prime-Mover-and-Governor/20-_STEAM_TUR_1',
    'model/CloudPSS/_F_MNOPQRST_Exciter':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/140-control-BPA-Excitation-System/10-_F_MNOPQRST_Exciter',
    'model/CloudPSS/_F_UV_Exciter':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/140-control-BPA-Excitation-System/20-_F_UV_Exciter',
    'model/CloudPSS/_GAGoverner':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/150-control-BPA-Prime-Mover-and-Governor/10-_GAGoverner',
    'model/CloudPSS/_GJGoverner':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/150-control-BPA-Prime-Mover-and-Governor/20-_GJGoverner',
    'model/CloudPSS/_GMGoverner':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/150-control-BPA-Prime-Mover-and-Governor/30-_GMGoverner',
    'model/CloudPSS/_GXGoverner':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/150-control-BPA-Prime-Mover-and-Governor/40-_GXGoverner',
    'model/CloudPSS/_TBTurbine':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/150-control-BPA-Prime-Mover-and-Governor/50-_TBTurbine',
    'model/CloudPSS/_TWTurbine':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/150-control-BPA-Prime-Mover-and-Governor/60-_TWTurbine',
    'model/CloudPSS/_GIGoverner':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/150-control-BPA-Prime-Mover-and-Governor/70-_GIGoverner',
    'model/CloudPSS/_GNGoverner':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/150-control-BPA-Prime-Mover-and-Governor/80-_GNGoverner',
    'model/CloudPSS/_GHGoverner':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/150-control-BPA-Prime-Mover-and-Governor/90-_GHGoverner',
    'model/CloudPSS/_TVTurbine':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/150-control-BPA-Prime-Mover-and-Governor/100-_TVTurbine',
    'model/CloudPSS/_SIPSS':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/160-control-BPA-Power-System-Stabilizer/10-_SIPSS',
    'model/CloudPSS/_SF_P_S_GPSS':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/160-control-BPA-Power-System-Stabilizer/20-_SF_P_S_GPSS',
    'model/CloudPSS/GVCOMPEN':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/170-control-PSASP-Excitation-System/10-GVCOMPEN',
    'model/CloudPSS/_PSASP_AVR_14':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/170-control-PSASP-Excitation-System/20-_PSASP_AVR_14',
    'model/CloudPSS/_PSASP_AVR_1':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/170-control-PSASP-Excitation-System/30-_PSASP_AVR_1',
    'model/CloudPSS/_PSASP_AVR_3to10':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/170-control-PSASP-Excitation-System/40-_PSASP_AVR_3to10',
    'model/CloudPSS/_PSASP_AVR_2':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/170-control-PSASP-Excitation-System/50-_PSASP_AVR_2',
    'model/CloudPSS/_PSASP_AVR_11to12':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/170-control-PSASP-Excitation-System/60-_PSASP_AVR_11to12',
    'model/CloudPSS/_PSASP_GOV_3':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/180-control-PSASP-Prime-Mover-and-Governor/10-_PSASP_GOV_3',
    'model/CloudPSS/_PSASP_GOV_4':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/180-control-PSASP-Prime-Mover-and-Governor/20-_PSASP_GOV_4',
    'model/CloudPSS/_PSASP_GOV_7':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/180-control-PSASP-Prime-Mover-and-Governor/30-_PSASP_GOV_7',
    'model/CloudPSS/_PSASP_GOV_8':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/180-control-PSASP-Prime-Mover-and-Governor/40-_PSASP_GOV_8',
    'model/CloudPSS/_PSASP_GOV_1':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/180-control-PSASP-Prime-Mover-and-Governor/50-_PSASP_GOV_1',
    'model/CloudPSS/_PSASP_PSS_4':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/190-control-PSASP-Power-System-Stabilizer/10-_PSASP_PSS_4',
    'model/CloudPSS/_PSASP_PSS_1':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/190-control-PSASP-Power-System-Stabilizer/20-_PSASP_PSS_1',
    'model/CloudPSS/_PSASP_PSS_2':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/190-control-PSASP-Power-System-Stabilizer/30-_PSASP_PSS_2',
    'model/CloudPSS/_PSASP_PSS_5':
        'documents/software/20-emtlab/110-component-library/10-basic/20-control/190-control-PSASP-Power-System-Stabilizer/40-_PSASP_PSS_5',
    'model/CloudPSS/_newChannel':
        'documents/software/20-emtlab/110-component-library/10-basic/40-output/10-Output/10-_newChannel',
    'model/CloudPSS/_NewBranchVoltageMeter':
        'documents/software/20-emtlab/110-component-library/10-basic/30-measurement/10-Measurement/10-_NewBranchVoltageMeter',
    'model/CloudPSS/_NewVoltageMeter':
        'documents/software/20-emtlab/110-component-library/10-basic/30-measurement/10-Measurement/20-_NewVoltageMeter',
    'model/CloudPSS/_NewCurrentMeter':
        'documents/software/20-emtlab/110-component-library/10-basic/30-measurement/10-Measurement/30-_NewCurrentMeter',
    'model/CloudPSS/RMSRouter':
        'documents/software/20-emtlab/110-component-library/10-basic/30-measurement/10-Measurement/40-RMSRouter',
    'model/CloudPSS/_newPowerMeter_3p':
        'documents/software/20-emtlab/110-component-library/10-basic/30-measurement/10-Measurement/50-_newPowerMeter_3p',
    'model/CloudPSS/_newPLL':
        'documents/software/20-emtlab/110-component-library/10-basic/30-measurement/10-Measurement/60-_newPLL',
    'model/CloudPSS/_newFFT':
        'documents/software/20-emtlab/110-component-library/10-basic/30-measurement/10-Measurement/70-_newFFT',
    'model/CloudPSS/_ImpedanceAnalysis':
        'documents/software/20-emtlab/110-component-library/10-basic/30-measurement/10-Measurement/80-_ImpedanceAnalysis',
    'model/CloudPSS/pinLikePort':
        'documents/software/20-emtlab/110-component-library/10-basic/50-module/10-module-Basic/10-pinLikePort',
    'model/CloudPSS/_SubSysPort':
        'documents/software/20-emtlab/110-component-library/10-basic/50-module/10-module-Basic/20-_SubSysPort',
    'model/CloudPSS/probeChannel':
        'documents/software/20-emtlab/110-component-library/10-basic/50-module/10-module-Basic/30-probeChannel',

    'model/CloudPSS/WGSource': 'documents/software/20-emtlab/110-component-library/20-renewable-energy/10-wgsource',
    'model/CloudPSS/WGSource_external_ctrl':
        'documents/software/20-emtlab/110-component-library/20-renewable-energy/20-wgsource-external-ctrl',
    'model/CloudPSS/DFIG_WindFarm_Equivalent_Model':
        'documents/software/20-emtlab/110-component-library/20-renewable-energy/30-dfig-windfarm-equivalent-model',
    'model/CloudPSS/DFIG_external_ctrl':
        'documents/software/20-emtlab/110-component-library/20-renewable-energy/40-dfig-external-ctrl',
    'model/CloudPSS/PVStation': 'documents/software/20-emtlab/110-component-library/20-renewable-energy/50-pvstation',
    'model/CloudPSS/PVStation_external_ctrl':
        'documents/software/20-emtlab/110-component-library/20-renewable-energy/60-pvstation-external-ctrl',

    'model/CloudPSS/DCLine': 'documents/software/20-emtlab/110-component-library/30-dc/10-ele-DC-systems/10-DCLine',
    'model/CloudPSS/DCLine_sp':
        'documents/software/20-emtlab/110-component-library/30-dc/10-ele-DC-systems/20-DCLine_sp',
    'model/CloudPSS/HLFNBC': 'documents/software/20-emtlab/110-component-library/30-dc/10-ele-DC-systems/30-HLFNBC',
    'model/CloudPSS/HLFZCL': 'documents/software/20-emtlab/110-component-library/30-dc/10-ele-DC-systems/40-HLFZCL',
    'model/CloudPSS/_newPLO':
        'documents/software/20-emtlab/110-component-library/30-dc/20-control-DC-systems/10-_newPLO',
    'model/CloudPSS/_FirePulseGenNLM2Ref':
        'documents/software/20-emtlab/110-component-library/30-dc/20-control-DC-systems/20-_FirePulseGenNLM2Ref',
    'model/CloudPSS/ACfilter1':
        'documents/software/20-emtlab/110-component-library/30-dc/20-control-DC-systems/30-ACfilter1',
    'model/CloudPSS/DCfilter1':
        'documents/software/20-emtlab/110-component-library/30-dc/20-control-DC-systems/40-DCfilter1',
    'model/CloudPSS/DLKZ': 'documents/software/20-emtlab/110-component-library/30-dc/20-control-DC-systems/50-DLKZ',
    'model/CloudPSS/DYKZ': 'documents/software/20-emtlab/110-component-library/30-dc/20-control-DC-systems/60-DYKZ',
    'model/CloudPSS/GKZ': 'documents/software/20-emtlab/110-component-library/30-dc/20-control-DC-systems/70-GKZ',
    'model/CloudPSS/HCDVKZQ':
        'documents/software/20-emtlab/110-component-library/30-dc/20-control-DC-systems/80-HCDVKZQ',
    'model/CloudPSS/HLFNBC_24_H':
        'documents/software/20-emtlab/110-component-library/30-dc/20-control-DC-systems/90-HLFNBC_24_H',
    'model/CloudPSS/HLFZLC_24':
        'documents/software/20-emtlab/110-component-library/30-dc/20-control-DC-systems/100-HLFZLC_24',
    'model/CloudPSS/HXSBYC':
        'documents/software/20-emtlab/110-component-library/30-dc/20-control-DC-systems/110-HXSBYC',
    'model/CloudPSS/VDCOL': 'documents/software/20-emtlab/110-component-library/30-dc/20-control-DC-systems/120-VDCOL',
    'model/CloudPSS/XHJKZ': 'documents/software/20-emtlab/110-component-library/30-dc/20-control-DC-systems/130-XHJKZ',
    'model/CloudPSS/ZKHJ': 'documents/software/20-emtlab/110-component-library/30-dc/20-control-DC-systems/140-ZKHJ',
    'model/CloudPSS/_SpaceVectorPWM':
        'documents/software/20-emtlab/110-component-library/30-dc/20-control-DC-systems/150-_SpaceVectorPWM',
    'model/CloudPSS/ZXCFJ': 'documents/software/20-emtlab/110-component-library/30-dc/20-control-DC-systems/160-ZXCFJ',

    'model/CloudPSS/CoHIL_Half_Line':
        'documents/software/20-emtlab/110-component-library/40-co-simulation/10-coHIL-half-line',
    'model/CloudPSS/_SFPAPI': 'documents/software/20-emtlab/110-component-library/40-co-simulation/20-sfpapi',

    'model/CloudPSS/_AuroraAI': 'documents/software/20-emtlab/110-component-library/50-hardware-in-loop/10-_AuroraAI',
    'model/CloudPSS/_AuroraAO': 'documents/software/20-emtlab/110-component-library/50-hardware-in-loop/20-_AuroraAO',
    'model/CloudPSS/_AuroraDI': 'documents/software/20-emtlab/110-component-library/50-hardware-in-loop/30-_AuroraDI',
    'model/CloudPSS/_AuroraDO': 'documents/software/20-emtlab/110-component-library/50-hardware-in-loop/40-_AuroraDO',
    'model/CloudPSS/_VirtualInput':
        'documents/software/20-emtlab/110-component-library/50-hardware-in-loop/50-_VirtualInput',
    'model/CloudPSS/_VirtualOutput':
        'documents/software/20-emtlab/110-component-library/50-hardware-in-loop/60-_VirtualOutput',
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
