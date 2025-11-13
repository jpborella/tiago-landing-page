import { useState } from 'react'
import { data } from '../data'
import ModulesModal from './ModulesModal'

export default function MainSolutions() {
    const [selectedId, setSelectedId] = useState<number | null>(null)

    const openModal = (id: number) => setSelectedId(id)
    const closeModal = () => setSelectedId(null)

    const selectedSolution = data.solucoesPrincipais.find(s => s.id === selectedId) || null

    return (
        <section className="my-8">
            <h2 className="text-2xl font-bold mb-4 flex justify-center">Nossas Soluções Principais</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {data.solucoesPrincipais.map(s => (
                    <MainSolutionCard
                        key={s.id}
                        id={s.id}
                        imagem={s.imagem}
                        imagemResp={s.imagemResp}
                        titulo={s.titulo}
                        descricao={s.descricao}
                        onOpen={openModal}
                    />
                ))}
            </div>

            {selectedSolution && (
                <ModulesModal
                    titulo={selectedSolution.titulo}
                    modulos={selectedSolution.modulos}
                    onClose={closeModal}
                />
            )}
        </section>
    )
}

type MainSolutionCardProps = {
    id: number
    imagem: string
    imagemResp?: string
    titulo: string
    descricao: string
    onOpen: (id: number) => void
}

function MainSolutionCard({ id, imagem, imagemResp, titulo, descricao, onOpen }: MainSolutionCardProps) {
    return (
        <div className="bg-gray-100 shadow rounded overflow-hidden flex flex-col">
            <div className="w-full flex items-center justify-center bg-white p-2">
                <picture className="w-full flex items-center justify-center">
                    {imagemResp && (
                        <source media="(max-width: 640px)" srcSet={`${import.meta.env.BASE_URL}images/${imagemResp}`} />
                    )}
                    <img src={`${import.meta.env.BASE_URL}images/${imagem}`} alt={titulo} className="w-full object-contain rounded" />
                </picture>
            </div>
            <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-semibold text-2xl">{titulo}</h3>
                <p className="text-sm text-gray-600 mt-2">{descricao}</p>
                <div className="mt-auto pt-4 flex justify-center">
                    <button
                        onClick={() => onOpen(id)}
                        className="bg-[#D64000] text-white px-4 py-2 rounded-md hover:opacity-90 "
                    >
                        Módulos
                    </button>
                </div>
            </div>
        </div>
    )
}
