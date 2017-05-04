<template>
  <form class="login" v-on:submit.prevent="submitLogin">
    <!--<div class="line">
      <div v-show="btn && !form.name">用户名不能为空</div>
      <input type="text" placeholder="用户名" v-model="form.name">
    </div>-->
    <div class="line">
      <input type="email" placeholder="email@email.com" v-model="form.email">
    </div>
    <div class="line">
      <input type="password" placeholder="密码" v-model="form.password">
    </div>
    <div class="line">
      <label><input type="checkbox" v-model="form.rememberMe"> 自动登录</label>
    </div>
    <ul class="errors">
      <li v-show="btned && !validation.email">邮箱格式错误</li>
      <li v-show="btned && !validation.password">请输入密码</li>
    </ul>
    <button>登录</button>
  </form>
</template>

<script>
var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
import { mapActions } from 'vuex'
import { USER_SIGNIN } from '../store/user'

export default {
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

