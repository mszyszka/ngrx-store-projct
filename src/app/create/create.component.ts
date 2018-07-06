import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Pokemon } from './../models/pokemon.model'
import * as PokemonActions from './../actions/pokemon.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  addPokemon(name, url) {
    this.store.dispatch(new PokemonActions.AddPokemon({name: name, url: url}) )
  }

  ngOnInit() {
  }

}