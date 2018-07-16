import axios from 'Axios'
axios.get('http://www.daiwei.org/vue/server/music2.php?inAjax=1&do=albums')
    .then(function (response){
        console.log(response);
    })
    .catch(function (response){
        // console.log(response);
    })
// export default res