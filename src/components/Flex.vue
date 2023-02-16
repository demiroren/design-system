<template>
  <div :style="flexStyle">
    <slot>
      <h1>{{ label }}1</h1>
      <h1>{{ label }}2</h1>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'FlexContainer',
  props: {
    label: {
      type: String,
      required: true
    },
    flexDirection: {
      type: String,
      default: 'row'
    },
    flexWrap: {
      type: String,
      default: 'nowrap'
    },
    justifyContent: {
      type: String,
      default: 'flex-start'
    },
    alignItems: {
      type: String,
      default: 'stretch'
    },
    alignContent: {
      type: String,
      default: 'stretch'
    },
    flexGrow: {
      type: Number,
      default: 0
    },
    flexShrink: {
      type: Number,
      default: 1
    },
    flexBasis: {
      type: String,
      default: 'auto'
    },
    justifySelf: {
      type: String,
      default: 'auto'
    },
    alignSelf: {
      type: String,
      default: 'auto'
    },
    order: {
      type: Number,
      default: 0
    }
  },
  computed: {
    // classObject() {
    //   return {
    //     'flex-container': true,
    //     [`flex--${this.flexDirection}`]: true,
    //     [`flex--${this.flexWrap}`]: true,
    //     [`flex--${this.justifyContent}`]: true,
    //     [`flex--${this.alignItems}`]: true
    //   }
    // }
    flexStyle() {
      return {
        display: 'flex',
        flexDirection: this.flexDirection,
        flexWrap: this.flexWrap,
        justifyContent: this.justifyContent,
        alignItems: this.alignItems,
        alignContent: this.alignContent,
        flexGrow: this.flexGrow,
        flexShrink: this.flexShrink,
        flexBasis: this.flexBasis,
        justifySelf: this.justifySelf,
        alignSelf: this.alignSelf,
        order: this.order
      }
    }
  }
}
</script>
