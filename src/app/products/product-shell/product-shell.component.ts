import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    templateUrl: './product-shell.component.html'
})
export class ProductShellComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Products';
    monthCount: number;
    sub: Subscription;

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.sub = this.productService.selectedProductChanges$.subscribe(selectedProduct => {
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

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
