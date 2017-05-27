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
    position: sticky!important;
    left: 0;
    top: 0;
    z-index: 100;
    background:#f2f7fc;
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
