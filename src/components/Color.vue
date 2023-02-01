<template>
  <div :class="classes">{{ label }}</div>
</template>

<script>
import './color.css'
import '../assets/base.css'

export default {
  name: 'my-color',
  props: {
    label: {
      type: String,
      required: true
    },
    color: {
      type: String,
      validator: function (value) {
        return (
          [
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
          ].indexOf(value) !== -1
        )
      }
    }
  },
  computed: {
    classes() {
      return {
        'storybook-color': true,
        [`storybook-color--${this.color}`]: true
      }
    }
  }
}
</script>
