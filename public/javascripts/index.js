import ContainerDashBoard from './components/container_dash_board.js'

var app = new Vue({
    el: '#app',
    data: {
      params:{
        lightMode: true,
        darkMode: false,
        isLarge: true,
        isMobile: false,

        agent: {
          nom: "* Usher",
          prenom: "*",
          cursus_actuel: "En progression avec frottement",
          habilitation: "H1V B1",

          IMD: 30,
          PST: 1,
          VPS: 0,

          chemin_avatar: "/images/avatar.jpg"
        }
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