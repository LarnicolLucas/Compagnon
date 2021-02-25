import svg_graph from './graph/svg_graph.js'

const graph = {
    template: `
    <div
        :class="{'darkModeTextColor': props.darkMode, 'lightModeTextColor': props.lightMode}"
    ><span class="hide">{{size_container}}</span>
        <svg_graph :props="{
            color: props.color_contrast,
            width: size.width,
            height: size.height,
            coordonates: points,
            echelle_de_notation: props.model.echelle_de_notation,
            titre: this.props.model.items_metier[id_item].list[id_geste].nom
        }"></svg_graph>
    </div>
    `,
    props: ['props','id_geste', 'id_item', 'size_container'],
    computed: {

        points: function(){
            const list_all_geste_by_inter = this.createNewListGeste(this.props.model.interventions);

            const list = this.selectGesteById(list_all_geste_by_inter, this.id_item, this.id_geste);

            const list_coordonates = this.convertListToCoordonate(list);

            return list_coordonates
        },

        size: function(){
            return { width: (this.size_container.width * 0.6), height: (this.size_container.height * 0.6) }
        },
        
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

        findMaxAndMin: function(list_of_object){

            let array_of_numbers = list_of_object.map(el=> el.date_num);
            let max = array_of_numbers.reduce((acc, cur)=> Math.max(acc, cur));
            let min = array_of_numbers.reduce((acc, cur)=> Math.min(acc, cur));  
            
            return {
                max: max,
                min: min
            }
        },

        addNumericDateToListObject: function(list_of_object){
            return list_of_object.map(el => Object.assign(el, {date_num: (new Date(this.convertDate(el.date)[0], this.convertDate(el.date)[1], this.convertDate(el.date)[2] )).getTime()}));
        },

        convertListToCoordonate: function(list){

            if(list.length < 2){

                return [[0,0]];

            } else {

                let list_with_num_date = this.addNumericDateToListObject(list);
                const max_min = this.findMaxAndMin(list_with_num_date);
                const max_x = max_min.max;
                const min_x = max_min.min;

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