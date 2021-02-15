import mixin_bilan_maitrise_geste from './mixins/mixin_bilan_maitrise_geste.js'

const table = {
	template: `
		<table class="striped">
			<thead>
			  <tr>
				  <th>Nom</th>
				  <th>Réalisé</th>
				  <th>Maîtrise</th>
			  </tr>
			</thead>

			<tbody>
			  <tr
				v-for="keys in table_elements"
				:key="keys.list"
			  >
				<td> {{ keys.nom }} </td>
				<td> {{ keys.realise }} </td>
				<td> {{ keys.maitrise }} </td>
			  </tr>
			</tbody>
		</table>
	`,
			//list_geste, list_interventions, id_item //
	props:['props'],
	data: function() {
		return {
			table_elements: null
		}
	},
	mixins: [mixin_bilan_maitrise_geste],

	mounted: function(){
		this.table_elements = this.CreateBilan()
	}
}

export default table