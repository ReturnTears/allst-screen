<template>
  <div>
      <span>{{ message }}</span>
      <button @click="send">send</button>  
    </div>  
</template>

<script>
import bus from './eventBus.js'
export default {
    name: 'Left',
    data() {
        return {
            message: "Left"
        }
    },
    methods: {
        send() {
            bus.$emit('share', this.message)
        }
    }
}
</script>

<style>

</style>