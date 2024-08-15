import { CatalogItem } from "./CatalogItem/CatalogItem";

export const Catalog = ({ cars }) => {
  return (
    <section id="viewCatalog" className="background-img">
      {/* If there are one or more cars */}
      {cars.map((x) => (
        <CatalogItem key={x._id} {...x} />
      ))}

      {/* If there are no cars in catalog yet */}
      {cars.length === 0 && (
        <div>
          <div className="guest">There are no cars found...</div>
        </div>
      )}
    </section>
  );
};
