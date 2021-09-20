

// const assignment = Vue.createApp({
//     data(){
//         return{
//             firstInput: '',
//             secondInput: '',
//             confirmedInput: ''
//         };
//     },
//     methods: {
        
//     }
// });

// assignment.mount('#assignment');


var assignment = new Vue({
    el: '#assignment',
    data:{
        firstInput: '',
        secondInput: '',
        confirmedInput: ''
    },
    methods:{
        submit(){
            alert('Form Submitted!');
        },
        firstOutput(event){
            this.firstInput = event.target.value;
        },
        secondOutput(event){
            this.secondInput = event.target.value;
        }
    }
})