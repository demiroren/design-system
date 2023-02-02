<template>
  <div :class="classes">{{ label }}</div>
</template>

<script>
import './text.css'

export default {
  name: 'my-text',

  props: {
    label: {
      type: String,
      required: true
    },
    bold: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator: function (value) {
        return (
          [
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
          ].indexOf(value) !== -1
        )
      }
    }
  },
  computed: {
    classes() {
      return {
        'storybook-text': true,
        'storybook-text--bold': this.bold,
        'storybook-text--medium': this.medium,
        [`storybook-text--${this.size}`]: true
      }
    }
  }
}
</script>
