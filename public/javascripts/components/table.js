import mixin_bilan_maitrise_geste from './mixins/mixin_bilan_maitrise_geste.js'

const table = {
	template: `
		<table class="striped">
			<thead>
			  <tr>
				  <th>Geste Métier</th>
				  <th class="center-align">Réalisé</th>
				  <th class="center-align">Maîtrise</th>
			  </tr>
			</thead>

			<tbody>
			  <tr
				v-for="keys in table_elements"
				:key="keys.list"
				@click="$emit('gesteclicked', keys.id_geste)"
			  >
				<td style="padding: 5px;"> {{ keys.nom }} </td>
				<td style="padding: 5px;" class="center-align"> {{ keys.realise }} </td>
				<td style="padding: 5px;" class="center-align"> {{ keys.maitrise }} </td>
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
		this.table_elements = this.CreateBilan();
	}
}

export default table