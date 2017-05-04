<template>
  <form class="login" v-on:submit.prevent="submitLogin">
    <!--<div class="line">
      <div v-show="btn && !form.name">用户名不能为空</div>
      <input type="text" placeholder="用户名" v-model="form.name">
    </div>-->
    <div class="line">
      <div v-show="btn && !form.email">Email不能为空</div>
      <input type="email" placeholder="Email" v-model="form.email">
    </div>
    <div class="line">
      <div v-show="btn && !form.passward">请输入密码</div>
      <input type="passward" placeholder="密码" v-model="form.passward">
    </div>
    <button>登录</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
import { USER_SIGNIN } from '../store/user'

export default {
  data() {
    return {
      // true 已经提交过 false 没有提交过
      btn: false,
      form: {
        email: '',
        passward: '',
      },
    }
  },

  methods: {
    ...mapActions([USER_SIGNIN]),

    submitLogin() {
      this.btn = true

      if (!this.form.email || !this.form.passward) return

      this.USER_SIGNIN(this.form)

      this.$router.replace({
        path: '/',
      })
    },
  },
}
</script>

