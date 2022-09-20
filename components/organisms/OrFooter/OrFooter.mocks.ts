import { mockMlLinkProps } from '../../molecules/MlLink/MlLink.mocks';
import { mockMlSubscribeWidgetProps } from '../../molecules/MlSubscribeWidget/MlSubscribeWidget.mocks';
import { IOrFooter } from './OrFooter';

const base: IOrFooter = {
  navigationRoutes: [{
      title:"Inicio",
      path:"/",
      subroutes:[
        {title:"¿Quiénes somos?", path:"/"},
        {title:"Tratamientos", path:"/"}

      ]},
    // {title:"Agendar hora", path:"/consultas"},
    ],
  subscribeWidget: mockMlSubscribeWidgetProps.base
};

export const mockOrFooterProps = {
  base,
};