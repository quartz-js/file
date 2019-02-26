<template>
  <q-resource-index v-bind="$attrs" :settings-enabled="false">
    <template slot='top' slot-scope="scope">
      <create v-bind="$attrs"/>
    </template>
    <template slot='actions' slot-scope="scope">
      <edit :resource="scope.resource" v-bind="$attrs"/>
    </template>
    <template slot='row' slot-scope="scope">
      <td class="main-col pa-2">
        <v-layout align-center>
          <div style='width: 70px' class="text-xs-center">
            <a :href="scope.resource.url" target='_blank'  v-if="scope.resource.media"><img :src="getPreview(scope.resource)"></a>
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

import Create from './create'
import Edit from './edit'
import _ from 'lodash'

export default {
  components: {
    Create,
    Edit
  },
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

      return require('../../../assets/extension/' + extension + '.svg')
    }
  }
}
</script>

<style scoped>
  img {
    width: 70px;
    height: 70px;
  }
  .main-col {
    width: 100%;
  }
  p {
    margin-bottom: 2px;
  }
</style>
