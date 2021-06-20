import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  product: Product;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.onGetProduct();

    console.log(this.product)
  }

  onGetProduct(){
    this.product = this.productService.getProduct();
  }

  onSetQtde(){
    this.productService.setQtdeCarrinho()
  }
  

}
