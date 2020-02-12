import { CartItem } from './../../restaurant-detail/shopping-cart/cart-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {
  @Input() items: CartItem[]
  @Output() increaseQty = new EventEmitter<CartItem>()
  @Output() decreaseQty = new EventEmitter<CartItem>()
  @Output() removeQty = new EventEmitter<CartItem>()

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  emitIncreaseQty(item: CartItem) {
    this.increaseQty.emit(item)
  }

  emitDecreaseQty(item: CartItem) {
    this.decreaseQty.emit(item)
  }

  remove(item: CartItem) {
    this.removeQty.emit(item)
  }

}
