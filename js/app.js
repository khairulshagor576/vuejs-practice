const app = Vue.createApp({
    data(){
        return {
            activeClass:"",
        }
    },
    methods: {
        setClass(colorValue){
         this.activeClass=colorValue
        }
    },
    
});

app.mount("#app");