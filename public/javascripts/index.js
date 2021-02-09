import card from './components/card_glass.js'

var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    },
    components: {
        card: card
    }
  })