import Box from '../components/Box.vue'

export default {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    display: {
      control: { type: 'select' },
      options: ['block', 'inline-block', 'inline', 'none']
    },
    position: {
      control: { type: 'select' },
      options: ['static', 'relative', 'absolute', 'fixed', 'sticky', 'inherit']
    },
    color: { control: 'color', defaultValue: 'red' },
    bg: { control: 'color', defaultValue: 'green' },
    width: {
      control: { type: 'text' }
    },
    minWidth: {
      control: { type: 'text' }
    },
    maxWidth: {
      control: { type: 'text' }
    },
    height: {
      control: { type: 'text' }
    },
    minHeight: {
      control: { type: 'text' }
    },
    maxHeight: {
      control: { type: 'text' }
    },
    m: {
      control: { type: 'text' }
    },
    mt: {
      control: { type: 'text' }
    },
    mr: {
      control: { type: 'text' }
    },
    mb: {
      control: { type: 'text' }
    },
    ml: {
      control: { type: 'text' }
    },
    p: {
      control: { type: 'text' }
    },
    pt: {
      control: { type: 'text' }
    },
    pr: {
      control: { type: 'text' }
    },
    pb: {
      control: { type: 'text' }
    },
    pl: {
      control: { type: 'text' }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Box },
  template: '<Box v-bind="$props" />'
})

export const Standard = Template.bind({})
