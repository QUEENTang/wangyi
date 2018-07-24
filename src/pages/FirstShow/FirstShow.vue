<template>
  <div  id="first_show">
    <section>
      <div class="picture">
        <img src="http://yanxuan.nosdn.127.net/53df1ead033706dcd7da9a91c8977b83.jpg">
        <img src="http://yanxuan.nosdn.127.net/143424244e87fb8eed45c6984c769a63.jpg">
      </div>
      <div class="tiaozhuan">
        <img src="http://yanxuan.nosdn.127.net/06a2d444a39e1dfe621b7f0d317de7b4.jpg">
        <a href="javascript:;"></a>
        <a class="continue" href="javascript:;" @click="$router.replace('/home/recommend')"></a>
      </div>
    </section>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="less">
  @rem:750/10rem;
  #first_show {
    width: 100%;
    height: 100%;
    background: #eee;
    .picture img{
      width: 100%;
      vertical-align: top;
    }
    .tiaozhuan {
      width: 100%;
      height: 432/@rem;
      position: relative;
      img {
        width: 100%;
        vertical-align: top;
      }
      .continue {
        position: absolute;
        display: block;
        top: 230/@rem;
        left: 230/@rem;
        width: 254/@rem;
        height: 30/@rem;
      }
    }
  }
</style>
