"use client";
import Card from "../../components/card";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import useSWR from 'swr';

// const data = [
//     {
//         id: 1,
//         image: "/img/card-top.jpg",
//         title: "Restaurant Title",
//         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
//         alt: "test",
//         categories: ["category1", "category2", "category3"]
//     },
//     {
//         id: 2,
//         image: "/img/card-top.jpg",
//         title: "Restaurant Title",
//         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
//         alt: "test",
//         categories: ["category1", "category2", "category3"]
//     },
//     {
//         id: 3,
//         image: "/img/card-top.jpg",
//         title: "Restaurant Title",
//         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
//         alt: "test",
//         categories: ["category1", "category2", "category3"]
//     },
//     {
//         id: 4,
//         image: "/img/card-top.jpg",
//         title: "Restaurant Title",
//         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
//         alt: "test",
//         categories: ["category1", "category2", "category3"]
//     },
//     {
//         id: 5,
//         image: "/img/card-top.jpg",
//         title: "Restaurant Title",
//         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
//         alt: "test",
//         categories: ["category1", "category2", "category3"]
//     },
//     {
//         id: 6,
//         image: "/img/card-top.jpg",
//         title: "Restaurant Title",
//         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
//         alt: "test",
//         categories: ["category1", "category2", "category3"]
//     }
// ];

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Page() {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);

    const { data, error } = useSWR("http://localhost:8080/api/restaurants-nearby?zipCode=Test Zip Code", fetcher)



    if (error) return <div>Failed to Load!</div>
    if (!data) return <div>Loading...</div>

    let content = [];
    let card;
    for (let i = 0; i < data.length; i++) {
        card = <Card key={data[i].id} image={data[i].image} name={data[i].name} cuisine={data[i].cuisine} alt={data[i].alt} tags={data[i].tags} />;
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
            <div className="bg-gray-200 flex flex-wrap content-center justify-center gap-8 py-8">
                {content}
            </div>
        </main>
    );
}