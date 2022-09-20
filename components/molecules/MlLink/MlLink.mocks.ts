import { mockAtSvgProps } from '../../atoms/AtSvg/AtSvg.mocks';
import { IMlLink } from './MlLink';

const base: IMlLink = {
  link: '#',
  displayLabel: '',
  svgIcon: mockAtSvgProps.evenlySpaced,
};

const facebook: IMlLink = {
  link: 'https://www.facebook.com/Villanuevaterapias/',
  displayLabel: '',
  svgIcon: mockAtSvgProps.facebookIcon,
};

const instagram: IMlLink = {
  link: 'https://www.facebook.com/Villanuevaterapias/',
  displayLabel: '',
  svgIcon: mockAtSvgProps.instagramIcon,
};

const whatsapp: IMlLink = {
  link: 'https://www.facebook.com/Villanuevaterapias/',
  displayLabel: '',
  svgIcon: mockAtSvgProps.whatsappIcon,
};


const facebookBig: IMlLink = {
  link: 'https://www.facebook.com/Villanuevaterapias/',
  displayLabel: 'Facebook',
  svgIcon: {
    sizeClass: 'h-10 w-10 mb-2 mx-6',
    src: './facebook.svg',
  },
};

const instagramBig: IMlLink = {
  link: 'https://www.facebook.com/Villanuevaterapias/',
  displayLabel: 'Instagram',
  svgIcon: {
    sizeClass: 'h-10 w-10 mb-2 mx-6',
    src: './instagram.svg',
  },
};

const whatsappBig: IMlLink = {
  link: 'https://www.facebook.com/Villanuevaterapias/',
  displayLabel: 'Whatsapp',
  svgIcon: {
    sizeClass: 'h-10 w-10 mb-2 mx-6',
    src: './whatsapp.svg',
  },
};


export const mockMlLinkProps = {
  base,
  facebook,
  instagram,
  whatsapp,
  facebookBig,
  instagramBig,
  whatsappBig,
};