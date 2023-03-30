import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-hearder',
  templateUrl: './hearder.component.html',
  styleUrls: ['./hearder.component.css']
})
export class HearderComponent {

  constructor(
    public carrinhoService : CarrinhoService,
    private router: Router
  ){}

  produtos(){
    this.router.navigate(["produtos"]);
  }

  carrinho(){
    this.router.navigate(["carrinho"]);
  }

  contato(){
    this.router.navigate(["contato"]);
  }
}
