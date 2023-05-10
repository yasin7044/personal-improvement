<template>
  <q-table
    ref="tableRef"
    :flat="!noFlat"
    v-bind="$attrs"
    :color="color"
    :rows="rows"
    bordered
    class="base-table"
    v-model:pagination="computedPagination"
    hide-pagination
    :loading="loading"
  >
    <template v-slot:header-selection="scope">
      <q-checkbox v-model="scope.selected" size="sm" />
    </template>
    <template v-slot:body-selection="scope">
      <q-checkbox v-model="scope.selected" size="sm" />
    </template>

    <template v-slot:no-data="{ message }">
      <div class="full-width row flex-center q-gutter-sm">
        <!-- <q-icon size="2em" name="sentiment_dissatisfied" /> -->
        <span> {{ message }} </span>
      </div>
    </template>

    <template v-for="slot in slots" :key="slot.name" v-slot:[slot.name]="props">
      <slot :key="slot.name" :name="slot.name" v-bind="props" />
    </template>
  </q-table>

  <div v-if="pagination" class="row items-center justify-between q-my-lg">
    <div class="row no-wrap items-center">
      Rows Per Page

      <q-select
        :loading="loading"
        :disable="loading"
        :options="computedRowsPerPageOptions"
        v-model="computedPagination.rowsPerPage"
        class="q-ml-md"
        optionValue="id"
        optionLabel="name"
        emit-value
        map-options
        @update:modelValue="onPaginationChange"
      />
    </div>
    <q-pagination
      :disable="loading"
      v-model="computedPagination.page"
      :max="maxPages"
      @update:modelValue="onPaginationChange"
      active-color="primary-10"
      active-text-color="primary-80"
      text-color="primary"
      active-design="unelevated"
    />
  </div>
</template>

<script>
import { useSlots } from "src/composables/use-slots";
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "ATable",
  inheritAttrs: false,
  props: {
    rows: Array,
    noFlat: Boolean,
    noBorder: Boolean,
    color: {
      type: String,
      default: "primary"
    },
    pagination: Object,
    rowsPerPageOptions: Array,
    loading: Boolean,
    noDataText: {
      type: String,
      default: "No data to display"
    }
  },
  setup(props, { slots, emit }) {
    const tableRef = ref();

    const localPagination = computed(() => ({
      page: 1,
      rowsPerPage: 0
    }));

    const computedPagination = computed({
      get: () => props.pagination ?? localPagination.value,
      set: (val) => emit("update:pagination", val)
    });

    const maxPages = computed(() => {
      return Math.ceil(
        computedPagination.value.rowsNumber /
          computedPagination.value.rowsPerPage
      );
    });

    const defaultRowsPerPageOptions = [3, 5, 7, 10, 15, 20, 25, 50];
    const computedRowsPerPageOptions = computed(() => {
      return (
        props.rowsPerPageOptions || [
          ...defaultRowsPerPageOptions,
          {
            name: "All",
            id: computedPagination.value.rowsNumber
          }
        ]
      );
    });

    function onPaginationChange() {
      tableRef.value.setPagination(computedPagination.value, true);
    }

    return {
      slots: useSlots(slots),
      tableRef,
      computedPagination,
      maxPages,
      onPaginationChange,
      computedRowsPerPageOptions
    };
  },
  emits: ["update:pagination"]
});
</script>

<style lang="scss" scoped>
// $
@import "base-table";
</style>
