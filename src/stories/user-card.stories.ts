import { Meta, StoryObj } from '@storybook/angular';
import { UserCard } from '../app/shared/user-card/user-card';

export default {
  title: 'Shared/UserCard',
  component: UserCard,
} as Meta<UserCard>;

export const Default: StoryObj<UserCard> = {
  args: {
    title: 'Informações do usuário',
  },
  render: (args) => ({
    props: args,
    template: `
      <app-user-card [title]="title">
        <div><strong>Nome:</strong> John Doe</div>
      </app-user-card>
    `,
  }),
};
