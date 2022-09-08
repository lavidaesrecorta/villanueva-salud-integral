import { ComponentStory, ComponentMeta } from '@storybook/react';
import MlCard, { IMlCard } from './MlCard';
import { mockMlCardProps } from './MlCard.mocks';

export default {
    title: 'Molecules/MlCard',
    component: MlCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof MlCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MlCard> = (args) => (
    <MlCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockMlCardProps.base,
} as IMlCard;