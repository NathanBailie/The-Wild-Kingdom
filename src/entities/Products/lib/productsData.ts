import petBed from 'shared/assets/img/products/pet-bed.png';
import catFood from 'shared/assets/img/products/cat-food.png';
import dogFood from 'shared/assets/img/products/dog-food.png';
import treatForDog from 'shared/assets/img/products/teat-for-dog.png';
import scratchingToyForCat from 'shared/assets/img/products/scratching-toy-for-cat.png';
import teddyBearForDog from 'shared/assets/img/products/teddy-bear-for-dog.png';
import treatsKnotBone from 'shared/assets/img/products/treats-knot-bone.png';
import dogBowls from 'shared/assets/img/products/dog-bowls.png';

interface Item {
    img: string
    alt: string
    name: string
    price: string
    fullStarsAmount: number
    emptyStarsAmount: number
}

export const productsData: Item[] = [
    {
        img: petBed,
        alt: 'pet-bed',
        name: 'Luxury pet bed',
        price: '$120',
        fullStarsAmount: 4,
        emptyStarsAmount: 1
    },
    {
        img: catFood,
        alt: 'cat-food',
        name: 'Cat Food',
        price: '$20',
        fullStarsAmount: 4,
        emptyStarsAmount: 1
    },
    {
        img: dogFood,
        alt: 'dog-food',
        name: 'Dog food',
        price: '$30',
        fullStarsAmount: 4,
        emptyStarsAmount: 1
    },
    {
        img: treatForDog,
        alt: 'treat-for-dog',
        name: 'Treat for dog',
        price: '$60',
        fullStarsAmount: 4,
        emptyStarsAmount: 1
    },
    {
        img: scratchingToyForCat,
        alt: 'scratching-for-cat',
        name: 'scratching toy for cat',
        price: '$200',
        fullStarsAmount: 4,
        emptyStarsAmount: 1
    },
    {
        img: teddyBearForDog,
        alt: 'treats-knot-bone',
        name: 'Teddy bear for dog',
        price: '$80',
        fullStarsAmount: 4,
        emptyStarsAmount: 1
    },
    {
        img: treatsKnotBone,
        alt: 'teddy-bear-for-dog',
        name: 'Treats Knot Bone',
        price: '$8',
        fullStarsAmount: 4,
        emptyStarsAmount: 1
    },
    {
        img: dogBowls,
        alt: 'dog-bowls',
        name: 'Dog Bowls',
        price: '$8',
        fullStarsAmount: 4,
        emptyStarsAmount: 1
    }
];
