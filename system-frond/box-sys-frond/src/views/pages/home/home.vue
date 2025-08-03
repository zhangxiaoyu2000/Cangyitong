<template>
  <div class="common-layout">
    <el-container>
      <el-aside :style="`width:${sideWidth}px;`">
        <div class="system_info">
            <span class="logo">
                <img src="/src/assets/logo.png" alt="">
            </span>
            <span v-show="sideFlag==0">
                <p>后台系统</p>
            </span>
        </div>
      </el-aside>
      <el-container>
        <el-header>
            <div class="expand">
                 <el-button @click="changeSide" :icon="sideFlag==0?Fold:Expand" />
            </div>
            <div class="right">
                <span class="setting">
                    <el-button @click="isShowSettingPlan=true" :icon="Setting" circle />
                </span>
                <span class="natify">
                    <el-button :icon="Bell" circle />
                </span>
                <div class="userinfo">
                    <div class="headerImg">
                        <img src="data:image/jpeg;base64,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" alt="">
                    </div>
                    <div @click="expand" style="height: 100%;display: flex;flex-direction: row;align-items: center;">
                        <span class="username">
                            管理员
                        </span>
                        <span class="expand">
                            <el-icon v-show="expandFlag==0"><ArrowDown /></el-icon>
                            <el-icon v-show="expandFlag==1"><ArrowUp /></el-icon>
                        </span>
                    </div>
                </div>
            </div>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
  <SettingPlan v-show="isShowSettingPlan"/>
  <Shade v-show="isShowSettingPlan" @click="closeSettingPlan" bg="rgba(0,0,0,0.5)" height="100vh" width="100vw" />
</template>
<script setup lang="ts">
import SettingPlan from './components/SettingPlan.vue'
import shade from '@/components/shade.vue';
import {Fold,Expand,Setting,Bell,ArrowDown,ArrowUp} from '@element-plus/icons-vue'
import { ref } from 'vue'
let sideFlag=ref(0)     //侧边栏0是展开，1是压缩  
let expandFlag=ref(0)   //用户信息0是展开，1是压缩
let isShowSettingPlan=ref(false)
let sideWidth=ref(200)
const changeSide = ()=>{
    if (sideFlag.value==1) {
        sideFlag.value=0
        sideWidth.value=200
    }else {
        sideFlag.value=1
        sideWidth.value=60
    }
}
const expand = ()=>{
    expandFlag.value=expandFlag.value==0?1:0
}
const closeSettingPlan =()=>{
    isShowSettingPlan.value=false
}
</script>

<style>
.common-layout {
    width: 100%;
    height: 100vh;
}
.el-container {
    width: 100%;
    height: 100%;
}
.el-header {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #FFFFFF;
}
.el-header .right {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.el-header .right>span {
    margin-right: 20px;
}
.el-header .right button {
    background-color: #EFEFEF;
}
.userinfo {
    display: flex;
    margin-right: 20px;
    align-items: center;
}
.userinfo:hover {
     cursor: pointer;
}
.userinfo .headerImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;
    margin-left: 20px;
    background-color: rgb(91, 58, 15);
}
.userinfo .headerImg img {
    width: 40px;
    height: 40px;
}
.el-container {
    width: 100%;
}
.el-aside{
    background-color: #424F63;
    color: #EBECEE;
    transition: width 0.3s ease;
    overflow: hidden;
}
.el-main {
    background-color: #F1F2F3;
}
.system_info {
    width: 100%;
    height: 60px;
    display: flex;
    margin-top: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
}
.system_info span {
    white-space: nowrap;
    overflow: hidden;
}
.logo {
    width: 60px;
    height: 60px;
}
.logo img {
    width: 60px;
    height: 60px;
}
</style>