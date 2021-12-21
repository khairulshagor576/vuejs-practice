const app = Vue.createApp({
    data(){
        return{
          mobile:"",
        }
    },
    watch:{
       mobile(newvalue){

        if(isNaN(newvalue))
        {
            alert("Enter the valid number!");
        }
        
        if(newvalue.length==11)
        {
            alert("this is your valid number");
        }

       } 
    },
    methods:{
  
    }

});

app.mount("#app");