<template>
  <div>
    <router-view :config="config"></router-view>
  </div>
</template>
<script>

import File from '../../app/Managers/FileManager'

export default {
  data () {
    return {
      config: File
    }
  }
}
</script>
