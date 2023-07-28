import type { Meta, StoryObj } from "@storybook/react";

import TopBar from "./TopBar";

const meta = {
  title: "Browser/TopBar",
  component: TopBar,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof TopBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "TopBar",
  },
};
