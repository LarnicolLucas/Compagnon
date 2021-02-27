import card from './card.js'
import left_nav from './left_nav.js'
import items_list from './items_list.js'
import polygraph from './stat/polygraph.js'

const dashboard = {
    template: `

        <article 
            class="fixedHeight80"
            style="margin-top: 10vh; display: flex; position: relative;"
        >
            <div class="borderRadius glass" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></div>
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
                    style="z-index: 2;"
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
                            style="margin-top: -10vh; position: relative;"
                        >
                            <card :props="props"></card>
                        </div>


                        <div 
                            class="col s10 offset-s1 l5 offset-l2"
                        >
                            <items_list :props="props" @itemclicked="changeItem"></items_list>
                        </div>

                        <div
                            class="col s10 offset-s1 l4 offset-l1 glass borderRadius center-align"
                            v-resize="changeSizeStat"
                            ref="stat_container"
                        >
                            <stats 

                                :props="props"
                                :id_item="selected_item"
                                :list_geste="props.model.items_metier[selected_item].list"
                                :size_container="stat_size_container"
                            ></stats>
                        </div>

                        <div
                            class="col s10 offset-s1 l5 offset-l1 glass borderRadius center-align"
                            style='margin-top: 2vh; height: 30vh;'
                            v-resize="changeSizeGraph"
                            ref="graph_container"
                        >
                            <graph 
                                :props="props" 
                                :id_geste="selected_geste" 
                                :id_item="selected_item"
                                :size_container="graph_size_container"
                            ></graph>
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
