import { useEffect } from "react"

type Props = {
    titulo?: string
    descricao?: string
    onClose: () => void
}

export default function ProductModal({ titulo, descricao, onClose }: Props) {
    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [onClose])

    if (!titulo) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="relative bg-white rounded-lg shadow-lg max-w-2xl w-full mx-4 p-6 z-10">
                <h2 className="text-2xl font-bold mb-4">{titulo}</h2>
                <p className="text-gray-700">{descricao}</p>
                <div className="mt-6 text-right">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">Fechar</button>
                </div>
            </div>
        </div>
    )
}
