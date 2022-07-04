// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

var app = new Vue(
    {
        el:'#root',
        data: {
            currentEmail: 0,
            emailArray: []
        },
        methods: {
        },
        mounted() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
               this.emailArray.push(response.data.response);
            });

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
               this.emailArray.push(response.data.response);
            });

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                this.emailArray.push(response.data.response);
            });

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                this.emailArray.push(response.data.response);
            });

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                this.emailArray.push(response.data.response);
            });

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                this.emailArray.push(response.data.response);
            });

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                this.emailArray.push(response.data.response);
            });

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                this.emailArray.push(response.data.response);
            });

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                this.emailArray.push(response.data.response);
            });

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                this.emailArray.push(response.data.response);
            });
        }
    }
);