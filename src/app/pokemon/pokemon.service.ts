import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {

  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonById(pokemonId: number): Pokemon|undefined {
    return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  }

  getPokemonTypeList(): string[] {
    return [
    'Plante',
    'Poison',
    'Feu',
    'Eau',
    'Insecte',
    'Normal',
    'Vol',
    'Electrik',
    'Fée',
    'Combat',
    'Psy'
  ];
  }
}
