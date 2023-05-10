<template>
  <q-icon v-bind="$attrs" :size="size">
    <slot></slot>
  </q-icon>
</template>

<script>
export default {
  name: "AIcon",
  props: {
    size: {
      type: String,
      default: "2rem"
    }
  }
};
</script>

<style lang="scss" scoped></style>
