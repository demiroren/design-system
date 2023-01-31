import MyText from '../components/Text.vue'

export default {
  title: 'Example/Text',
  component: MyText,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [
        'headline-3',
        'headline-4',
        'headline-5',
        'headline-6',
        'subtitle-1',
        'body-1',
        'body-2',
        'button',
        'caption',
        'overline'
      ]
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyText },
  template: '<my-text @onClick="onClick" v-bind="$props" />'
})

export const Headline3 = Template.bind({})
Headline3.args = {
  size: 'headline-3',
  label: 'Text'
}

export const Headline4 = Template.bind({})
Headline4.args = {
  size: 'headline-4',
  label: 'Text'
}

export const Headline5 = Template.bind({})
Headline5.args = {
  size: 'headline-5',
  label: 'Text'
}

export const Headline6 = Template.bind({})
Headline6.args = {
  size: 'headline-6',
  label: 'Text'
}

export const Subtitle1 = Template.bind({})
Subtitle1.args = {
  size: 'subtitle-1',
  label: 'Text'
}

export const Body1 = Template.bind({})
Body1.args = {
  size: 'body-1',
  label: 'Text'
}

export const Body2 = Template.bind({})
Body2.args = {
  size: 'body-2',
  label: 'Text'
}

export const Button = Template.bind({})
Button.args = {
  size: 'button',
  label: 'Text'
}

export const Caption = Template.bind({})
Caption.args = {
  size: 'caption',
  label: 'Text'
}

export const Overline = Template.bind({})
Overline.args = {
  size: 'overline',
  label: 'Text'
}
