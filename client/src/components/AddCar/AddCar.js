export const AddCar = () => {
  return (
    <section id="createPage">
      <form id="createForm">
        <label for="brand">Brand:</label>
        <input type="text" id="brand" name="brand" placeholder="Brand..." />

        <label for="model">Model:</label>
        <input type="text" id="model" name="model" placeholder="Model..." />

        <label for="imageUrl">Image:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          placeholder="Image..."
        />

        <label for="price">Price:</label>
        <input type="number" id="price" name="price" placeholder="Price..." />

        <label for="price">Test drive option:</label>
        <input type="checkbox" id="testDrive" name="testDrive" />

        <button type="submit" class="create">
          Create Car
        </button>
      </form>
    </section>
  );
};
