import { WidgetGrid } from "@/components";

export const metadata = {
 title: 'Main',
 description: 'Descripcion Main',
};

export default function Main() {
  return (
    <div className="flex flex-col items-center text-black p-2 bg-gray-200 min-h-full">
      <h1 className="mt-3 text-3xl">Dashboard</h1>
      <span className="text-xl">Informacion general</span>
      <WidgetGrid/>
    </div>
  );
}