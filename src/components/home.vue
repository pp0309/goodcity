<template>
    <div class="home">
   
    </div>
</template>
<script>

export default {
    components:{
       
    },
    data () {
        return {
                
        }
    },
    created(){
      console.log(new Date().getTime())
       this.$axios({
      method:"post",
      url:"/api/activity/redpocketrain-info.do?_="+new Date().getTime(),
      data:{
       eventId:"10364"
      },
      headers:{
        "content-type": "application/json"
      }
      //如果需要携带COOkie验证的时候
     // withCredentials: true,
    }).then((res)=>{
      console.log(res)
    })
    },
}
</script>
<style lang="">
   
</style>