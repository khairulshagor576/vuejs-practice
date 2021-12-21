const app = Vue.createApp({
    data(){
        return{
          skills:[
            {name:"php",exprience:5},
            {name:"python",exprience:2},
            {name:"dart",exprience:3},
            {name:"jave",exprience:5},
            {name:"javascript",exprience:3},
          ]
        }
    },
    computed:{
        totalCount(){
            console.log("count from method");
            return this.skills.length;
        },
    },
    methods:{
        removeSkill(i)
        {
          this.skills.splice(i,1);
        },
        
    }

});

app.mount("#app");