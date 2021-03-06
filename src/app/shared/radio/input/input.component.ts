import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'mt-input',
  templateUrl: './input.component.html'
})


export class InputComponent implements OnInit, AfterContentInit {

  @Input() label: string
  @Input() errorMessage: string
  //valores vao ser passados por fora
  input: any


  @ContentChild(NgModel) model: NgModel

  constructor() { }

  ngOnInit() {
  }
  ngAfterContentInit(): void {
    this.input = this.model;
    if (this.input === undefined) {
      throw new Error("Method not implemented.");
    }
  }
}
