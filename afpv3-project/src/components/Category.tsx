import CategoryCard from "./CategoryCard";

const data = [
  { id: 0, name: "Food", count: "9 Products", img: "/cate1.png" },
  { id: 1, name: "Toy", count: "6 Products", img: "/cate1.png" },
  { id: 2, name: "Accessories", count: "10 Products", img: "/cate1.png" },
  { id: 3, name: "Other", count: "30 Products", img: "/cate1.png" },
];

const Category = () => {
  return (
    <div className="container pt-16">
      <h1 className="text-4xl font-medium mb-4">Category</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((el) => (
          <CategoryCard
            key={el.id}
            img={el.img}
            name={el.name}
            count={el.count}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
