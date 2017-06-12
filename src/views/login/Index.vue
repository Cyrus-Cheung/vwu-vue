<template>
    <div class="login-container">
        <el-form autoComplete="on" :model="loginForm" ref="loginForm" label-position="left" label-width="0px" class="card-box login-form">
            <h3 class="title">系统登录</h3>
            <el-form-item prop="email">
                <el-input name="email" type="text" v-model="loginForm.username" autoComplete="on" placeholder="邮箱"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input name="password" type="password" v-model="loginForm.password" autoComplete="on" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width:100%;" :loading="loading" @click="handleLogin">
                    登录
                </el-button>
            </el-form-item>
        </el-form>
        <el-dialog title="第三方验证" :visible.sync="showDialog">
            邮箱登录成功,请选择第三方验证
            <socialSign></socialSign>
        </el-dialog>
    </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: ''
      },
      loading: false,
      showDialog: false
    }
  },
  methods: {
    handleLogin () {
      if (this.loginForm.username === '') {
        this.$message.error('用户名不能为空')
        return
      }
      if (this.loginForm.password === '') {
        this.$message.error('密码不能为空')
        return
      }
      this.loading = true
      this.$store.dispatch('Login', this.loginForm).then((response) => {
        if (response.code === 200) {
          this.loading = false
          this.$router.push({ path: '/' })
        }
        if (response.code === 403) {
          this.$message.error('用户名或密码不正确')
          this.loading = false
        }
      }).catch(err => {
        this.$message.error(err)
        this.loading = false
      })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
@import "src/styles/mixin.scss";
* {
    margin: 0;
    padding: 0;
}
.tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 5px;
}

.login-container {
    @include relative;
    height: 100vh;
    background-color: #2d3a4b;

    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
        -webkit-text-fill-color: #fff !important;
    }
    input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: #eeeeee;
        height: 47px;
    }
    .el-input {
        display: inline-block;
        height: 47px;
        width: 85%;
    }
    .svg-container {
        padding: 6px 5px 6px 15px;
        color: #889aa4;
    }

    .title {
        font-size: 26px;
        font-weight: 400;
        color: #eeeeee;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
    }

    .login-form {
        position: absolute;
        left: 0;
        right: 0;
        width: 400px;
        padding: 35px 35px 15px 35px;
        margin: 120px auto;
    }

    .el-form-item {
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        color: #454545;
    }

    .forget-pwd {
        color: #fff;
    }
}
</style>
