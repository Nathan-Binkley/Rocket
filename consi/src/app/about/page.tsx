import Image from 'next/image';
import Link from 'next/link';
export default function Page() {
    return (
        <main className="">
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
            about
        </main >
    )
}