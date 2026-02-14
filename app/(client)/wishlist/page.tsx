import NoAccess from "@/components/NoAccess";
import WishListProducts from "@/components/WishListProducts";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const WishListPage = async () => {
  const user = await currentUser();
  return (
    <>
      {user ? (
        <WishListProducts />
      ) : (
        <NoAccess details="Ingrese para ver los artículos de su lista de deseos. ¡No se pierda sus productos en el carrito para realizar el pago!" />
      )}
    </>
  );
};

export default WishListPage;
