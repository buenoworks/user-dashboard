import type { Meta, StoryObj } from '@storybook/angular';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { SearchInput } from '../app/shared/search-input/search-input';

const meta: Meta<SearchInput> = {
  title: 'Shared/SearchInput',
  component: SearchInput,
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule],
    }),
  ],
  args: {
    placeholder: 'Pesquisar...',
  },
};

export default meta;
type Story = StoryObj<SearchInput>;

export const Default: Story = {
  render: (args) => ({
    props: {
      ...args,
      control: new FormControl(''),
    },
    template: `
      <app-search-input
        [placeholder]="placeholder"
        [formControl]="control">
      </app-search-input>
    `,
  }),
};
