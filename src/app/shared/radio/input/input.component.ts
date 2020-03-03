import { Component, OnInit, Input, ContentChild, NgModule, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'mt-input',
  templateUrl: './input.component.html'
})


export class InputComponent implements OnInit, AfterContentInit {

  input: any;
  @Input() label: string;
  @Input() errorMessage: string
  @ContentChild(NgModel) model: NgModel

  itemsL: [{
    name: 'ipName'
  }, {
    name: 'ipNumber'
  }, {
    name: 'ipOptional'
  },
  ]
  constructor() { }

  ngOnInit() {
  }
  ngAfterContentInit(): void {
    throw new Error("Method not implemented.");
  }
}
