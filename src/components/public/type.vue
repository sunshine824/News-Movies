<template>
  <li>{{item}}</li>
</template>
<script>
  export default {
    props:["item"],
    data(){
      return {

      }
    }
  }
</script>
<style lang="less">
  .type{
    padding: 0.2rem 0.3rem;
    border-bottom: 1px solid #999;
    ul{
      display: -webkit-box;
      display: box;
      -webkit-box-pack: justify;
      padding: 0.05rem;
      li{
        font-size: 0.3rem;
        color: #666;
        display:block;
      }
    }
  }
</style>
