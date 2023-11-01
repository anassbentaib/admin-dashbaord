import prismadb from "@/lib/prismadb";
import BillboardForm from "./components/Billboard-form";

// const BillboardPage = async ({
//   params,
// }: {
//   params: { billboardId: string };
// }) => {

//     console.log('params',params);
//     console.log('billboard',params.billboardId);

//   const billboard = await prismadb.billboard.findUnique({
//     where: {
//       id: params.billboardId,
//     },
//   });

//   return (
//     <div className="flex-col">
//       <div className="flex-1 space-y-4 p-8 pt-6">
//         <BillboardForm initialData={billboard} />
//       </div>
//     </div>
//   );
// };

// export default BillboardPage;

const BillboardPage = async ({
  params,
}: {
  params: { billboardId: string };
}) => {
  let billboard = null;

  if (params.billboardId !== "new") {
    billboard = await prismadb.billboard.findUnique({
      where: {
        id: params.billboardId,
      },
    });
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm initialData={billboard} />
      </div>
    </div>
  );
};

export default BillboardPage;
