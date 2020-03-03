import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { RadioOption } from './../shared/radio/radio-option.model';
import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from './order-service';
import { Order, OrderItem } from './order.model'
@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {
  delivery: number = 8;

  constructor(private orderService: OrderService) { }
  adress: string;
  number: number;
  optional: string;

  ngOnInit() {
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
  }
  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Cartão de Refeição', value: 'REF' }
  ]

  cartItem(): CartItem[] {
    return this.orderService.cartItem()
  }

  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item);
    console.log('increase')
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item);
    console.log('decrease')

  }

  remove(item: CartItem) {
    this.orderService.remove(item)
  }

  checkOrder(order: Order) {
    /*   order.ordemItem = this.cartItems()
        .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id))
      this.orderService.checkOrder(order)
        .subscribe(orderId: string => {
          this.orderService.clear()
        }) */

  }
}
