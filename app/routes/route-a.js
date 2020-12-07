import Route from '@ember/routing/route';

export default class RouteARoute extends Route {
    model () {
        console.log("Hi! I'm log message from RouteA.model");
    }

    redirect () {
        this.transitionTo('route-b');
    }
}
