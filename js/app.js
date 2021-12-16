const app = Vue.createApp({
    data(){
        return {
            name:"",
        }
    },
    methods: {
        handlekeyup(e){
           this.name=e.target.value;
        },
        handleFromSubmit()
        {

        },
        handleClick(e)
        {
            console.log(e);
            console.log("Card Click!");
        },
        handleClickButton(e)
        {
            console.log(e); 
            console.log("Button Click");
        }
    },
    
});

app.mount("#app");