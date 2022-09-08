import { IHomePage } from './HomePage';
import { mockOrFeaturesBlockProps } from '../../components/organisms/OrFeatures/OrFeaturesBlock.mocks';
import { mockOrFooterProps } from '../../components/organisms/OrFooter/OrFooter.mocks';
const base: IHomePage = {
  navBar: {
    navigationRoutes: [
      {title:"Inicio", path:"/"},
      {title:"Agendar hora", path:"/consultas"},
    ],},
    banner: {
      sampleTextProp: "Bro momento"
    },
    blocks: [
      mockOrFeaturesBlockProps.biography,
      mockOrFeaturesBlockProps.featuresList,
      mockOrFeaturesBlockProps.callToAction,
    ],
    footer: mockOrFooterProps.base,
};

export const mockHomePageProps = {
  base,
};