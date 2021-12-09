<template>
  <div>{{message}}</div>
</template>

<script>
import bus from './eventBus.js'
export default {
    name: 'Right',
    data() {
        return {
            message: "Right"
        }
    },
    created() {
        bus.$on('share', val => {
            console.log(val)
            this.message = val
        })
    },
    methods: {
        
    }
}
</script>

<style>

</style>