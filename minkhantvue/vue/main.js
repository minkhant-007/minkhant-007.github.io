const app = Vue.createApp ({
    data() {
        return {
            name:"Min Khant",
            age:22,
            profile: "image/profile.jpeg",
            para: '<span style= "color: red;">This is a text.</span>',
            seen: true,
            mark: 30,
            students:[
                {name:"ma ma" , age:15 , gender:"female"},
                {name:"mg mg", age:16, gender:"male"},
                {name: "ko ko", age:18, gender:"male"}
            ],
            yourname:"",

        }
    },methods:{
        reverse() {
            this.name = this.name.split('').reverse().join('')
        },
    },computed:{
        girls(){
            return this.students.filter(row=>row.gender=="female")
        },
        boys(){
            return this.students.filter(row=>row.gender=="male")
        },
    }
})