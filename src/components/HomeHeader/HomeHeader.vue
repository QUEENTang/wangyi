<template>
  <div>
    <header class="header">
      <div class="header_search">
        <span class="header_title">网易严选</span>
        <div class="search_goods">
          <i class="iconfont icon-fenxiang"></i>
          <span class="text">搜索商品，共10719款好物</span>
        </div>
      </div>
      <nav class="header_nav">
        <div class="list" v-if="headCates">
          <span class="list_text" :class="{ active: '/home/recommend' === $route.path}" @click="goTo('/home/recommend')">推荐</span>
          <span class="list_text" :class="{ active: index === activeIndex}" @click="showpages({path:'/home/livehome',index})"
                v-for="(headCate, index) in headCates" :key="index" v-if="headCate">{{headCate.name}}</span>
          <!---->
        </div>
      </nav>
    </header>
    <Footer/>
  </div>
</template>

<script>
  import BScroll from "better-scroll"
  import {mapState, mapActions} from "vuex"
  import PubSub from "pubsub-js"
  export default {
    data () {
      return {
        activeIndex: -1
      }
    },

    computed:{
      ...mapState(["headCates"])
    },

    methods: {
      ...mapActions(["getHeadCateList"]),

      goTo (path) {
        this.$router.replace(path);
        this.activeIndex = -1
      },

      showpages ({path, index}) {

        this.$router.push(path)
        this.activeIndex=index;
        PubSub.publish("showpages", index)
      }
    },
    mounted () {
      this.getHeadCateList();

      new BScroll (".header_nav", {
        scrollX: true
      })
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @rem:750/10rem;
  .header {
    z-index: 100;
    position: fixed;
    width: 100%;
    height: 147/@rem;
    border-bottom: 1/@rem solid #dedede;
    background: #fff;
    .header_search {
      height: 88/@rem;
      line-height: 88/@rem;
      text-align: center;
      font-size: 36/@rem;
      .header_title {
        display: inline-block;
        font-family: 华文楷体;
        font-weight: 600;
        margin-right: 15/@rem;
      }
      .search_goods {
        display: inline-block;
        width: 532/@rem;
        height: 56/@rem;
        line-height: 56/@rem;
        background: #ededed;
        border-radius: 8/@rem;
        text-align: center;
        .iconfont {
          color: #666666;
        }
        .text {
          color: #666666;
          font-size: 30/@rem;
          font-weight: 300;
          display: inline-block;
        }
      }
    }
    .header_nav {
      height: 60/@rem;
      line-height: 56/@rem;
      font-size: 28/@rem;
      overflow: hidden;
      .list {
        width: 195%;
        .list_text {
          display: inline-block;
          padding: 0 10/@rem;
          margin: 0 25/@rem;
          &.active {
            border-bottom: 4/@rem solid #b4282d;
            color: #b4282d;
          }
          &:first-child {
            margin-left: 40/@rem;
          }
        }
      }
    }
  }
</style>
