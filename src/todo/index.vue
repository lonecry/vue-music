<template>
    <div id = "index">
        <h1>{{welcome}}</h1>
    </div>
</template>
<script>
    export default {
        data(){
            return {welcome: "w e l c o m e"}
        },
    }
</script>
<style scoped>
    h1 {
        color: greenyellow;
        width: 100%
    }
</style>