import svg_rect from './svg_rect.js'

const svg_graph = {
    template: `
		<div>
			<h6> {{props.titre}} </h6>
			<svg :width="props.width" :height="props.height" xmlns="http://www.w3.org/2000/svg">

				<svg_rect 
					v-for="keys in path"
					:key="keys.id"
					:props="{
						y: keys.height,
						x: keys.posX,
						height: props.height,
						width: width_rect,
						color: props.color
					}"
				></svg_rect>
				<g>

					<path v-for="keys in list_legends" :d="keys.path" stroke="grey" fill="transparent"/>
					<path :d=" 'M 0 '+this.props.height +' V 0'" stroke="grey" fill="transparent"/>

				</g>
			</svg>
		</div>
    `,
    //{width, height, list_inter, color}
    props:["props"],

    computed: {
		days_number : function(){
			return (this.props.list_inter.last_date - this.props.list_inter.first_date) / (1000 * 3600 * 24);
		},
		width_rect : function(){
			const marg = 0.01;
			return this.props.width/(this.days_number * (1 - marg))
		},
        path: function(){
			return this.convertToHeight(this.props.list_inter, this.props.height, this.props.width, this.props.echelle_de_notation)
        },
		list_legends: function(){
			let res = [];
			for(let i = 0; i< this.props.echelle_de_notation; i++){
				res.push(null)
			};
			return res.map((el,i) => {return {path: `M 0 ${(this.props.height/this.props.echelle_de_notation)*(i+1)} H ${this.props.width}`, id: i}}) 
		}
    },
	
    methods: {
        convertToHeight: function(interventions, height, width, scale){
			const res_height = interventions.list.map(el => {return {height: Math.round((-height * (el.maitrise/ scale)) + height) }});
			const posDateNumber = function(date_number, width, min, max){
				return (width / (min - max)) * (-date_number + min)
			};
			const res_position_X = interventions.list.map(el => {return {posX: Math.round(posDateNumber(el.date_num, width, interventions.first_date, interventions.last_date))}});

			const result = res_height.map((el, i) => Object.assign(el, res_position_X[i]));
			return result
		}
    },
	components: {
		svg_rect : svg_rect
	}
}

export default svg_graph