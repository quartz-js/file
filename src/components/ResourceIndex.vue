<template>
  <q-resource-index v-bind="$attrs" :settings-enabled="false">
    <template slot='top' slot-scope="scope">
      <slot name="top" v-bind="scope"/>
    </template>
    <template slot='actions' slot-scope="scope">
      <slot name="actions" v-bind="scope"/>
    </template>
    <template slot='row' slot-scope="scope">
      <td class="main-col pa-2" style='width: 100%'>
        <v-layout align-center>
          <div style='width: 70px; height: 70px' class="text-xs-center">
            <a :href="scope.resource.url" target='_blank' style='display:block' v-if="scope.resource.media"><img :src="getPreview(scope.resource)"></a>
            <v-chip color="error" v-if="!scope.resource.media" small style='color: white' disabled>No file</v-chip>
          </div>
          <div class="pa-1 pl-3">
            <p>#{{ scope.config.getAttribute('id').extractReadableValue(scope.resource) }} - {{ scope.config.getAttribute('name').extractReadableValue(scope.resource) }}</p>
            <p>{{ scope.config.getAttribute('created_at').extractReadableValue(scope.resource) }}</p>
            <p v-if="scope.resource.media">
              {{ scope.resource.media.mime_type }}
              {{ formatBytes(scope.resource.media.size) }}
            </p>
          </div>
        </v-layout>
      </td>
    </template>
    <template slot='head'><div></div></template>
  </q-resource-index>
</template>

<script>

import _ from 'lodash'

export default {
  methods: {
    formatBytes(bytes) {
      if(bytes < 1024) return bytes + " Bytes";
      else if(bytes < 1048576) return(bytes / 1024).toFixed(3) + " KB";
      else if(bytes < 1073741824) return(bytes / 1048576).toFixed(3) + " MB";
      else return(bytes / 1073741824).toFixed(3) + " GB";
    },
    getPreview(resource) {
      var filename = resource.url;
      var extension = filename.split(/\#|\?/)[0].split('.').pop().trim();

      if (_.includes(['jpeg', 'jpg', 'png', 'gif'], extension)) {
        return resource.url
      }

      try {
        return require('../assets/extension/' + extension + '.svg')
      } catch (e) {
        return require('../assets/extension/txt.svg')
      }
    }
  }
}
</script>

<style scoped>
  img {
    width: 70px;
    height: 70px;
  }
  p {
    margin-bottom: 2px;
  }
</style>
