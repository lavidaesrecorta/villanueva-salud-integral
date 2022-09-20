import { mockMlLinkProps } from '../MlLink/MlLink.mocks';
import { IMlSubscribeWidget } from './MlSubscribeWidget';

const base: IMlSubscribeWidget = {
  widgetTitle: 'Subscríbete',
  socialMediaIcons: [
    mockMlLinkProps.facebook,
    mockMlLinkProps.instagram,
    mockMlLinkProps.whatsapp,
  ],
  inputLabel: 'Ingresa tu correo',
};

export const mockMlSubscribeWidgetProps = {
  base,
};