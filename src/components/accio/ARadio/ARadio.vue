<template>
  <q-radio v-bind="$attrs">
    <template v-for="slot in slots" v-slot:[slot.name] :key="slot.name">
      <slot :key="slot.name" :name="slot.name" />
    </template>
  </q-radio>
</template>

<script>
import { useSlots } from "src/composables/use-slots";

export default {
  name: "ARadio",
  inheritAttrs: false,
  setup(_, { slots }) {
    return {
      slots: useSlots(slots)
    };
  }
};
</script>

<style lang="scss" scoped></style>
