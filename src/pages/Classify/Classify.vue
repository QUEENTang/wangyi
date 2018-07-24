<template>
  <section class="classify">
    <header class="header">
      <div class="search">
        <div class="content"><i class="iconfont icon-fenxiang"></i>搜索商品，共10856款好物</div>
      </div>
    </header>
    <div class="middle">
      <div class="left_classic">
        <div class="wrap">
          <div class="classic">
            <ul class="type">
              <li class="title" v-for="(cate, index) in category" :key="index"
                  :class="{active: activeIndex === index}" @click="isShow(index)">{{cate.name}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="right_goods" v-for="(goods, index) in category" :key="index" v-show="goodsIndex === index">
        <div class="wrap">
          <div class="goods">
            <div class="top_img">
              <img :src="goods.bannerUrl">
            </div>
            <div class="goods_list">
              <div class="title">
                <span>—</span>
                <span>{{goods.name}}分类</span>
                <span>—</span>
              </div>
              <ul class="goods_show">
                <li class="only" v-for="(list, index) in category[index].subCateList" :key="index">
                  <div class="img">
                    <img :src="list.wapBannerUrl">
                  </div>
                  <div class="detail">
                    {{list.name}}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </section>
</template>

<script>
  import BScroll from "better-scroll"
  import {mapState, mapActions} from "vuex"
  export default {
    data () {
      return {
        activeIndex: 0, // 自己定义的变量
        goodsIndex: 0
      }
    },
    computed: {
      ...mapState(['category'])
    },

    methods: {
      ...mapActions(["getCategory"]),

      isShow (index) {
        this.activeIndex = index;
        this.goodsIndex = index;
      }
    },
    mounted () {
      this.getCategory();

      new BScroll(".left_classic", {
        scrollY: true
      });

     /* this.$store.dispatch(function () {
        this.$nextTick(() => {

        })
      });*/
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @rem: 750/10rem;
  .classify {
    width: 100%;
    padding-bottom: 98/@rem;
    .header {
      position: fixed;
      width: 100%;
      height: 88/@rem;
      box-sizing: border-box;
      padding: 15/@rem 30/@rem;
      background: #fff;
      border-bottom: 1/@rem solid #d9d9d9;
      z-index: 100;
      .search {
        height: 56/@rem;
        line-height: 56/@rem;
        background: #ededed;
        border-radius: 10/@rem;
        color: #666;
        text-align: center;
        font-size: 0;
        .content {
          display: inline-block;
          font-size: 28/@rem;
          vertical-align: middle;
          .iconfont {
            vertical-align: middle;
            margin-right: 10/@rem;
          }
        }
      }
    }
    .middle {
      width: 100%;
      height: 1150/@rem;
      overflow: hidden;
      padding-top: 88/@rem;
      display: flex;
      .left_classic {
        width: 23%;
        border-right: 1/@rem solid #d9d9d9;
        .wrap {
          overflow: hidden;
          .classic {
            height: 150%;
            .type {
              text-align: center;
              .title {
                line-height: 49/@rem;
                height: 49/@rem;
                font-size: 28/@rem;
                margin: 30/@rem 0 60/@rem;
                &.active {
                  border-left: 6/@rem solid #b4282d;
                  color: #b4282d;
                  font-size: 36/@rem;
                }
              }
            }
          }
        }
      }
      .right_goods {
        width: 77%;
        box-sizing: border-box;
        margin: 30/@rem;
        height: 1150/@rem;
        .wrap {
          overflow: hidden;
          .goods {
            height: 200%;
            .top_img {
              img {
                width: 528/@rem;
                height: 192/@rem;
                vertical-align: middle;
              }
            }
            .goods_list {
              .title {
                width: 100%;
                height: 108/@rem;
                font-size: 26/@rem;
                text-align: center;
                line-height: 108/@rem;
              }
              .goods_show {
                .only {
                  vertical-align: top;
                  height: 216/@rem;
                  width: 144/@rem;
                  margin: 0 15/@rem;
                  display: inline-block;
                  .img {
                    width: 144/@rem;
                    height: 144/@rem;
                    img {
                      width: 100%;
                      height: 100%;
                    }
                  }
                  .detail {
                    text-align: center;
                    font-size: 24/@rem;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
