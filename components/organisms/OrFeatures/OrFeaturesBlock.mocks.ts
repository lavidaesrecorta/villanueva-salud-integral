import { IOrFeaturesBlock } from './OrFeaturesBlock';
import { AvailableFeatures, FeatureTypes } from './featureTypes';
import { IOrBiography, IOrFeaturesList} from './variations/index';
import { IOrCallToAction } from './variations/OrFeaturesCallToAction';
import { mockAtButtonProps } from '../../atoms/AtButton/AtButton.mocks';

const base: IOrFeaturesBlock = {
  type: AvailableFeatures.BIOGRAPHY,
  blockTitle: 'Hello World!',
};


const featuresList: IOrFeaturesList = {
  type: AvailableFeatures.FEATURE_LIST,
  blockTitle: 'Tratamientos',
  features: [
    {cardTitle: 'Flores de Bach',cardBody:'Como el músico'},
    {cardTitle: 'Flores de California',cardBody:'De Hollywood'},
    {cardTitle: 'Flores de Bush',cardBody:'Desde Australia'},
    {cardTitle: 'Flores Chilenas',cardBody:'Desde chilito lindo'},
    
  ]
};

const biography: IOrBiography = {
  type: AvailableFeatures.BIOGRAPHY,
  blockTitle: '¡Hola! Soy Andrea.',
  biographyBody: 'Me llamo Andrea Villanueva, soy madre y terapeuta. Me dedico a la terapia floral y otras terapias naturales. Trabajaba con los cops.',
};

const callToAction: IOrCallToAction = {
  type: AvailableFeatures.CALL_TO_ACTION,
  blockTitle: '¿Listo para notar la diferencia?',
  blockBody: 'Agenda tu cita ahora mismo, o contáctanos para conocer los beneficios de la terapia floral.',
  actionButton: mockAtButtonProps.base,
};


export const mockOrFeaturesBlockProps = {
  base,
  featuresList,
  biography,
  callToAction,
};