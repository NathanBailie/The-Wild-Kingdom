import { About } from 'entities/About';
import { BetterWorld } from 'entities/BetterWorld';
import { Header } from 'entities/Header';
import { Products } from 'entities/Products';

const App = () => {
    return (
        <div className="app">
            <div className="mainBgWrapper">
                <Header />
                <BetterWorld />
            </div>
            <About />
            <Products />
        </div>
    )
}

export default App;
