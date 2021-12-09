const app = Vue.createApp({
    data(){
        return {
                msg:"Hi, Mohammad Khaiurl Islam",
                information:{
                    name:"Mohammad Khaiurl Islam",
                    email:"khairul@outlook.com",
                    githublink:"https://github.com/khairulshagor576"
                },
                htmlCode:'<a href="https://github.com/khairulshagor576">Github</a>',
               }
            },
    methods: {
        getDateTime(){
            let ct = new Date();
            return ct;
        }
    },
    
});

app.mount("#app");