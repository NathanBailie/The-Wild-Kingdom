import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import mainDog from 'shared/assets/img/main-dog.png';
import dogHead from 'shared/assets/img/main-dog-head.png';
import cat1 from 'shared/assets/icons/betterWorld/cat1.png';
import dog2 from 'shared/assets/icons/betterWorld/dog2.png';
import cat3 from 'shared/assets/icons/betterWorld/cat3.png';
import cls from './BetterWorld.module.scss';

export const BetterWorld = memo(() => {
    return (
        <section className={classNames(cls.BetterWorld, {}, [])}>
            <div className={cls.BetterWorld__mainImgWrapper}>
                <div className={cls.BetterWorld__mainImg}>
                    <img src={mainDog} alt="dog" />
                </div>
                <img src={dogHead} alt="dogs-head" className={cls.BetterWorld__mainImgHead} />
            </div>
            <div className={classNames(cls.BetterWorld__container, {}, ['container'])}>

                <h1>
                    A better world for pets
                </h1>
                <button className={classNames('', {}, ['button'])}>Explore</button>

                <div className={cls.BetterWorld__images}>
                    <div className={cls.BetterWorld__image}>
                        <img src={cat1} alt="cat1" />
                    </div>
                    <div className={cls.BetterWorld__image}>
                        <img src={dog2} alt="dog2" />
                    </div>
                    <div className={cls.BetterWorld__image}>
                        <img src={cat3} alt="cat3" />
                    </div>
                </div>

            </div>
        </section >
    );
});

BetterWorld.displayName = 'BetterWorld';
