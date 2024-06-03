import Image from "next/image";
import Card from "../components/card";

let content;
const data = [
  {
    image: "/img/card-top.jpg",
    description: "Sunset in the mountains"
  }
];


export default function Home() {
  if (data) {
    content = data.map( data => <img className="w-full h-56 w-auto" src={data.image} alt={data.description}/>);
  } else {
    content = <img className="w-full h-56 w-auto" src="/img/card-top.jpg" alt="Sunset in the mountains"/>;
  }

  return (
    <main className="">
      <div className="text-center border-red-900">
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
          <div className="flex items-center">
            <Image src="/img/card-top.jpg" alt="logo" width={50} height={50}/>
            <h1 className="text-2xl ml-2">Consi</h1>
          </div>
          <ul className="flex">
            <li className="mx-2">Home</li>
            <li className="mx-2">About</li>
            <li className="mx-2">Contact</li>
          </ul>
        </nav>
        <div className="container bg-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-16 items-center">
            <Card image="/img/card-top.jpg" alt="test"/>
            <Card image="/img/card-top.jpg" alt="test"/>
            <Card image="/img/card-top.jpg" alt="test"/>
          </div>
        </div>
      </div>
    </main>
  );
}
