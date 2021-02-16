import axis_label from './axis_label.js'
import mixin_bilan_maitrise_geste from '../mixins/mixin_bilan_maitrise_geste.js'

const polygraph = {
	template: `
		<svg width="200" height="200">
			<g>
				<polygon stroke-linejoin="round" :points="points"></polygon>
				<circle cx="100" cy="100" r="80"></circle>
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
	computed: {
		stats: function(){
			return this.convertStats();
		},

        points: function() {
            var total = this.stats.length;
			const app = this;
            return this.stats.map(function(stat, i) {
                var point = app.valueToPoint(stat.maitrise, i, total);
                return point.x + "," + point.y;
              })
              .join(" ");
        }
    },
	props:['props'],

	methods:{
		valueToPoint: axis_label.methods.valueToPoint,
		convertStats : function(){
			const list = this.CreateBilan();
			const list_without_null = list.filter(el => el.maitrise > 0);
			return list_without_null.map(el => { return {nom: el.nom, maitrise: (el.maitrise / 4) * 100} })
		}	
	},
	mixins: [mixin_bilan_maitrise_geste],
	components: {
		axis_label: axis_label
	}
}

export default polygraph