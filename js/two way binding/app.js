const app = Vue.createApp({
    data(){
        return {
            num:"",
            result:"",
        }
    },
    methods: {
        // handleInput(e){
        //     this.num=e.target.value;
        //   //console.log(e);
        // },
        getDouble(){
           this.result=this.num*2;
        },
        getSquare(){
            this.result=this.num*this.num;
         },
        addTen(){
            this.result=this.num+10;
         }, 
        getReset(){
            this.num="";
            this.result="";
         }, 
        
    },
    
});

app.mount("#app");