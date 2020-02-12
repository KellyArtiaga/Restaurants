import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  input: any;
  constructor() { }

  ngOnInit() {
  }

}
