import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { advantagesData } from '../lib/advantagesData';
import cls from './Advantages.module.scss';

export const Advantages = memo(() => {
    const content = advantagesData.map((item, id) => {
        const { img, alt, text, href } = item;

        return (
            <div className={cls.Advantages__item} key={id}>
                <img src={img} alt={alt} />
                <div className={cls.Advantages__text}>
                    <p>{text}</p>
                    <a href={href}>&rarr;</a>
                </div>
            </div>
        )
    });

    return (
        <section className={classNames(cls.Advantages, {}, [])}>
            <div className={classNames(cls.Advantages__container, {}, ['container'])}>
                <div className={cls.Advantages__items}>
                    {content}
                </div>
            </div>
        </section>
    );
});

Advantages.displayName = 'Advantages';
