import Header from './components/Header'
import Hero from './components/Hero'
import MainSolutions from './components/MainSolutions'
import Products from './components/Products'
import Footer from './components/Footer'

export default function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container mx-auto px-4 pt-24 pb-8">
                <Hero />
                <MainSolutions />
                <Products />
            </main>
            <Footer />
        </div>
    )
}
