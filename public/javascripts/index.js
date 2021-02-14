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

        model: model
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