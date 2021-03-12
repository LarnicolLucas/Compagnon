import card from './card.js'
import left_nav from './left_nav.js'
import items_list from './items_list.js'
import polygraph from './stat/polygraph.js'
import graph from './graph.js'
import stats from './stats.js'
import resizedirective from './directive/resize.js'

const dashboard = {
    template: `

        <article 
            :class="{'fixedHeight80': props.isLarge}"
            style="margin-top: 10vh; display: flex; position: relative;"
        >
            <div class="borderRadius glass hide-on-med-and-down" style="position: absolute; top: 0; left: 0; width: 100%; height: 80vh;"></div>
            <div 
                class="leftNavBar hide-on-med-and-down"
                :class='{
                    "lightModeColor2" : props.lightMode, 
                    "darkModeColor": props.darkMode,
                    "animationExtend": !state_menu_open,  
                    "animationNoExtend": state_menu_open
                }'
                style="height: 80vh; z-index: 100; margin_left: 0;"
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
                            style="position: relative;"
                        >
                            <items_list :props="props" @itemclicked="changeItem" @gesteclicked="changeGeste"></items_list>
                        </div>


                    </div>    
                    <div class="row">
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
                            style='height: 30vh;'
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
            selected_item: 0,
            selected_geste: 0,

            stat_size_container: 0,
            graph_size_container: {width: 0, height: 0} 
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
        },

        changeSizeStat: function(event, el){
            this.stat_size_container = el.offsetWidth
        },
        changeSizeGraph: function(event, el){
            this.graph_size_container = {
                width: el.offsetWidth ,
                height: el.offsetHeight
            }
        },
    },
    components:{
        left_nav: left_nav,
        card: card,
        items_list: items_list,
        polygraph: polygraph,
        graph: graph,
        stats: stats

    },
	directives: {
		resize : resizedirective
	},
    mounted: function(){
        this.stat_size_container = this.$refs.stat_container.offsetWidth;
        this.graph_size_container = {
            width: this.$refs.graph_container.offsetWidth,
            height: this.$refs.graph_container.offsetHeight
        };
    }
}

export default dashboard
