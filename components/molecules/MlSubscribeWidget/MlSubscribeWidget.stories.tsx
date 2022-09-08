import { ComponentStory, ComponentMeta } from '@storybook/react';
import MlSubscribeWidget, { IMlSubscribeWidget } from './MlSubscribeWidget';
import { mockMlSubscribeWidgetProps } from './MlSubscribeWidget.mocks';

export default {
    title: 'templates/MlSubscribeWidget',
    component: MlSubscribeWidget,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof MlSubscribeWidget>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MlSubscribeWidget> = (args) => (
    <MlSubscribeWidget {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockMlSubscribeWidgetProps.base,
} as IMlSubscribeWidget;