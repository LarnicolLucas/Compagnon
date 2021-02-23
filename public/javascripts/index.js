import ContainerDashBoard from './components/container_dash_board.js'

import model from './data_compagnon.js'

var palette0= {
  primary: "#00d2ff",
  contrast: "#FF9132"
};
var palette1= {
  primary: "#cf8bf3",
  contrast: "#95A357"
};
var palette2= {
  primary: "#0f3443",
  contrast: "#AF4E61"
};
var palette3= {
  primary: "#DD5E89",
  contrast: "#9FE160"
};
var palette= {
  primary: "#2BC0E4",
  contrast: "#FF942A"
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