<template>
  <div class="base-label text-h5">
    <slot>
      {{ label }}
    </slot>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ALabel",
  props: {
    label: String
  }
});
</script>

<style>
.base-label {
  margin-bottom: 5px;
}
</style>
