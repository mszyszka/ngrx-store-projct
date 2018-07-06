import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pokemon } from './../models/pokemon.model';
import { AppState } from './../app.state';
import { Observable } from 'rxjs/Observable';
import * as PokemonActions from './../actions/pokemon.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

 pokemons: Observable<Pokemon[]>;

 constructor(private store: Store<AppState>) { 
   this.pokemons = store.select('pokemon');
 }

 delPokemon(index) {
  this.store.dispatch(new PokemonActions.RemovePokemon(index) )
}

  ngOnInit() {
  }

}
