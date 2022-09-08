import { ComponentStory, ComponentMeta } from '@storybook/react';
import MlBanner, { IMlBanner } from './MlBanner';
import { mockMlBannerProps } from './MlBanner.mocks';

export default {
    title: 'Molecules/MlBanner',
    component: MlBanner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof MlBanner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MlBanner> = (args) => (
    <MlBanner {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockMlBannerProps.base,
} as IMlBanner;