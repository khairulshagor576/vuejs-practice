const app = Vue.createApp({
    data(){
        return{
          show:false,
          link:"https://www.google.com/"
        }
    },
    methods:{
        toggle()
        {
            this.show = !this.show;
        }
    }

});

app.mount("#app");