import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {

    buildRouteInfoMetadata() {
        return { title: 'Job Winning Resume Templates 2024 (Free Download) · Resume.io' }
    }

    @service router!:Route
    constructor() {
        super(...arguments);
        this.router.on('routeDidChange', transition => {
        console.log('I am in routeDidChange',transition.to.metadata?.title);

          document.title = transition.to.metadata?.title || 'Free Resume Builder - Make Your Job-winning Resume · Resume.io'; 
        });
    }
}