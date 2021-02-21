import svg_graph from './graph/svg_graph.js'

const graph = {
    template: `
    <div
        :class="{'darkModeTextColor': props.darkMode, 'lightModeTextColor': props.lightMode}"
    >
        <svg_graph :props="{
            color: '#000',
            width: 200,
            height: 200,
            coordonates: points
        }"></svg_graph>
    </div>
    `,
    props: ['props','id_geste', 'id_item'],
    computed: {

        points: function(){
            const list_all_geste_by_inter = this.createNewListGeste(this.props.model.interventions);

            let list = this.selectGesteById(list_all_geste_by_inter, this.id_item, this.id_geste);

            return this.convertListToCoordonate(list)
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
        },

        convertDate: function(date){
            const array_date = date.split('/');
            return array_date.reverse()
        },

        convertListToCoordonate: function(list){

            if(list.length < 2){

                return [[0,0]];

            } else {

                let list_with_num_date = list.map(el => Object.assign(el, {date_num: (new Date(this.convertDate(el.date)[0], this.convertDate(el.date)[1], this.convertDate(el.date)[2] )).getTime()}));
                let list_date = list_with_num_date.map(el=> el.date_num);
                let max_x = list_date.reduce((acc, cur)=> Math.max(acc, cur));
                let min_x = list_date.reduce((acc, cur)=> Math.min(acc, cur));
                let time = max_x - min_x;
                    
                return list_with_num_date.map(el => [(((el.date_num - min_x) / time)*100).toFixed(0) * 1,  (el.maitrise / this.props.model.echelle_de_notation) * 100])
            }
        }

    },
    components: {
        svg_graph: svg_graph
    }
}

export default graph