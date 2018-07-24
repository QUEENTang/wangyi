<template>
  <div class="two_header">
    <header class="header">
      <div class="icon">
        <a class="icon_home" href="javascript:;" @click="$router.replace('/home/recommend')">
          <i class="iconfont icon-home"></i>
        </a>
        <a href="javascript:;">

        </a>
        <a class="icon_search" href="javascript:;">
          <i class="iconfont icon-fenxiang"></i>
        </a>
        <a class="icon_cart" href="javascript:;" @click="$router.replace('/cart')">
          <i class="iconfont icon-cart"></i>
        </a>
      </div>
      <div class="to_home">
        <a href="javascript:;">
          <span>网易严选</span>
        </a>
      </div>
    </header>
    <div class="login_header">
      <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="less" rel="stylesheet/less">
  @rem:750/10rem;
  .two_header {
    .header {
      position: relative;
      width: 100%;
      height: 88/@rem;
      background: #f4f4f4;
      z-index: 100;
      .icon {
        height: 88/@rem;
        width: 90%;
        margin: auto;
        text-align: right;
        a {
          &.icon_home {
            float: left;
          }
          &.icon_cart {
            padding-left: 10/@rem;
          }
          .iconfont {
            font-size: 46/@rem;
            color: black;
          }
        }
      }
      .to_home {
        width: 170/@rem;
        height: 50/@rem;
        position: absolute;
        top: 10/@rem;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        a {
          span {
            display: block;
            font-size: 40/@rem;
            color: black;
          }
        }
      }
    }
    .login_header {
      text-align: center;
      padding: 50/@rem;
      img {
        width: 192/@rem;
        height: 64/@rem;
      }
    }
  }
</style>
