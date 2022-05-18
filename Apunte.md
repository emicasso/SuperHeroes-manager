## Estaticos
---

-  Tipo estado de Vida:
            
    >    
        {"Salud": [{
                    "0": {
                        "id": "1",
                        "descripcion": "vivo"
                        },
                    "1": {
                        "id": "2",
                        "descripcion": "muerto"
                        },
                    "2": {
                        "id": "3",
                        "descripcion": "inmortal"
                        }
            }]
        }
## Dinamicos / Nuevo
---
-  Agregar Nuevas Misiones:
            
    >    
        {"Mision": [
                {
                    "description": [
                        {
                        "id": "1",
                        "type": "MR o MSU",
                        "descripcion": "Evitar Robo bancario"                            
                        }
                    ]
                }
            ]
        }

-  Agregar Nuevas Habilidates:
            
    >    
        {"Habilidad": [
                {
                "id": "1",
                "description": "Super Fuerza"
                }
            ]
        }

## Nuevo SuperHeros
---
- Agregar Nuevo SuperHeroe:

    >    
        {"superHeroInfo": [
                {
                "id": "1",
                "nombre": "Spider-man",
                "planetaOrigen: "Tierra",
                "salud" (seleccionable):{
                    "0":{
                        "id": "1",
                        "descripcion": "vivo"
                        },
                },
                "habilidades" (seleccionable): [
                    "0":{
                        "id": "random",
                        "descripcion": "sentido aracnido" 
                    },
                    "1":{
                        "id": "random",
                        "descripcion": "teleraña" 
                    },  
                ],
                "nivel": "58",
                "misiones" (seleccionable):[
                    "0":{
                        "id": "2",
                        "type": "MSU",
                        "descripcion": "Derrotar a Thanos" 
                    },
                    "1":{
                        "id": "1",
                        "type": "MR",
                        "descripcion": "Ayudar a ancina a salvar a su gato" 
                    },
                ],
                "acompañantes" (puede ser vacio):[
                    "0":{
                        "id": "random",
                        "nombre": "Dr Strange"
                    },
                    "1":{
                        "id": "random",
                        "nombre": "Iron Man"
                    },
                ]
                }
            ]
        }

## Nuevos Equipos
---

    >    
        {"Equipos": [
                "0":{
                        {
                        "id": "random",
                        "nombre": "Iron Man"
                    },
                        {
                        "id": "random",
                        "noombre": "Spider-man"
                    },
                        {
                        "id": "random",
                        "nombre": "Dr Strange"
                    }
                }
            ]
        }
