import { mockMlLinkProps } from '../MlLink/MlLink.mocks';
import { IMlSubscribeWidget } from './MlSubscribeWidget';

const base: IMlSubscribeWidget = {
  widgetTitle: 'Subscríbete',
  socialMediaIcons: [
    mockMlLinkProps.base,
    mockMlLinkProps.base,
    mockMlLinkProps.base,
  ],
};

export const mockMlSubscribeWidgetProps = {
  base,
};