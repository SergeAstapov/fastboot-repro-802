import Route from '@ember/routing/route';

export default class RouteBRoute extends Route {
    model () {
        console.log("Hi! I'm log message from RouteB.model");
    }
}
