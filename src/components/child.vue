<template>
    <div>
        <div id="main">
            <div v-bind:key="i" v-for="i in getName.images " >
                <img :src="i.url"  width="100px" height="60px" />
                <p>{{i.id}}</p>
            </div>    
        </div>
    </div>
</template>
<script>
import {mapGetters,mapMutations} from 'vuex'
export default {
    computed:{
        ...mapGetters([
            'getName'
        ])
    },
 
   
    mounted() { 
    },
     methods:{
        ...mapMutations([
            'setName'
        ])
    }
}
</script>
<style scoped>
#main {
  width: 100%;
  height: 100%;
  border: 1px solid #c3c3c3;
  display: -webkit-flex; /* Safari */
  -webkit-flex-wrap: wrap; /* Safari 6.1+ */
  display: flex;
  flex-wrap: wrap;
}

#main div {
    margin: 25px;
  width:100px;
  height:150px;
}
</style>