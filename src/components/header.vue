<template>
    <div class="header-w">
        <van-icon name="arrow-left" size="22" /> <span>{{msg}}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "首页"
        }
    },
    watch: {
        $route(to, from) {
            console.log(to, from)
        }
    },
}
</script>
<style lang="less" scoped>
    .header-w{
        height: .44rem;
        display: flex;
        align-items: center;
        span{
            margin-left: .1rem
        }
    }
</style>

