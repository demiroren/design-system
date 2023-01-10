import MyButton from '../components/Button.vue'

export default {
  title: 'Components/Button',
  component: MyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="onClick" v-bind="$props" />'
})

export const Filled = Template.bind({})
Filled.args = {
  variant: 'filled',
  label: 'Button'
}

export const Outlined = Template.bind({})
Outlined.args = {
  variant: 'outlined',
  label: 'Button'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button'
}

export const Medium = Template.bind({})
Medium.args = {
  label: 'Button'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button'
}
