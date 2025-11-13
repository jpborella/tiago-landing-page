type Props = {
    id: number
    imagem: string
    imagemResp?: string
    titulo: string
    descricao: string
    onOpen: (id: number) => void
}

export default function ProductCard({ id, imagem, imagemResp, titulo, descricao, onOpen }: Props) {
    return (
        <div className="bg-gray-100 shadow rounded overflow-hidden flex flex-col">
            <div className="w-full md:h-30 lg:h-36 sm:h-40 flex items-center justify-center bg-white p-2">
                <picture className="w-full h-full flex items-center justify-center">
                    {imagemResp && (
                        <source media="(max-width: 640px)" srcSet={`/images/${imagemResp}`} />
                    )}
                    <img src={`/images/${imagem}`} alt={titulo} className="max-w-full max-h-full object-contain rounded" />
                </picture>
            </div>
            <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-semibold text-2xl">{titulo}</h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-4">{descricao}</p>
                <div className="mt-auto pt-4 flex justify-center">
                    <button
                        onClick={() => onOpen(id)}
                        className="bg-[#D64000] text-white px-4 py-2 rounded-md hover:opacity-90 "
                    >
                        Saiba Mais
                    </button>
                </div>
            </div>
        </div>
    )
}

