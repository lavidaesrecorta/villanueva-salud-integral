import { ComponentStory, ComponentMeta } from '@storybook/react';
import AtInput, { IAtInput } from './AtInput';
import { mockAtInputProps } from './AtInput.mocks';

export default {
    title: 'Atoms/AtInput',
    component: AtInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof AtInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AtInput> = (args) => (
    <AtInput {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockAtInputProps.base,
} as IAtInput;