import { ComponentStory, ComponentMeta } from '@storybook/react';
import OrFooter, { IOrFooter } from './OrFooter';
import { mockOrFooterProps } from './OrFooter.mocks';

export default {
    title: 'molecules/OrFooter',
    component: OrFooter,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof OrFooter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OrFooter> = (args) => (
    <OrFooter {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockOrFooterProps.base,
} as IOrFooter;