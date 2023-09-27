import CategoryCard from "./CategoryCard";

const data = [
  { id: 0, name: "Fresh Fruit", count: "9 Products" },
  { id: 1, name: "Fresh Vegs", count: "8 Products" },
  { id: 2, name: "Canned Goods", count: "10 Products" },
];

const Category = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((el) => (
          <CategoryCard key={el.id} name={el.name} count={el.count} />
        ))}
      </div>
    </div>
  );
};

export default Category;
