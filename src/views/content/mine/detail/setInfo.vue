<template>
    <div class="page-setInfo">
        <van-uploader :after-read="onRead" accept="image/gif, image/jpeg" multiple>
            <van-icon name="photograph" />
        </van-uploader>
    </div>
</template>
<script>
  export default {
    name: "page-setInfo",
    data(){
      return {
        
      }
    },
    computed:{
      setThing(){
        return this.$route.params
      }
    },
    mounted() {
      
    },
    methods: {
      onRead(file) {
        console.log(file)
      }
    },
  }
</script>
<style lang="scss" scoped>
  //@import ""
</style>