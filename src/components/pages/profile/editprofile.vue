<template>
 
  <div class="profile-inner" >
    <div style="float:left;">
      <div class="profile-icon">
          
      </div>
      <div class="profile-heading">Admin profile</div>
    </div>
    <div class="second-div">
      <div>
        <img class="profile-pic" src="@/assets/Hero-image1.png" />
        <button class="upload-button">UPDATE</button>
      </div>
      <div class="third-div">
<form>
    <table>
        
            <p style="text-align: left;">
              name:</p>
            <tr>
        
            <td>
                <input class="input-box-style" type ="text" placeholder="type your name " name="">
            </td>
            </tr>
        
            
            <p style="text-align: left;"> 
              password:</p>
            <tr>
            <td>
                <input class="input-box-style" type="text" placeholder=" type your password" password="">
            </td>
        </tr>
        <p style="text-align:left;">
                number:
            </p>
        <tr>
           
            <td>
                <input class="input-box-style" type="text" placeholder="type your mobile number" number="">
            </td>
        </tr>
        
              <p style="text-align:left;">  email:</p>
          <tr>
        <td>
            <input class="input-box-style" type="text" placeholder="type your email id" eamil="">
        </td>
        </tr>
    </table>
</form>
<button>reset</button>
    </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.profile-icon {
  float: left;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: black;
}
.profile-heading {
 
left: 684px;
width: 160px;
font-size: 125%;
text-align: center;
font: Regular 44px/58px Segoe UI;
letter-spacing: 0px;
color: #01222E;
opacity: 1;
}
.profile-inner {
  padding-left: 10rem;

}
.profile-pic {
     height: 240px;
    width: 240px;
    border: 1px solid black;
    border-radius: 50%;
    position: relative;
    left: 30rem;
    top:-7rem;
}
.second-div{
position: relative;
    left: 0;
    top: 3rem;
     z-index:0;
     width: 24%;}
.third-div{
    position: absolute;
    top: 5rem;
    left: 0rem;
}
.input-box-style{
      width: 228px;
    height: 40px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: -5px 3px 6px #51515159;
    opacity: 1;
}
.button{
  border-radius: 50%;
}
.upload-button{
  position: relative;
    left: 31rem;
    top: -6rem;
    height: auto;
    width: 100px;
    padding: 5px;
    background-color: #b9b9d8;
    font-weight: 900;
}
</style>