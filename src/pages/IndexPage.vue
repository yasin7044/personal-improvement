<template>
  <q-page-container>
    <q-page class="q-pa-xl">
      <div class="text-h3">AVatar</div>
      <a-avatar color="red" text-color="white" icon="directions" />
      <a-btn color="blue">
        Notifications
        <a-badge color="red" rounded floating />
      </a-btn>

      <div class="q-pa-md q-gutter-sm">
        <a-banner inline-actions class="text-white bg-red">
          You have lost connection to the internet. This app is offline.
          <template v-slot:action>
            <a-btn flat color="white" label="Turn ON Wifi" />
          </template>
        </a-banner>
        <a-bar class="bg-black text-white">
          <div class="cursor-pointer">File</div>
          <div class="cursor-pointer">Edit</div>
          <div class="cursor-pointer gt-xs">View</div>
          <div class="cursor-pointer gt-xs">Window</div>
          <div class="cursor-pointer">Help</div>
          <q-space />
          <a-btn dense flat icon="minimize" />
          <a-btn dense flat icon="crop_square" />
          <a-btn dense flat icon="close" />
        </a-bar>
        <a-breadcrumbs gutter="none">
          <q-breadcrumbs-el label="Home" />
          <q-breadcrumbs-el label="Components" />
          <q-breadcrumbs-el label="Breadcrumbs" />
        </a-breadcrumbs>
        <a-btn color="white" text-color="black" label="Standard" />
        <a-btn color="primary" label="Primary" />
        <a-btn color="secondary" label="Secondary" />
        <a-btn-group spread>
          <a-btn color="purple" label="First" icon="timeline" />
          <a-btn color="purple" label="Second" icon="visibility" />
        </a-btn-group>
        <a-btn-dropdown color="primary" label="Dropdown Button">
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>Photos</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>Videos</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>Articles</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </a-btn-dropdown>
        <a-card class="my-card">
          <a-card-section>
            {{ lorem }}
          </a-card-section>
        </a-card>
        <a-input v-model="text" label="Standard" />
        <a-input filled v-model="text" label="Filled" />
        <a-select v-model="model" :options="options" label="Standard" />
        <div class="q-gutter-sm">
          <a-radio v-model="shape" val="line" label="Line" />
          <a-radio v-model="shape" val="rectangle" label="Rectangle" />
          <a-radio v-model="shape" val="ellipse" label="Ellipse" />
          <a-radio v-model="shape" val="polygon" label="Polygon" />
        </div>
        <div class="q-gutter-sm">
          <a-checkbox v-model="teal" label="Teal" color="teal" />
          <a-checkbox v-model="orange" label="Orange" color="orange" />
          <a-checkbox v-model="red" label="Red" color="red" />
          <a-checkbox v-model="cyan" label="Cyan" color="cyan" />
        </div>
        <div>
          <q-chip icon="event">Add to calendar</q-chip>
          <q-chip icon="bookmark">Bookmark</q-chip>
          <q-chip icon="alarm" label="Set alarm" />
          <q-chip class="glossy" icon="directions">Get directions</q-chip>
        </div>
      </div>
    </q-page>
  </q-page-container>
</template>

<script>
// import ATable from "src/components/accio/ATable/ATable.vue";
import { defineComponent } from "vue";
import AAvatar from "src/components/accio/AAvatar/AAvatar.vue";
import { ref } from "vue";
export default defineComponent({
  name: "IndexPage",
  setup() {
    const model = ref(null);

    const shape = ref("line");

    const options = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];

    const text = "Hello World";
    const lorem =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const columns = [
      {
        name: "as",
        label: "Name",
        sortable: true,
        align: "left",
        style: "width: 100px"
      }
    ];

    return {
      columns,
      lorem,
      text,
      options,
      shape,
      model,
      teal: ref(true),
      orange: ref(false),
      red: ref(false),
      cyan: ref(true)
    };
  }
});
</script>
