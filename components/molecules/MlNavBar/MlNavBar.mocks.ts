import { IMlNavBar } from './MlNavBar';

const base: IMlNavBar = {
  navigationRoutes: [
    {title:"Inicio", path:"/"},
    {title:"Agendar hora", path:"/consultas"},
  ],
};

export const mockMlNavBarProps = {
  base,
};