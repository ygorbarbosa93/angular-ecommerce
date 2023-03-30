import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { IProduto, IProdutoCarrinho} from 'src/app/produtos';
import { ProduutosService } from 'src/app/produutos.service';


@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {
  produtos: IProduto | undefined;
  quantidade =1;

  constructor(
    private produutosService: ProduutosService,
    private route: ActivatedRoute,
    private notificacaoService : NotificacaoService,
    private carrinhoService: CarrinhoService
  ){}

  ngOnInit(): void {
      const routeParams = this.route.snapshot.paramMap;
      const produtoId = Number(routeParams.get("id"));
      this.produtos = this.produutosService.getOne(produtoId);
      console.log('id', routeParams.get("id"));
      console.log('produto', this.produtos);
  }

  adicionarAoCarrinho(){
      this.notificacaoService.notificar("O produto foi adicionado ao carrinho!");
      const produto: IProdutoCarrinho = {
        ...this.produtos!,
        quantidade: this.quantidade
      }
      this.carrinhoService.adicionarAoCarrinho(produto);
  }
}
