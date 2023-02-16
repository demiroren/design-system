import Flex from '../components/Flex.vue'

export default {
  title: 'Components/Flex',
  component: Flex,
  argTypes: {
    flexDirection: {
      control: { type: 'select' },
      options: ['row', 'row-reverse', 'column', 'column-reverse']
    },
    flexWrap: {
      control: { type: 'select' },
      options: ['nowrap', 'wrap', 'wrap-reverse']
    },
    justifyContent: {
      control: { type: 'select' },
      options: [
        'flex-start',
        'flex-end',
        'start',
        'end',
        'left',
        'right',
        'center',
        'space-between',
        'space-around',
        'space-evelyn'
      ]
    },
    alignItems: {
      control: { type: 'select' },
      options: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline']
    },
    alignContent: {
      control: { type: 'select' },
      options: [
        'normal',
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
        'stretch'
      ]
    },
    flexGrow: {
      control: { type: 'number' },
      defaultValue: 0
    },
    flexShrink: {
      control: { type: 'number' },
      defaultValue: 0
    },
    flexBasis: {
      control: { type: 'text' },
      defaultValue: 'auto'
    },
    justifySelf: {
      control: { type: 'select' },
      options: [
        'auto',
        'normal',
        'stretch',
        'center',
        'start',
        'end',
        'flex-start',
        'flex-end',
        'self-start',
        'self-end',
        'left',
        'right',
        'baseline',
        'first baseline',
        'last baseline',
        'safe center',
        'unsafe center'
      ]
    },
    alignSelf: {
      control: { type: 'select' },
      options: [
        'auto',
        'normal',
        'stretch',
        'center',
        'start',
        'end',
        'flex-start',
        'flex-end',
        'self-start',
        'self-end',
        'left',
        'right',
        'baseline',
        'first baseline',
        'last baseline',
        'safe center',
        'unsafe center'
      ]
    },
    order: {
      control: { type: 'number' },
      defaultValue: 0
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Flex },
  template: '<Flex v-bind="$props" />'
})

export const Standard = Template.bind({})
Standard.args = {
  label: 'Item'
}
