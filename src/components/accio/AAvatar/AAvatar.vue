<template>
  <q-avatar v-bind="$attrs">
    <template v-for="slot in slots" v-slot:[slot.name] :key="slot.name">
      <slot :key="slot.name" :name="slot.name" />
    </template>
  </q-avatar>
</template>

<script>
import { useSlots } from "src/composables/use-slots";

export default {
  name: "AAvatar",
  inheritAttrs: false,
  setup(_, { slots }) {
    return {
      slots: useSlots(slots)
    };
  }
};
</script>

<style lang="scss" scoped></style>
