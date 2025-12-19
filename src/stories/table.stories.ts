import type { Meta, StoryObj } from '@storybook/angular';
import { of } from 'rxjs';
import { Table } from '../app/shared/table/table';

interface UserMock {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}

const mockUsers: UserMock[] = [
  {
    id: 1,
    name: 'Leanne Graham',
    email: 'leanne@email.com',
    company: { name: 'Romaguera-Crona' },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    email: 'ervin@email.com',
    company: { name: 'Deckow-Crist' },
  },
];

const columns = [
  { key: 'name', label: 'Nome' },
  { key: 'email', label: 'E-mail' },
  { key: 'company.name', label: 'Empresa' },
  { key: 'actions', label: 'Ações' },
];

const meta: Meta<Table<UserMock>> = {
  title: 'Shared/Table',
  component: Table,
};

export default meta;
type Story = StoryObj<Table<UserMock>>;

export const Default: Story = {
  args: {
    dataColumn: columns,
    dataTable$: of(mockUsers),
    loading: false,
  },
};
