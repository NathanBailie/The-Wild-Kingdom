import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cat from 'shared/assets/img/services/cat.jpg';
import cls from './Services.module.scss';

export const Services = memo(() => {
    return (
        <section className={classNames(cls.Services, {}, [])}>
            <div className={classNames(cls.Services__container, {}, ['container'])}>
                <div className={cls.Services__leftBg}></div>
                <div className={cls.Services__rightBg}></div>

                <div className={cls.Services__mainImg}>
                    <img src={cat} alt="cat" />
                </div>

                <div className={cls.Services__descr}>
                    <p>
                        Our Services
                    </p>
                    <h2>
                        Quality Things for Loving Pets
                    </h2>
                    <p>
                        “More than a Pet Store…”
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras aliquam mi id augue ultrices, in tempus elit tristique.
                        Aliquam ultrices sem non.
                    </p>
                    <button className={classNames('', {}, ['button'])}>Explore</button>
                </div>
            </div>
        </section>
    );
});

Services.displayName = 'Services';
