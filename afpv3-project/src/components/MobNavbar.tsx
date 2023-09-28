import { BsSearch } from "react-icons/bs";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineShop,
} from "react-icons/ai";
import { LiaAddressCard } from "react-icons/lia";
import CartCountBadge from "./CartCountBadge";

const MobNavbar = ({ setShowCart }: any) => {
  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="container p-8 lg:hidden">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-semibold">AFP</h1>
          <div className="flex gap-4 text-[25px]">
            <AiOutlineUser />
            <BsSearch size={21}/>
            <AiOutlineShop />
            <LiaAddressCard />
            <div
              className="relative cursor-pointer"
              onClick={() => setShowCart(true)}
            >
              <AiOutlineShoppingCart />
              <CartCountBadge size="w-[25px] h-[25px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobNavbar;
