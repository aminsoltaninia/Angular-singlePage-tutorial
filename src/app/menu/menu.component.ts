import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';

const DISHES : Dish[] =[
  {
    id: '0',
    name: 'uthappizzaa',
    image: 'assets/images/download.jpg',
    category: 'mains',
    featured: true,
    label: 'Hot',
    price: '4.99',
    description: 'this is first',
  },
  {
    id: '1',
    name: 'ghorme',
    image: 'assets/images/download (1).jpg',
    category: 'mains',
    featured: false,
    label: 'notHot',
    price: '3.05',
    description: 'this is second',
  },
  {
    id: '2',
    name: 'uthappizzaa',
    image: 'assets/images/download (2).jpg',
    category: 'apetizer',
    featured: true,
    label: 'melo',
    price: '4.09',
    description: 'this is third',
  },
  {
    id: '3',
    name: 'uthappizzaa',
    image: 'assets/images/download (3).jpg',
    category: 'apetizer',
    featured: true,
    label: 'new',
    price: '4.99',
    description: 'this is forth',
  }

]
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dishes = DISHES

  selectedDish  = DISHES[0]
  constructor() { }

  ngOnInit(): void {
  }

}
