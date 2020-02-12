import { CartItem } from './cart-item.model';
import { ShoppingCartService } from './shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(
    private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): CartItem[] {
    return this.shoppingCartService.items;
  }

  total(): number {
    return this.shoppingCartService.total()
  }

  removeItem(item: any) {
    this.shoppingCartService.removeItem(item);
  }

  addItem(item): any {
    return this.shoppingCartService.addItem(item);
  }

  clear() {
    this.shoppingCartService.clear()
  }

  changeItem(item): any {
    return this.shoppingCartService.addItem(item);
  }
}
