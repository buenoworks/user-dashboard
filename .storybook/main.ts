import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.ts'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],

  framework: {
    name: '@storybook/angular',
    options: {},
  },

  docs: {
    autodocs: true
  }
};

export default config;
