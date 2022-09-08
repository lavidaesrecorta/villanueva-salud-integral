import { ComponentStory, ComponentMeta } from '@storybook/react';
import AtSvg, { IAtSvg } from './AtSvg';
import { mockAtSvgProps } from './AtSvg.mocks';

export default {
    title: 'atoms/AtSvg',
    component: AtSvg,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof AtSvg>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AtSvg> = (args) => (
    <AtSvg {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockAtSvgProps.base,
} as IAtSvg;