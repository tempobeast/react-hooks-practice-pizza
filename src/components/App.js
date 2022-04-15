import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

  const [pizzas, setPizzas] = useState([])
  const [editPizza, setEditPizza] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then((res) => res.json())
    .then((data) => setPizzas(data))
  }, [])

  const [formData, setFormData] = useState({
    topping: editPizza.topping,
    size: editPizza.size,
    vegetarian: false
  })

  function onEditClick(pizzaToEdit){
    setEditPizza(pizzaToEdit)
    setFormData(pizzaToEdit)
  }

  function onFormSubmit(updatedPizza) {
    console.log(updatedPizza.id)
    const updatedPizzaList = pizzas.map((pizza) => {
      if (pizza.id === updatedPizza.id) {
        return updatedPizza
      } else {
        return pizza
      }
    }) 
    setPizzas(updatedPizzaList)
    }

  function onFormChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }


  return (
    <>
      <Header />
      <PizzaForm formData={formData} onFormSubmit={onFormSubmit} onFormChange={onFormChange}/>
      <PizzaList pizzas={pizzas} onEditClick={onEditClick}/>
    </>
  );
}

export default App;
