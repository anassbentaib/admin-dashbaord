// import prismadb from "@/lib/prismadb";
// import ProductForm from "./components/product-form";

// const ProductPage = async ({
//   params,
// }: {
//   params: {
//     productId: string;
//     storeId: string;
//   };
// }) => {
//   let product = null;

//   if (params.productId !== "new") {
//     product = await prismadb.product.findUnique({
//       where: {
//         id: params.productId,
//       },
//       include: {
//         images: true,
//       },
//     });
//   }

//   let categories = null;

//   if (params.storeId !== "new") {
//     categories = await prismadb.category.findUnique({
//       where: {
//         id: params.storeId,
//       },
//     });
//   }
  

//   let sizes = null;

//   if (params.storeId !== "new") {
//     sizes = await prismadb.size.findUnique({
//       where: {
//         id: params.storeId,
//       },
//     });
//   }

//   let colors = null;

//   if (params.storeId !== "new") {
//     colors = await prismadb.color.findUnique({
//       where: {
//         id: params.storeId,
//       },
//     });
//   }

//   return (
//     <div className="flex-col">
//       <div className="flex-1 space-y-4 p-8 pt-6">
//         <ProductForm
//           categories={categories}
//           colors={colors}
//           sizes={sizes}
//           initialData={product}
//         />{" "}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;




import prismadb from "@/lib/prismadb";
import ProductForm from "./components/product-form";


const ProductPage = async ({
  params
}: {
  params: { productId: string, storeId: string }
}) => {

    let product = null;

  if (params.productId !== "new") {
    product = await prismadb.product.findUnique({
      where: {
        id: params.productId,
      },
      include: {
        images: true,
      },
    });
  }

  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  const sizes = await prismadb.size.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  return ( 
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm 
          categories={categories} 
          colors={colors}
          sizes={sizes}
          initialData={product}
        />
      </div>
    </div>
  );
}

export default ProductPage;