import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { Text } from "../text";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "xl", "2xl"],
      control: { type: "select" },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button CTA",
    size: "md",
  },
  render: (args) => (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
      <Button>{args.children}</Button>
      <Button size="md">{args.children}</Button>
      <Button size="lg">{args.children}</Button>
      <Button size="xl">{args.children}</Button>
      <Button size="2xl">{args.children}</Button>

      <Button size={args.size}>{args.children}</Button>
    </div>
  ),
};

export const Small: Story = {
  args: {
    children: "Button",
    size: "sm",
  },
  render: (args) => {
    return <Button size={args.size}>{args.children}</Button>;
  },
};
export const Medium: Story = {
  args: {
    children: "Button",
    size: "md",
  },
  render: (args) => (
    <>
      <Button size="md">{args.children}</Button>
    </>
  ),
};
export const Large: Story = {
  args: {
    children: "Button",
    size: "lg",
  },
  render: (args) => (
    <>
      <Button size="lg">{args.children}</Button>
    </>
  ),
};
