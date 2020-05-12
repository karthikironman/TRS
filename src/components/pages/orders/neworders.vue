<template>
    <div class="new-orders">
        <ordercard v-for="item in cards" :key="item" :data="item"/>
          
    </div>
</template>

<script>
import ordercard from "@/components/widget/ordercard"
import axios from 'axios'
export default {
    data(){
        return{
            cards:[
              
            ]
        }
    },
    components:{
        ordercard
    },
    mounted(){
        axios.get('http://karthik.buzz:1880/getorders')
        .then((result)=>{
            this.cards = result.data;
        })
    }
}
</script>
<style scoped>
.new-orders{
    height: calc(100vh - 71px);
    width:100%;
    position:absolute;
    top:6rem;
    padding:2em;
}

</style>