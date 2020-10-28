import React, { Component } from 'react'
import Landingpage from './Landingpage';
import Product from './Product'
import './Productlist.css';
import Card from './Card';
import Details from './Details'
import {Link} from 'react-router-dom';
 export  const ProductsList = [
    {
      id: 1,
      title: "Oppo F11 Pro",
      url: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTEqs1xhjREfgSvIrsuMINckpBQylTf98iW0OsUX251423hNNRJS11erNIKQ6U4FBkBDHS9P2OdSg&usqp=CAc",
      description: 'Versatile 64MP Quad camera to document your life. Immersive viewing with 16.21cm (6.4") Infinity-U Display 6,000mAh battery and 15W Fast Charging**',
      price: "41999.00"
    },
    {
      id: 2,
      title: "Dell Laptop",
      url: "https://images-na.ssl-images-amazon.com/images/I/518ha6z%2B9PL._SL1080_.jpg",
      description: "Dell Inspiron 5408 14 inch FHD Laptop (10th Gen i5-1035G1/8 GB/512 SSD/2 Gb NVIDIA Graphics/Win 10 + MS Office/Pebble) D560210WIN9SE",
      price: 68990.00
    },
    {
      id: 3,
      title: "HP Laptop",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2sUGjt4toRgHqqpmNYeWniwyYlY1j2kE6SLoBSJegFoiPR9ArzElRXp1Erg&usqp=CAc",
      description:"HP NoteBook is a Windows 10 laptop with a 15.60-inch display that has a resolution of 1366x768 pixels. It is powered by a Core i5 processor and it comes with 8GB of RAM. The HP NoteBook packs 256GB of SSD storage. Graphics are powered by Intel HD Graphics 620.",
      price: 64990.00
    },
    {
      id: 4,
      title: "Apple Ipad mini",
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFqNEjaClIzRfwnYOr_jZVMkTcCYwppju8kOA9cHnxpM_VK28EPg43jcljz1DXh4gxyE-tvr6c&usqp=CAc",
      description: "Apple iPad Mini (Wi-Fi, 64GB) - Space Grey",

      price: "82999.00"
    },
    {
        id: 5,
        url: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSRmJA2Ko1W9AjPOZek4Nro8ahN6FJatOEktYzaHNYsPuKgivMMwDW8rpgUwRX7fJpRkREMYJQVo_45sU5B7GH-j2fYn4gWZkrDUGJEGkNwg7rSo-BbZtUmp_z-&usqp=CAE",
       title:"TORQ- Say HELLO TO THE BEAST",
        description: "A beast of a sound True Wireless with futuristic features that can dominate any flagship models in the market. Feather touch, in-ear music detection, Qualcomm aptX, wireless charging all backed by a fast Qualcomm chipset makes Torq the ‘flagship killer’.",
  
        price: "5799.00"
      },
      {
        id: 6,
        title: "Amazon Echo Dot Bluetooth Speaker 3rd Gen (Black)",
        url:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR8WvLuv6bA-hinNsER2Fhcx1TWDfTsHAfaPeuk-K3H0usvcbhfeeB8shuCK5BeipqIrkpn8lJIO7Fx3CQDkJ02GPmNYW_ZErLEzRvCUGymLHtVXwNWVMf7gmU&usqp=CAE",
        description: ' Amazon · Amazon Echo · Amazon Echo Dot · Amazon Echo Dot (1st Generation) · Bluetooth · AUX · Wireless · Smart Speaker · Voice Control Just ask Alexa to place a call to Mom or send a quick voice message to a friend. You can broadcast anything to all your Echo devices. Just say “Alexa, announce that I am ...',
  
        price: "2990.00"
      },
      {
        id: 7,
        title: "Boat Rockerz 410 On The Ear Bluetooth Headphone with Mic for Rent/Demo - Bragpacker",
        url:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ8x2RK_UHpu7BmBpX08s8BB-YHFwpvwzQlcXNrK7P8LNCGEbnwS8XlnoAam_dXsnm2NuTmJNUZ10osnDJK2FFwB5UgSBSHlh8fihf44Q0MCxZZ7uQzmHKf5g&usqp=CAE",
        description: "Thick foam padding, adjustable head band and easy swivel earpieces make this set very comfortable and highly adjustable for any head shape.They have a lightweight construction, weighing only 125 gms, making them suitable for long hours of music or calls.40mm drivers with provide a thumping bass and clear vocals. Among the best sounding headphones at this price.",
  
        price: "1990.00"
      }
  ];
  const Arrayproduct = ProductsList.map( (product,i)=>{
    return(
        <Card url ={ProductsList[i].url}
               title ={ProductsList[i].title}
               description ={ProductsList[i].description}
                price = {ProductsList[i].price}   />
    )}
  );
  

  export default class Productlist extends Component {
    render() {
        return (
            <div>
            <div id="body">
                <Landingpage></Landingpage>
                <div id ="list">
                <div class = "card-deck" style={{flexWrap:"wrap"}}>
                 {Arrayproduct }
                </div>
                </div>
            </div>
            </div>
        )
    }
}
