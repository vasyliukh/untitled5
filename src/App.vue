<template>
  <div id="app">
    <logo_main/>
    <Title_main/>
    <Button_main/>

  </div>
</template>

<script>

import logo_main from "@/components/logo_main";
import Title_main from "@/components/title_main";
import Button_main from "@/components/button_main";
import register_form from "@/components/register_form";


export default {
  components:{

    Button_main,
    Title_main,
    logo_main,
    register_form
  }
}
</script>

<style>
#app{
}
</style>