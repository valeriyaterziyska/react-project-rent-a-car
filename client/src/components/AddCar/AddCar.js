export const AddCar = () => {
  return (
    <section id="createPage">
      <form id="createForm">
        <label htmlFor="brand">Brand:</label>
        <input type="text" id="brand" name="brand" placeholder="Brand..." />

        <label htmlFor="model">Model:</label>
        <input type="text" id="model" name="model" placeholder="Model..." />

        <label htmlFor="imageUrl">Image:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          placeholder="Image..."
        />

        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" placeholder="Price..." />

        <label htmlFor="price">Test drive option:</label>
        <input type="checkbox" id="testDrive" name="testDrive" />

        <button type="submit" className="create">
          Create Car
        </button>
      </form>
    </section>
  );
};
