<template>
<div class="button1">

  <button @click="back" type="button" class="btn btn-success">РЕЄСТРАЦІЯ</button>
  <button type="button" class="btn btn-light">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ВХІД&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
  <router-link tag="b-nav-item" to="register_gorm"></router-link>
</div>
</template>

<script>
import register_form from "@/components/register_form";

export default {
  methods:{
    back(){
      this.$router.push({name:'register'});
    }
  },
  name: "button_main",
}
</script>

<style>
.button1{
  text-align: center;
  margin: 40px auto;

}
.btn{
  margin-right: 15px;
  margin-left: 15px;
}
.btn-light{
  font-family:HeliosCondLight,sans-serif;
  letter-spacing: 4px;
  font-size: 30px;
  border-color: black;
}
.btn-success:hover {
  font-family:HeliosCondLight,sans-serif;
  letter-spacing: 4px;
  font-size: 30px;
  color: black;
  background-color:white;
  border-color: black;
}
.btn-success {
  font-family:HeliosCondLight,sans-serif;
  letter-spacing: 4px;
  font-size: 30px;
  color: #fff;
  background-color: #97D700;
  border-color: black;
}
.btn-check:focus+.btn-success, .btn-success:focus {
  font-family:HeliosCondLight,sans-serif;
  letter-spacing: 4px;
  font-size: 30px;
  color: #fff;
  background-color: #97D700;
  border-color:#97D700;
  box-shadow: 0 0 0 0.25rem rgb(60 153 110 / 50%);
}

</style>