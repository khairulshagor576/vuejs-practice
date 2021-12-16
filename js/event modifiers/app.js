const app = Vue.createApp({
    data(){
        return {
                count:0
               }
            },
    methods: {
        increment(amount){
            this.count =this.count+amount;
        },
        decrement(amount){
            if(this.count>0){
                this.count=this.count-amount;
            }
            
        },
        test(){
            console.log("Showing test function is successfully!");
        },
        mounted() {
            setInterval(()=>{
              this.count++;
            },1000);
        },
        // getDateTime(){
        //     let ct = new Date();
        //     return ct;
        // }
    },
    
});

app.mount("#app");