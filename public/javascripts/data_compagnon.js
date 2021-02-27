export default {
	"agent": {
		"nom": "Usher",
		"prenom": "Raymond IV",
		"etape_cursus_PST": "Formation par frottement",
		"id_etape_cursus_PST": 0,
		"habilitation": "B1 H1V",
		"IMD": 30,
		"PST": 1,
		"VPS": 0,
		"formations": [
		],
		"chemin_avatar": "/images/avatar.jpg"
	},

	"echelle_de_notation": 4,
	
	"etapes_cursus_PST": [
		{
			"id":0,
			"nom": "Formation par frottement",
		},
		{
			"id": 1,
			"nom": "Autonome dépannages"
		},
		{
			"id": 2,
			"nom": "Formation sur les prestations"
		},
		{
			"id": 3,
			"nom": "Autonome sur toutes activités"
		},
		
	],
	
	"formations": [
		{
			"id": 0,
			"numero": "PDNT530V01",
			"label": "Entrée dans le métier comptage"
		},
		{
			"id": 1,
			"numero": "ADNT801",
			"label": "Initiation à l'électricitée"
		},
		{
			"id": 2,
			"numero": "ADNTSTRCPT",
			"label": "Formation TST BT Terminal Comptages directs ou sur réducteurs"
		},
		{
			"id": 3,
			"numero": "ADNT504V01",
			"label": "Vérification Métrologique des Compteurs"
		},
	],
	
	"items_metier": [
		{
			"id":0,
			"nom" :"Prestations",
			"domaine": "C4",
			"list": [
				{
					"id": 0,
					"nom": "F100 : Première mise en service",
					"abreviation": "F100"
				},
				{
					"id": 1,
					"nom": "F120 : Mise en service sur installation existante",
					"abreviation": "F120"
				},
				{
					"id": 2,
					"nom": "F140 : Résiliation",
					"abreviation": "F140"
				},
				{
					"id": 3,
					"nom": "F160 : modifiation de formule tarifaire",
					"abreviation": "F160"
				},
				{
					"id": 4,
					"nom": "F170-1 : Modification de puissance souscrite simple",
					"abreviation": "F170-1"
				},
				{
					"id": 5,
					"nom": "F170-2 : Modification de puissance souscrite / remplacements de TC",
					"abreviation": "F170-2"
				},
				{
					"id": 6,
					"nom": "F200 : coupure non paiement - suite résiliation / Rétablissement",
					"abreviation": "F200"
				},
				{
					"id": 7,
					"nom": "F450 : MSTPE",
					"abreviation": "F450"
				},
				{
					"id": 8,
					"nom": "F800 : Raccordement provisoire pour une durée > 28 jours",
					"abreviation": "F800"
				}
			],
		},
		
		{
			"id": 1,
			"nom" :"Actes Techniques",
			"domaine": "C4",
			"list": [
				{
					"id":0,
					"nom": "Pose Boitiesr IP (3G) / suppression BTR",
					"abreviation": "IP"
				},
				{
					"id":1,
					"nom": "Pose Boitiesr IP (4G) / Alim externe 220V / suppression BTR",
					"abreviation": "IP 4G"
				},
				{
					"id":2,
					"nom": "Relève PME-PMI",
					"abreviation": "Relève"
				},
				{
					"id":3,
					"nom": "Dépannage Télé-relève :  GSM / RTC / IP / Changement carte sim",
					"abreviation": "Dépannage"
				},
				{
					"id":4,
					"nom": "Remplacement de compteurs PME-PMI (sans transposition)",
					"abreviation": "Rplc Compteur"
				},
				{
					"id":5,
					"nom": "Remplacement de compteurs PME-PMI (avec transposition)",
					"abreviation": "Chgt Compteur"
				},
				{
					"id":6,
					"nom": "Remplacement d'armoire C4",
					"abreviation": "Rplc armoire"
				},
				{
					"id":7,
					"nom": "Passage VB",
					"abreviation": "VB"
				},
				{
					"id":8,
					"nom": "TIC & asservissements",
					"abreviation": "Asser"
				},
				{
					"id":9,
					"nom": "Dépannage appareils de comptage PME-PMI",
					"abreviation": "Dépannage Cpt"
				},
				{
					"id":10,
					"nom": "Passage de segment C4<-->C5",
					"abreviation": "C4<>C5"
				}
			],
		},
		{
			"id": 2,
			"nom" :"Relation Client",
			"domaine": "C4",
			"list": [
				{
					"id": 0,
					"nom" : "relation client",
					"abreviation": "Clientel"
				}
			]
		}
	],
	
	"interventions": []
	/*[
		{
			"id": 0, 
			"date": "30/12/2020", 
			"acompagnateur": {
				"nom":"Vaquez", 
				"prenom": "Aurelien",
				"id_agent": 22
			},
			"type": "IMD",
			"IDC": [
				{
					"id": 0,
					"numero": "07347569"
				},
				{
					"id": 1,
					"numero": "07347519"
				},
				
			],
			"habilitation_courante": "B1V - H1",
			"geste_metier": [
				{
					"id":0,
					"id_geste": 7,
					"id_item": 0,
					"nom": "Passage VBE",
					"maitrise": 2
				},
				{
					"id":1,
					"id_item": 0,
					"id_geste": 0,
					"nom": "F100: Première mise en service",
					"maitrise": 2
				}
			],
			"commentaire": "RAS"
		},
		{
			"id": 1, 
			"date": "05/01/2021", 
			"acompagnateur": {
				"nom":"Jean-François", 
				"prenom": "Vaussoue",
				"id_agent": 23
			},
			"type": "IMD",
			"IDC": [
				{
					"id": 0,
					"numero": "07314730"
				},
				{
					"id": 1,
					"numero": "07408765"
				},
				
			],
			"habilitation_courante": "B1V - H1",
			"geste_metier": [
				{
					"id":0,
					"id_item": 1,
					"id_geste": 3,
					"nom": "Dépannage Télé-relève :  GSM / RTC / IP / Changement carte sim",
					"maitrise": 3
				},
				{
					"id":1,
					"id_item": 0,
					"id_geste": 2,
					"nom": "F140: Résiliation",
					"maitrise": 2
				}
			],
			"commentaire": "RAS"
		},
		{
			"id": 2, 
			"date": "06/01/2021", 
			"acompagnateur": {
				"nom":"Trari", 
				"prenom": "Nasr Edine",
				"id_agent": 24
			},
			"type": "IMD",
			"IDC": [
				{
					"id": 0,
					"numero": "07347323"
				},
				{
					"id": 1,
					"numero": "07312137"
				}		
			],
			"habilitation_courante": "B1V - H1",
			"geste_metier": [
				{
					"id":0,
					"id_geste": 3,
					"id_item": 1,
					"nom": "Dépannage Télé-relève :  GSM / RTC / IP / Changement carte sim",
					"maitrise": 3
				}
			],
			"commentaire": "RAS"
		},
		{
			"id": 3, 
			"date": "07/01//2021", 
			"acompagnateur": {
				"nom":"Brouillard", 
				"prenom": "Geoffroy",
				"id_agent": 25
			},
			"type": "IMD",
			"IDC": [
				{
					"id": 0,
					"numero": "07314078"
				},
				{
					"id": 1,
					"numero": "07313741"
				},
						
			],
			"habilitation_courante": "B1V - H1",
			"geste_metier": [
				{
					"id":0,
					"id_geste": 3,
					"id_item": 1,
					"nom": "Dépannage Télé-relève :  GSM / RTC / IP / Changement carte sim",
					"maitrise": 3
				},
				{
					"id":1,
					"id_geste": 2,
					"id_item": 0,
					"nom": "F140 : Résiliation",
					"maitrise": 2
				}
			],
			"commentaire": "RAS"
			},
			
			{
				"id": 4, 
				"date": "08/01/2021", 
				"acompagnateur": {
					"nom":"Vaussoue", 
					"prenom": "Jean-François",
					"id_agent": 23
				},
				"type": "IMD",
				"IDC": [
					{
						"id": 0,
						"numero": "07302179"
					},
					{
						"id": 1,
						"numero": "07313125"
					},
							
				],
				"habilitation_courante": "B1V - H1",
				"geste_metier": [
					{
						"id":0,
						"id_geste": 1,
						"id_item": 0,
						"nom": "Pose Boitiesr IP (4G) / Alim externe 220V / suppression BTR",
						"maitrise": 3
					},
					{
						"id":1,
						"id_geste": 3,
						"id_item": 0,
						"nom": "Dépannage Télé-relève :  GSM / RTC / IP / Changement carte sim",
						"maitrise": 3
					},
					{
						"id":2,
						"id_geste": 4,
						"id_item": 0,
						"nom": "Remplacement de compteurs PME-PMI (sans transposition)",
						"maitrise": 3
					}
				],
				"commentaire": "RAS"
			},
			
		{
				"id": 5, 
				"date": "12/01/2021", 
				"acompagnateur": {
					"nom":"Vaussoue", 
					"prenom": "Jean-François",
					"id_agent": 23
				},
				"type": "IMD",
				"IDC": [
					{
						"id": 0,
						"numero": "07443200"
					},
					{
						"id": 1,
						"numero": "07408765"
					},
							
				],
				"habilitation_courante": "B1V - H1",
				"geste_metier": [
					{
						"id":0,
						"id_geste": 1,
						"id_item": 0,
						"nom": "Pose Boitiesr IP (4G) / Alim externe 220V / suppression BTR",
						"maitrise": 3
					},
					{
						"id":1,
						"id_geste": 3,
						"id_item": 0,
						"nom": "Dépannage Télé-relève :  GSM / RTC / IP / Changement carte sim",
						"maitrise": 3
					}
				],
				"commentaire": "RAS"
			},
			
			{
				"id": 6, 
				"date": "13/01/2021", 
				"acompagnateur": {
					"nom":"Brouillard", 
					"prenom": "Geoffroy",
					"id_agent": 26
				},
				"type": null,
				"IDC": [
					{
						"id": 0,
						"numero": "07448964"
					},
					{
						"id": 1,
						"numero": "07448968"
					},
							
				],
				"habilitation_courante": "B1V - H1",
				"geste_metier": [
					{
						"id":0,
						"id_geste": 4,
						"id_item": 0,
						"nom": "Remplacement de compteurs PME-PMI (sans transposition)",
						"maitrise": 2
					}
				],
				"commentaire": "RAS"
			},
			
			{
				"id": 7, 
				"date": "14/01/2021", 
				"acompagnateur": {
					"nom":"Vaussoue", 
					"prenom": "Jean-François",
					"id_agent": 23
				},
				"type": "IMD",
				"IDC": [
					{
						"id": 0,
						"numero": "07416504"
					},
					{
						"id": 1,
						"numero": "07415973"
					},
							
				],
				"habilitation_courante": "B1V - H1",
				"geste_metier": [
					{
						"id":0,
						"id_geste": 1,
						"id_item": 0,
						"nom": "Pose Boitiesr IP (4G) / Alim externe 220V / suppression BTR",
						"maitrise": 3
					}
				],
				"commentaire": "RAS"
			},
			
			{
				"id": 8, 
				"date": "15/01/2021", 
				"acompagnateur": {
					"nom":"Vaussoue", 
					"prenom": "Jean-François",
					"id_agent": 23
				},
				"type": "IMD",
				"IDC": [
					{
						"id": 0,
						"numero": "07312721"
					},
					{
						"id": 1,
						"numero": "07304936"
					},
							
				],
				"habilitation_courante": "B1V - H1",
				"geste_metier": [
					{
						"id":0,
						"id_geste": 1,
						"id_item": 0,
						"nom": "Pose Boitiesr IP (4G) / Alim externe 220V / suppression BTR",
						"maitrise": 3
					},
					{
						"id":0,
						"id_geste": 3,
						"id_item": 0,
						"nom": "Dépannage Télé-relève :  GSM / RTC / IP / Changement carte sim",
						"maitrise": 3
					}
				],
				"commentaire": "RAS"
			},
			{
				"id": 9, 
				"date": "18/01/2021", 
				"acompagnateur": {
					"nom":"Trari", 
					"prenom": "Nasr Edine",
					"id_agent": 28
				},
				"type": "IMD",
				"IDC": [
					{
						"id": 0,
						"numero": "07346019"
					}
							
				],
				"habilitation_courante": "B1V - H1",
				"geste_metier": [
					{
						"id":0,
						"id_geste": 1,
						"id_item": 0,
						"nom": "Pose Boitiesr IP (4G) / Alim externe 220V / suppression BTR",
						"maitrise": 3
					},
					{
						"id":0,
						"id_geste": 3,
						"id_item": 0,
						"nom": "Dépannage Télé-relève :  GSM / RTC / IP / Changement carte sim",
						"maitrise": 3
					},
					{
						"id":1,
						"id_geste": 5,
						"id_item": 1,
						"nom": "F170-2 : Modification de puissance souscrite / remplacements de TC",
						"maitrise": 2
					}
				],
				"commentaire": "RAS"
			},
			{
				"id": 10, 
				"date": "20/01/2021", 
				"acompagnateur": {
					"nom":"Vaquez", 
					"prenom": "Aurelien",
					"id_agent": 22
				},
				"type": "IMD",
				"IDC": [
					{
						"id": 0,
						"numero": "07212972"
					}
							
				],
				"habilitation_courante": "B1V - H1",
				"geste_metier": [
					{
						"id":0,
						"id_geste": 1,
						"id_item": 0,
						"nom": "Pose Boitiesr IP (4G) / Alim externe 220V / suppression BTR",
						"maitrise": 3
					},
					{
						"id":1,
						"id_geste": 1,
						"id_item": 1,
						"nom": "F120 : Mise en service sur installation existante",
						"maitrise": 2
					},
					{
						"id":2,
						"id_geste": 3,
						"id_item": 1,
						"nom": "F160 : modifiation de formule tarifaire",
						"maitrise": 1
					}
				],
				"commentaire": "RAS"
			},
			{
				"id": 11, 
				"date": "22/01/2021", 
				"acompagnateur": {
					"nom":"Brouillard", 
					"prenom": "Geoffroy",
					"id_agent": 26
				},
				"type": null,
				"IDC": [
					{
						"id": 0,
						"numero": "07100532"
					},
					{
						"id": 1,
						"numero": "07044760"
					}
							
				],
				"habilitation_courante": "B1V - H1",
				"geste_metier": [
					{
						"id":0,
						"id_geste": 1,
						"id_item": 0,
						"nom": "F100 : Première mise en service",
						"maitrise": 1
					},
					{
						"id":1,
						"id_geste": 1,
						"id_item": 1,
						"nom": "F120 : Mise en service sur installation existante",
						"maitrise": 3
					}
				],
				"commentaire": "RAS"
			},
				{
				"id": 12, 
				"date": "26/01/2021", 
				"acompagnateur": {
					"nom":"Vaussoue", 
					"prenom": "Jean-François",
					"id_agent": 26
				},
				"type": "IMD",
				"IDC": [
					{
						"id": 0,
						"numero": "07417332"
					}	
				],
				"habilitation_courante": "B1V - H1",
				"geste_metier": [
					{
						"id":0,
						"id_geste": 1,
						"id_item": 0,
						"nom": "Pose Boitiesr IP (4G) / Alim externe 220V / suppression BTR",
						"maitrise": 1
					},
					{
						"id":1,
						"id_geste": 1,
						"id_item": 1,
						"nom": "F120 : Mise en service sur installation existante",
						"maitrise": 3
					},
					{
						"id":2,
						"id_geste": 2,
						"id_item": 1,
						"nom": "F140 : Résiliation",
						"maitrise": 3
					},
					{
						"id":3,
						"id_geste": 4,
						"id_item": 1,
						"nom": "F170-1 : Modification de puissance souscrite simple",
						"maitrise": 3
					}
				],
				"commentaire": "RAS"
			}
	]*/
}