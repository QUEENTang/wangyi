<template>
  <div class="wrap">
    <section class="livehome" v-if="index ===Index " v-for="(head, index) in headCates" :key="index"><!-- v-if="index ===Index " v-for="(headCate, index) in headCates" :key="index"-->
      <div class="title_img">
        <img :src="head.bannerUrl">
      </div>
      <split/>
      <div class="goods">
        <div class="thing_title">
          <p class="title">夏凉</p>
          <p class="detail">夏凉床品，舒适一夏</p>
        </div>
        <div class="thing_list">
          <div class="thing" >
            <div class="img_text">
              <img src="http://yanxuan.nosdn.127.net/ca08ce64a38254146778f38f0be06f1b.jpg?imageView&quality=65&thumbnail=330x330">
              <div class="detail">
                透气吸汗麻+亲肤柔软棉
              </div>
            </div>
            <div class="title">
              自然棉麻四件套
            </div>
            <div class="price">
              ￥<span>599</span>
            </div>
          </div>
        </div>
        <Split/>
      </div>
    </section>
  </div>
</template>

<script>
  import PubSub from "pubsub-js"
  import {mapState, mapActions} from 'vuex'
  export default {
    data () {
      return {
        Index: 0
      }
    },
    computed:{
      ...mapState(['headCates'])
    },
    methods:{
      ...mapActions(["getHeadCateList"])
    },

    mounted () {
      this.getHeadCateList();

      PubSub.subscribe("showpages", (msg, data) => {

        this.Index=data

      })
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @rem: 750/10rem;
  .wrap {
    width: 100%;
    padding: 147/@rem 0 98/@rem;
    .livehome {
      .title_img {
        img {
          width: 100%;
          height: 420/@rem;
          vertical-align: middle;
        }
      }
      .goods {
        .thing_title {
          height: 120/@rem;
          text-align: center;
          .title {
            padding: 30/@rem 0 15/@rem;
            font-size: 32/@rem;
          }
          .detail {

            font-size: 24/@rem;
            color: #999999;
          }
        }
        .thing_list {
          .thing {
            padding-left: 20/@rem;
            display: inline-block;
            width: 345/@rem;
            height: 537/@rem;
            font-size: 30/@rem;
            .img_text {
              border-radius: 10/@rem;
              img {
                width: 345/@rem;
                height: 345/@rem;
                vertical-align: top;
              }
              .detail {
                height: 68/@rem;
                font-size: 26/@rem;
                background: #F1ECE2;
                color: #9F8A60;
                padding-left: 10/@rem;
                line-height: 60/@rem;
              }
            }
            .title {
              padding-left: 10/@rem;
              margin: 20/@rem 0;
            }
            .price {
              color: #b4282d;
              padding-left: 10/@rem;
            }
          }
        }
      }
    }
  }

</style>
