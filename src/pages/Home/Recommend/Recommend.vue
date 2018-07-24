<template>
  <section class="recommend">
    <!--轮播-->
    <div class="lunbo">
      <!--轮播-->
      <div class="lunbo_img">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(c, index) in focusLists" :key="index">
              <img :src="c.picUrl">
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <!--文字-->
      <div class="lunbo_text">
        <span class="text_all">
          <i class="iconfont icon-right"></i>
          <span>网易自营品牌</span>
        </span>
        <span class="text_all">
          <i class="iconfont icon-right"></i>
          <span>30天无忧退货</span>
        </span>
        <span class="text_all">
          <i class="iconfont icon-right"></i>
          <span>48小时快速退款</span>
        </span>
      </div>
    </div>
    <Split/>
    <!--品牌制造商直供-->
    <div class="brand">
      <div class="brand_title">
        <span>品牌制造商直供</span>
        <i class="iconfont icon-right_b"></i>
      </div>
      <div class="brand_goods">
        <div class="goods_all" v-for="(tagList, index) in tagLists" :key="index" v-if="index<4">
          <div class="goods_detail">
            <span class="name">{{tagList.name}}</span>
            <span class="price">
                    <span>{{tagList.floorPrice}}</span>
                    <span>元起</span>
                  </span>
          </div>
          <img :src="tagList.picUrl">
        </div>
      </div>
    </div>
    <Split/>
    <!--新品首发-->
    <div class="new_goods">
      <!--新品首发-->
      <div class="new_title">
        <span>新品首发</span>
        <div class="see_a">
          查看全部
          <i class="iconfont icon-right1"></i>
        </div>
      </div>
      <!--商品-->
      <div class="new_goods_list">
        <div class="new_list">
                <span class="list_goods" v-for="(newItem,index) in newItemLists" :key="index">
                  <span class="goods_img">
                    <img :src="newItem.listPicUrl">
                  </span>
                  <span class="goods_brief">
                    <span class="name">{{newItem.name}}</span>
                    <span class="effect">{{newItem.simpleDesc}}</span>
                    <span class="price">￥{{newItem.retailPrice}}</span>
                  </span>
                </span>
        </div>
      </div>
    </div>
    <Split/>
    <!--人气推荐-->
    <div class="hot_goods">
      <!--人气推荐-->
      <div class="hot_title">
        <span>人气推荐 · 好物精选</span>
        <div class="see_a">
          查看全部
          <i class="iconfont icon-right1"></i>
        </div>
      </div>
      <!--商品-->
      <div class="hot_goods_list">
        <div class="hot_list">
                <span class="list_goods" v-for="(popular,index) in popularItemLists" :key="index">
                  <span class="goods_img">
                    <img :src="popular.listPicUrl">
                  </span>
                  <span class="goods_brief">
                    <span class="name">{{popular.name}}</span>
                    <span class="effect">{{popular.simpleDesc}}</span>
                    <span class="price">￥{{popular.retailPrice}}</span>
                  </span>
                </span>
        </div>
      </div>
    </div>
    <Split/>



    <!--严选限时购-->
    <!--时间没弄-->

    <div class="choose">
      <div class="choose_time">
        <div class="title">严选限时购</div>
        <div class="time">
          <span class="time_show">02</span><a>:</a><span class="time_show">35</span><a>:</a><span class="time_show">xx</span>
        </div>
        <div class="next">下一场 22:00 开始</div>
        <!--{{flashSaleIndexVO.nextStartTime}}-->
      </div>
      <div class="choose_img">
        <div class="img">
          <img :src="flashSaleIndexVO.primaryPicUrl">
        </div>
        <div class="price">
                <span class="cheap">
                  <span>￥</span><span>{{flashSaleIndexVO.activityPrice}}</span>
                </span>
          <span class="expensive">
                  <span>￥</span><span>{{flashSaleIndexVO.originPrice}}</span>
                </span>
        </div>
      </div>
    </div>
    <Split/>
    <!--福利社-->
    <div class="good"></div>
    <Split/>
    <!--专题选购-->
    <div class="select">
      <div class="select_title">
        <span>专题选购</span>
        <i class="iconfont icon-right_b"></i>
      </div>
      <div class="select_goods">
        <div class="wrap">
          <div class="select_goods_img" v-for="(topic,index) in topicLists" :key="index" v-if="index<2">
            <img :src="topic.itemPicUrl">
            <div class="goods_detail">
              <span class="title">{{topic.title}}</span>
              <span class="red">
                      <span>{{topic.priceInfo}}</span><span>元起</span>
                    </span>
            </div>
            <div class="detail"><span>{{topic.subtitle}}</span></div>
          </div>
        </div>
      </div>
    </div>
    <Split/>
    <!--居家好物-->
    <!--遍历使用-->
    <div class="good_thing" v-for="(cate, index) in cateLists" :key="index">
      <div class="thing_title">
        <span>{{cate.name}}</span>
      </div>
      <div class="thing_list">
        <div class="thing" v-for="(item, index) in cate.itemList" :key="index">
          <div class="img_text">
            <img :src="item.listPicUrl">
            <div class="detail">
              {{item.simpleDesc}}
            </div>
          </div>
          <div class="title">
            {{item.name}}
          </div>
          <div class="price">
            ￥<span>{{item.retailPrice}}</span>
          </div>
        </div>
      </div>
      <Split/>
    </div>
    <!--footer-->
    <footer class="footer">
      <div class="footer_text">
        <div class="chooce">
          <a>下载App</a>
          <a>电脑版</a>
        </div>
        <p class="detail">
          <span>网易公司版权所有 © 1997-</span>
          <span>2018</span>
        </p>
        <p class="detail">食品经营许可证：JY13301080111719</p>
      </div>
    </footer>
  </section>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  import BScroll from "better-scroll"

  import {mapState, mapActions} from "vuex"
  export default {
    computed: {
      ...mapState(['focusLists','tagLists','newItemLists', 'popularItemLists','flashSaleIndexVO','topicLists','cateLists'])
    },

    methods: {
      ...mapActions(['getFocusList','getTagList','getNewItemList','getPopularItemList','getFlashSaleIndexVO','getTopicList','getCateList'])
    },

    mounted () {
      this.getFocusList();
      this.getTagList();
      this.getNewItemList();
      this.getPopularItemList();
//    this.getPopularItemList()  ===  this.$store.dispatch('getFlashSaleIndexVO')
      this.getFlashSaleIndexVO();
      this.getTopicList();
      this.getCateList();

      this.$nextTick(() => {
        new BScroll(".new_goods_list", {
          scrollX: true
        });
        new BScroll(".hot_goods_list", {
          scrollX: true
        });
        new BScroll(".select_goods", {
          scrollX: true
        })
      });
    },

    watch: {
      focusLists (val) {
        this.$nextTick(function () {
          new Swiper('.swiper-container', {
            loop: true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          });
        })
      },
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @rem: 750/10rem;
  .recommend {
    width: 100%;
    padding: 147/@rem 0 98/@rem;
    .lunbo {
      .lunbo_img {
        img{
          width: 100%;
          vertical-align: top;
        }
      }
      .lunbo_text {
        align-items: center;
        font-size: 24/@rem;
        height: 72/@rem;
        line-height: 72/@rem;
        .text_all {
          display: inline-block;
          margin-left: 35/@rem;
          .iconfont {
            font-size: 24/@rem;
            color: #b4282d;
          }
          span {
            margin-right: 10/@rem;
          }
        }
      }
    }
    .brand {
      .brand_title {
        height: 110/@rem;
        line-height: 110/@rem;
        text-align: center;
        font-size: 36/@rem;
        .iconfont {
          font-size: 38/@rem;
          color: #666666;
        }
      }
      .brand_goods {
        padding: 0 15/@rem;
        .goods_all {
          display: inline-block;
          vertical-align: middle;
          background: #efefef;
          width: 355/@rem;
          height: 236/@rem;
          margin-bottom: 10/@rem;
          position: relative;
          .goods_detail {
            position: absolute;
            top: 20/@rem;
            left: 20/@rem;
            .name {
              display: block;
              font-size: 28/@rem;
              margin-bottom: 10/@rem;
            }
            .price {
              display: block;
              font-size: 26/@rem;
            }
          }
          &:first-child,&:nth-child(3) {
            margin-right: 5/@rem;
          }
          &:nth-child(2),&:nth-child(4) {
            margin-left: 5/@rem;
          }
          img {
            width: 355/@rem;
            height: 236/@rem;
          }
        }
      }
    }
    .new_goods {
      .new_title {
        height: 260/@rem;
        background-image: url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png");
        background-size: 100% 100%;
        text-align: center;
        &>span {
          display: inline-block;
          padding: 80/@rem 0 30/@rem;
          font-size: 36/@rem;
          color: #8BA0B6;
        }
        .see_a {
          width: 240/@rem;
          height: 56/@rem;
          color: #8BA0B6;
          margin: auto;
          line-height: 56/@rem;
          background: #D8E5F1;;
          font-size: 30/@rem;
        }
      }
      .new_goods_list {
        overflow: hidden;
        .new_list {
          height: 480/@rem;
          width: 335%;
          .list_goods {
            display: inline-block;
            width: 280/@rem;
            height: 280/@rem;
            margin: 30/@rem 0 0 30/@rem;
            background: #f4f4f4;
            .goods_img {
              img {
                width: 280/@rem;
                height: 280/@rem;
                vertical-align: middle;
              }
            }
            .goods_brief {
              margin-left: 10/@rem;
              display: block;
              width: 240/@rem;
              .name {
                font-size: 28/@rem;
                margin-top: 15/@rem;
              }
              .name,.effect {
                display: block;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-bottom: 15/@rem;
              }
              .effect{
                font-size: 24/@rem;
                color: #7f7f7f;
              }
              .price {
                display: block;
                font-size: 28/@rem;
                color: #b4282d;
              }
            }
          }
        }
      }
    }
    .hot_goods {
      .hot_title {
        height: 260/@rem;
        background-image: url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap2-d626e0b52a.png");
        background-size: 100% 100%;
        text-align: center;
        &>span {
          display: inline-block;
          padding: 80/@rem 0 30/@rem;
          font-size: 36/@rem;
          color: #B4A078;
        }
        .see_a {
          width: 240/@rem;
          height: 56/@rem;
          color: #B4A078;
          margin: auto;
          line-height: 56/@rem;
          background: #F4E9CB;
          font-size: 30/@rem;
        }
      }
      .hot_goods_list {
        overflow: hidden;
        .hot_list {
          height: 480/@rem;
          width: 335%;
          .list_goods {
            display: inline-block;
            width: 280/@rem;
            height: 280/@rem;
            margin: 30/@rem 0 0 30/@rem;
            background: #f4f4f4;
            .goods_img {
              img {
                width: 280/@rem;
                height: 280/@rem;
                vertical-align: middle;
              }
            }
            .goods_brief {
              margin-left: 10/@rem;
              display: block;
              width: 240/@rem;
              .name {
                font-size: 28/@rem;
                margin-top: 15/@rem;
              }
              .name,.effect {
                display: block;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-bottom: 15/@rem;
              }
              .effect{
                font-size: 24/@rem;
                color: #7f7f7f;
              }
              .price {
                display: block;
                font-size: 28/@rem;
                color: #b4282d;
              }
            }
          }
        }
      }
    }
    .choose {
      height: 380/@rem;
      .choose_time {
        padding: 100/@rem 0 0 60/@rem;
        display: inline-block;
        .title {
          font-size: 36/@rem;
          letter-spacing: 10/@rem;
          font-weight: 200;
          margin-bottom: 25/@rem;
        }
        .time {
          margin-bottom: 30/@rem;
          font-size: 32/@rem;
          .time_show {
            display: inline-block;
            width: 62/@rem;
            height: 56/@rem;
            line-height: 56/@rem;
            text-align: center;
            background: #444444;
            border-radius: 8/@rem;
            color: white;
          }
          a {
            font-size: 28/@rem;
            margin: 0 5/@rem;
          }
        }
        .next {
          font-size: 24/@rem;
        }
      }
      .choose_img {
        float: right;
        margin: 30/@rem 50/@rem 0 0;
        width: 320/@rem;
        height: 320/@rem;
        position: relative;
        .img {
          img {
            width: 320/@rem;
            height: 320/@rem;
          }
        }
        .price {
          font-size: 26/@rem;
          width: 96/@rem;
          height: 96/@rem;
          background:  rgba(244,143,24,.95);
          border-radius: 50%;
          position: absolute;
          right: 22/@rem;
          bottom: 40/@rem;
          .cheap {
            display: block;
            padding-top: 22/@rem;
            padding-left: 10/@rem;
          }
          .expensive {
            padding-left: 10/@rem;

          }
        }
      }
    }
    .good {
      height: 300/@rem;
      background-image: url("http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg");
      background-size: 100% 100%;
    }
    .select {
      .select_title {
        height: 110/@rem;
        line-height: 110/@rem;
        text-align: center;
        font-size: 36/@rem;
        .iconfont {
          font-size: 38/@rem;
          color: #666666;
        }
      }
      .select_goods {
        overflow: hidden;
        .wrap {
          width: 165%;
          .select_goods_img {
            width: 575/@rem;
            height: 417/@rem;
            display: inline-block;
            margin-left: 30/@rem;
            img {
              vertical-align: top;
              width: 575/@rem;
              height: 322/@rem;
            }
            .goods_detail {
              font-size: 32/@rem;
              padding: 10/@rem 0 20/@rem;
              .title {
                color: #333333;
              }
              .red {
                color: #b4282d;
                float: right;
              }
            }
            .detail {
              font-size: 28/@rem;
              color: #7f7f7f;
            }
          }
        }
      }
    }
    .good_thing {
      .thing_title {
        height: 110/@rem;
        line-height: 110/@rem;
        text-align: center;
        font-size: 36/@rem;
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
            background: #f4f4f4;
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
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          .title {
            padding-left: 10/@rem;
            margin: 20/@rem 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .price {
            color: #b4282d;
            padding-left: 10/@rem;
          }
        }
      }
    }
    .footer {
      height: 244/@rem;
      background: #414141;
      .footer_text {
        text-align: center;
        .chooce {
          text-align: center;
          padding: 30/@rem 0;
          a {
            display: inline-block;
            width: 172/@rem;
            height: 62/@rem;
            line-height: 62/@rem;
            text-align: center;
            font-size: 30/@rem;
            color: white;
            border: 1/@rem solid #999;
          }
        }
        .detail {
          padding-top: 10/@rem;
          font-size: 24/@rem;
          color: #999;
        }
      }
    }
  }

</style>
