import { IOrFeaturesBlock } from './OrFeaturesBlock';
import { AvailableFeatures, FeatureTypes } from './featureTypes';
import { IOrBiography, IOrFeaturesList} from './variations/index';
import { IOrCallToAction } from './variations/OrFeaturesCallToAction';
import { mockAtButtonProps } from '../../atoms/AtButton/AtButton.mocks';
import { mockMlLinkProps } from '../../molecules/MlLink/MlLink.mocks';

const base: IOrFeaturesBlock = {
  type: AvailableFeatures.BIOGRAPHY,
  blockTitle: 'Hello World!',
};


const featuresList: IOrFeaturesList = {
  type: AvailableFeatures.FEATURE_LIST,
  blockTitle: 'Tratamientos',
  features: [
    {cardTitle: 'Flores de Bach',cardBody:'Como el músico',imageSrc:'/flores/flores-bach.jpeg'},
    {cardTitle: 'Flores de California',cardBody:'De Hollywood',imageSrc:'/flores/flores-california.jpg'},
    {cardTitle: 'Flores de Bush',cardBody:'Desde Australia',imageSrc:'/flores/flores-bush.jpg'},
    {cardTitle: 'Flores Chilenas',cardBody:'Desde chilito lindo',imageSrc:'/flores/flores-chilenas.jpg'},
    
  ]
};

const biography: IOrBiography = {
  type: AvailableFeatures.BIOGRAPHY,
  blockTitle: '¡Hola! Soy Andrea.',
  biographyBody: `Me llamo Andrea Villanueva, soy madre y terapeuta. Me dedico a la terapia floral y otras terapias naturales. Trabajaba con los cops. 
  La idea de esta página es que veas el diseño, colores, texto, qué podrías necesitar en el futuro, que otras cosas podríamos mostrar.
  No funciona ningún botón porque quería hacer el diseño y ver que cosas realmente necesitas, podríamos ver algo de agendar hora y un blog, pero algunas cosas pueden costar plata :(.
  Mi idea es que después se puede integrar algo para que cambies las fotos y el texto sin neesitar de mi ayuda, pero esa es la razón por la que no he agregado la funcionalidad ni todo lo demás.`,
  bioImageSource: '/andreabio3.jpg',
};

const callToAction: IOrCallToAction = {
  type: AvailableFeatures.CALL_TO_ACTION,
  blockTitle: '¿Listo para notar la diferencia?',
  blockBody: 'Agenda tu cita ahora mismo, o contáctanos para conocer los beneficios de la terapia floral.',
  actionButton: mockAtButtonProps.base,
  socialMediaIcons: [
    mockMlLinkProps.facebookBig,
    mockMlLinkProps.instagramBig,
    mockMlLinkProps.whatsappBig,
  ],
};


export const mockOrFeaturesBlockProps = {
  base,
  featuresList,
  biography,
  callToAction,
};