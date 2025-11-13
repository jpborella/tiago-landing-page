import { data } from '../data'

export default function Footer() {
    const whatsapp = `https://wa.me/${data.contato.whatsapp}`
    const linkedin = data.contato.linkedin

    return (
        <footer className="bg-white py-8">
            <div className="container mx-auto px-4 text-center">
                <div className="flex items-center justify-center gap-4">
                    <a href={whatsapp} target="_blank" className="bg-green-600 text-white px-4 py-2 rounded text-xl">WhatsApp</a>
                    <a href={linkedin} target="_blank" className="bg-blue-700 text-white px-4 py-2 rounded text-xl">LinkedIn</a>
                </div>
                <p className="mt-4 text-sm text-gray-600">© {new Date().getFullYear()} João Paulo Lemes Borella</p>
            </div>
        </footer>
    )
}
