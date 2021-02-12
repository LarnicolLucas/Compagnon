import ContainerDashBoard from './components/container_dash_board.js'

import model from './data_compagnon.js'

var app = new Vue({
    el: '#app',
    data: {
      params:{
        lightMode: true,
        darkMode: false,
        isLarge: true,
        isMobile: false,
        color_call_to_action: "purple",

        model: model,
        chemin_fond_avatar: [
          "/images/fond_PST/0.jpg",
          "/images/fond_PST/1.jpg",
          "/images/fond_PST/2.jpg",
          "/images/fond_PST/3.jpg",
        ]
      }
    },
    methods:{
      changeMode: function(){
        this.params.lightMode = !this.params.lightMode;
        this.params.darkMode = !this.params.darkMode
      }
    },
    components: {
      containerdashboard: ContainerDashBoard
    }
  })