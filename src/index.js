//index js é o nome do arquivo de entrada que o packge está esperando

import React, { StrictMode } from 'react';
//reactDoom é o pacote que interage com o dom é uma classe que tem varios metodos
//tudo em react está dentro de componentes

import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];


function App(){
       return (
            <div className='container'> 
                <Header/>
                <Menu/>
                <Footer/>
            </div>
        )   
}

function Header(){
    return(
        <header>
            <h1 className='header'>Pizza React Co.</h1>
        </header>
    )
}
function Menu(){
    return(
       <div>
                <Pizza/>
                <Pizza/>
                <Pizza/>
       </div>
    )
}

function Footer(){
    const currentTime = new Date().toLocaleTimeString();
    const openHour = 12;

    return(
        <footer>
            <h3>We´re corrent open</h3>
            <p>© 2021 Pizza React Co.</p>
            <p>Current time: {currentTime}</p>
        </footer>
    )
}

function  Pizza(props){
  console.log(props)
    return (
        <div>
            <img src='pizzas/spinaci.jpg' alt='pizza spincai'></img>
            <h1>Focaccia</h1>
            <p>Bread with italian olive oil and rosemary</p>
        </div>
        
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     <App/>
  </React.StrictMode>
);

//todo componente tem seus dados e sua logica e aparecia e  é reutiziavel
//para usar o css basta importar o arquivo css no index.js