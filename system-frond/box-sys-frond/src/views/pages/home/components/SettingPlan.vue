<template>
    <div class="plan">
        <el-container>
            <el-aside width="100px">
                <div class="menu">
                    <ul>
                        <li @click="changeItem(index)" :class="activeIndex==index?'active':''" v-for="(item,index) in menu" :key="item.id">
                            {{item.value}}
                        </li>
                    </ul>
                </div>
            </el-aside>
            <el-main>Main</el-main>
        </el-container>
    </div>
</template>
<script lang='ts' setup>
import {Compass} from '@element-plus/icons-vue'
import { ref } from 'vue'
let activeIndex=ref<Number>(0)
const menu = ref([
  { id: 1, value: '系统设置',icon: ''},
  { id: 2, value: '参数配置',icon: 'Compass' },
  { id: 3, value: '日志管理',icon: '' },
  { id: 4, value: '系统监控',icon: '' }
])
const changeItem=(index:Number)=>{
    activeIndex.value=index
}    
</script>
<style scoped>
.plan {
  width: 600px;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translateX(-50%) translateY(-50%);
  background-color:#FFFFFF;
}
.el-aside {
    background-color: #FFFFFF;
    color: black;
    padding-top: 20px;
    box-sizing: border-box;
}
.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu li {
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  transition: background 0.3s;
}
.active {
    background: #f5f5f5;
}

.menu li:hover {
  background: #f5f5f5;
}
</style>
