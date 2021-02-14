import ContainerDashBoard from './components/container_dash_board.js'

import model from './data_compagnon.js'

var palette= {
  primary: "#aaaa39",
  contrast: "purple"
};

var app = new Vue({
    el: '#app',
    data: {
      params:{
        lightMode: true,
        darkMode: false,
        isLarge: true,
        isMobile: false,

        color_contrast: palette.contrast,
        color_primary: palette.primary,

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