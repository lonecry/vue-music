<template>
    <div id = "musiclist">
        <ul class = "listul">
            <li class = "list" v-for = "(list,index) in datajson">
                <div class = "leftimg">
                    <img class = "backgroundUrl" :src = "list.coverImgUrl" v-on:click = "changstata(index,list.ordered)" alt = "">
                </div>
                <div class = "right">
                    <span class = "name">{{list.name}}</span>
                    <div class = "listener">
                        <span class = "numbers">{{list.trackCount}}</span>
                        <img src = "./assets/images/headphone.png" class = "headphone" alt = "">
                    </div>
                    <span class = "tags">标签：{{labs(index,list.tags)}}</span>
                    <transition name = "fade" v-on:enter = "enter" v-if = "true">
                        <div v-if = "list.ordered" class = "desc">{{list.description.substring(0,150)}}...</div>
                    </transition>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import {json} from './assets/data/data.js'
    import axios from 'Axios'

    export default {
        data(){
            // var datajson = json
            return {datajson: []}
        },
        // data: {datajson: []},
        methods: {
            labs: function (index, val){
                return val.join('  、');
            },
            changstata(index, ordered){
                this.datajson[index].ordered
                this.datajson[index].ordered = !ordered
            },
            enter(){
                console.log('done')
            },
        }, mounted(){
            console.log('mounted online')
            axios.get('http://www.daiwei.org/vue/server/music2.php?inAjax=1&do=albums')
                .then((response) =>{
                        this.datajson = response.data.playlists
                    }
                )
                .catch((response) =>{
                    console.log(response);
                })
        }
    }
</script>
<style scoped>
</style>