import ContainerDashBoard from './components/container_dash_board.js'

var app = new Vue({
    el: '#app',
    data: {
      params:{
        lightMode: true,
        darkMode: false,
        isLarge: true,
        isMobile: false
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