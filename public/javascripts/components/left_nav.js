import dev_menu from './nav/dev_menu.js'
import onglet from './nav/onglet.js'
import footer from './nav/footer.js'
import navigation from './nav/navigation.js'


const left_nav = {
    template: `
        <article 
            style="position: relative; width: 100%; height: 70%"
        >

        <footer_nav style="position: absolute; bottom: 0"></footer_nav>
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
                            darkMode: props.darkMode,
                            init: keys.init,
                            id: keys.id
                        }"
                        @ongletSelected= "ongletSelected"
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

            navigation: navigation,
            
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
        },
        ongletSelected: function(e){
            const id = e.id;
            const nom = e.nom;
            this.navigation.forEach(el => el.id == id ? el.init = false : el.init = true)

        }
    },
    components: {
        dev_menu : dev_menu,
        onglet: onglet,
        footer_nav: footer
    }
}

export default left_nav