<template>
    <div>
      <div class="top-menu">
           <span class="menu-buttons" :class="{'menu-button-active':item.state}" 
           @click="changeActive(index)" v-for="(item,index) in menu" :key="index"> {{item.name}}</span>
      </div>
     <neworders v-if="menu[0].state === true"/>
     <accepted v-if="menu[1].state === true" />
     <cancelled v-if="menu[4].state === true"/>
     <denied v-if="menu[3].state === true" />
     <delivered v-if="menu[2].state === true"/>
    </div>
</template>
<script>
import neworders from "@/components/pages/orders/neworders.vue";
import accepted from "@/components/pages/orders/accepted.vue";
import cancelled from "@/components/pages/orders/cancelled.vue";
import denied from "@/components/pages/orders/denied.vue";
import delivered from "@/components/pages/orders/delivered.vue";
export default {
    components:{
      neworders,
      accepted,
      cancelled,
      denied,
      delivered
    },
    data(){
        return{
          menu:[
              {
                  name:"new orders",
                  state:true
              },
               {
                  name:"ACCEPTED",
                  state:false
              },
               {
                  name:"DELIVERED",
                  state:false
              },
               {
                  name:"DEINIED",
                  state:false
              },
               {
                  name:"CANCELLED",
                  state:false
              },
          ]
        }
    },
    methods:{
         changeActive(number){
            for( var a=0;a< this.menu.length; a++){
                this.menu[a].state = false;
            }
            this.menu[number].state = true;

         },
         returnTrue(){
             for(var a=0;a< this.menu.length; a++){
                 if(this.menu[a].state === true){
                     return this.menu[a].name;
                 }
             }
         }
    }
}
</script>
<style scoped>
nav link> .left-side> div{
margin-right: 20px;
font-size: 0.9rem;
text-transform: uppercase;
}
.top-menu{
    height:3rem;
    width:100%;
    margin-top:2rem;
    float:left;
    margin-left:2rem;
    text-align:left;
}
.menu-buttons{
    display:inline-block;
    width:fit-content;
    padding:0.5rem 1rem 0.5rem 1rem;
    border-radius:5px;
    margin: 0 1rem 0 1rem;
    color:black;
    cursor:pointer;
    text-transform:uppercase;
    font-size:18px;
}
.menu-button-active{
    color:white;
     background:transparent linear-gradient(270deg, #0A1338 0%, #3D466D 30%, #4D577E 49%, #3A436A 65%, #040D33 100%) 0% 0% no-repeat padding-box;
}

</style>