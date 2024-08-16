import { useForm } from "../../hooks/useForm";

export const AddCar = ({ onCreateCarSubmit }) => {
  const {values, changeHandler, onSubmit} = useForm({
    brand: "",
    model: "",
    imageUrl: "",
    price: "",
  }, onCreateCarSubmit);

  return (
    <section id="createPage">
      <form id="createForm" method="POST" onSubmit={onSubmit}>
        <label htmlFor="brand">Brand:</label>
        <input
          type="text"
          id="brand"
          name="brand"
          placeholder="Brand..."
          value={values.brand}
          onChange={changeHandler}
        />

        <label htmlFor="model">Model:</label>
        <input
          type="text"
          id="model"
          name="model"
          placeholder="Model..."
          value={values.model}
          onChange={changeHandler}
        />

        <label htmlFor="imageUrl">Image:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          placeholder="Image..."
          value={values.imageUrl}
          onChange={changeHandler}
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          placeholder="Price..."
          value={values.price}
          onChange={changeHandler}
        />

        <button type="submit" className="create">
          Add car
        </button>
      </form>
    </section>
  );
};
