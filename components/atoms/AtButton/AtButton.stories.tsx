import { ComponentStory, ComponentMeta } from '@storybook/react';
import AtButton, { IAtButton } from './AtButton';
import { mockAtButtonProps } from './AtButton.mocks';

export default {
    title: 'Atoms/AtButton',
    component: AtButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof AtButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AtButton> = (args) => (
    <AtButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockAtButtonProps.base,
} as IAtButton;