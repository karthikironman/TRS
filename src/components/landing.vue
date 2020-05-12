<template>
    <div class="main-div">
       <img class="background-img" src="@/assets/4.png" />
        <showcase>
        <h1>RPL TECHNO</h1>
        
        <nav>
            <ul>
                <li><a href="#" class="active"><button @click="gotologin()">login</button></a></li>
           
            </ul>
        </nav>
    

    <div class="container">
        <h2>Strategy and Research.</h2>
        <h3>We understand your complete requirement and will prepare 
            the front and back end design accordingly to your requirment. </h3>
        <div class="category">
            <div class="node s">
                <img src="@/assets/Capture.png" alt="node js">
                <h4>node js</h4>
                
            </div>
            <div class="vue js">
                <img src="@/assets/Capture1.png" alt="vue js">
                <h4>vue js</h4>
                
            </div>
            <div class="node red">
                <img src="@/assets/Capture2.png" alt="node red">
                <h4>node red</h4>
                
            </div>
        </div>
    </div>
</showcase>


<a class="read-more" href="#"><button class="btn">READ MORE</button></a>

   </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        gotologin(){
            this.$router.push({
                name:"loginPage"
            })
        }
    }
}
</script>
<style scoped>
.read-more{
   position:relative;
    bottom:2rem; 
    left:1rem;
}
.main-div{
    position:absolute;
    top:0;
    left:0;
    height:100vh;
}
.background-img{
    position:absolute;
    left:0;
    width:100%;
    height:100%;
    z-index:-3;
    border-radius:0 !important;
}
header{
    width:80%;
    margin: auto;
    overflow: hidden;
}
.head{
    float: left;
    color: red;
    font-family: cursive;
}
nav{
    margin-left: 20%;
    

}
li{
    display: inline;
    padding: 1rem;
}
li a{
    color: black;
    text-decoration: none;
    font-weight: bold;
}
.active{
    color: white;
}
.container{
    width: 70%;
    margin: auto;
    overflow: hidden;
    margin-top: 1%;
    
}
showcase h2{
    color: gold;
    font-family:cursive;
    text-align: center;
}
showcase h1{
    color: white;
    font-family:cursive;
    text-align: center;
    padding-top:2rem;
}
showcase h3{
    color: chocolate;
    text-align: center;
    letter-spacing: 2px;
}
.category{
    color: orangered;
    margin-top: 10%;
    display: flex;
    text-align: center;
    font-family: cursive;
}
img{
    width: 50%;
    border-radius: 50%;
}
.node js,.vue js,.node red{
    padding-left: 5rem;
}
h4{
    font-size: 2rem;
    margin: 3%
}
button{
    background-color: orange;
    padding: 1rem;
    border: none;
    border-radius: 8px;
    margin-left: 80%;
}

















</style>