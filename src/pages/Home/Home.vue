<template>
  <div class="home">
    <HomeHeader/>
    <router-view/>
  </div>
</template>

<script>
  import HomeHeader from "../../components/HomeHeader/HomeHeader.vue"
  export default {
    components: {
      HomeHeader
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
