import { ComponentStory, ComponentMeta } from '@storybook/react';
import MlLink, { IMlLink } from './MlLink';
import { mockMlLinkProps } from './MlLink.mocks';

export default {
    title: 'molecules/MlLink',
    component: MlLink,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof MlLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MlLink> = (args) => (
    <MlLink {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockMlLinkProps.base,
} as IMlLink;