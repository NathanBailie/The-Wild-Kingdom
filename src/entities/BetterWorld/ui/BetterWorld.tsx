import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './BetterWorld.module.scss';
import mainDog from 'shared/assets/img/main-dog.png';
import cat1 from 'shared/assets/icons/betterWorld/cat1.png';
import dog2 from 'shared/assets/icons/betterWorld/dog2.png';
import cat3 from 'shared/assets/icons/betterWorld/cat3.png';

export const BetterWorld = memo(() => {
    return (
        <section className={classNames(cls.BetterWorld, {}, [])}>
            <img src={mainDog} alt="dog" className={cls.BetterWorld__mainImg} />
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
