const app = Vue.createApp({
    data(){
        return{
            aboutMe:{
                name:"Khairul",
                email:"khairulshagor@outlook.com",
                age:30
            }
        }
    },
    methods:{
        addToSalaryA()
        {
            return this.salary+this.a;
        },
        addToSalaryB()
        {
            return this.salary+this.b;
        }
    }

});

app.mount("#app");