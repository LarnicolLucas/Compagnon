const mixin_bilan_maitrise_geste = {
	methods: {
		
		// retourne tableau contenant la liste des gestes metier de toutes les interventions dans l'item correspondant (list_intervention_geste)
		initGesteIntervention: function(list_interventions, id_item) {
			let res = [];
			list_interventions.forEach((el) => { 
			   el.geste_metier.forEach(el => {

				   if(el.id_item == id_item){
					   res.push(el)
				   }
			   })
		   }); //expected : [ geste1, geste2 , geste1, geste2 ]
		   return res
	   },
		// Objet avec ls parametres "nombre d'inter" et "valeur max" avec pour clé l'id du geste (object_with_stat)
		initArrayStats: function(list_intervention_geste) {
			let res = {};
			list_intervention_geste.forEach(el => {
				if(res[el.id_geste] == undefined) {
					res[el.id_geste]= {maitrise : el.maitrise, realise: 1}
				} else {
					if(res[el.id_geste].maitrise < el.maitrise){
						res[el.id_geste].maitrise = el.maitrise;
					};
					res[el.id_geste].realise++
				}
			});
			return res
		},
		
		initTableElement: function(list_geste, object_with_stat) {

			return list_geste.map((el,i)=>  {
				let maitrise = 0;
				let realise = 0
				if(object_with_stat[el.id] != undefined){
					maitrise= object_with_stat[el.id].maitrise,
					realise= object_with_stat[el.id].realise
				}
				return {

					id: i, 
					nom: el.nom, 
					id_geste: el.id, 
					maitrise: maitrise,
					realise: realise,
				}
			});
		},
		
		CreateBilan: function(interventions, id_item, id_geste) {
			
			const list_intervention_geste = this.initGesteIntervention(interventions, id_item);
			const object_with_stat = this.initArrayStats(list_intervention_geste);
			return this.initTableElement(id_geste, object_with_stat)
		}
		
	}
}

export default mixin_bilan_maitrise_geste
