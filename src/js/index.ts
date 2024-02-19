import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
    import('@cloudpss/web-components/embed-media');
    import('./print-handlers');
    import('./print-version');
}
