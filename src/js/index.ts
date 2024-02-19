import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
    void import('@cloudpss/web-components/embed-media');
    void import('./print-handlers');
    void import('./print-version');
}
