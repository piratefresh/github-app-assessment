import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from ".";

const meta: Meta<typeof Avatar> = {
  title: "Avatar",
  component: Avatar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    children: "Button CTA",
    rounded: true,
    height: 128,
    width: 128,
  },
  render: (args) => (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
      <Avatar
        alt="avatar of user"
        src="https://avatars.githubusercontent.com/u/8445?v=4"
        height={32}
        width={32}
        rounded={args.rounded}
      />
      <Avatar
        alt="avatar of user"
        src="https://avatars.githubusercontent.com/u/8445?v=4"
        height={64}
        width={64}
        rounded={args.rounded}
      />
      <Avatar
        alt="avatar of user"
        src="https://avatars.githubusercontent.com/u/8445?v=4"
        height={args.height}
        width={args.width}
        rounded={args.rounded}
      />
    </div>
  ),
};
