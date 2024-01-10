import { About } from 'entities/About';
import { Advantages } from 'entities/Advantages';
import { BetterWorld } from 'entities/BetterWorld';
import { Header } from 'entities/Header';
import { Products } from 'entities/Products';
import { Services } from 'entities/Services';

const App = () => {
    return (
        <div className="app">
            <div className="mainBgWrapper">
                <Header />
                <BetterWorld />
            </div>
            <About />
            <Products />
            <Services />
            <Advantages />
        </div>
    )
};

export default App;
