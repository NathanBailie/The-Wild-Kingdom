import { About } from 'entities/About';
import { BetterWorld } from 'entities/BetterWorld';
import { Header } from 'entities/Header';

const App = () => {
    return (
        <div className="app">
            <div className="mainBgWrapper">
                <Header />
                <BetterWorld />
            </div>
            <About />
        </div>
    )
}

export default App;
