export const CarItemEdit = () => {
  return (
    <section id="editPage">
      <form id="editForm">
        <label for="brand">Brand:</label>
        <input type="text" id="brand" name="brand" defaultValue="" />

        <label for="model">Model:</label>
        <input type="text" id="model" name="model" defaultValue="" />

        <label for="imageUrl">Image:</label>
        <input type="text" id="imageUrl" name="imageUrl" defaultValue="" />

        <label for="price">Price:</label>
        <input type="number" id="price" name="price" defaultValue="" />

        <input type="submit" className="edit-btn" value="Edit car" />
        <input type="submit" className="back-btn" value="Back" />
      </form>
    </section>
  );
};
