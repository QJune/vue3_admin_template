<!--
 * :Author: June
 * :Date: 2022-03-07 02:12:16
 * :LastEditTime: 2022-03-24 17:38:22
 * :Description:
-->
<template>
    <el-card> 控制面板 </el-card>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import { userInfo } from '@/apis/user.js'

export default defineComponent({
    name: 'Dashboard',
    setup() {
        onMounted(() => {
            console.log('home')
            userInfo()
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => console.log(err))
        })
    }
})
</script>

<style lang="scss" scoped>
.wrapper {
    width: 750rem;
    height: 100px;
    background: red;
    .inner {
        width: 50px;
        height: 50px;
    }
}
</style>
