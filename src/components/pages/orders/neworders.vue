<template>
    <div class="new-orders">
        <ordercard v-for="item in cards" :key="item" :data="item"/>
          
    </div>
</template>

<script>
import ordercard from "@/components/widget/ordercard"
export default {
    data(){
        return{
            cards:[
               {
                   name:"test",
                   address:"asdfadsf"
               },
               {
                   name:"asdfasdf",
                   address:"asfd"
               },
               {
                   name:"asdf",
                   address:"asdfasdf"
               },
                {
                   name:"karthik",
                   address:"#1, medehalli, bangalore, krpuram"
               }
            ]
        }
    },
    components:{
        ordercard
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