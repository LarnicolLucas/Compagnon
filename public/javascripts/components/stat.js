import polygraph from './stat/polygraph.js'

const stat = {
	
	template: `
		<svg width="200" height="200">
			<polygraph :props="props"></polygraph>
		</svg>
	`,
	props:['props'],
	components: {
		polygraph: polygraph,
	}
}

export default stat