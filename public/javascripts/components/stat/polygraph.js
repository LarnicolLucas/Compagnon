import axis_label from './stat/axis_label.js'
import mixin_bilan_maitrise_geste from './mixin/mixin_bilan_maitrise_geste.js'

const polygraph = {
	template: `
		<g>
			<polygon :points="points"></polygon>
			<circle cx="100" cy="100" r="80"></circle>
			<axis_label
			  v-for="(stat, index) in stats"
			  :stat="stat"
			  :index="index"
			  :total="stats.length">
			</axis_label>
		 </g>
	`,
	computed: {

        points: function() {
            var total = this.stats.length;
            return this.stats.map(function(stat, i) {
                var point = this.valueToPoint(stat.maitrise, i, total);
                return point.x + "," + point.y;
              })
              .join(" ");
          }
        },
	props:['props'],
	data: function(){
		return {
			stats : [
				{ label: "A", value: 100 },
				{ label: "B", value: 100 },
				{ label: "C", value: 100 },
				{ label: "D", value: 50 },
				{ label: "E", value: 100 },
				{ label: "F", value: 100 }
			]
		}
	},
	methods:{
		valueToPoint: axis_label.methods.valueToPoint,
		
		initModelForPoints: function(){
			
		},
	},
	mixins: [mixin_bilan_maitrise_geste],
	components: {
		axis_label: axis_label
	},
	mounted: function(){
		this.stats = this.CreateBilan()
	}
	
	
}

export default polygraph