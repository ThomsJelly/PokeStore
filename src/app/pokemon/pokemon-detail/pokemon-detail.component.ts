import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html'
})
export class PokemonDetailComponent  implements OnInit {

  pokemonList: Pokemon[] = [];
  pokemon:  Pokemon|undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService) { } 

    loadPokemonList() {
      this.pokemonList = this.pokemonService.getPokemonList();
    }
    
    ngOnInit() {
      const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
      if(pokemonId) {
        this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
      }
      this.loadPokemonList();
    }
    
  goToPokemonList () {
    this.router.navigate (['/pokemons']); 
  }

  getPokemonIndex() {
    return this.pokemonList.indexOf(this.pokemon!);
  }

  goToNextPokemon() {
    const currentIndex = this.getPokemonIndex();
    const nextIndex = (currentIndex + 1) % this.pokemonList.length;
    this.pokemon = this.pokemonList[nextIndex];
  }

  goToEditPokemon(pokemon: Pokemon) {
    this.router.navigate(['/edit/pokemon', pokemon.id]);

  }  

  

}
