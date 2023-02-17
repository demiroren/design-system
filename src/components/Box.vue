<script>
export default {
  name: 'Box',
  props: {
    display: {
      type: String,
      default: 'block'
    },
    position: {
      type: String,
      default: 'static'
    },
    color: {
      type: String
    },
    bg: {
      type: String
    },
    width: {
      type: String,
      default: '200'
    },
    minWidth: {
      type: String
    },
    maxWidth: {
      type: String
    },
    height: {
      type: String,
      default: '200'
    },
    minHeight: {
      type: String
    },
    maxHeight: {
      type: String
    },
    m: {
      type: String
    },
    mt: {
      type: String
    },
    mr: {
      type: String
    },
    mb: {
      type: String
    },
    ml: {
      type: String
    },
    p: {
      type: String
    },
    pt: {
      type: String
    },
    pr: {
      type: String
    },
    pb: {
      type: String
    },
    pl: {
      type: String
    }
  },
  computed: {
    style() {
      return {
        display: this.display,
        position: this.position,
        color: this.color,
        backgroundColor: this.bg,
        width: `${this.width}px`,
        minWidth: `${this.minWidth}px`,
        maxWidth: `${this.maxWidth}px`,
        height: `${this.height}px`,
        minHeight: `${this.minHeight}px`,
        maxHeight: `${this.maxHeight}px`,
        margin: `${this.m}px`,
        marginTop: `${this.mt}px`,
        marginRight: `${this.mr}px`,
        marginBottom: `${this.mb}px`,
        marginLeft: `${this.ml}px`,
        padding: `${this.p}px`,
        paddingTop: `${this.pt}px`,
        paddingRight: `${this.pr}px`,
        paddingBottom: `${this.pb}px`,
        paddingLeft: `${this.pl}px`
      }
    }
  }
}
</script>

<template>
  <div :style="style">
    <slot></slot>
  </div>
</template>
