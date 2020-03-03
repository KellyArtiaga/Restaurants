import { MEAT_API } from 'app/app.api';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { Order } from './order.model';
@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService,
        private http: Http) { }

    cartItem(): CartItem[] {
        return this.cartService.items
    }

    increaseQty(item: CartItem) {
        this.cartService.increaseQty(item)
    }

    decreaseQty(item: CartItem) {
        this.cartService.decreaseQty(item)
    }

    remove(item: CartItem) {
        this.cartService.removeItem(item)
    }

    itemsValue(): number {
        return this.cartService.total()
    }

    clear() {
        this.cartService.clear()
    }
    //backend
    checkOrder(order: Order) {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        return this.http.post(`${MEAT_API}/orders`, JSON.stringify(order), new RequestOptions({ headers: headers }))
            .map(response => response.json())

    }

}