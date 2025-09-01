import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
    void import('./custom-elements');
    void import('./print-handlers');
    void import('./print-version');
    void import('./inject-meta');
    void import('./chat');
}
