import { useState } from "react";

export const AddCar = ({ onCreateCarSubmit }) => {
  const [values, setValues] = useState({
    brand: "",
    model: "",
    imageUrl: "",
    price: "",
  });

  const onChangeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    onCreateCarSubmit(values);
  };

  return (
    <section id="createPage">
      <form id="createForm" onSubmit={onSubmit}>
        <label htmlFor="brand">Brand:</label>
        <input
          type="text"
          id="brand"
          name="brand"
          placeholder="Brand..."
          value={values.brand}
          onChange={onChangeHandler}
        />

        <label htmlFor="model">Model:</label>
        <input
          type="text"
          id="model"
          name="model"
          placeholder="Model..."
          value={values.model}
          onChange={onChangeHandler}
        />

        <label htmlFor="imageUrl">Image:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          placeholder="Image..."
          value={values.imageUrl}
          onChange={onChangeHandler}
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          placeholder="Price..."
          value={values.price}
          onChange={onChangeHandler}
        />

        <button type="submit" className="create">
          Add car
        </button>
      </form>
    </section>
  );
};
