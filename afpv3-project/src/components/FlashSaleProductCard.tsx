import { AiOutlineShopping } from "react-icons/ai";
import { useCartContext } from "../context/cartContext";

interface propsType {
  img: string;
  name: string;
  newprice: string;
  oldprice: string;
}

const FlashSaleProductCard: React.FC<propsType> = ({
  img,
  name,
  newprice,
  oldprice,
}) => {
  const { addToCart } = useCartContext();

  const addProductToCart = () => {
    //toast.success("Added to Cart!");
    addToCart({ img, name, newprice, oldprice });
  };

  return (
    <div className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg relative">
      <img src={img} alt={name} />
      <div className="space-y-2 relative p-4">
        <h3 className="font-medium">{name}</h3>
        <div className="flex">
          <h3 className="text-xl font-medium line-through text-gray-300 mr-2">{newprice}</h3>
          <h3 className="text-xl font-medium text-red-600">{oldprice}</h3>
        </div>

        <button
          className="absolute -top-4 right-2 bg-accent text-white text-[28px] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer"
          onClick={addProductToCart}
        >
          <AiOutlineShopping />
        </button>
      </div>
    </div>
  );
};

export default FlashSaleProductCard;
