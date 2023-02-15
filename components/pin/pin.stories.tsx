import type { Meta, StoryObj } from "@storybook/react";
import { Pin } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Pin> = {
  title: "Pin",
  component: Pin,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Pin>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {};
