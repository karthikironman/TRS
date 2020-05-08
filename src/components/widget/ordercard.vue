<template>
  <div class="order-card">
    <div class="inner-order-card">
        <p class="name">{{data.name}} </p>
        <P class="address">{{data.address}} </P>
    </div>
    <button class="order-btn Accept">Accept</button>
    <button class="order-btn Deny">Deny</button>
  </div>
</template>
<script>
export default {
    props:["data"]
}
</script>
<style scoped>
.order-card {
  height: 210px;
  width: 400px;
  float: left;
  border-radius: 5px;
  margin-left: 3rem;
  margin-top: 3rem;
}
.inner-order-card {
  height: 80%;
  width: 100%;
  box-shadow: 0px 3px 6px #0000008c;
  border-radius: 7px;
  background: transparent linear-gradient(277deg, #ffffff 0%, #bbecff 100%) 0%
    0% no-repeat padding-box;
    position:relative;
}
.order-btn {
    margin-top:10px;
  width: 50%;
  height: 20%;
  float: left;
  border-radius: 24px;
}
.Accept {
  background: transparent
    linear-gradient(90deg, #040d33 0%, #27377a 49%, #040d33 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000061;
  color: white;
  cursor: pointer;
}
.Deny {
  background: transparent
    linear-gradient(270deg, #e9e9e9 0%, #ffffff 48%, #dcdcdc 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #707070;
  cursor: pointer;
}
.name{
text-align: center;
font: Bold 23px/31px Segoe UI;
letter-spacing: 0px;
color: #040D33;
text-transform: uppercase;
opacity: 1;
position:absolute;
top:7%;
left:50%;
transform:translate(-50%,0%);
}
.address{
text-align: center;
font: Regular 23px/31px Segoe UI;
letter-spacing: 0px;
color: #040D33;
opacity: 1;
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
}
</style>