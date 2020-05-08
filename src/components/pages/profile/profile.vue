<template>
 
  <div class="profile-inner" >
    <div style="float:left;">
      <div class="profile-icon"></div>
      <div class="profile-heading">Admin profile</div>
    </div>
    <div class="second-div">
      <div>
        <img class="profile-pic" src="@/assets/Hero-image1.png" />
      </div>

      <div class="side-content" >
                 <p>rajkumar</p>
                 <p>98765432d10-</p>
                 <p>N0 7, india</p>
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
  float: left;
  font: Regular 44px/58px Segoe UI;
  letter-spacing: 0px;
  color: #01222e;
  opacity: 1;
  line-height: 2rem;
  margin-left: 1rem;
}
.profile-inner {
  padding-left: 2rem;
}
.profile-pic {
  height: 240px;
  width: 240px;
  border: 1px solid black;
  border-radius: 50%;
  top:-7rem;
  left: 30rem;
}
.second-div{
position: relative;
    left: 0;
    top: 3rem;
     z-index:0;
     width: 24%;}
.side-content{
        position: relative;
    left: 17rem;
    top: -11rem;
}
</style>