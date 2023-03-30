import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto } from '../produtos';
import { ProduutosService } from '../produutos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto[] | undefined;

  constructor(
    private produutosService: ProduutosService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const produtos = this.produutosService.getAll();
    this.route.queryParamMap.subscribe(params =>{
      const descricao = params.get("descricao")?.toLowerCase();

      if(descricao){
          this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao));
          return;
      }

      this.produtos = produtos;
    }); 
  }
}
