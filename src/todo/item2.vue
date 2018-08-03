<template>
    <div id = "musiclist">
        <ul class = "listul">
            <li class = "list" v-for = "(itemlist,index) in  list">
                {{'(\"'+itemlist.id+'\",'+'\"'+itemlist.url+'\",'+'\"'+itemlist.br+'\",'+'\"'+itemlist.size+'\",'+'\"'+itemlist.md5+'\",'+'\"'+itemlist.code+'\",'+'\"'+itemlist.expi+'\",'+'\"'+itemlist.type+'\",'+'\"'+itemlist.gain+'\",'+'\"'+itemlist.fee +'\",'+'\"'+itemlist.uf +'\",'+'\"'+itemlist.payed +'\",'+'\"'+itemlist.flag +'\",'+'\"'+itemlist.canExtend +'\"),' }}
            </li>
        </ul>
    </div>
</template>
<script>
    import axios from 'Axios'

    export default {
        data(){
            return {datajson: {}, list: []}
        },
        mounted(){
            console.log('mounted')
            axios.get('http://simpleqq.com/api/json1.php')
                .then((response) =>{
                        // console.log(response.data.privileges);
                        this.datajson = response.data.privileges
                        for (var item in this.datajson) {
                            // console.log(this.datajson[item].id);
                            axios.get('http://120.79.162.149:3000/music/url?id=' + this.datajson[item2].id)
                                .then((response) =>{
                                        // console.log(response.data.data[0]);
                                        this.list.push(response.data.data[0])
                                        console.log(this.list[0]);
                                    }
                                )
                                .catch((response) =>{
                                    console.log(response);
                                })
                        }
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