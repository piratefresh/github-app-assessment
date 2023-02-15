import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Text } from ".";

const meta: Meta<typeof Text> = {
  title: "Text",
  component: Text,
  argTypes: {
    size: {
      options: [
        "sm",
        "md",
        "base",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
      ],
      control: { type: "select" },
    },
    weight: {
      options: ["normal", "medium", "semibold", "bold"],
      control: { type: "select" },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    size: "base",
    weight: "normal",
  },
  render: (args) => <Text {...args}>{args.children}</Text>,
};
