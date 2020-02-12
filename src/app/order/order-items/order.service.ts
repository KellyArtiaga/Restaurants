import { CartItem } from './../../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from './../../restaurant-detail/shopping-cart/shopping-cart.service';
import { Injectable } from "@angular/core";

@Injectable()
export class OrderService {
    constructor(private cartService: ShoppingCartService) { }

    CartItem() {
        return this.cartService.items
    }
}