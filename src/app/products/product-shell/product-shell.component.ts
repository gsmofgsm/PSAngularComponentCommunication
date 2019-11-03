import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
    templateUrl: './product-shell.component.html'
})
export class ProductShellComponent implements OnInit {
    pageTitle: string = 'Products';
    monthCount: number;

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.productService.selectedProductChanges$.subscribe(selectedProduct => {
            if (selectedProduct) {
                const start = new Date(selectedProduct.releaseDate);
                const now = new Date();
                this.monthCount = start.getMonth() - now.getMonth()
                    + 12 * (start.getFullYear() - now.getFullYear());
            } else {
                this.monthCount = 0;
            }
        });
    }

}
