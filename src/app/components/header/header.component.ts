import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  qtdeCarrinho: number
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getQtdeCarrinho().subscribe(value=>{
      this.qtdeCarrinho = value
    })
  }

  ngOnDestroy(){
    this.productService.getQtdeCarrinho().unsubscribe()
  }

}
