<template>
  <div class="page-login">
    <form class="form-login" v-on:submit.prevent="submitLogin">
      <a class="logo" href="/" title="开发者收藏">
        <x-svg class="logo-dark" type="devnode_logo"></x-svg>
        <span class="text">DevNode</span>
      </a>
      <!--<div class="form-block">
        <div v-show="btn && !form.name">用户名不能为空</div>
        <input type="text" placeholder="用户名" v-model="form.name">
      </div>-->
      <div class="form-block">
        <input type="email" class="input-text" placeholder="email@email.com" v-model="form.email">
        <p class="errors" v-show="btned && !validation.email">邮箱格式错误</p>
      </div>
      <div class="form-block">
        <input type="password" class="input-text" placeholder="密码" v-model="form.password">
        <router-link class="btn forget-password-btn" to="/password/forget">忘记密码？</router-link>
        <p class="errors" v-show="btned && !validation.password">请输入密码</p>
      </div>
      <div class="form-block flex-between">
        <label><input type="checkbox" v-model="form.rememberMe"> 自动登录</label>
        <span>还没有账户？<router-link class="link" to="/register">立即注册</router-link></span>
      </div>
      <div class="form-block">
        <button class="btn btn-block btn-big">登录</button>
      </div>
    </form>
    <x-line margin="40px 0 30px">第三方登录</x-line>
    <div class="third-way flex-between">
      <router-link class="item disabled" to="/auth/qq"><x-svg type="qq" width="64" height="64"></x-svg></router-link>
      <router-link class="item disabled" to="/auth/wechat"><x-svg type="wechat" width="64" height="64"></x-svg></router-link>
      <router-link class="item disabled" to="/auth/github"><x-svg type="github" width="64" height="64"></x-svg></router-link>
    </div>
  </div>
</template>

<script>
// 登录界面仍然保留 header 头，在小窗口时，隐藏即可
var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
import { mapActions } from 'vuex'
import { USER_SIGNIN } from '../store/user'
import xSvg from '../components/svg'
import xLine from '../components/line'

export default {
  components: {
    xSvg,
    xLine,
  },

  data() {
    return {
      // true 已经提交过 false 没有提交过
      btned: false,
      form: {
        email: '',
        password: '',
        rememberMe: true,
      },
    }
  },

  computed: {
    validation: function () {
      return {
        email: emailRE.test(this.form.email),
        password: !!this.form.password,
      }
    },
    isValid: function () {
      var validation = this.validation
      return Object.keys(validation).every(function (key) {
        return validation[key]
      })
    },
  },

  methods: {
    ...mapActions([USER_SIGNIN]),

    submitLogin() {
      this.btned = true
      if (!this.isValid) return

      this.fetchLogin()
    },
    async fetchLogin() {
      const res = await this.$ajax.login(this.form)
      // console.log(res)
      if (res.errno === 0) {
        // const data = res.data

        this.USER_SIGNIN(this.form)
        const query = this.$route.query
        this.$router.replace({
          path: query.redirect || '/',
        })
      } else {
        console.log(res.errmsg)
      }
    },
  },
}
</script>

<style lang="stylus">
.page-login
  margin: 40px auto 0;
  width: 100%;
  min-width: 280px;
  max-width: 320px;

.form-login
  margin: 20px auto;

  .logo
    display: block;
    margin-bottom: 40px;
    text-align: center;

  .form-block
    position: relative;
    margin-bottom: 16px;

  .input-text
    box-sizing: border-box;
    box-shadow: none;
    display: block;
    width: 100%;
    height: 42px;
    padding: 6px 12px;
    border-radius: 4px;
    border: 1px solid #e1e6f0;
    transition: border-color ease-in-out .15s,
                box-shadow ease-in-out .15s;

    &:focus
      outline: none;

  .forget-password-btn
    position: absolute;
    right: 0;
    top: 0;
    height: 42px;
    border: 1px solid #e1e6f0;
    border-radius: 4px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    line-height: 42px;
    padding: 0 10px 0 14px;

    &:hover
      color: #666;

.third-way
  .item
    display flex
    align-items center
    justify-content: center;
    width 64px
    height 64px
    // border 1px solid #ccc
    border-radius 100%

</style>

