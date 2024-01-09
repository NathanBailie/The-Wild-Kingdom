import bow from 'shared/assets/img/about/bow.png';
import syringe from 'shared/assets/img/about/syringe.png';
import home from 'shared/assets/img/about/home.png';

interface Item {
    img: string
    alt: string
    text: string
}

export const aboutData: Item[] = [
    {
        img: bow,
        alt: 'bow',
        text: 'Pet food'
    },
    {
        img: syringe,
        alt: 'syringe',
        text: 'Pet care'
    },
    {
        img: home,
        alt: 'home',
        text: 'Pet accessories'
    }
];
