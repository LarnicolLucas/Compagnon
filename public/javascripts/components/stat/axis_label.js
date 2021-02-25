const axis_label = {
	template: `
		<text
         :class="{'darkModeTextColor': props.darkMode, 'lightModeTextColor': props.lightMode}"
		 :x="point.x" 
		 :y="point.y"
		>{{stat.nom}}</text>
	`,
	props: {
        stat: Object,
        index: Number,
        total: Number,
		props: Object
    },

    computed: {
		point: function() {
			return this.valueToPoint(
			(this.stat.maitrise/100) * this.props.size/2,
			this.index,
			this.total,
			this.props.size
            );
        }
    },
	methods: {
		valueToPoint: function(value, index, total, size) {
			var x = 0;
			var y = -value * 0.8;
			var angle = ((Math.PI * 2) / total) * index;
			var cos = Math.cos(angle);
			var sin = Math.sin(angle);
			var tx = x * cos - y * sin + (size/2);
			var ty = x * sin + y * cos + (size/2);
			return {
			  x: tx,
			  y: ty
			};
		}
	}
}

export default axis_label