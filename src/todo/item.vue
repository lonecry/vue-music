<template>
    <div id = "musiclist">
        <ul class = "listul">
            <li class = "list" v-for = "(list,index) in datajson" :key = "list.id">
                <div class = "leftimg">
                    <img class = "backgroundUrl" :src = "list.coverImgUrl" v-on:click = "changstata(index,list.ordered)" alt = "">
                </div>
                <div class = "right">
                    <span class = "name"> {{list.name}}</span>
                    <div class = "listener">
                        <span class = "numbers">{{list.trackCount}}</span>
                        <img src = "../assets/images/headphone.png" class = "headphone" alt = "">
                    </div>
                    <span class = "tags">标签：{{labs(index,list.tags)}}</span>
                    <transition name = "fade" v-if = "true">
                        <div v-if = "list.ordered" class = "desc">
                            {{textcut(index,list.description) }}...
                        </div>
                    </transition>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
	import {json} from '../assets/data/data.js'
    import axios from 'Axios'

    export default {
        data(){
			// var datajson = json
			return {datajson: []}
		}, // data: {datajson: []},
		methods: {
			labs: function (index, val){
				return val.join('  、');
			}, changstata(index, ordered){
				this.datajson[index].ordered = !ordered
			}, enter(){
				console.log('done')
			}, textcut(index, text){
				try {
					// console.log(index, text.substring(0, 10))
					var str = text.toString().substring(0, 150)
					return str
				} catch (e) {
					console.log(e);
				}
			},
        },
        mounted(){
            console.log('mounted')
			axios.get('http://www.daiwei.org/vue/server/music2.php?inAjax=2&do=albums')
                .then((response) =>{
					// this.datajson = response.data.playlists
					this.datajson = json
                    }
                )
                .catch((response) =>{
                    console.log(response);
                })
        }
    }
</script>
<style scoped>
    h1 {
        color : greenyellow;
        width : 100%
    }
</style>