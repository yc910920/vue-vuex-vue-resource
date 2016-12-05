<template>
  <div class="img-responsive" style="background-size:100%;">
    <img :src='src | cover_pic'  style="width: 70px; transition: all 1.2s ease;">
  </div>
</template>


<script>
  export default{
    
    props: {
      src: {
        type: Array,
        required: true
      },
      
    }
  }
</script>
