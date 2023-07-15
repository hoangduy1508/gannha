import config from '~/config';


// Pages
import HomePage from '~/pages/home';


// Public routes
const routes = [
    { path: config.routes.home, component: HomePage },
    
];


export {routes} ;
