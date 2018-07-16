<template>
    <div class = "nav">
        <div>
            <ul>
                <li>导航</li>
                <li>
                    <router-link to = "/index" tag = "span" active-class = "active">在线数据</router-link>
                </li>
                <li>
                    <router-link to = "/item" tag = "span" active-class = "active">本地数据</router-link>
                </li>
            </ul>
        </div>
        <router-view class = "routerview"></router-view>
        <!--这里的router-link 的属性需要设置为 active-class="active",-->
        <!--然后在script部分的data添加 active=false;这样切换页面或者组件router才能缓存不变-->
    </div>
</template>
<script>
    export default {
        data(){
            active: false
        }
    }
</script>
<style scoped>
    * {
        margin: 0;
        padding: 0
    }

    .nav {
        width: 100%;
        height: 945px;
        font-size: 36px;
        overflow: hidden;
    }

    ul {
        display: block;
        overflow: hidden;
        width: 800px;
        margin: 0 auto;
        /*margin-top: 10px;*/
    }

    li {
        display: block;
        list-style: none;
        width: 266px;
        height: 55px;
        line-height: 55px;
        font-size: 25px;
        text-align: center;
        float: left;
        cursor: pointer;
        border: 1px solid white;
        color: white;
        box-sizing: border-box;

    }

    li:hover {
        color: greenyellow;
        background: rgba(245, 245, 245, 0.22);

    }

    .active {
        text-decoraction: none;
        color: white;

    }

    .router-link-active {
        background: rgba(245, 245, 245, 0.22);
    }

    .routerview {
        display: block;
        box-sizing: border-box;
        /*border: 1px solid white;*/
        margin-top: 0px;
        width: 100%;
        height: 845px;
        /*background: white;*/
        overflow: auto;

    }
</style>