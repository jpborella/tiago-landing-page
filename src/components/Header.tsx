import { data } from '../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
    const whatsapp = `https://wa.me/${data.contato.whatsapp}`
    const linkedin = data.contato.linkedin

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="bg-gradient-to-r from-[#123021] to-[#D64000]">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center sm:ml-10 ml-0">
                        <img src={`${import.meta.env.BASE_URL}images/logo1.png`} alt="logo1" className="h-8 md:h-12 lg:h-14" />
                        <img src={`${import.meta.env.BASE_URL}images/logo2.png`} alt="logo2" className="h-6 md:h-8 lg:h-10" />
                    </div>

                    <div className="absolute left-[52%] sm:left-1/2 top-1/2 translate-x-0 sm:-translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                        <span className="text-white text-[10px] sm:text-xs md:text-sm font-light">
                            Contato da revenda:
                        </span>
                        <span className="text-white text-[10px] sm:text-xs md:text-sm font-light">
                            43 99860-6167
                        </span>
                    </div>

                    <div className="flex items-center gap-1 sm:gap-3 sm:mr-10 mr-0">
                        <a href={whatsapp} target="_blank" aria-label="WhatsApp">
                            <FontAwesomeIcon icon={faWhatsapp} className='text-green-500 w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8' />
                        </a>
                        <a href={linkedin} target="_blank" aria-label="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedin} className='text-blue-600 w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8' />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}
