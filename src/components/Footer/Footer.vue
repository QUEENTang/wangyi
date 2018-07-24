<template>
  <div class="footer">
    <div class="tab" :class="{on: '/home/recommend'===$route.path}" @click="goTo('/home/recommend')">
      <span class="icon_img">
        <i class="iconfont icon-home"></i>
      </span>
      <span class="text">首页</span>
    </div>
    <div class="tab" :class="{on: '/knowledge'===$route.path}" @click="goTo('/knowledge')">
      <span class="icon_img">
        <i class="iconfont icon-fangkuang"></i>
      </span>
      <span class="text">识物</span>
    </div>
    <div class="tab" :class="{on: '/classify'===$route.path}" @click="goTo('/classify')">
      <span class="icon_img">
        <i class="iconfont icon-guizi"></i>
      </span>
      <span class="text">分类</span>
    </div>
    <div class="tab" :class="{on: '/cart'===$route.path}" @click="goTo('/cart')">
      <span class="icon_img">
        <i class="iconfont icon-cart"></i>
      </span>
      <span class="text">购物车</span>
    </div>
    <div class="tab" :class="{on: '/personal'===$route.path}" @click="goTo('/personal')">
      <span class="icon_img">
        <i class="iconfont icon-geren"></i>
      </span>
      <span class="text">个人</span>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      goTo(path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @rem:750/10rem;
  .footer {
    z-index: 100;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 98/@rem;
    background: #fafafa;
    .tab {
      display: flex;
      flex-direction: column;
      width: 20%;
      text-align: center;
      &.on {
        color: #b4282d;
      }
      .icon_img {
        font-size: 40/@rem;
        padding: 10/@rem;
        .iconfont {
          font-size: 40/@rem;
        }
      }
      .text {
        font-size: 24/@rem;
      }
    }
  }
</style>
