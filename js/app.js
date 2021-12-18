const app = Vue.createApp({
    data(){
        return {
            skills:[
            {name:"HTML",exprience:5},
            {name:"CSS",exprience:6},
            {name:"Bootstrap",exprience:7},
            {name:"JS",exprience:10}],
            newSkill:{},
        }
    },
    methods:{
        addNewSkill()
        {
            this.skills.push({name:this.newSkill,exprience:0});
            this.newSkill={};
        },
        removeSkill(i)
        {
          this.skills.splice(i,1);
        }
    }

});

app.mount("#app");