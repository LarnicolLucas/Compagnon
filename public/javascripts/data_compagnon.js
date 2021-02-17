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
					"nom": "F100 : Première mise en service"
				},
				{
					"id": 1,
					"nom": "F120 : Mise en service sur installation existante"
				},
				{
					"id": 2,
					"nom": "F140 : Résiliation"
				},
				{
					"id": 3,
					"nom": "F160 : modifiation de formule tarifaire"
				},
				{
					"id": 4,
					"nom": "F170-1 : Modification de puissance souscrite simple"
				},
				{
					"id": 5,
					"nom": "F170-2 : Modification de puissance souscrite / remplacements de TC"
				},
				{
					"id": 6,
					"nom": "F200 : coupure non paiement - suite résiliation / Rétablissement"
				},
				{
					"id": 7,
					"nom": "F450 : MSTPE"
				},
				{
					"id": 8,
					"nom": "F800 : Raccordement provisoire pour une durée > 28 jours"
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
					"nom": "Pose Boitiesr IP (3G) / suppression BTR"
				},
				{
					"id":1,
					"nom": "Pose Boitiesr IP (4G) / Alim externe 220V / suppression BTR"
				},
				{
					"id":2,
					"nom": "Relève PME-PMI"
				},
				{
					"id":3,
					"nom": "Dépannage Télé-relève :  GSM / RTC / IP / Changement carte sim"
				},
				{
					"id":4,
					"nom": "Remplacement de compteurs PME-PMI (sans transposition)"
				},
				{
					"id":5,
					"nom": "Remplacement de compteurs PME-PMI (avec transposition)"
				},
				{
					"id":6,
					"nom": "Remplacement d'armoire C4"
				},
				{
					"id":7,
					"nom": "Passage VB"
				},
				{
					"id":8,
					"nom": "TIC & asservissements"
				},
				{
					"id":9,
					"nom": "Dépannage appareils de comptage PME-PMI"
				},
				{
					"id":10,
					"nom": "Passage de segment C4<-->C5"
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
					"nom" : "relation client"
				}
			]
		}
	],
	
	"interventions": [
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
		}
	]	
}