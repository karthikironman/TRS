
    <template>
  <div class="login-page">
    <div class="span">
      <span class="register-span" v-if="loginVariable">
        <input type="text" v-model="username" placeholder="user name" />
        <input type="text" v-model="password" placeholder="password" />

        <button  class="buttonstyle" @click="checkPassword()">login</button>
        <p class="message">
          
          <a class="buttonstyle" @click="toggle()">register</a>
        </p>
      </span>
      <span class="login-span" v-if="registerVariable">
        <input type="text" placeholder="user name" />
        <input type="text" placeholder="password" />
        
        <button  class="buttonstyle">register</button>
        <p class="message">
          
          <a  class="buttonstyle" @click="toggle()">login</a>
        </p>
      </span>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            loginVariable:true,
            registerVariable:false,
            username:"",
            password:""
        }
    },
    methods:{
        toggle(){
            if(this.loginVariable === true)
            {
                this.loginVariable = false;
            }else{
                this.loginVariable = true;
            }
            if(this.registerVariable === true){
                this.registerVariable = false;
            }else{
                this.registerVariable = true;
            }
            //alert(`login variable ${this.loginVariable}, register variable ${this.registerVariable}`)
        },
        checkPassword(){
            if( this.username == "admin" && this.password =="test@123"){
                 this.$router.push({
                   path: '/dashboard'
                 })
            }else{
                alert(`Sorry this is wwong password, retry ${this.username},${this.password}`)
            }
        }
    }
}
</script>
<style scoped>

.login-page{
    widows: 360px;
    padding:10% 0 0;
    margin:auto;
}
.span{
    position: relative;
    z-index: 1;
    
    max-width: 360px;
    margin:0 auto 100px;
    padding: 45px;
    text-align: center;
}
.span input{
    font-family: "Roboto",sans-serif;
    outline: 1;
    background:#f2f2f2;
    width:100%;
    border:0;
    margin: 0 0 15px;
    padding:15px;
    box-sizing: border-box;
    font-size: 14px;
}
.span button{
    font-family: "roboto",sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #4caf50;
    width:100%;
    border:0;
    padding:15px;
    color:#ffffff;
    font-size: 14px;
    cursor: pointer;
}
.buttonstyle{
    cursor:pointer;
}
.span button:hover, .span button:active{
    background: #4caf50;
}
.span .message{
    margin:15px 0 0;
    color:aliceblue;
    font-size: 12px;
}
.span .message a{
    color:#4caf50;
    text-decoration: none;
}
.span .register-span{
    
}
</style>

 