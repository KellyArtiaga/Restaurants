import { Component, OnInit } from '@angular/core';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): CartItem[] {
    return this.shoppingCartService.items;
  }

  addItem(item): any {
    return this.shoppingCartService.addItem(item);
  }

  removeItem(item): any {
    return this.shoppingCartService.removeItem(item);
  }

  total(): number {
    return this.shoppingCartService.total()
  }
}

