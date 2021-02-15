const mixin_bilan_maitrise_geste = {
	methods: {
		
		// retourne tableau contenant la liste des gestes metier de toutes les interventions dans l'item correspondant (list_intervention_geste)
		initGesteIntervention: function(list_interventions, id_item) {
			return list_interventions.reduce((accumulator, current_value) => current_value.id_item == id_item ? accumulator.concat(current_value.geste_metier)) //expected : [ geste1, geste2 , geste1, geste2 ]
		},
		// Objet avec ls parametres "nombre d'inter" et "valeur max" avec pour clé l'id du geste (object_with_stat)
		initArrayStats: function(list_intervention_geste) {
			let res = {};
			list_intervention_geste.forEach(el => {
				
				if(res[el.id_geste] == undefined) {
					res[el.id_geste]= {maitrise : el.maitrise, realise: 1}
				} else {
					if(res[el.id_geste].maitrise < el.maitrise){
						res[el.id_geste].maitrise = el.maitrise
					}
					res[el.id_geste].realise++
				}
			}
			return res
		},
		
		initTableElement: function(list_geste, object_with_stat) {
			return list_geste.map((el,i)=> return {
					id: i, 
					nom: el.nom, 
					id_geste: el.id_geste, 
					maitrise: object_with_stat[el.id_geste].maitrise,
					realise: object_with_stat[el.id_geste].realise,
				}
			)
		}
		
		CreateBilan: function() {
			
			const list_intervention_geste = initGesteIntervention(this.props.list_interventions, this.props.id_item);
			const object_with_stat = initArrayStats(this.list_intervention_geste);
			return initTableElement(this.props.list_geste, object_with_stat)
		}
		
	}
}

export default mixin_bilan_maitrise_geste