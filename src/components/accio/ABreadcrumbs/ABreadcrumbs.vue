<template>
  <q-breadcrumbs v-bind="$attrs">
    <template v-for="slot in slots" v-slot:[slot.name] :key="slot.name">
      <slot :key="slot.name" :name="slot.name" />
    </template>
  </q-breadcrumbs>
</template>

<script>
import { useSlots } from "src/composables/use-slots";

export default {
  name: "ABreadcrumbs",
  inheritAttrs: false,
  setup(_, { slots }) {
    return {
      slots: useSlots(slots)
    };
  }
};
</script>

<style lang="scss" scoped></style>
