<template>
    <div 
        class="shade" 
        :style="{
            background: props.bg,
            height: props.height,
            width: props.width
        }">
    </div>
</template>
<script lang='ts' setup>
    import { defineProps } from 'vue'
    const props = defineProps<{
        bg?: string
        height?: string
        width?: string
    }>()
</script>
<style scoped>
.shade {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 1;
}
</style>
