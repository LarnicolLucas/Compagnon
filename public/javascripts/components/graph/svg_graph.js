const svg_graph = {
    template: `
        <svg :width="props.width" :height="props.height" xmlns="http://www.w3.org/2000/svg">
			<path :d="path" :stroke="props.color" fill="transparent" stroke-width="3"/>
        </svg>
    `,
    //{width, height, coordonates, color}
    props:["props"],
	data: function(){
		return {
			animated_coordonates: this.createPath(this.props.coordonates, this.props.width, this.props.height)
			
		}
	},
    computed: {
        path: function(){
			return this.animated_coordonates;

        },
		coordonates: function(){
			return this.props.coordonates
		} 
    },
	
	 watch: {
		coordonates: function(newValue){
			gsap.to(this.$data, {duration: 0.7, animated_coordonates: this.createPath(newValue, this.props.width, this.props.height) , ease: "elastic.out(1, 0.5)"});
		}
	},
    methods: {
        createPath : (coo, maxWidth, maxHeight) => {
		
			let x = (el, maxW) => (el*maxW)/100;
			let y = (el, maxH) => -((el*maxH)/100) + maxH;
		
			const adjust_coordonates = coo.map(el => [x(el[0], maxWidth), y(el[1], maxHeight)]);
			
			const line = (pointA, pointB) =>{
				const lenX = pointB[0] - pointA[0];
				const lenY = pointB[1] - pointA[1];
				
				return {
					length : Math.sqrt(Math.pow(lenX, 2)+ Math.pow(lenX, 2)),
					angle  : Math.atan2(lenY, lenX)
				}
			};
			
			const controlPoint = (current, previous, next, reverse) => {
			  const p = previous || current;
			  const n = next || current;
			  const smoothing = 0.2;
			  const o = line(p, n);
			  const angle = o.angle + (reverse ? Math.PI : 0);
			  const length = o.length * smoothing;
			  const x = current[0] + Math.cos(angle) * length;
			  const y = current[1] + Math.sin(angle) * length;
			  return [x, y];
			};
			
			const bezierCommand = (point, i, a) => {
			  const [cpsX, cpsY] = controlPoint(a[i - 1], a[i - 2], point)
			  const [cpeX, cpeY] = controlPoint(point, a[i - 1], a[i + 1], true) 
			  
			  return `C ${cpsX},${cpsY} ${cpeX},${cpeY} ${point[0]},${point[1]}`
			 
			};
			
			const svgPath = (points, command) => { 
			  const d = points.reduce((acc, point, i, a) => i === 0
				? `M ${point[0]},${point[1]}`
				: `${acc} ${command(point, i, a)}`
			  , '');  
			  return d
			};
			
			let final_res = svgPath(adjust_coordonates, bezierCommand)

			return final_res
		}
    }
}

export default svg_graph