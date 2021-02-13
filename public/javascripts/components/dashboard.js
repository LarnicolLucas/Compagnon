import card from './card.js'
import left_nav from './left_nav.js'

const dashboard = {
    template: `

        <article 
            class="glass borderRadius fixedHeight80"
            style="margin-top: 10vh; display: flex;"
        >
            <div 
                class="leftNavBar margTopBot hide-on-med-and-down"
                :class='{
                    "lightModeColor" : props.lightMode, 
                    "darkModeColor": props.darkMode,
                    "animationExtend": !state_menu_open,  
                    "animationNoExtend": state_menu_open
                }'
            >
                <left_nav 
                    :props="{
                        color_contrast: props.color_contrast, 
                        color_primary: props.color_primary,
                        darkMode: props.darkMode,
                        lightMode: props.lightMode
                    }"
                    @menuclose="closemenu"
                    @menuopen="openmenu"
                ></left_nav>
            </div>

            <aside class="row main_content margTopBot">
                <div 
                    class="col s10 l3 offset-s1 offset-l7"
                    style="margin-top: -10vh;"
                >
                    <card :props="props"></card>
                </div>
            </aside>
            
        </article>
    `,
    props: ['props'],
    data: function(){
        return{
            state_menu_open : true,
        }
    },
    methods: {
        openmenu: function(){

            this.state_menu_open = true;

        },
        closemenu: function(){
            this.state_menu_open = false;
        }
    },
    components:{
        left_nav: left_nav,
        card: card

    }
}

export default dashboard
