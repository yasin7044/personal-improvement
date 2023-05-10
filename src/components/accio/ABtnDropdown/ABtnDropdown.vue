<template>
  <q-btn-dropdown v-bind="$attrs">
    <template v-for="slot in slots" v-slot:[slot.name] :key="slot.name">
      <slot :key="slot.name" :name="slot.name" />
    </template>
  </q-btn-dropdown>
</template>

<script>
import { useSlots } from "src/composables/use-slots";

export default {
  name: "ABtnDropdown",
  inheritAttrs: false,
  setup(_, { slots }) {
    return {
      slots: useSlots(slots)
    };
  }
};
</script>

<style lang="scss" scoped></style>
