import type { Meta, StoryObj } from "@storybook/react";

import FloatButton from "../../components/antd/FloatButton";

const meta: Meta<typeof FloatButton> = {
  component: FloatButton,
  title: "components/FloatButton",
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof FloatButton>;

export const Default: Story = {
  args: {},
};
