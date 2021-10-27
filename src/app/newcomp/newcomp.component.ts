import { Component, OnInit } from '@angular/core';
import { Fruit } from '../fruit';
import { Fruits } from '../fruit-list';
import { isSel } from '../vars';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css'],
})
export class NewcompComponent implements OnInit {
  formName = new FormControl('', [
    Validators.pattern('[a-zA-Z ]*'),
    Validators.required,
    Validators.minLength(4),
  ]);
  isSelected = isSel;
  fruit = Fruits;
  selected: Fruit = {
    fname: '',
    fcolor: 0,
  };
  constructor() {
    console.log(Fruits);
  }
  clearSelect() {
    this.selected = {
      fname: '',
      fcolor: 0,
    };
    this.isSelected = false;
  }
  selectedFruit(f: Fruit) {
    this.selected = f;
    this.isSelected = true;
  }
  toggleSel() {
    this.isSelected = !this.isSelected;
    console.log('FORM', this.formName);
  }

  ngOnInit(): void {}
}
