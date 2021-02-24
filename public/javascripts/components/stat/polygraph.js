import axis_label from './axis_label.js'
import mixin_bilan_maitrise_geste from '../mixins/mixin_bilan_maitrise_geste.js'

const polygraph = {
	template: `
		<svg class="responsive-img" width="200" height="200">
			<g>
				<polygon stroke-linejoin="round" :points="points"></polygon>
				<circle v-for="keys in circleLegends" :cx="size_circle" :cy="size_circle" :r="keys.r"></circle>
				<axis_label
				v-for="(stat, index) in stats"
				:key="index"
				:stat="stat"
				:index="index"
				:total="stats.length"
				:props="{darkMode: props.darkMode, lightMode: props.lightMode}"
				>
				</axis_label>
			</g>
		</svg>
	`,
	props:['props'],
	data: function(){
		return {
			animated_coordonates: this.createPoints(this.props.points),
			size_circle: 100
		}
	},
	computed: {
		stats: function(){
			return this.props.points;
		},

        points: function() {
            return this.animated_coordonates
        },
		circleLegends: function(){

			const recursiveFunction = (iteration, echelle, circle_size, array) => {
				
				if(iteration > echelle) {
					return array
				} else {
					let res = array.concat({
						id: iteration, 
						r: ((circle_size*0.8) / echelle) * iteration
					});

					return recursiveFunction(iteration+1, echelle, circle_size, res)
				}
			}

			return recursiveFunction(0, this.props.echelle_de_notation, this.size_circle, [])

		}
    },
	watch: {
		stats: function(newValue){
			gsap.to(this.$data, {duration: 0.7, animated_coordonates: this.createPoints(newValue) , ease: "elastic.out(1, 0.3)"});
		}
	},
	methods:{
		valueToPoint: axis_label.methods.valueToPoint,

		createPoints: function(list){
			var total = list.length;
			const app = this;
            return list.map(function(stat, i) {
                var point = app.valueToPoint(stat.maitrise, i, total);
                return point.x + "," + point.y;
              })
              .join(" ");
		},
	},
	components: {
		axis_label: axis_label
	}
}

export default polygraph