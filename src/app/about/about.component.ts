import { Component } from '@angular/core';



interface products {
  imgSrc : string;
  title: string;
  desc: string;
  price: number;
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  product: products[] = [
    {imgSrc:"assets/images/pexels-anna.jpg" , title: "A Black Shirt", desc: "A Black Shirt Hanging on the Wall", price: 150 },
    {imgSrc:"assets/images/3.jpg" , title: "Camera", desc: "black camera", price: 2000 },
    {imgSrc:"assets/images/4.jpg" , title: "Watch", desc: "Whach black", price: 2000 },
    {imgSrc:"assets/images/pexels-kosma.jpg" , title: "Camera", desc: "Camera on chair", price: 2000 },
    {imgSrc:"assets/images/pexels-mnz.jpg" , title: "Low-top Sneakers", desc: "Pair of Gray Vans Low-top Sneakers Beside Black Shirt", price: 1250 },
    {imgSrc:"assets/images/2.jpg" , title: "Lamda", desc: "Light lamda ", price: 2000 },
    {imgSrc:"assets/images/pexels-ylanite.jpg" , title: "shoose", desc: "Green High-top Sneakers Beside Bottoms And Sunglasses", price: 2000 },
    {imgSrc:"assets/images/pexels-dom.jpg" , title: "T-Shirt", desc: "Gray and Black Striped Crew-neck Top", price: 250 },
    
    {imgSrc:"assets/images/pexels-anna.jpg" , title: "A Black Shirt", desc: "A Black Shirt Hanging on the Wall", price: 150 },
    {imgSrc:"assets/images/3.jpg" , title: "Camera", desc: "black camera", price: 2000 },
    {imgSrc:"assets/images/4.jpg" , title: "Watch", desc: "Whach black", price: 2000 },
    {imgSrc:"assets/images/pexels-kosma.jpg" , title: "Camera", desc: "Camera on chair", price: 2000 },
    {imgSrc:"assets/images/pexels-mnz.jpg" , title: "Low-top Sneakers", desc: "Pair of Gray Vans Low-top Sneakers Beside Black Shirt", price: 1250 },
    {imgSrc:"assets/images/2.jpg" , title: "Lamda", desc: "Light lamda ", price: 2000 },
    {imgSrc:"assets/images/pexels-ylanite.jpg" , title: "shoose", desc: "Green High-top Sneakers Beside Bottoms ", price: 2000 },
    {imgSrc:"assets/images/pexels-dom.jpg" , title: "T-Shirt", desc: "Gray and Black Striped Crew-neck Top", price: 250 },
    
    {imgSrc:"assets/images/pexels-anna.jpg" , title: "A Black Shirt", desc: "A Black Shirt Hanging on the Wall", price: 150 },
    {imgSrc:"assets/images/3.jpg" , title: "Camera", desc: "black camera", price: 2000 },
    {imgSrc:"assets/images/4.jpg" , title: "Watch", desc: "Whach black", price: 2000 },
    {imgSrc:"assets/images/pexels-kosma.jpg" , title: "Camera", desc: "Camera on chair", price: 2000 },
    
  ]
}

