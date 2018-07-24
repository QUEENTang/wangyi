<template>
  <div class="personal">

    <div class="login" :class="{bg_color: isShow === 0}" v-if="isShow === 0">
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
      <div class="top_icon">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
      </div>
      <div class="phone" @click="toPLogin">
        <i class="iconfont icon-shouji"></i>
        手机号码登录
      </div>
      <div class="email" @click="toELogin">
        <i class="iconfont icon-youxiang"></i>
        邮箱账号登录
      </div>
      <div class="fast_phone" @click="toPRegister">
        手机号快捷注册 <i class="iconfont icon-right1"></i>
      </div>
      <div class="login_way">
    <span>
      <i class="iconfont icon-wechat"></i>
      微信
    </span>
        <span>|</span>
        <span>
      <i class="iconfont icon-qq"></i>
      QQ
    </span>
        <span>|</span>
        <span>
      <i class="iconfont icon-weibo"></i>
      微博
    </span>
      </div>
    </div>

    <div class="login_phone" v-if="isShow === 1">
      <LoginHeader/>
      <div class="content">
        <div class="enter">
          <input type="tel" maxlength="11" placeholder="请输入手机号">
        </div>
        <div class="yzm">
          <input type="tel" placeholder="请输入短信验证码">
          <div class="getyzm" @click="sendYzm">获取验证码</div><!--{{time>0 ? `已发送(${time})s` : 获取验证码}}-->
        </div>
        <div class="qusetion">
          <a href="javascript: ;" class="left_ques">遇到问题</a>
          <a href="javascript: ;"  style="display: none" class="left_ques">忘记密码</a>
          <div class="yz left_ques">使用密码登录验证</div>
          <div class="yz left_ques" style="display: none">使用短信验证登录</div>
        </div>
        <div class="ok">
          登录
        </div>
        <div class="other" @click="toELogin">
          其他方式登录
        </div>
        <div class="register" @click="toPRegister">
          注册账号 <i class="iconfont icon-right1"></i>
        </div>
      </div>
      </div>

    <div class="email_phone"  v-if="isShow === 2">
      <LoginHeader/>
      <div class="content">
        <div class="enter">
          <input type="tel" placeholder="邮箱账号">
        </div>
        <div class="yzm">
          <input type="tel" placeholder="密码">
        </div>
        <div class="qusetion">
          <div class="yz left_ques" @click="toPRegister">注册账号</div>
          <a href="javascript: ;" class="left_ques">忘记密码</a>
        </div>
        <div class="ok">
          登录
        </div>
        <div class="other" @click="toPLogin">
          其他方式登录
        </div>
      </div>
    </div>

    <div class="phone_register"  v-if="isShow === 3">
      <LoginHeader/>
      <div class="content">
        <div class="enter">
          <input type="tel" maxlength="11" placeholder="请输入手机号">
        </div>
        <div class="yzm">
          <input type="tel" placeholder="请输入短信验证码">
          <div class="getyzm">获取验证码</div>
        </div>
        <div class="password">
          <input type="tel" placeholder="请输入密码">
        </div>
        <div class="go_register">
          注册
        </div>
        <div class="agree">
          <span class="gray">我同意</span>
          <span class="blue">《服务条款》</span>
          <span class="gray">和</span>
          <span class="blue">《网易隐私政策》</span>
        </div>
        <div class="fast_email" @click="toPRegister">
          邮箱账号注册 <i class="iconfont icon-right1"></i>
        </div>
      </div>
    </div>

    <!--<div class="email_register">
      <LoginHeader/>
      <div class="content">
        <div class="enter">
          <input type="tel" maxlength="11" placeholder="请输入手机号">
        </div>
        <div class="yzm">
          <input type="tel" placeholder="请输入短信验证码">
          <div class="getyzm">获取验证码</div>
        </div>
        <div class="password">
          <input type="tel" placeholder="请输入密码">
        </div>
        <div class="go_register">
          注册
        </div>
        <div class="agree">
          <span class="gray">我同意</span>
          <span class="blue">《服务条款》</span>
          <span class="gray">和</span>
          <span class="blue">《网易隐私政策》</span>
        </div>
        <div class="fast_email">
          邮箱账号注册 <i class="iconfont icon-right1"></i>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
  import LoginHeader from "../../components/LoginHeader/LoginHeader.vue"
  export default {
    data () {
      return {
        isShow: 0
      }
    },

    methods:{
      toPLogin () {
        this.isShow = 1
      },
      toELogin () {
        this.isShow = 2
      },
      toPRegister () {
        this.isShow = 3
      },
      /*sendYzm () {
        if(this.time === 0) {
          this.time = 30;
          setInterval(() => {
            this.time --;

          }, 1000)
        }
      }*/
    },
    components: {
      LoginHeader
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @rem:750/10rem;
  .personal {
    width: 100%;
    height: 100%;
    position: relative;
    .login {
      .header {
        position: relative;
        width: 100%;
        height: 88/@rem;
        background: #fafafa;
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
      .top_icon {
        width: 100%;
        text-align: center;
        img {
          padding: 160/@rem;
          width: 268/@rem;
          height: 90/@rem;
        }
      }
      .phone,.email {
        width: 670/@rem;
        height: 94/@rem;
        border: 1/@rem solid #b4282d;
        font-size: 30/@rem;
        text-align: center;
        line-height: 94/@rem;
        margin: auto;
        .iconfont {
          font-size: 42/@rem;
          vertical-align: middle;
        }
      }
      .phone {
        background-color: #b4282d;
        color: white;
      }
      .email {
        color: #b4282d;
        margin: 30/@rem auto;
      }
      .fast_phone {
        font-size: 28/@rem;
        color: #333;
        text-align: center;
        .iconfont {
          font-size: 28/@rem;
        }
      }
      .login_way {
        font-size: 28/@rem;
        color: #7f7f7f;
        text-align: center;
        position: absolute;
        left: 100/@rem;
        bottom: 80/@rem;
        span {
          display: inline-block;
          padding: 20/@rem;
          .iconfont {
            color: #7f7f7f;
            font-size: 28/@rem;
          }
        }
      }
    }
    .login_phone {
      .content {
        box-sizing: border-box;
        margin: 0 40/@rem;
        .enter {
          margin-top: 20/@rem;
          input {
            width: 100%;
            font-size: 30/@rem;
            padding-bottom: 30/@rem;
            border-bottom: 1/@rem solid #efefef;
            outline: none;
            text-indent: 30/@rem;
          }
        }
        .yzm {
          position: relative;
          margin-bottom: 40/@rem;
          input {
            width: 100%;
            font-size: 30/@rem;
            padding-bottom: 30/@rem;
            border-bottom: 1/@rem solid #efefef;
            outline: none;
            text-indent: 30/@rem;
          }
          .getyzm {
            width: 168/@rem;
            height: 58/@rem;
            position: absolute;
            right: 0;
            bottom: 15/@rem;
            font-size: 30/@rem;
            text-align: center;
            vertical-align: middle;
            line-height: 58/@rem;
            border: 1/@rem solid #7f7f7f;
            border-radius: 10/@rem;
            color: #333;
          }
        }
        .qusetion {
          display: flex;
          font-size: 32/@rem;
          justify-content: space-between;
          a {
            color: #7f7f7f;
          }
          .yz {
            color: #333;
          }

        }
        .ok,.other {
          width: 670/@rem;
          height: 94/@rem;
          border: 1/@rem solid #b4282d;
          font-size: 30/@rem;
          text-align: center;
          line-height: 94/@rem;
          margin: auto;
        }
        .ok {
          background-color: #b4282d;
          color: white;
          margin-top: 40/@rem;
        }
        .other {
          color: #b4282d;
          margin: 30/@rem auto;
        }
        .register {
          font-size: 28/@rem;
          color: #333;
          text-align: center;
          .iconfont {
            font-size: 28/@rem;
          }
        }
      }
    }
    .email_phone {
      .content {
        box-sizing: border-box;
        margin: 0 40/@rem;
        .enter {
          margin-top: 20/@rem;
          input {
            width: 100%;
            font-size: 30/@rem;
            padding-bottom: 30/@rem;
            border-bottom: 1/@rem solid #efefef;
            outline: none;
            text-indent: 30/@rem;
          }
        }
        .yzm {
          position: relative;
          margin-bottom: 40/@rem;
          input {
            width: 100%;
            font-size: 30/@rem;
            padding-bottom: 30/@rem;
            border-bottom: 1/@rem solid #efefef;
            outline: none;
            text-indent: 30/@rem;
          }
        }
        .qusetion {
          display: flex;
          font-size: 28/@rem;
          justify-content: space-between;
          color: #7f7f7f;
        }
        .ok,.other {
          width: 670/@rem;
          height: 94/@rem;
          border: 1/@rem solid #b4282d;
          font-size: 30/@rem;
          text-align: center;
          line-height: 94/@rem;
          margin: auto;
        }
        .ok {
          background-color: #b4282d;
          color: white;
          margin-top: 40/@rem;
        }
        .other {
          color: #b4282d;
          margin: 30/@rem auto;
        }
      }
    }
    .phone_register {
      .content {
        box-sizing: border-box;
        margin: 0 40/@rem;
        .enter {
          margin: 20/@rem 0;
          input {
            width: 100%;
            font-size: 30/@rem;
            padding-bottom: 30/@rem;
            border-bottom: 1/@rem solid #efefef;
            outline: none;
            text-indent: 30/@rem;
          }
        }
        .yzm {
          position: relative;
          input {
            width: 100%;
            font-size: 30/@rem;
            padding-bottom: 30/@rem;
            border-bottom: 1/@rem solid #efefef;
            outline: none;
            text-indent: 30/@rem;
          }
          .getyzm {
            width: 168/@rem;
            height: 58/@rem;
            position: absolute;
            right: 0;
            bottom: 15/@rem;
            font-size: 30/@rem;
            text-align: center;
            vertical-align: middle;
            line-height: 58/@rem;
            border: 1/@rem solid #7f7f7f;
            border-radius: 10/@rem;
            color: #333;
          }
        }
        .password {
          input {
            width: 100%;
            font-size: 30/@rem;
            padding-bottom: 30/@rem;
            border-bottom: 1/@rem solid #efefef;
            outline: none;
            text-indent: 30/@rem;
          }
        }
        .go_register {
          width: 670/@rem;
          height: 94/@rem;
          border: 1/@rem solid #b4282d;
          font-size: 30/@rem;
          text-align: center;
          line-height: 94/@rem;
          background-color: #b4282d;
          color: white;
          margin: 40/@rem auto 30/@rem;
        }
        .agree {
          font-size: 26/@rem;
          .gray {
            color: #7f7f7f;
          }
          .blue {
            color: #007aff;
          }
        }
        .fast_email {
          margin-top: 100/@rem;
          font-size: 28/@rem;
          color: #333;
          text-align: center;
          .iconfont {
            font-size: 28/@rem;
          }
        }
      }
    }
    &>.bg_color {
      width: 100%;
      height: 100%;
      background: #f2f5f4;
    }
  }


</style>
