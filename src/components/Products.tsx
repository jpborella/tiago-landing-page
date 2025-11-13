import { useState } from 'react'
import { data } from '../data'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'

export default function Products() {
    const [selectedId, setSelectedId] = useState<number | null>(null)

    const openModal = (id: number) => setSelectedId(id)
    const closeModal = () => setSelectedId(null)

    const selectedProduct = data.produtos.find(p => p.id === selectedId) || null

    return (
        <section className="my-8">
            <h2 className="text-2xl font-bold mb-4 flex justify-center">Nossas Soluções Adicionais</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {data.produtos.map(p => (
                    <ProductCard key={p.id} id={p.id} imagem={p.imagem} imagemResp={p.imagemResp} titulo={p.titulo} descricao={p.descricao} onOpen={openModal} />
                ))}
            </div>

            {selectedProduct && (
                <ProductModal titulo={selectedProduct.titulo} descricao={selectedProduct.descricao} onClose={closeModal} />
            )}
        </section>
    )
}
