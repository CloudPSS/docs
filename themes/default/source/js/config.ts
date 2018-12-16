declare const IS_DEBUGGING: boolean;

require.config({
    paths: {
        vue: IS_DEBUGGING ? '//cdn.jsdelivr.net/npm/vue@2/dist/vue' : '//cdn.jsdelivr.net/npm/vue@2/dist/vue.min',
    }
});