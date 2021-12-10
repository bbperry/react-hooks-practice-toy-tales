import React, {useState} from "react";

function ToyForm({handleAddToy, toys}) {

  // const { id, name, image} = toys

  const [newToyName, setNewToyName] = useState('')
  const [newImage, setNewImage] = useState('')

function handleNewToyName(event){
  setNewToyName(event.target.value)
  
}

function handleNewImage(event){
  setNewImage(event.target.value)
}

function handleSubmit(event){
  event.preventDefault()
  handleAddToy({
    id: toys.length + 1,
    name: newToyName,
     image: newImage,
     likes: 0,
    })
  setNewToyName('')
  setNewImage('')
}


  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleNewToyName}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleNewImage}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
