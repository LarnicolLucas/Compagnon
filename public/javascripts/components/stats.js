import mixin_bilan_maitrise_geste from './mixins/mixin_bilan_maitrise_geste.js'
import polygraph from './stat/polygraph.js'

const stats = {
	template: `
		<polygraph :props="{
            darkMode: props.darkMode,
            lightMode: props.lightMode,
			points: stats
        }"></polygraph>
	`,
	props: ["props", "id_item", "list_geste"],
	computed : {
		stats: function() {

			const list = this.CreateBilan(this.props.model.interventions, this.id_item, this.list_geste);
			const list_without_null = list.filter(el => el.maitrise > 0);
			return list_without_null.map(el => { return {nom: el.nom, maitrise: (el.maitrise / this.props.model.echelle_de_notation) * 100} })
		}
	},
	mixins: [mixin_bilan_maitrise_geste],
	components: {
		polygraph: polygraph
	}
}

export default stats