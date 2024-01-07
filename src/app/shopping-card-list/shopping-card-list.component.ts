import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-shopping-card-list',
  templateUrl: './shopping-card-list.component.html',
  styleUrls: ['./shopping-card-list.component.css']
})
export class ShoppingCardListComponent {
  items = [
    {
      id: 1,
      image: './assets/bag.avif',
      name: 'bag',
      description: "A bag",
      price: 100
    },
    {
      id: 2,
      image: './assets/shirt.avif',
      name : "shirt",
      description: "Men shirt",
      price: 150,
    },
    {
      id: 3,
      image: './assets/jeans.jpg',
      name: "jeans",
      description :"men jeans",
      price: 250,
    },
    {
      id: 4,
      image: './assets/samsung.jpg',
      name: "mobile",
      description :"samsung m11",
      price: 10000,
    },
   
    {
      id: 5,
      image: './assets/Lg.avif',
      name:"Monitor",
      description :"LG monitor 32inches",
      price: 12500,
    },
   
    {
      id: 6,
      image: './assets/steelbottle.webp',
      name: "bottle",
      description :"steel bottle",
      price: 2500,
    },

    {
      id: 7,
      image: './assets/keyboard.jpg',
      name: "keyboard",
      description : "Hammok keyboard",
      price: 450,
    },
    {
      id: 8,
      image: './assets/boatHeadphones.jpg',
      name: "Headphones",
      description :"boat rockerz headphones",
      price: 1500,
    },
    {
      id: 9,
      image: './assets/speakers.jpg',
      name: "speakers",
      description :"steel bottle",
      price: 2500,
    },
    {
      id: 10,
      image: './assets/muscleBlaze.webp',
      name: "MuscleBlaze",
      description :"Protein ",
      price: 4500,
    },
    // Add more items as needed
  ];
  constructor(public translate: TranslateService) {}
}
