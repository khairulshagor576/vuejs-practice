const app = Vue.createApp({
    data(){
        return {
            skills:[
            {name:"HTML",exprience:5},
            {name:"CSS",exprience:6},
            {name:"Bootstrap",exprience:7},
            {name:"JS",exprience:10}],
            newSkill:{name:"",exprience:0},
        }
    },
    methods:{
        addNewSkill()
        {
            this.skills.push(this.newSkill);
            this.newSkill={};
        },
        removeSkill(i)
        {
          this.skills.splice(i,1);
        }
    }

});

app.mount("#app");