const svg_graph = {
    template: `
        <svg :width="props.width" :height="props.height" xmlns="http://www.w3.org/2000/svg">
			<path :d="path" :stroke="props.color" fill="transparent"/>
        </svg>
    `,
    //{width, height, coordonates, color}
    props:["props"],
	data: function(){
		return {
			coordonates: this.props.coordonates,
			animated_coordonates: this.createPath(this.props.coordonates, this.props.width, this.props.height)
			
		}
	},
    computed: {
        path: function(){
			return this.animated_coordonates;
        }
    },
	
	 watch: {
		coordonates: function(newValue){
			gsap.to(this.$data, {duration: 0.7, animated_coordonates: this.createPath(newValue, this.props.width, this.props.height) , ease: "elastic.out(1, 0.3)"});
		}
	},
    methods: {
        createPath : (coo, maxWidth, maxHeight) => {
			let res = `M 0 ${maxHeight} `;
				coo.forEach(el => {
				res+= `L ${(el[0]*maxWidth)/100} ${-((el[1]*maxHeight)/100) + maxHeight } `
			})
			return res
		}
    }
}

export default svg_graph