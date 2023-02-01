<script>
import './button.css'

export default {
  name: 'my-button',
  props: {
    label: {
      type: String,
      required: true
    },
    variant: {
      type: String,
      default: 'filled',
      validator: function (value) {
        return ['filled', 'outlined'].indexOf(value) !== -1
      }
    },
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      }
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String
    }
  },
  computed: {
    classes() {
      return {
        button: true,
        [`button--${this.variant}`]: true,
        [`button--${this.size}`]: true
      }
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
        width: this.fullWidth ? '100%' : 'inherit'
      }
    }
  },
  methods: {
    onClick() {
      this.$emit('onClick')
    }
  }
}
</script>

<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>
