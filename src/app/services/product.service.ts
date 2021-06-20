import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Product } from './../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private qtdeCarrihoBS = new BehaviorSubject<number>(0);

    getProduct(){
        var product: Product = {
            productName: "Novo Notebook Inspiron 15 3000",
            storeName: 'DELL',
            brandName: 'DELL',
            assessment: 4,
            price: 2.998,
            description: 'Intel® Core™ i3-1005G1 (1.2GHz até 3.4GHz, cache de 4MB, dual-core, 10ª geração), Windows 10 Home Single, Tela HD de 15.6", Memória de 4GB',
            images: [
                {id: 1, url: "/assets/images/products/product-1.PNG"},
                {id: 2, url: "/assets/images/products/product-2.PNG"},
            ]
        };
        return product;
    }

    setQtdeCarrinho(){
        this.qtdeCarrihoBS.next(this.qtdeCarrihoBS.value + 1)
    }
  
    getQtdeCarrinho(){
        return this.qtdeCarrihoBS
    }
}