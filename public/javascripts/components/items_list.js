import table from './table.js'

const items_list = {
    template: `
        <div 
            class="row glass borderRadius"
            :class="{'darkModeTextColor': props.darkMode, 'lightModeTextColor': props.lightMode}"
            >
            <div class="col s12">
                <ul 
                    class="tabs borderRadius" 
                    ref="tab"
                    style="background: none;"

                >
                    <li 
                        class="tab col s4"
                        v-for="keys in props.model.items_metier"
                        :key="keys.id"
                    >
                        <a 
                            style="font-size: 10px;" 
                            :href=" '#tabList' + keys.id "
                            :style="{color: colorTabs[keys.domaine], padding: '10px'}"
                            @click="$emit('itemclicked', keys.id)"
                        > {{keys.nom}} </a>
                    </li>
                </ul>
            </div>

            <div 
                :id=" 'tabList'+keys.id " 
                class="col s12"
                v-for="keys in props.model.items_metier"
                :key="keys.id"
                style="height: 300px; overflow: auto;"
            >
                <table_geste
                    :props="{
                        list_geste: keys.list,
                        list_interventions: props.model.interventions,
                        id_item: keys.id,
                        darkMode: props.darkMode,
                        lightMode: props.lightMode
                    }"
                    @gesteclicked="$emit('gesteclicked', $event)"
                ></table_geste>
            </div>
        </div>
    `,
    props:['props'],
    data: function(){
        return {
            colorTabs: {
                "C4": "#ff6600",
                "C1/C2/C3": "#74EA9A",
            }
        }
    },
    mounted: function() {
        const el = this.$refs.tab;
        var M_instance = M.Tabs.init(el, { duration: 100});
    },
    components: {
        table_geste: table
    }
}

export default items_list