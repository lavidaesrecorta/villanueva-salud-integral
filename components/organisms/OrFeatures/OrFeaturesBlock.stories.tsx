import { ComponentStory, ComponentMeta } from '@storybook/react';
import OrFeaturesBlock, { IOrFeaturesBlock } from './OrFeaturesBlock';
import { mockOrFeaturesBlockProps } from './OrFeaturesBlock.mocks';
import { IOrBiography } from './variations/OrFeaturesBiography';
import { IOrCallToAction } from './variations/OrFeaturesCallToAction';
import { IOrFeaturesList } from './variations/OrFeaturesList';

export default {
    title: 'Organisms/OrFeaturesBlock',
    component: OrFeaturesBlock,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof OrFeaturesBlock>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OrFeaturesBlock> = (args) => (
    <OrFeaturesBlock {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockOrFeaturesBlockProps.base,
} as IOrFeaturesBlock;

export const Biography = Template.bind({});

Biography.args = {
    ...mockOrFeaturesBlockProps.biography,
} as IOrBiography;

export const FeaturesList = Template.bind({});

FeaturesList.args = {
    ...mockOrFeaturesBlockProps.featuresList,
} as IOrFeaturesList


export const CallToAction = Template.bind({});

FeaturesList.args = {
    ...mockOrFeaturesBlockProps.callToAction,
} as IOrCallToAction