import card from './card.js'
import left_nav from './left_nav.js'
import items_list from './items_list.js'
import polygraph from './stat/polygraph.js'

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
                    <div class="row">


                        <div 
                            class="col s10 offset-s1 l3 offset-l1"
                            style="margin-top: -10vh;"
                        >
                            <card :props="props"></card>
                        </div>


                        <div 
                            class="col s10 offset-s1 l5 offset-l2"
                        >
                            <items_list :props="props" @itemclicked="changeItem"></items_list>
                        </div>


                        

                        <div
                            class="col s5 offset-s1 l3 offset-l2 glass borderRadius center-align"
                        >
                            <polygraph 

                                :props="{
                                    list_geste: props.model.items_metier[selected_item].list,
                                    list_interventions: props.model.interventions,
                                    id_item: props.model.items_metier[selected_item].id,
                                    darkMode: props.darkMode,
                                    lightMode: props.lightMode
                                }"
                            ></polygraph>
                        </div>

                    </div>
            </aside>
            
        </article>
    `,
    props: ['props'],
    data: function(){
        return{
            state_menu_open : true,
            selected_item: 0
        }
    },
    methods: {
        openmenu: function(){

            this.state_menu_open = true;

        },
        closemenu: function(){
            this.state_menu_open = false;
        },

        changeItem: function(e){
            this.selected_item = e;
        }
    },
    components:{
        left_nav: left_nav,
        card: card,
        items_list: items_list,
        polygraph: polygraph

    }
}

export default dashboard
