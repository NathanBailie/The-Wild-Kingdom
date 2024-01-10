import first from 'shared/assets/img/advantges/first.png';
import second from 'shared/assets/img/advantges/second.png';
import third from 'shared/assets/img/advantges/third.png';
import fourth from 'shared/assets/img/advantges/fourth.png';

interface Item {
    img: string
    alt: string
    text: string
    href: string
}

export const advantagesData: Item[] = [
    {
        img: first,
        alt: 'first-img',
        text: 'Taking dogs care to the next level',
        href: '#'
    },
    {
        img: second,
        alt: 'second-img',
        text: 'We value the best health of your pets',
        href: '#'
    },
    {
        img: third,
        alt: 'third-img',
        text: 'Trust us with your pet`s vacation',
        href: '#'
    },
    {
        img: fourth,
        alt: 'fourth-img',
        text: 'We treat cats with utmost care',
        href: '#'
    }
];
