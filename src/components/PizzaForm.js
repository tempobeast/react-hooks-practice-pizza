import React from "react";


function PizzaForm({ formData, onFormSubmit, onFormChange }) {

  const {id, topping, size, vegetarian} = formData

 function handleFormChange(e) {
  onFormChange(e)
 }

  console.log(formData)

  function handleSubmitForm (e){
   e.preventDefault();
   fetch(`http://localhost:3001/pizzas/${id}`, {
     method: "PATCH",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(formData),
   })
   .then((res) => res.json())
   .then((data) => onFormSubmit(data))
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            onChange={handleFormChange} 
            value={topping}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={size} onChange={handleFormChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              onChange={handleFormChange} 
              checked={vegetarian ? true : null}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              onChange={handleFormChange}
              checked={!vegetarian ? true : false}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
