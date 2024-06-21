import type { PluginModule } from '@docusaurus/types';
import { ModelId, type Model } from '@cloudpss/resource-types/model';
import { HttpClient } from '@cloudpss/http-client';

/** Model 的附加数据 */
type ModelMeta = { path: string };

export default ((_context) => ({
    name: 'docusaurus-plugin-cloudpss-model',
    async loadContent() {
        const owner = 'cloudpss';
        const client = new HttpClient({
            token: process.env['CLOUDPSS_TOKEN'],
        });
        const result = await client.gql.query<
            'models',
            { items: Model[] }
        >`models(input: {owner: "${owner}", limit: 1000000, orderBy: [] }) {
            items {
                rid
                name
                owner
                key
                description
                revision {
                    parameters
                    pins
                    graphic
                    documentation
                }
            }
        }`;
        const models = new Map<ModelId, Model & ModelMeta>();
        for (const model of result.data.models.items) {
            models.set(model.rid, model as Model & ModelMeta);
        }
        return { models };
    },
    async contentLoaded({ content, actions }) {
        for (const model of content.models.values()) {
            model.path = await actions.createData(`model.json`, model);
        }
    },
})) satisfies PluginModule<{ models: ReadonlyMap<ModelId, Model & ModelMeta> }>;
