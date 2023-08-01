import { Pokemon } from './pokemon';
  
export const POKEMONS: Pokemon[] = [
    {
        id: 1,
        name: "Florizarre",
        hp: 220,
        cp: 82,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png",
        types: ["Plante", "Poison"],
        captured: new Date(),
        description:"Elle prend une couleur vive lorsqu'elle est bien nourrie et bien ensoleillée. Le parfum de cette fleur peut apaiser les gens. Sa plante donne une grosse fleur quand elle absorbe les rayons du soleil. Il est toujours à la recherche des endroits les plus ensoleillés.",
    },
    {
        id: 2,
        name: "Dracaufeu",
        hp: 190,
        cp: 92,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png",
        types: ["Feu"],
        captured: new Date(),
        description:"Dracaufeu parcourt les cieux pour trouver des adversaires à sa mesure. Il crache de puissantes flammes capables de faire fondre n'importe quoi. Mais il ne dirige jamais son souffle destructeur vers un ennemi plus faible. Son souffle brûlant peut faire fondre la roche."
        
    },
    {
        id: 3,
        name: "Tortank",
        hp: 180,
        cp: 90,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png",
        types: ["Eau"],
        captured: new Date(),
        description:"Tortank dispose de canons à eau émergeant de sa carapace. Ils sont très précis et peuvent envoyer des balles d'eau capables de faire mouche sur une cible située à plus de 50 m. Il écrase ses adversaires de tout son poids pour leur faire perdre connaissance."
    },
    {
        id: 4,
        name: "Aspicot",
        hp: 16,
        cp: 2,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png",
        types: ["Insecte", "Poison"],
        captured: new Date(),
        description:"Si vous grimpez dans un arbre, soulevez les feuilles avant d'y poser la main car il se pourrait bien qu'un Aspicot s'y cache. S'il se sent agressé, il utilise la corne sur son front pour se défendre, et une simple piqûre injecte un poison pouvant être mortel. Quand il se prépare a évoluer, Aspicot se réfugie dans un arbre pour se mettre à l'abri."
    },
    {
        id: 5,
        name: "Roucool",
        hp: 30,
        cp: 7,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png",
        types: ["Normal", "Vol"],
        captured: new Date(),
        description:"Roucool a un excellent sens de l'orientation. Il est capable de retrouver son nid sans jamais se tromper, même s'il est très loin de chez lui et dans un environnement qu'il ne connaît pas. Ce Pokémon docile préfère éviter le combat. Toutefois, il se montre très féroce quand on l'agresse."
    },
    {
        id: 6,
        name: "Rattata",
        hp: 18,
        cp: 6,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png",
        types: ["Normal"],
        captured: new Date(),
        description:"Très mignon, Rattata est souvent l'ami des enfants. Sauvage, il vit dans les marais ou les champs, mais il a une préférence pour les grandes villes car il y trouve facilement de la nourriture. Bien que petit, sa morsure est extrêmement puissante. Il prolifère très rapidement"
    },
    {
        id: 7,
        name: "Piafabec",
        hp: 14,
        cp: 5,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png",
        types: ["Normal", "Vol"],
        captured: new Date(),
        description:"Petit et rapide, Piafabec est un oiseau à la mine revêche doté d'un caractère très désagréable. D'une lâcheté à toute épreuve, il vit avec ses congénères dans des clans d'une trentaine de membres. Ils attaquent les différents Pokémon vivants dans leur territoire et les Dresseurs de passage."
    },
    {
        id: 8,
        name: "Abo",
        hp: 16,
        cp: 4,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png",
        types: ["Poison"],
        captured: new Date(),
        description:"Abo est un Pokémon serpent au corps violet. Son ventre est complètement jaune, tout comme l'anneau qu'il possède autour du cou. Ses yeux sont aussi jaunes et il est muni d'une sonnette de la même couleur au bout de sa queue. Ce Pokémon est très peureux en temps normal, mais peut être agressif pendant les combats."
    },
    {
        id: 9,
        name: "Pikachu",
        hp: 21,
        cp: 7,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
        types: ["Electrik"],
        captured: new Date(),
        description:"Les jours d'orages, on peut apercevoir des Pikachu regroupés en haut des arbres ou des poteaux. Ces Pokémons attendent patiemment que la foudre leur tombe dessus, pour pouvoir recharger au maximum leur réserve d'électricité. Quand il attaque, des milliers de volts sortent par ses joues rouges."
    },
    {
        id: 10,
        name: "Sabelette",
        hp: 19,
        cp: 3,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png",
        types: ["Normal"],
        captured: new Date(),
        description:"Sabelette vit uniquement dans le désert, car il ne supporte pas du tout l'humidité. Il boit en récoltant la rosée du matin. Pokémon plutôt farouche à l'état sauvage, il est très affectueux avec son dresseur si celui-ci s'occupe bien de lui. Le seul inconvénient : il ne peut pas s'empêcher de creuser."
    },
    {
        id: 11,
        name: "Mélofée",
        hp: 25,
        cp: 5,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png",
        types: ["Fée"],
        captured: new Date(),
        description:"Mélofée est un Pokémon rare, qui vit uniquement sur le Mont Sélénite, à Kanto. Il est bizarrement apparut juste après qu'une météorite se soit écrasée dessus, c'est pourquoi les scientifiques pensent qu'il est d'origine extra-terrestre. Mignon, c'est un ennemi redoutable, car son attaque Métronome est totalement imprévisible."
    },
    {
        id: 12,
        name: "Goupix",
        hp: 17,
        cp: 8,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png",
        types: ["Feu"],
        captured: new Date(),
        description:"Quand il naît, le bébé Goupix n'a qu'une seule queue, qui se divisera plus tard en six s'il est bien soigné. Même tout petit, il est parfaitement capable de se défendre car il sait cracher du feu, et si l'ennemi ne recule pas, il envoie une attaque Onde folie. Son pelage tout doux lui donne l'apparence d'une peluche."
    }
];