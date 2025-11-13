import { useEffect } from "react"

type Props = {
    titulo?: string
    modulos?: string[]
    onClose: () => void
}

export default function ModulesModal({ titulo, modulos, onClose }: Props) {
    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [onClose])

    if (!titulo || !modulos) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full mx-4 p-6 z-10 max-h-[90vh] overflow-y-auto">
                <h2 className="text-2xl font-bold mb-4">{titulo}</h2>
                <h3 className="text-lg font-semibold mb-3 text-gray-700">Módulos:</h3>
                <ul className="space-y-2">
                    {modulos.map((modulo, index) => {
                        const [titulo, ...descricaoParts] = modulo.split(' - ')
                        const descricao = descricaoParts.join(' - ')
                        
                        return (
                            <li key={index} className="flex items-start">
                                <span className="text-[#D64000] mr-2 mt-1">•</span>
                                <span className="text-gray-700">
                                    <strong>{titulo}</strong>
                                    {descricao && ` - ${descricao}`}
                                </span>
                            </li>
                        )
                    })}
                </ul>
                <div className="mt-6 text-right">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Fechar</button>
                </div>
            </div>
        </div>
    )
}
