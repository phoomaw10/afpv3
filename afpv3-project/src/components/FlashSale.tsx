import ProductCard from "./ProductCard";

const data = [
  { id: 0, name: "Speedy Mouse", price: "130 baht", img: "/spmu.jpeg" },
  { id: 1, name: "Cat Nip", price: "320 baht", img: "/catnip.jpeg" },
  { id: 2, name: "Electronic Toilet", price: "2,450 baht", img: "/cattoi.jpg" },
  { id: 3, name: "Kitty Potion Shampoo", price: "370 baht", img: "/kipo.jpeg" },
  { id: 4, name: "Kit-Cat", price: "250 baht", img: "/food1.png" },
];

const FlashSale = () => {
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl text-red-400">Flash Sale🔥</h3>
          <p className="text-gray-600 mt-2 mb-2">
            These products are now on sale. Order now!!
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((el) => (
          <ProductCard
            key={el.id}
            img={el.img}
            name={el.name}
            price={el.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
