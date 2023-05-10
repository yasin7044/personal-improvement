<template>
  <div>
    <q-toolbar class="bg-primary text-white q-pa-lg">
      <q-avatar>
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
      </q-avatar>

      <q-btn-toggle
        v-model="model"
        flat
        stretch
        toggle-color="yellow"
        :options="options"
        size="12px"
      />

      <q-toolbar-title></q-toolbar-title>

      <q-btn flat round dense icon="whatshot" />
    </q-toolbar>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      model: ref("one"),

      options: [
        { label: "Insight", value: "Insight" },
        { label: "Audience", value: "Audience" },
        { label: "Content", value: "Content" },
        { label: "Templates", value: "Templates" },
        { label: "Campaigns", value: "Campaigns" },
        { label: "Journeys", value: "Journeys" },
        { label: "Reportings", value: "Reportings" },
        { label: "Analytical", value: "Analytica" }
      ]
    };
  }
};
</script>
