import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Title, Subtitle, Description, Primary, ArgsTable, Stories, PRIMARY_STORY } from "@storybook/addon-docs"

import Card from "../components/card"

export default {
  title: "Example/Card",
  component: Card,
  argTypes: {
    // isChecked: { control: false },
    // isHover: { control: false },
    // label: { control: "Flood Zone 3" }
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>This is a card component</Subtitle>
          <Description>There are three variants of card 1. Selected 2. Hover 3. Unselected</Description>
        </>
      )
    }
  }
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = args => <Card {...args} />

export const Selected = Template.bind({})
Selected.args = {
  isChecked: true,
  isHover: true,
  label: "Flood Zone 3"
}

export const Hover = Template.bind({})
Hover.args = {
  isChecked: false,
  isHover: true,
  label: "Flood Zone 3"
}

export const Unselected = Template.bind({})
Unselected.args = {
  isChecked: false,
  isHover: false,
  label: "Flood Zone 3"
}
