<template>
  <div class="login-container">
    <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <div class="login-card">
      <div class="login-left">
        <h1 class="system-title">Welcome Back</h1>
        <p class="system-desc">畅易云后台管理系统</p>
        <img src="@/assets/logo.png" style="height: 190px;width: 190px;" alt="banner" />
      </div>

      <div class="login-right" v-show="login_type==0">
        <h2 class="login-title">登录</h2>
        <form @submit.prevent="handleLogin">
          <input v-model="username" type="text" placeholder="请输入用户名" class="login-input" />
          <input v-model="password" type="password" placeholder="请输入密码" class="login-input" />
          <button type="submit" class="login-btn">立即登录</button>
        </form>
        <div class="right_other_login">
        <div @click="login_type=1">
        <img src="/src/assets/qr.png" alt="">
        </div>
        </div>
        <div class="tip">
          <p>扫描登录在这里</p>
        </div>
      </div>

      <div class="login-right" v-show="login_type==1">
        <h2 class="login-title">手机扫描，安全登录</h2>
        <div class="qr">
          <div class="image">
            <img src="https://img1.baidu.com/it/u=768868833,1759084818&fm=253&fmt=auto&app=138&f=GIF?w=136&h=136" alt="">
          </div>
        </div>
        <div class="right_other_login">
        <div @click="login_type=0">
        <img src="/src/assets/compuler.png" alt="">
        </div>
        </div>
        <div class="tip">
          <p>密码登录在这里</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()
let login_type=ref(0)      //0：账号密码登录，1：扫描登录
 

const handleLogin = () => {
  if (username.value === 'admin' && password.value === '123456') {
    alert('登录成功')
    router.push('/home')
  } else {
    alert('用户名或密码错误')
  }
}

</script>

<style scoped>
.background{
    width: 430px;
    height: 520px;
    position: absolute;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
}
.background .shape{
    height: 200px;
    width: 200px;
    position: absolute;
    border-radius: 50%;
}
.shape:first-child{
    background: linear-gradient(
        #1845ad,
        #23a2f6
    );
    left: -20px;
    top: -67px;
}
.shape:last-child{
    background: linear-gradient(
        to right,
        #ff512f,
        #f09819
    );
    right: -20px;
    bottom: -80px;
}
.login-container {
  width: 100vw;
  height: 100vh;
  background: #f5f5f5 url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="%23ccc"><circle cx="10" cy="10" r="1"/></svg>') repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-card {
  display: flex;
  width: 800px;
  height: 480px;
   background-color: rgba(255,255,255,0.13);
   backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
  border-radius: 16px;
  overflow: hidden;
  font-family: 'Poppins',sans-serif;
    color: #333;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
  /* box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2); */
  /* background-color: #fff; */
}
/* .login-card *{
    
} */
.login-left {
  width: 50%;
  /* background: #f6f9ff; */
  padding: 40px 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-left img {
  width: 80%;
  margin-top: 20px;
}

.system-title {
  font-size: 28px;
  font-weight: 600;
}

.system-desc {
  font-size: 14px;
}

.login-right {
  width: 50%;
  padding: 60px 40px;
  /* background: white; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.login-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
  color: #333;
}

.login-input {
  width: 70%;
  padding: 12px 16px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-left: 10%;
  font-size: 15px;
  transition: border 0.3s;
}

.login-input:focus {
  border-color: #409eff;
  outline: none;
}

.login-btn {
  width: 80%;
  margin-left: 10%;
  padding: 12px;
  background: linear-gradient(to right, #409eff, #66b1ff);
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

.login-btn:hover {
  opacity: 0.9;
}

.right_other_login {
  width: 70px;
  height: 70px;
  position: absolute;
  border-top-right-radius: 16px;
  top: 0px;
  right: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  clip-path: polygon(0 20%, 100% 0, 80% 100%);
}
.right_other_login div {
  height: 50px;
  width: 50px;
}
.right_other_login img {
  width: 100%;
  height: 100%;
}
.tip {
  width: 130px;
  height: 32px;
  position: absolute;
  top: 10px;
  right: 80px;
  line-height: 32px;
  text-align: center;
  border: 2px solid #B2BEC7;
  background-color: #E7F6FF;
  color: #9CA6D8;
  border-radius: 4px;
}

/* 外层边框三角 */
.tip::after {
  content: "";
  position: absolute;
  top: 5px;
  right: -12px; /* 与 border 粗细配合 */
  width: 0;
  height: 0;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  border-left: 12px solid #B2BEC7; /* 边框颜色 */
}

/* 内层背景三角，盖住 after 内侧部分 */
.tip::before {
  content: "";
  position: absolute;
  top: 5px;       /* 比 after 往下移 2px */
  right: -10px;   /* 比 after 缩进 2px */
  width: 0;
  height: 0;
  z-index: 10;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  border-left: 12px solid #E7F6FF; /* 与气泡背景一致 */
}
.qr {
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
}
.qr .image {
  width: 150px;
  height: 150px;
}
.qr .image img {
  width: 100%;
  height: 100%;
}
</style>
