import { IAtNavigationRoute } from './AtNavigationRoute';

const base: IAtNavigationRoute = {
  title: 'Hello world!',
  path: '#',    
};

const baseWithSubroute: IAtNavigationRoute = {
  title: 'Hello world!',
  path: '#',  
  subroutes: [
    base,
    base,
    base,
  ]  
};

export const mockAtNavigationRouteProps = {
  base,
  baseWithSubroute
};