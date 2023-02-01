import MyColor from '../components/Color.vue'

export default {
  title: 'Example/Color',
  component: MyColor,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: [
        'primary-1',
        'primary-2',
        'primary-3',
        'secondary-1',
        'secondary-2',
        'secondary-3',
        'secondary-4',
        'secondary-5',
        'tertiary',
        'tertiary-1',
        'tertiary-2',
        'tertiary-3',
        'tertiary-4',
        'tertiary-5',
        'tertiary-6'
      ]
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyColor },
  template: '<my-color v-bind="$props" />'
})

export const Primary1 = Template.bind({})
Primary1.args = {
  color: 'primary-1',
  label: 'Text'
}

export const Primary2 = Template.bind({})
Primary2.args = {
  color: 'primary-2',
  label: 'Text'
}

export const Primary3 = Template.bind({})
Primary3.args = {
  color: 'primary-3',
  label: 'Text'
}

export const Secondary1 = Template.bind({})
Secondary1.args = {
  color: 'secondary-1',
  label: 'Text'
}

export const Secondary2 = Template.bind({})
Secondary2.args = {
  color: 'secondary-2',
  label: 'Text'
}

export const Secondary3 = Template.bind({})
Secondary3.args = {
  color: 'secondary-3',
  label: 'Text'
}

export const Secondary4 = Template.bind({})
Secondary4.args = {
  color: 'secondary-4',
  label: 'Text'
}

export const Secondary5 = Template.bind({})
Secondary5.args = {
  color: 'secondary-5',
  label: 'Text'
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  color: 'tertiary',
  label: 'Text'
}

export const Tertiary1 = Template.bind({})
Tertiary1.args = {
  color: 'tertiary-1',
  label: 'Text'
}

export const Tertiary2 = Template.bind({})
Tertiary2.args = {
  color: 'tertiary-2',
  label: 'Text'
}

export const Tertiary3 = Template.bind({})
Tertiary3.args = {
  color: 'tertiary-3',
  label: 'Text'
}

export const Tertiary4 = Template.bind({})
Tertiary4.args = {
  color: 'tertiary-4',
  label: 'Text'
}

export const Tertiary5 = Template.bind({})
Tertiary5.args = {
  color: 'tertiary-5',
  label: 'Text'
}

export const Tertiary6 = Template.bind({})
Tertiary6.args = {
  color: 'tertiary-6',
  label: 'Text'
}
