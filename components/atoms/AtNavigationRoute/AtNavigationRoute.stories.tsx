import { ComponentStory, ComponentMeta } from '@storybook/react';
import AtNavigationRoute, { IAtNavigationRoute } from './AtNavigationRoute';
import { mockAtNavigationRouteProps } from './AtNavigationRoute.mocks';

export default {
    title: 'atoms/AtNavigationRoute',
    component: AtNavigationRoute,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof AtNavigationRoute>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AtNavigationRoute> = (args) => (
    <AtNavigationRoute {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockAtNavigationRouteProps.baseWithSubroute,
} as IAtNavigationRoute;