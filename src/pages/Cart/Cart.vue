<template>
  <div class="cart">
    <header class="header">
      <div class="title">
        购物车
      </div>
      <div class="good">
        领劵
      </div>
    </header>
    <div class="discount">
      <span>30天无忧退货</span>
      <span>48小时快速退款</span>
      <span>满88元免邮费</span>
    </div>
    <div class="content">
      <div class="icon">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" alt="">
      </div>
      <div class="word">
        去添加点什么吧
      </div>
    </div>
    <div class="btn" @click="$router.replace('/personal')">
      登录
    </div>
    <Footer/>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="less" rel="stylesheet/less">
  @rem:750/10rem;
  .cart {
    width: 100%;
    height: 100%;
    background: #f4f4f4;
    position: relative;
    .header {
      height: 88/@rem;
      width: 100%;
      background: #fff;
      position: fixed;
      .title {
        font-size: 38/@rem;
        line-height: 88/@rem;
        text-align: center;
      }
      .good {
        position: absolute;
        font-size: 30/@rem;
        color: #B4282D;
        top: 30/@rem;
        right: 50/@rem;
      }
    }
    .discount {
      box-sizing: border-box;
      padding: 108/@rem 30/@rem 400/@rem;
      width: 100%;
      display: flex;
      font-size: 24/@rem;
      justify-content: space-between
    }
    .content {
      text-align: center;
      .icon {
        text-align: center;
        img {
          width: 248/@rem;
          height: 248/@rem;
          vertical-align: middle;
        }
      }
      .word {
        font-size: 24/@rem;
        color: #a1a1a1;
      }
    }
    .btn {
      width: 480/@rem;
      height: 92/@rem;
      line-height: 92/@rem;
      text-align: center;
      border: #b4282d;
      background-color: #b4282d;
      border-radius: .04rem;
      color: white;
      font-size: 30/@rem;
      margin: 50/@rem auto;

    }
  }
</style>
