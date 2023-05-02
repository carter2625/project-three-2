import { html } from 'lit';
import '../src/project-three-2.js';

export default {
  title: 'ProjectThree2',
  component: 'project-three-2',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <project-three-2
      style="--project-three-2-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </project-three-2>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
