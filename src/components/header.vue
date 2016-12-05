<template>
  <div class="header">
    <span class="logo_span">
      <img src="../../static/images/logo.jpg" alt="" class="logo">
      
    </span>
      
   <!--  <span>
      <img src="../../static/images/t.gif" alt="" class="userFace">
      
    </span> -->
  </div>
</template>
<style lang="less">
.userFace{
  width: 40px;
  position: absolute;
  right: 5px;  
}

.logo{
  vertical-align: middle;
  width: 120px;
}

.header{
  background-color: #666;
  overflow: auto;
  height: 64px;
  position: relative;
  .logo_span{
    position: absolute;
    top: 7px;
  }
}
  
</style>
<script>
    export default{

    }
</script>
