import { mockAtSvgProps } from '../../atoms/AtSvg/AtSvg.mocks';
import { IMlLink } from './MlLink';

const base: IMlLink = {
  link: '#',
  displayLabel: '',
  svgIcon: mockAtSvgProps.evenlySpaced,
};

export const mockMlLinkProps = {
  base,
};