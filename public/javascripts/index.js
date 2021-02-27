import ContainerDashBoard from './components/container_dash_board.js'
import resizedirective from './components/directive/resize.js'
import navbar from './components/mobil_side_navbar.js'
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

        width: null,
        height: null,

        color_contrast: palette.contrast,
        color_primary: palette.primary,

        model: model
      }
    },
    methods:{
      changeMode: function(){
        this.params.lightMode = !this.params.lightMode;
        this.params.darkMode = !this.params.darkMode
      },
      resizeAnalyse: function(e){
        const width = window.screen.width;
        const height = window.screen.height;

        if(width <= 992 || window.innerWidth <= 992){
          this.params.isLarge = false;
          this.params.isMobile = true;
        } else {
          this.params.isLarge = true;
          this.params.isMobile = false;
        };

        this.params.width = width;
        this.params.height = height;

      }
    },
    components: {
      containerdashboard: ContainerDashBoard,
      navbarmobile: navbar
    },
    directives: {
      resize: resizedirective
    },
    mounted: function(){
      const e = {
        currentTarget: {
          screen: {
            width: window.screen.width,
            height: window.screen.height,
          }
        }
      }
      this.resizeAnalyse(e);
      M.Sidenav.init(document.querySelectorAll('.sidenav'));
      this.params.model.interventions = interventions_serv;

      console.log(this.params.model.interventions)
    }
  })