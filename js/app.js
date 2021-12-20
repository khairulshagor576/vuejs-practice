const app = Vue.createApp({
    data(){
        return{
            user:"khairul",
            x:0,
            y:0
        }
    },
    methods:{
        changeUser(){
            setTimeout(()=>{
                this.user="Islam";
            },2000);
        },
        mouseMove(event)
        {
          //console.log(event);
          this.x=event.clientX;
          this.y=event.clientY;
        }
    }

});

app.mount("#app");