import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

// Genero due cicli for con vue, uno che cicla in un array di quattro 
// elementi e li stampa su schermo, l'altro che stampa su schermo i primi 10 numeri.

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      array: [
        'ciao',
        345,
        "Python",
        2 + 1
      ]
    }
  }
}).mount('#app')