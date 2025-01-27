import { useState } from 'react'
import './App.css'
import Card from './components/Card'


let userName = "Saif Ali"
let detailsArray =[{
    image:"https://t4.ftcdn.net/jpg/07/41/71/93/360_F_741719394_C9BP3YbiXSJ7WspSDLtKdYxZKKWlf0Jz.jpg",
    name:"Birds",
    id:1
  },{
    image:"https://images.pexels.com/photos/1368521/pexels-photo-1368521.jpeg?auto=compress&cs=tinysrgb&w=600",
    name:"Sheep",
    id:2
  },{
    image:"https://images.pexels.com/photos/2313396/pexels-photo-2313396.jpeg?auto=compress&cs=tinysrgb&w=600",
    name:"Horse",
    id:3
  },{
    image:"https://images.pexels.com/photos/53581/bald-eagles-bald-eagle-bird-of-prey-adler-53581.jpeg?auto=compress&cs=tinysrgb&w=600",
    name:"Eagle",
    id:4
  },{
    image:"https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&w=600",
    name:"Roster",
    id:5
  },{
    image:"https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=600",
    name:"Tiger",
    id:6
  },{
    image:"https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=600",
    name:"Cats",
    id:7
  },{
    image:"https://images.pexels.com/photos/2302802/pexels-photo-2302802.jpeg?auto=compress&cs=tinysrgb&w=600",
    name:"Deer",
    id:8
  },{
    image:"https://images.pexels.com/photos/53957/striped-core-butterflies-butterfly-brown-53957.jpeg?auto=compress&cs=tinysrgb&w=600",
    name:"Butterfly",
    id:9
  },{
    image:"https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=600",
    name:"Loin",
    id:10
  }]
function App() {
 
  return (
   <>
   <h1 className='text-2xl text-fuchsia-600 place-self-center mt-5'><strong>Some Beautiful Cards of Animal Pictures</strong></h1>
   <Card objDetails = {detailsArray}/>
   </>
  )
}

export default App
