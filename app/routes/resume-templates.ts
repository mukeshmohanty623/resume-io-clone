import Route from '@ember/routing/route';

export default class ResumeTemplatesRoute extends Route {
    buildRouteInfoMetadata() {
        console.log('I am in buildRouteInfoMetadata in resumeptemplate route');
        return { title: 'Job Winning Resume Templates 2024 (Free Download) · Resume.io' }
    }
}
