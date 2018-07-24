<template>
  <section class="konwlegde">
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
        <a class="icon_cart" href="javascript:;" @click="$router.replace('/home/cart')">
          <i class="iconfont icon-cart"></i>
        </a>
      </div>
      <div class="to_home">
        <a href="javascript:;">
          <span>网易严选</span>
        </a>
      </div>
    </header>
    <!--轮播-->
    <!--滑動距離太小，改變滑動距離-->
    <div class="lunbo">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(banner, index) in banners" :key="index">
            <img :src="banner.picUrl">
            <div class="detail">
              <p class="title">— {{banner.subTitle}} —</p>
              <p class="must">{{banner.title}}</p>
              <p class="classic">{{banner.desc}}</p>
            </div>
          </div>
         <!-- <div class="swiper-slide">
            <img src="http://yanxuan.nosdn.127.net/4c5bacd7db1c4777e1a6651240899077.jpg?imageView&quality=75">
            <div class="detail">
              <p class="title">— 严选推荐 —</p>
              <p class="must">海边度假必看攻略</p>
              <p class="classic">泳衣 草帽 墨镜 最低7折起</p>
            </div>
          </div>-->
          <!--<div class="swiper-slide">
            <img src="http://yanxuan.nosdn.127.net/64b862a9d0306b2b6a6a90ea9dc2a6db.jpg?imageView&quality=75">
            <div class="detail">
              <p class="title">— 严选推荐 —</p>
              <p class="must">午睡必备十大神器</p>
              <p class="classic">用午睡按下生活暂停键</p>
            </div>
          </div>
          <div class="swiper-slide">
            <img src="http://yanxuan.nosdn.127.net/f9a9d60857ceebaa9d57e457b9929b54.jpg?imageView&quality=75">
            <div class="detail">
              <p class="title">— 严选推荐 —</p>
              <p class="must">真丝四件套即将提价</p>
              <p class="classic">旧款真丝好物最低5折起</p>
            </div>
          </div>-->
        </div>
      </div>
    </div>
    <!--文章 article-->
    <div class="recommend">
      <div class="wrap">
        <div class="recommend_article" v-for="(column, index) in columns" :key="index">
          <div class="bg_img">
            <div class="img">
              <img :src="column.picUrl">
            </div>
            <div class="article">
              {{column.articleCount}}&nbsp;
            </div>
          </div>
          <div class="from">
            {{column.title}}
          </div>
        </div>
      </div>
    </div>
    <Split/>
    <!--为你推荐-->
    <div class="for_you">
      <div class="fy_title">
        <span>为你推荐</span>
      </div>
      <div class="recommend_content">
        <div class="recommend_list">
          <div class="yanxuan_rec">
            <div class="rec_img">
              <div class="bg_img">
                <img v-if="recommend.recommendBanner" :src="recommend.recommendBanner.picUrl">
              </div>
              <div class="title" v-if="recommend.recommendBanner">{{recommend.recommendBanner.nickname}}</div>
            </div>
            <div class="detail">
              <div class="describe">
                <span class="des" v-if="recommend.recommendBanner">{{recommend.recommendBanner.title}}</span>
                <span class="price">
                  <span v-if="recommend.recommendBanner">{{recommend.recommendBanner.priceInfo}}</span><span>元起</span>
                </span>
              </div>
              <div class="details">
                <span v-if="recommend.recommendBanner">{{recommend.recommendBanner.subtitle}}</span>
              </div>
            </div>
          </div>
          <div class="good_goods" v-for="(rec, index) in recommend.recommends" :key="index">
            <div class="text">
              <span class="username">
                <span class="img">
                  <img :src="rec.avatar">
                </span>
                <span class="name">{{rec.nickname}}</span>
              </span>
              <span class="describe">{{rec.title}}</span>
              <span class="detail">{{rec.subtitle}}</span>
            </div>
            <div class="bg_img">
              <div class="img">
                <img :src="rec.picUrl">
              </div>
              <div class="dinglei_recommend">{{rec.typeName}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Split/>
    <!--十点一刻-->
    <div class="every_topic">
      <div class="topic_title">
        <span>十点一刻</span>
      </div>
      <div class="today">
        <div class="wrap">
          <div class="content" v-for="(ten, index) in tenfifteen" :key="index">
            <div class="detail">
              <p class="title">— 今日话题 —</p>
              <p class="about">{{ten.title}}</p>
              <p class="talk">{{ten.desc}}</p>
            </div>
            <div class="users">
              <div class="icon">
                <img :src="ten.participantAvatar[index]" v-if="ten.participantAvatar.length" v-for="(pic, index) in ten.participantAvatar" :key="index">
              </div>
              <div class="point">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div class="people">
                <span>{{ten.participantNum}}</span>
                <span>人参与话题</span>
              </div>
            </div>
          </div>
          <div class="see">
            <div class="see_more">查看全部话题<i class="iconfont icon-right_b"></i></div>
          </div>
        </div>
      </div>
    </div>
    <Split/>
    <!--严选甄品-->
    <div class="zhenpin">
      <div class="fy_title">
        <span>严选甄品</span>
      </div>
      <div class="recommend_content">
        <div class="recommend_list">
          <div class="yanxuan_rec">
            <div class="rec_img">
              <div class="bg_img">
                <img v-if="zhenpin.zhenOne" :src="zhenpin.zhenOne.picUrl">
              </div>
              <div class="title" v-if="zhenpin.zhenOne">{{zhenpin.zhenOne.nickname}}</div>
            </div>
            <div class="detail">
              <div class="describe">
                <span class="des" v-if="zhenpin.zhenOne">{{zhenpin.zhenOne.title}}</span>
                <span class="price">
                  <span v-if="zhenpin.zhenOne">{{zhenpin.zhenOne.priceInfo}}</span><span>元起</span>
                </span>
              </div>
              <div class="details">
                <span v-if="zhenpin.zhenOne">{{zhenpin.zhenOne.subtitle}}</span>
              </div>
            </div>
          </div>
          <div class="good_goods" v-for="(zhen, index) in zhenpin.zhenpins" :key="index">
            <div class="text">
              <span class="describe">{{zhen.title}}</span>
              <span class="detail">{{zhen.subtitle}}</span>
            </div>
            <div class="bg_img">
              <div class="img">
                <img :src="zhen.picUrl">
              </div>
              <div class="dinglei_recommend">{{zhen.typeName}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Split/>
    <!--严选LOOK-->
    <div class="select_look">
      <div class="look_title">
        <span>严选LOOK</span>
      </div>
      <div class="video">
        <img class="jpg" :src="yxLook.picUrl"/>
        <div class="yanxuans">
          <p class="xuanmei">
            <span class="header_img">
              <img :src="yxLook.avatar">
            </span>
            <span class="name">{{yxLook.nickname}}</span>
          </p>
          <p class="text">{{yxLook.content}}</p>
        </div>
      </div>
    </div>
    <!--更多精彩-->
    <div class="more_wondful">
      <div class="title">
        <div class="line"></div>
        <div class="text">更多精彩</div>
        <div class="line"></div>
      </div>
      <div class="goods" v-for="(find, index) in findMore" :key="index">
        <div class="goods_list_one" v-show="find.picList.length === 0">
          <div class="one_goods">
            <div class="img">
              <img :src="find.itemPicUrl">
            </div>
            <div class="descibe">
            <span>
              {{find.subtitle}}
            </span>
            </div>
          </div>
          <div class="split"></div>
        </div>
        <div class="goods_list_three" v-show="find.picList.length">
          <div class="three_goods">
            <div class="img">
              <div class="left_img">
                <img :src="find.itemPicUrl">
              </div>
              <div class="right_img">
                <img class="top_img" :src="find.picList[0]">
                <img :src="find.picList[1]">
              </div>
            </div>
            <div class="descibe">
            <span>
              {{find.title}}
            </span>
            </div>
          </div>
          <div class="split"></div>
        </div>
      </div>
    </div>
    <Footer/>
  </section>

</template>

<script>
  import Swiper from "swiper"
  import "swiper/dist/css/swiper.min.css"
  import BScroll from "better-scroll"
  import {mapState, mapActions} from "vuex"
  export default {
/*    data () {
      return {
        isShow: true
      }
    },*/

    computed: {
      ...mapState(["banners", "columns", "findMore", "recommend", "tenfifteen", "yxLook", "zhenpin"])
    },
    methods:{
      ...mapActions(["getBanner", "getColumn", "getFindMore", "getRecommend", "getTenfifteen", "getYxLook", "getZhenpin"])
    },
    mounted () {
      this.getBanner();
      this.getColumn();
      this.getFindMore();
      this.getRecommend();
      this.getTenfifteen();
      this.getYxLook();
      this.getZhenpin();



      new BScroll(".recommend", {
        scrollX: true
      });
      new BScroll(".today", {
        scrollX: true
      })
    },

    watch: {
      banners (val) {
        this.$nextTick(function () {
          new Swiper ('.swiper-container', {
            slidesPerView: 'auto',
            centeredSlides: true,
            loop: true,
          });
        })
      },
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @rem: 750/10rem;
  .konwlegde {
    padding-bottom: 98/@rem;
    width: 100%;
    .header {
      position: fixed;
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
    .lunbo {
      padding-top: 88/@rem;
      .swiper-container {
        .swiper-wrapper {
          .swiper-slide {
            width: 90%;
            padding: 20/@rem 10/@rem;
            position: relative;
            img {
              width: 100%;
            }
            .detail {
              width: 466/@rem;
              height: 198/@rem;
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              margin: auto;
              background-color: rgba(255,255,255,.9);
              text-align: center;
              color: #333;
              .title {
                font-size: 22/@rem;
                color: #7f7f7f;
                margin: 35/@rem;
              }
              .must {
                font-size: 32/@rem;
                font-weight: 600;
                margin-bottom:20/@rem;
              }
              .classic {
                font-size: 24/@rem;
                color: #333;
              }
            }
          }
        }
      }
    }
    .recommend {
      overflow: hidden;
      margin: 35/@rem 0;
      .wrap {
        width: 205%;
        .recommend_article {
          display: inline-block;
          width: 164/@rem;
          height: 210/@rem;
          margin-left: 26/@rem;
          .bg_img {
            width: 164/@rem;
            height: 164/@rem;
            position: relative;
            .img {
              img {
                width: 100%;
                height: 100%;
              }
            }
            .article {
              position: absolute;
              top: 0;
              right: 0;
              font-size: 24/@rem;
              text-align: right;
              line-height: 36/@rem;
              color: #fff;
            }
          }
          .from {
            font-size: 26/@rem;
            text-align: center;
            margin-top: 20/@rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
    .for_you {
      padding: 0 30/@rem;
      .fy_title {
        height: 120/@rem;
        line-height: 110/@rem;
        text-align: center;
        font-size: 36/@rem;
      }
      .recommend_content {
        .recommend_list {
          .yanxuan_rec {
            .rec_img {
              width: 100%;
              height: 386/@rem;
              position: relative;
              .bg_img {
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .title {
                position: absolute;
                top: 20/@rem;
                left: 20/@rem;
                width: 130/@rem;
                height: 36/@rem;
                background: #fff;
                font-size: 24/@rem;
                line-height: 36/@rem;
                text-align: center;
                border-radius: 18/@rem;
              }
            }
            .detail {
              padding: 20/@rem 20/@rem 60/@rem;
              border: 1/@rem solid #f1f1f1;
              border-top: none;
              margin-bottom: 30/@rem;
              .describe {
                font-size: 32/@rem;
                padding: 10/@rem 0 30/@rem;
                .des {
                  color: #333333;
                }
                .price {
                  float: right;
                }
              }
              .details {
                font-size: 28/@rem;
                color: #7f7f7f;
              }
            }
          }
          .good_goods {
            border: 1/@rem solid #f1f1f1;
            margin-bottom: 30/@rem;
            .text {
              display: inline-block;
              width: 408/@rem;
              height: 272/@rem;
              box-sizing: border-box;
              padding: 0 20/@rem;
              .username {
                display: block;
                margin-top: 30/@rem;
                .img {
                  img {
                    width: 46/@rem;
                    height: 46/@rem;
                    border-radius: 50%;
                    vertical-align: middle;
                  }
                }
                .name {
                  font-size: 24/@rem;
                  vertical-align: middle;
                }
              }
              .describe {
                font-size: 32/@rem;
                margin: 30/@rem 0;
              }
              .detail {
                font-size: 24/@rem;
                color: #7f7f7f;
              }
              .describe,.detail {
                display: block;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
            }
            .bg_img {
              display: inline-block;
              float: right;
              width: 280/@rem;
              height: 272/@rem;
              overflow: hidden;
              position: relative;
              .img {
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .dinglei_recommend {
                position: absolute;
                top: 10/@rem;
                left: 10/@rem;
                font-size: 24/@rem;
                width: 202/@rem;
                height: 36/@rem;
                line-height: 36/@rem;
                text-align: center;
                border-radius: 18/@rem;
                background: #fff;
              }
            }
          }
        }
      }
    }
    .every_topic {
      .topic_title {
        height: 120/@rem;
        line-height: 110/@rem;
        text-align: center;
        font-size: 36/@rem;
      }
      .today {
        overflow: hidden;
        .wrap {
          width: 330%;
          .content {
            width: 580/@rem;
            height: 411/@rem;
            background-image: url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png");
            background-size: 100% 100%;
            margin-left: 30/@rem;
            overflow: hidden;
            display: inline-block;
            .detail {
              text-align: center;
              color: #333;
              .title {
                font-size: 22/@rem;
                color: #7f7f7f;
                margin: 40/@rem;
              }
              .about {
                font-size: 36/@rem;
                font-weight: 700;
                margin-bottom:25/@rem;
              }
              .talk {
                font-size: 30/@rem;
                color: #333;
              }
            }
            .users {
              display: flex;
              margin: 80/@rem 0 0 100/@rem;
              .icon {
                font-size: 0;
                img{
                  width: 48/@rem;
                  height: 48/@rem;
                  border-radius: 50%;
                }
              }
              .point {
                width: 48/@rem;
                height: 48/@rem;
                border-radius: 50%;
                background: #7f7f7f;
                display: flex;
                div {
                  margin: auto;
                  width: 6/@rem;
                  height: 6/@rem;
                  border-radius: 50%;
                  background: #fff;
                }
              }
              .people {
                margin-left: 10/@rem;
                font-size: 26/@rem;
                color: #7f7f7f;
                line-height: 48/@rem;
              }
            }
          }
          .see {
            display: inline-block;
            width: 580/@rem;
            height: 411/@rem;
            line-height: 411/@rem;
            text-align: center;
            background-image: url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png");
            background-size: 100% 100%;
            overflow: hidden;
            .see_more {
              font-size: 32/@rem;
              color: #7f7f7f;
            }
          }
        }
      }
    }
    .zhenpin {
      padding: 0 30/@rem;
      .fy_title {
        height: 120/@rem;
        line-height: 110/@rem;
        text-align: center;
        font-size: 36/@rem;
      }
      .recommend_content {
        .recommend_list {
          .yanxuan_rec {
            .rec_img {
              width: 100%;
              height: 386/@rem;
              position: relative;
              .bg_img {
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .title {
                position: absolute;
                top: 20/@rem;
                left: 20/@rem;
                width: 130/@rem;
                height: 36/@rem;
                background: #fff;
                font-size: 24/@rem;
                line-height: 36/@rem;
                text-align: center;
                border-radius: 18/@rem;
              }
            }
            .detail {
              padding: 20/@rem 20/@rem 60/@rem;
              border: 1/@rem solid #f1f1f1;
              border-top: none;
              margin-bottom: 30/@rem;
              .describe {
                font-size: 32/@rem;
                padding: 10/@rem 0 30/@rem;
                .des {
                  color: #333333;
                }
                .price {
                  float: right;
                }
              }
              .details {
                font-size: 28/@rem;
                color: #7f7f7f;
              }
            }
          }
          .good_goods {
            border: 1/@rem solid #f1f1f1;
            margin-bottom: 30/@rem;
            .text {
              display: inline-block;
              width: 408/@rem;
              height: 272/@rem;
              box-sizing: border-box;
              padding: 0 20/@rem;
              .describe {
                padding-top: 50/@rem;
                font-size: 32/@rem;
                margin: 30/@rem 0;
              }
              .detail {
                font-size: 24/@rem;
                color: #7f7f7f;
              }
              .describe,.detail {
                display: block;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
            }
            .bg_img {
              display: inline-block;
              float: right;
              width: 280/@rem;
              height: 272/@rem;
              overflow: hidden;
              position: relative;
              .img {
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .dinglei_recommend {
                position: absolute;
                top: 10/@rem;
                left: 10/@rem;
                font-size: 24/@rem;
                width: 202/@rem;
                height: 36/@rem;
                line-height: 36/@rem;
                text-align: center;
                border-radius: 18/@rem;
                background: #fff;
              }
            }
          }
        }
      }
    }
    .select_look {
      .look_title {
        height: 120/@rem;
        line-height: 110/@rem;
        text-align: center;
        font-size: 36/@rem;
      }
      .video {
        width: 100%;
        .jpg {
          width: 100%;
          vertical-align: middle;
        }
        .yanxuans {
          margin-left: 30/@rem;
          background: #fff;
          .xuanmei {
            margin: 0 0 30/@rem;
            .header_img {
              img {
                width: 46/@rem;
                border-radius: 50%;
                vertical-align: middle;
              }
            }
            .name {
              font-size: 24/@rem;
              vertical-align: middle;
            }
          }
          .text {
            font-size: 28/@rem;
            color: #7f7f7f;
            line-height: 34/@rem;
            padding-bottom: 50/@rem;
          }
        }
      }
    }
    .more_wondful {
      width: 100%;
      background: #f4f4f4;
      box-sizing: border-box;
      padding: 0 30/@rem;
      z-index: -1;
      .title {
        height: 140/@rem;
        line-height: 140/@rem;
        text-align: center;
        .line {
          display: inline-block;
          width: 30%;
          height: 2/@rem;
          background: #d9d9d9;
          vertical-align: middle;
        }
        .text {
          display: inline-block;
          font-size: 34/@rem;
          vertical-align: middle;
        }
      }
      .goods {
        .goods_list_one {
          .one_goods {
            height: 498/@rem;
            box-sizing: border-box;
            padding: 25/@rem;
            background: #fff;
            .img {
              img {
                width: 100%;
              }
            }
            .descibe {
              span {
                margin-top: 30/@rem;
                display: block;
                font-size: 28/@rem;
              }
            }
          }
          .split {
            height: 30/@rem;
          }
        }
        .goods_list_three {
          .three_goods {
            width: 100%;
            height: 498/@rem;
            box-sizing: border-box;
            padding: 25/@rem;
            background: #fff;
            .img {
              display: flex;
              flex-direction: row;
              .left_img {
                width: 460/@rem;
                height: 360/@rem;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .right_img {
                display: flex;
                flex-direction: column;
                margin-left: 4/@rem;
                .top_img {
                  margin-bottom: 4/@rem;
                }
                img {
                  width: 178/@rem;
                  height: 178/@rem;
                }
              }
            }
            .descibe {
              span {
                margin-top: 30/@rem;
                display: block;
                font-size: 28/@rem;
              }
            }
          }
          .split {
            height: 30/@rem;
          }
        }
      }
    }
  }
</style>
