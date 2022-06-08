<template>
    <div>
        <h3>This is Contact Page!</h3>
        <PartFile></PartFile>
    </div>
</template>
<script>
// @ is an alias to /src
import PartFile from '@/components/PartFile.vue'

export default {
  name: 'AboutView',
  components: {
   PartFile
  }
}
</script>
