const items_list = {
    template: `
        <div class="row">
            <div class="col s12">
                <ul 
                    class="tabs borderRadius" 
                    ref="tab"
                >
                    <li 
                        class="tab col s4"
                        v-for="keys in props.model.items_metier"
                        :key="keys.id"
                    >
                        <a 
                            style="font-size: 10px;" 
                            :href=" '#tabList' + keys.id "
                            :style="{color: colorTabs[keys.domaine]}"
                        > {{keys.nom}} </a>
                    </li>
                </ul>
            </div>

            <div 
                :id=" 'tabList'+keys.id " 
                class="col s12"
                v-for="keys in props.model.items_metier"
                :key="keys.id"
            >{{keys.nom}}</div>
        </div>
    `,
    props:['props'],
    data: function(){
        return {
            colorTabs: {
                "C4": "#EADE74",
                "C1/C2/C3": "#74EA9A",
            }
        }
    },
    mounted: function() {
        const el = this.$refs.tab;
        var M_instance = M.Tabs.init(el, {swipeable: true});
    }
}

export default items_list