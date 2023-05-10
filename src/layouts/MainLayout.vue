<template>
  <q-layout view="hHh LpR fFf">
    <template v-if="!booting">
      <MainHeader />
      <router-view />
    </template>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import MainHeader from "src/components/MainHeader/MainHeader.vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "MainLayout",
  components: {
    MainHeader
  },
  setup() {
    const $q = useQuasar();
    const booting = ref(false);
    async function boot() {
      booting.value = true;
      $q.loading.show({
        delay: 1000
      });
      // $q.loading.show({
      //   delay: 1000
      // });

      booting.value = false;
      $q.loading.hide();
    }
    boot();

    return {
      booting
    };
  }
});
</script>
