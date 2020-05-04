<template>
    <div class="new-orders">
        <ordercard v-for="item in cards" :key="item" :data="item"/>
          <!-- <div class="wrap">
         <div class="card">
             <div class="container">
                 <h4>rajkumar</h4>
                 <p>D.NO.1-12-21/A,white field,banglore,karnataka</p>
             </div>
         </div>
     </div> 
      <div class="wrap">
         <div class="card">
             <div class="container">
                 <h4>rajkumar</h4>
                 <p>D.NO.1-12-21/A,white field,banglore,karnataka</p>
             </div>
         </div>
     </div>  -->
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
.wrap{
    /* width:1000px;
    margin:auto;
    margin-top:100px; */
}
.card{
    

    /* margin:10px;
    top:345px;
    left:451px; */
    /* height: 179px; */
}
</style>