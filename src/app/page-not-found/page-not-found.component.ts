import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
  <div class='center'>
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png"/>
      <h1>Tu t'es aventuré trop loin dans les hautes herbes... Gare à toi!</h1>
      <a routerLink="/pokemons" class="waves-effect waves-teal btn-flat">
      <button type="button" class="btn btn-primary">Retourner à l' accueil</button>
      </a>
    </div>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent {}

