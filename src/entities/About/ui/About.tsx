import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import dog from 'shared/assets/img/about/dog.jpg';
import { aboutData } from '../lib/aboutData';
import cls from './About.module.scss';

export const About = memo(() => {
    const items = aboutData.map((item, id) => {
        const { img, alt, text } = item;

        return (
            <div className={cls.About__item} key={id}>
                <div className={cls.About__itemImg}>
                    <img src={img} alt={alt} />
                </div>
                <p>{text}</p>
            </div>
        )
    });

    return (
        <section className={classNames(cls.About, {}, [])}>
            <div className={classNames(cls.About__container, {}, ['container'])}>
                <div className={cls.About__wrapper}>
                    <img src={dog} alt="dog" />

                    <div className={cls.About__subwrapper}>
                        <div className={cls.About__info
                        }>
                            <p>About us</p>
                            <h2>
                                Treating pet like Royalty
                            </h2>
                            <p className={cls.About__quote}>
                                “They’re not just pets, they’re family”
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Cras aliquam mi id augue ultrices, in tempus elit tristique.
                                Aliquam ultrices sem non.
                            </p>
                            <button className={classNames('', {}, ['button'])}>Explore</button>
                        </div>
                    </div>

                </div>

                <div className={cls.About__items}>
                    {items}
                </div>
            </div>
        </section>
    );
});

About.displayName = 'About';
