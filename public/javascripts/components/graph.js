const graph = {
    template: `
    <div
        :class="{'darkModeTextColor': props.darkMode, 'lightModeTextColor': props.lightMode}"
    >
        <div v-for="keys in points">
            {{keys}}
        </div>
    </div>
    `,
    props: ['props','id_geste', 'id_item'],
    computed: {

        points: function(){
            const list_all_geste_by_inter = this.createNewListGeste(this.props.model.interventions);

            return this.selectGesteById(list_all_geste_by_inter, this.id_item, this.id_geste)
        }
        
    },
    methods: {

        addDateToGeste: function(intervention){
            return intervention.geste_metier.map(el => Object.assign(el, {date : intervention.date}))
        },

        createNewListGeste: function(interventions) {
            let res = [];
            interventions.forEach(el => {
                res = res.concat(this.addDateToGeste(el));
            });
            return res
        },

        selectGesteById: function(list, id_item, id_geste){
            return list.filter(el => el.id_geste == id_geste && el.id_item == id_item)
        }

    }
}

export default graph