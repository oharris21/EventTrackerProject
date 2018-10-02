import { Component, OnInit } from '@angular/core';
import { Nutrition } from '../models/nutrition';
import { NutritionService } from './../nutrition.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nutrition-list',
  templateUrl: './nutrition-list.component.html',
  styleUrls: ['./nutrition-list.component.css']
})
export class NutritionListComponent implements OnInit {
  newNutrition: Nutrition = new Nutrition();
  selected: Nutrition = null;
  editNutrition: Nutrition = null;
  nutritions: Nutrition[] = [];
  buttonSelected = false;

  constructor(private nutritionService: NutritionService) { }

  ngOnInit() {
    this.reload();
  }

  displayNutrition = function(nutrition: Nutrition) {
    this.selected = nutrition;
  };

  setEditNutrition = function() {
    this.editTodo = Object.assign({}, this.selected);
  };

  createUser = function(form: NgForm) {
    const nutrition = form.value;
    console.log(nutrition);

    this.nutritionService.create(nutrition).subscribe(
      data => {
        this.newNutrition = new Nutrition();
        console.log('returned data: ');
        console.log(data);
        this.reload();
      }
    );
  };

  updateUser = function(nutrition: NgForm) {
    this.nutritionService.update(nutrition.value, this.selected.id).subscribe(
      data => {
        this.selected = data;
        this.editNutrition = null;
        this.reload();
      },
      err => {
        console.log('Observer got an error: ' + err);
      }
    );
  };

  reload = function() {
    this.nutritionService.index().subscribe(
      data => this.nutritions = data,
      err => console.log('Observer got an error: ' + err)
    );
    console.log(this.nutritionService.index());
  };

  deleteUser = function(nutrition: NgForm) {
    this.nutritionService.destroy(this.selected.id).subscribe(
      data => {
        this.reload();
      },
      err => {
        console.log('Observer got an error: ' + err);
      }
    );
  };

  aggregateData = function(nutrition: NgForm) {
    this.buttonSelected = true;
    const p = this.selected.protein;
    const c = this.selected.carbs;
    const f =  this.selected.fat;
    const total = p + c + f;
    return total;
  };

  aggregateProtein = function(nutrition: NgForm) {
    this.buttonSelected = true;
    const total = 100 / (this.selected.protein + this.selected.carbs + this.selected.fat);
    const p = this.selected.protein;
    return Math.round(total * p);
  };

  aggregateCarbs = function(nutrition: NgForm) {
    this.buttonSelected = true;
    const total = 100 / (this.selected.protein + this.selected.carbs + this.selected.fat);
    const c = this.selected.carbs;
    return Math.round(total * c);
  };
  aggregateFat = function(nutrition: NgForm) {
    this.buttonSelected = true;
    const total = 100 / (this.selected.protein + this.selected.carbs + this.selected.fat);
    const f = this.selected.fat;
    return Math.round(total * f);
  };

}
