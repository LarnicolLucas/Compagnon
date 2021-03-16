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
            echelle_de_notation: props.model.echelle_de_notation,
            titre: this.props.model.items_metier[id_item].list[id_geste].nom,
            
            list_inter: list_inter
        }"></svg_graph>
    </div>
    `,
    props: ['props','id_geste', 'id_item', 'size_container'],
    computed: {

        list_inter: function(){

            const list_all_geste_by_inter_with_date = this.createNewListGeste(this.props.model.interventions, this.addDateToGeste);
            const list_with_numeric_date = this.addNumericDateToListObject(list_all_geste_by_inter_with_date, this.convertDate);
            const list_by_geste_and_item_and_numeric_date = this.selectGesteById(list_with_numeric_date, this.id_item, this.id_geste);

            const max_min = this.findMaxAndMin(list_with_numeric_date);

            return {
                list : list_by_geste_and_item_and_numeric_date,
                first_date : max_min.min,
                last_date: max_min.max
            }
        },

        size: function(){
            return { width: (this.size_container.width * 0.5), height: (this.size_container.height * 0.5) }
        },
        
    },
    methods: {

        addDateToGeste: function(intervention){
            return intervention.geste_metier.map(el => Object.assign(el, {date : intervention.date}))
        },

        createNewListGeste: function(interventions, fn) {
            return interventions.reduce((acc, cur, i)=> {
                if(i === 1){
                    return fn(acc)
                } else {
                    return [...acc, ...fn(cur)]
                }
            })
        },

        selectGesteById: function(list, id_item, id_geste){
            return list.filter(el => el.id_geste == id_geste && el.id_item == id_item)
        },

        convertDate: function(date){
            let array_date = date.split('/');
            array_date.reverse()
            return array_date.reverse()
        },

        addNumericDateToListObject: function(list_of_object, fn){
            return list_of_object.map(el => {
                const date_split = fn(el.date);
                return Object.assign(el, {date_num: (new Date(`${date_split[0]}/${date_split[1]}/${date_split[2]}`)).getTime()})
            })
        },

        findMaxAndMin: function(list_of_object){

            const array_of_numbers = list_of_object.map(el=> el.date_num);
            const max = array_of_numbers.reduce((acc, cur)=> Math.max(acc, cur));
            const min = array_of_numbers.reduce((acc, cur)=> Math.min(acc, cur)); 
            
            return {
                max: max,
                min: min
            }
        }
    },
    components: {
        svg_graph: svg_graph
    }
}

export default graph