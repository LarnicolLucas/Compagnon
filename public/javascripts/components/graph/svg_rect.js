export default {
    template: `
        <rect
            :x="x"
            :y="path"

            :width="width"
            :height="height"

            :fill="props.color"

            rx="3"
            ry="3"
        />
    `,
    props:["props"],
    data: function(){
        return {
            animated_coordonates : this.props.y
        }
    },
    computed: {
        x: function(){
            return this.props.x
        },
        y: function(){
            return this.props.y
        },
        width: function(){
            return this.props.width
        },
        height: function(){
            return this.props.height
        },

        path: function(){
            return this.animated_coordonates
        },
        coordonates: function(){
			return this.props.y
		},
        
    },
    watch: {
		coordonates: function(newValue){
			gsap.to(this.$data, {duration: 0.7, animated_coordonates: newValue , ease: "elastic.out(1, 0.5)"});
		}
	},
}