#!/bin/env node
/* eslint-disable no-console */

import fs from 'node:fs/promises';
import path from 'node:path/posix';
import convert from './convert-webp.js';
const TEMPLATE_NAME_RID = {
    空白电力系统元件: 'model/CloudPSS/Blank_Component',
    空白综合能源系统模型: 'model/CloudPSS/Blank_IESModel',
    空白简单电力系统模型: 'model/CloudPSS/Blank_Simple',
    空白普通电力系统模型: 'model/CloudPSS/Blank_Common',
    '空白 Octave 元件': 'model/CloudPSS/Blank_Octave_Components',
    '空白 Octave 元件（外部触发式）': 'model/CloudPSS/Blank_Octave_Components_Trigger',
    '空白 Octave 元件（固定频率触发式）': 'model/CloudPSS/Blank_Octave_Components_TriggerF',
    异步电机矢量控制: 'model/CloudPSS/Asyn_Motor',
    '双馈电机双 PWM 平均化控制': 'model/CloudPSS/DFIG_AVM',
    直流电机驱动: 'model/CloudPSS/DC_Motor',
    飞轮储能系统: 'model/CloudPSS/FESS',
    '3 机 9 节点标准测试系统': 'model/CloudPSS/IEEE3',
    '10 机 39 节点标准测试系统': 'model/CloudPSS/IEEE39',
    单相背靠背变流器: 'model/CloudPSS/B2BModule',
    '三相 H 桥变流器': 'model/CloudPSS/HBridgeModule',
    '双向 DC/DC 变流器': 'model/CloudPSS/HalfBridgeModule',
    '单相 H 桥变流器': 'model/CloudPSS/HBridgeModule',
    '单相 H 桥变流器 (带变压器)': 'model/CloudPSS/HTModule',
    '单相 H 桥变流器 (带电感)': 'model/CloudPSS/HLModule',
    多模块固态变压器: 'model/CloudPSS/NSSTs',
    中点钳位三电平半桥变流器: 'model/CloudPSS/NPCmodule',
    '储能详细化 / 平均化模型对比': 'model/CloudPSS/Bat_Averaged_Detailed',
    储能详细化模型: 'model/CloudPSS/Bat_Detailed',
    储能平均化模型: 'model/CloudPSS/Bat_Averaged',
    光伏平均化模型: 'model/CloudPSS/PV_Averaged',
    光伏详细化模型: 'model/CloudPSS/PV_Detailed',
    '光伏详细化 / 平均化模型对比': 'model/CloudPSS/PV_Averaged_Detailed',
    '单极双 12 脉动': 'model/CloudPSS/HVDC_P_D12',
    '单极 12 脉动': 'model/CloudPSS/HVDC_P_12',
    '双极 12 脉动': 'model/CloudPSS/HVDC_PN_12',
    '双极双 12 脉动': 'model/CloudPSS/HVDC_PN_D12',
    '±800kV 特高压直流输电系统': 'model/CloudPSS/HVDC800',
    直流微电网系统: 'model/CloudPSS/DC_MICROGRID',
    双端模块化多电平变流器: 'model/CloudPSS/MMC_Benchmark',
    冷热电三供系统: 'model/CloudPSS/CHPCase',
    园区综合能源系统: 'model/CloudPSS/DemoCase',
    交直流混联系统: 'model/CloudPSS/ACDCHybridCase',
    '110kV变电站一、二次系统': 'model/CloudPSS/SubstationCase',
    '10 机 39 节点标准系统安控策略案例': 'model/CloudPSS/ieee39-sc-demo',
    '单极（伪双极）端对端常直输电系统': 'model/open-cloudpss/HVDC_LCC_SP-fdm-std-v1b2',
    双极端对端常直输电系统: 'model/open-cloudpss/HVDC_LCC_BP-fdm-std-v1b2',
    特高压分层常规直流输电系统: 'model/open-cloudpss/HVDC_LCC_HI-fdm-std-v1b2',
    多端常规直流输电系统: 'model/open-cloudpss/HVDC_LCC_MT-fdm-std-v1b2',
    '单极（伪双极）端对端柔直输电系统': 'model/open-cloudpss/HVDC_MMC_SP-fdm-std-v1b2',
    双极端对端柔直输电系统: 'model/open-cloudpss/HVDC_MMC_BP-fdm-std-v1b2',
    特高压分层柔性直流输电系统: 'model/open-cloudpss/HVDC_MMC_HI-fdm-std-v1b2',
    多端柔性直流输电系统: 'model/open-cloudpss/HVDC_MMC_MT-fdm-std-v1b2',
    海风孤岛送电柔直输电系统: 'model/open-cloudpss/HVDC_MMC_WF-fdm-std-v1b2',
    特高压混合分层直流输电系统: 'model/open-cloudpss/HVDC_Hybrid_HI-fdm-std-v1b3',
    混合多端直流输电系统: 'model/open-cloudpss/HVDC_Hybrid_MT-fdm-std-v1b3',
    'MMC-标准封装模型': 'model/open-cloudpss/MMC-fdm-stdm-v1b2',
    'LCC-标准封装模型': 'model/open-cloudpss/LCC-fdm-stdm-v1b2',
    '4机2区域测试系统': 'model/open-cloudpss/KUNDUR_TWO_AREA-v1b1',
    '3机9节点测试系统': 'model/open-cloudpss/WSCC_9_BUS-v1b1',
    '5机14节点测试系统': 'model/open-cloudpss/IEEE_14_BUS-v1b1',
    '30节点测试系统': 'model/open-cloudpss/IEEE_30_BUS-v1b1',
    '10机39节点测试系统': 'model/open-cloudpss/IEEE_39_BUS-v1b1',
    '118节点测试系统': 'model/open-cloudpss/IEEE_118_BUS-v1b1',
    电力系统距离保护基础案例: 'model/open-cloudpss/Distance_Protection-v1b1',
    电力系统线路纵联差动保护基础案例: 'model/open-cloudpss/Pilot_Protection-v1b1',
    电力系统三段式电流保护基础案例: 'model/open-cloudpss/Current_Protection-v1b1',
    电力系统三段式零序电流保护基础案例: 'model/open-cloudpss/Zero_Current_Protection-v1b1',
    电力系统零序电压保护基础案例: 'model/open-cloudpss/Zero_Voltage_Protection-v1b1',
    电力系统复压过流保护基础案例: 'model/open-cloudpss/Compound_Voltage_Over_Current_Protection-v1b1',
    电力系统重合闸基础案例: 'model/open-cloudpss/Reclose-v1b1',
    'CSEE标准算例-功角失稳': 'model/open-cloudpss/CSEE_RAS_Aperiodic-v1b1',
    'CSEE标准算例-功角振荡': 'model/open-cloudpss/CSEE_RAS_Periodic-v1b1',
    'CSEE标准算例-高/低频问题': 'model/open-cloudpss/CSEE_FS-v1b1',
    'CSEE标准算例-电压崩溃问题': 'model/open-cloudpss/CSEE_VS_VC-v1b1',
    'CSEE标准算例-持续低电压问题': 'model/open-cloudpss/CSEE_VS_CLV-v1b1',
    'CSEE标准算例-暂时工频过电压': 'model/open-cloudpss/CSEE_PFO_Temporary-v1b1',
    'CSEE标准算例-稳态工频过电压': 'model/open-cloudpss/CSEE_PFO_Continuous-v1b1',
    '直驱风机01型-快速详细模型-标准模型': 'model/open-cloudpss/WTG_PMSG_01-fdm-std-v1b2',
    '直驱风机01型-平均模型-标准模型': 'model/open-cloudpss/WTG_PMSG_01-avm-std-v1b2',
    '直驱风机01型-快速详细模型-标准模型v2': 'model/open-cloudpss/WTG_PMSG_01-fdm-std-v2b2',
    '直驱风机01型-平均模型-标准模型v2': 'model/open-cloudpss/WTG_PMSG_01-avm-std-v2b2',
    '直驱风机01型-标准封装模型': 'model/open-cloudpss/WTG_PMSG_01-avm-stdm-v2b5',
    '双馈风机01型-快速详细模型-标准模型': 'model/open-cloudpss/WTG_DFIG_01-fdm-std-v1b3',
    '双馈风机01型-平均模型-标准模型': 'model/open-cloudpss/WTG_DFIG_01-avm-std-v1b3',
    '双馈风机01型-标准封装模型': 'model/open-cloudpss/WTG_DFIG_01-avm-stdm-v1b5',
    '光伏发电01型-快速详细模型-标准模型': 'model/open-cloudpss/PVS_01-fdm-std-v1b2',
    '光伏发电01型-平均模型-标准模型': 'model/open-cloudpss/PVS_01-avm-std-v1b2',
    '光伏发电01型-标准封装模型': 'model/open-cloudpss/PVS_01-avm-stdm-v1b5',
    电压穿越状态判断模型: 'model/open-cloudpss/VRT_SD-stdm-v1b1',
    电压穿越控制模型: 'model/open-cloudpss/VRT_Ctrl-stdm-v1b1',
};
const host = `http://10.101.10.46`;
const token = `eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInNjb3BlcyI6WyJicm93c2VyIl0sInR5cGUiOiJicm93c2VyIiwiZXhwIjoxNzc4Mzk1MjQ5LCJpYXQiOjE3NzU3MTY4NDl9.ZE0G7qiPwNwmRPwc2nHEEE8OhtlWQQqxw1KpBJNBCZDZT3encMw9OMjXmaOwt2JTKoUXlDp5Y_CCVC2k6L7e0w`;

const fetchTemplatePic = async () => {
    const response = await fetch(`${host}/graphql`, {
        headers: {
            authorization: `Bearer ${token}`,
            'content-type': 'application/json',
        },
        body: '{"query":"query($input:ModelsInput!){models(input:$input){cursor total count items{rid name description owner tags updatedAt revision{documentation}}}}","variables":{"input":{"orderBy":[],"cursor":[],"limit":1000,"tags":["or","is:template",["prefix","template:"]],"owner":["or","CloudPSS","Open-CloudPSS","admin"],"access":{"permission":2}}}}',
        method: 'POST',
    });
    const templatesResponse = await response.json();
    if (templatesResponse.errors != null && templatesResponse.errors.length > 0) {
        throw templatesResponse.errors[0].message;
    }
    const templates = templatesResponse.data.models.items;
    return templates;
};

/**
 * 从resourceItem.revision.documentation中提取markdown文本的第一张图片
 * 如果没有图片，返回null
 * @param {{ revision?: { documentation?: string } } | null} resourceItem 模型资源项
 * @returns {string|null} 图片url或null 如果没有图片的url，null表示没有图片
 */
const getTemplatePic = (resourceItem) => {
    if (resourceItem == null) return null;
    // 从resourceItem.revision.documentation中提取markdown文本的第一张图片
    const documentation = resourceItem.revision?.documentation ?? '';
    const match = /!\[.*?\]\((.*?)\)/.exec(documentation);
    if (match != null) {
        return match[1];
    }
    return null;
};

/**
 * 使用fetchTemplatePic获取所有模板的图片url和名称，使用TEMPLATE_NAME_RID作为检索作为图片名称
 * 获取的url再使用fetch获取图片内容 写入/root/docs/src/components/DocExpandList/assets目录下
 * 记下写入的记录，写在/root/docs/src/components/DocExpandList/template-record.ts文件中
 */
async function main() {
    const templates = await fetchTemplatePic();
    const records = [];
    const nameToRid = Object.fromEntries(Object.entries(TEMPLATE_NAME_RID).map(([k, v]) => [v, k]));
    const assetsDir = '/root/docs/src/components/DocExpandList/assets';
    await fs.mkdir(assetsDir, { recursive: true });

    for (const template of templates) {
        const { rid } = template;
        const name = nameToRid[rid];
        if (!name) continue;

        const picUrl = getTemplatePic(template);
        if (!picUrl) continue;

        const ext = picUrl.split('.').pop()?.split('?')[0] || 'png';
        const ridFilename = rid.replaceAll('/', '_').toUpperCase();
        const filename = `${ridFilename}.${ext}`;
        const filepath = path.join(assetsDir, filename);

        const picResponse = await fetch(`${host}${picUrl}`);
        const buffer = await picResponse.arrayBuffer();
        await fs.writeFile(filepath, Buffer.from(buffer));

        records.push({ name, rid, filename, url: picUrl, ext });
        console.log(`Downloaded: ${filename}`);
    }

    console.log('\nConverting to webp...');
    await convert(assetsDir);

    for (const record of records) {
        const oldPath = path.join(assetsDir, record.filename);
        const newFilename = `${record.rid.replaceAll('/', '_').toUpperCase()}.webp`;
        const newPath = path.join(assetsDir, newFilename);
        await fs.rename(oldPath, newPath);
        record.filename = newFilename;
    }

    const webpImports = records
        .map((r) => {
            const ridFilename = r.rid.replaceAll('/', '_').toUpperCase();
            return `import ${ridFilename} from './assets/${ridFilename}.webp';`;
        })
        .join('\n');

    const dictEntries = records
        .map((r) => {
            const ridFilename = r.rid.replaceAll('/', '_').toUpperCase();
            return `    '${r.name}': ${ridFilename}`;
        })
        .join(',\n');

    const recordContent = `${webpImports}\n\nconst TEMPLATE_PIC_DICT: Record<string, string> = {\n${dictEntries},\n};\n\nexport { TEMPLATE_PIC_DICT };\n`;
    await fs.writeFile('/root/docs/src/components/DocExpandList/template-record.ts', recordContent);
    console.log(`\nTotal: ${records.length} images saved. Record written to template-record.ts`);
}

void main().catch(console.error);
