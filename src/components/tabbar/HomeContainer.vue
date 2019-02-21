<template>
    <div>
    <!--轮播图-->
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
            <img :src="item.img" alt="">
        </mt-swipe-item>
    </mt-swipe>
     <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-sm-3">
                <router-link to="/home/photolist">
                    <img src="../../images/M2.jpg" alt="">
                    <div class="mui-media-body">课程讨论</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-sm-3">
                <a href="#">
                    <img src="../../images/M1.jpg" alt="">
                    <div class="mui-media-body">考研</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-sm-3">
                <a href="#">
                    <img src="../../images/M4.jpg" alt="">
                    <div class="mui-media-body">留学</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-sm-3">
                <a href="#">
                    <img src="../../images/M3.jpg" alt="">
                    <div class="mui-media-body">考证</div>
                </a>
            </li>
        </ul> 


   
    </div>
</template>

<script>
import { Toast } from 'mint-ui'

    export default {
        data(){
            return {
                lunbotuList:[],
            }
        },
        created() {
            this.getLunbotu();
        },
        methods:{
            // 获取轮播图数据
            getLunbotu(){
                this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(result =>{
                    console.log(result.body)
                    if(result.body.status === 0){
                        this.lunbotuList = result.body.message
            // Toast('加载轮播图成功')
                    }
                    else{
                        Toast('加载轮播图失败')
                    }
                })
            }
        }
    }   
</script>

<style lang="scss" scoped>
 .mint-swipe{
        height:200px;

        .mint-swipe-item{
            &:nth-child(1){
                background: red;
            }
            &:nth-child(2){
                background: blue;
            }
            &:nth-child(3){
                background: cyan;
            }

            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
