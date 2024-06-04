import Card from "../../components/card";
import Image from "next/image";
import Link from "next/link";
const data = [
    {
        id: 1,
        image: "/img/card-top.jpg",
        title: "Restaurant Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        alt: "test",
        categories: ["category1", "category2", "category3"]
    },
    {
        id: 2,
        image: "/img/card-top.jpg",
        title: "Restaurant Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        alt: "test",
        categories: ["category1", "category2", "category3"]
    },
    {
        id: 3,
        image: "/img/card-top.jpg",
        title: "Restaurant Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        alt: "test",
        categories: ["category1", "category2", "category3"]
    },
    {
        id: 4,
        image: "/img/card-top.jpg",
        title: "Restaurant Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        alt: "test",
        categories: ["category1", "category2", "category3"]
    },
    {
        id: 5,
        image: "/img/card-top.jpg",
        title: "Restaurant Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        alt: "test",
        categories: ["category1", "category2", "category3"]
    },
    {
        id: 6,
        image: "/img/card-top.jpg",
        title: "Restaurant Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        alt: "test",
        categories: ["category1", "category2", "category3"]
    }
];
export default function Page() {
    let content = [];
    let card;
    for (let i = 0; i < data.length; i++) {
        card = <Card key={i} image={data[i].image} title={data[i].title} description={data[i].description} alt={data[i].alt} categories={data[i].categories} />;
        content.push(card);
    }

    return (
        <main>
            <div className="text-center">
                <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
                    <div className="flex items-center">
                        <Image src="/img/card-top.jpg" alt="logo" width={50} height={50} />
                        <h1 className="text-2xl ml-2">Consi</h1>
                    </div>
                    <ul className="flex">
                        <Link className="ml-4" href="/">Home</Link>
                        <Link className="ml-4" href='/about'>About</Link>
                        <Link className="ml-4" href='/browse'>Browse</Link>
                    </ul>
                </nav>
            </div>
            <div className="bg-gray-200 flex flex-wrap content-center justify-center gap-8">
                {content}
            </div>
        </main>
    );

}