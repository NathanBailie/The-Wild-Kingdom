import { About } from 'entities/About';
import { Advantages } from 'entities/Advantages';
import { BetterWorld } from 'entities/BetterWorld';
import { Contacts } from 'entities/Contacts';
import { Header } from 'entities/Header';
import { Products } from 'entities/Products';
import { Quote } from 'entities/Quote';
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
            <Contacts />
            <Quote />
        </div>
    )
};

export default App;
