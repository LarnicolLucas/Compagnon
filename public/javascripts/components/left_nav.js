import dev_menu from './nav/dev_menu.js'
import onglet from './nav/onglet.js'


const left_nav = {
    template: `
        <article 
            style="position: relative; width: 100%; height: 100%"
        >
            <div class="row">



            </div>
            <div class="row" style="margin-top: 100px; margin-left: 0.5em;">

                <div
                    v-for="keys in navigation"
                    :key="keys.id"
                    class="col s12"
                >

                    <onglet 
                        :props="{
                            icon: keys.icon,
                            nom: keys.nom,
                            hide: menu_open,
                            color: props.color_contrast,
                            lightMode: props.lightMode,
                            darkMode: props.darkMode
                        }"
                    ></onglet>
                
                </div>
                
            </div>

            <aside>
                <dev_menu 
                    :props="{color: props.color_contrast, lightMode: props.lightMode, darkMode: props.darkMode}"
                    @menuclose="closemenu"
                    @menuopen="openmenu"
                ></dev_menu>
            </aside>
        </article>
    `,
    props: ['props'],
    data: function(){
        return {
            menu_close : false,
            menu_open : true,

            navigation: [
              {
                id:0,
                nom: "Tableau de bord",
                icon: "leaderboard"
              },
              {
                id:1,
                nom: "Historique des Interventions",
                icon: "calendar_today"
              },
              {
                id:2,
                nom: "Cursus de Formation",
                icon: "timeline"
              },
              {
                id:3,
                nom: "Items et Agents",
                icon: "playlist_add"
              },
            ],
            footer: {
                nom: "Footer",
                icon: "forward",
                chemin_illustration: "/images/illustration_nav"
            }
        }
    },
    methods: {
        closemenu: function(){
            this.menu_close = true;
            this.menu_open = false;
            this.$emit("menuclose")
        },
        openmenu: function(){
            this.menu_close = false;
            this.menu_open = true;;
            this.$emit("menuopen")
        }
    },
    components: {
        dev_menu : dev_menu,
        onglet: onglet
    }
}

export default left_nav