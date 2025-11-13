import { data } from '../data'

export default function Hero() {
    return (
        <section className="flex flex-col items-center text-center py-5 ">
            <img src={`${import.meta.env.BASE_URL}images/foto-tiago.png`}
                alt={data.vendedor.nome}
                className="w-48 h-48 object-cover object-top rounded-full shadow-xl" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 ">{data.vendedor.nome}</h1>
            <p className="text-xl md:text-2xl font-medium text-gray-600">{data.vendedor.cargo}</p>
        </section>
    )
}
