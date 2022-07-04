// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

var app = new Vue(
    {
        el:'#root',
        data: {
            emailArray: []
        },
        methods: {
        },
        mounted() {
            for(let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    // METODO OPERATORE TERNARIO
                    // this.emailArray.includes(response.data.response) ? null : this.emailArray.push(response.data.response);

                    // METODO IF
                    if(!this.emailArray.includes(response.data.response)) {
                        this.emailArray.push(response.data.response)
                    } 
                });
            }
        }
    }
);