import { ComponentMeta, ComponentStory } from "@storybook/react";
import { mockHomePageProps } from "./HomePage.mocks";
import HomePage, { IHomePage } from "./HomePage";
export default {
    title: 'Pages/HomePage',
    component: HomePage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof HomePage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HomePage> = (args) => (
    <HomePage {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockHomePageProps.base,
} as IHomePage;

Base.parameters = {
    layout: 'fullscreen',
}