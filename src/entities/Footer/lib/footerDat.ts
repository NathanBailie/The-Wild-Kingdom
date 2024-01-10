import twitter from 'shared/assets/icons/footer/twitter.png';
import instagram from 'shared/assets/icons/footer/instagram.png';
import tiktok from 'shared/assets/icons/footer/tiktok.png';
import medium from 'shared/assets/icons/footer/medium.png';

interface Social {
    img: string
    alt: string
}

export const socialsData: Social[] = [
    {
        img: twitter,
        alt: 'twitter'
    },
    {
        img: instagram,
        alt: 'instagram'
    },
    {
        img: tiktok,
        alt: 'tiktok'
    },
    {
        img: medium,
        alt: 'medium'
    }
];
