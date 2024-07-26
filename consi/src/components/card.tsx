export default function Card(props) {
    return (
        <div className="bg-blue-300 max-w-sm  overflow-hidden shadow-lg px-3 py-3 rounded-s">
            <img className="w-full" src={props.image} alt={props.alt} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.name}</div>
                <p className="text-gray-700 text-base">
                    {props.cuisine}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.tags[0]}</button>
                <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.tags[1]}</button>
                <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.tags[2]}</button>
            </div>
        </div>
    )
}