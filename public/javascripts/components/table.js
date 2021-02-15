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
			table_elements: [],		
			list_intervention_geste: [],	
			object_with_stat : {}
		}
	},
	methods: {
		// tableau contenant la liste des gestes metier de toutes les interventions dans l'item correspondant
		initGesteIntervention: function() {
			 this.props.list_interventions.forEach((el) => { 
				el.geste_metier.forEach(el => {

					if(el.id_item == this.props.id_item){
						this.list_intervention_geste.push(el)
					}

				})
			}) //expected : [ geste1, geste2 , geste1, geste2 ]
		},

		// Objet avec ls parametres "nombre d'inter" et "valeur max" avec pour clé l'id du geste
		initArrayStats: function() {
			this.list_intervention_geste.forEach(el => {
				if(this.object_with_stat[el.id_geste] == undefined) {
					this.object_with_stat[el.id_geste]= {maitrise : el.maitrise, realise: 1}
				} else {
					if(this.object_with_stat[el.id_geste].maitrise < el.maitrise){
						this.object_with_stat[el.id_geste].maitrise = el.maitrise;
					};
					this.object_with_stat[el.id_geste].realise++
				}
			})
		},
		
		initTableElement: function() {

			this.table_elements = this.props.list_geste.map((el,i)=>  {
				let maitrise = 0;
				let realise = 0
				if(this.object_with_stat[el.id] != undefined){
					maitrise= this.object_with_stat[el.id].maitrise,
					realise= this.object_with_stat[el.id].realise
				}
				return {

					id: i, 
					nom: el.nom, 
					id_geste: el.id, 
					maitrise: maitrise,
					realise: realise,
				}
			});
	
		}
	},

	mounted: function(){
		this.initGesteIntervention();
		this.initArrayStats();
		this.initTableElement();
	}
}

export default table