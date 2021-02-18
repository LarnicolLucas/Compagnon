import card from './card.js'
import left_nav from './left_nav.js'
import items_list from './items_list.js'
import polygraph from './stat/polygraph.js'
import graph from './graph.js'

const dashboard = {
    template: `

        <article 
            class="fixedHeight80"
            style="margin-top: 10vh; display: flex; position: relative;"
        >
            <div class="borderRadius glass" style="position: absolute; top: 0; left: 0; width: 100%; height: 80vh;"></div>
            <div 
                class="leftNavBar hide-on-med-and-down"
                :class='{
                    "lightModeColor2" : props.lightMode, 
                    "darkModeColor": props.darkMode,
                    "animationExtend": !state_menu_open,  
                    "animationNoExtend": state_menu_open
                }'
                style="height: 80vh;"
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
                            class="col s10 offset-s1 l4 offset-l1"
                            style="margin-top: -6vh; position: relative;"
                        >
                            <card :props="props"></card>
                        </div>


                        <div 
                            class="col s10 offset-s1 l6 offset-l1"
                        >
                            <items_list :props="props" @itemclicked="changeItem" @gesteclicked="changeGeste"></items_list>
                        </div>


                    </div>    
                    <div class="row">
                        <div
                            class="col s5 offset-s1 l4 offset-l1 glass borderRadius center-align"
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

                        <div
                            class="col s5 offset-s1 l5 offset-l1 glass borderRadius center-align"
                            style='margin-top: 5vh; height: 30vh;'
                        >
                            <graph :props="props" :id_geste="selected_geste" :id_item="selected_item"></graph>
                        </div>


                    </div>
            </aside>
            
        </article>
    `,
    props: ['props'],
    data: function(){
        return{
            state_menu_open : true,
            selected_item: 0,
            selected_geste: 0
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
        },

        changeGeste: function(e){
            this.selected_geste = e;
        }
    },
    components:{
        left_nav: left_nav,
        card: card,
        items_list: items_list,
        polygraph: polygraph,
        graph: graph

    }
}

export default dashboard
