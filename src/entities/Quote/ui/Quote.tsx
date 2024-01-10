import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import foot from 'shared/assets/icons/foot.svg';
import openMark from 'shared/assets/icons/open-mark.svg';
import closeMark from 'shared/assets/icons/close-mark.svg';
import cls from './Quote.module.scss';

export const Quote = memo(() => {
    return (
        <section className={classNames(cls.Quote, {}, [])}>
            <div className={classNames(cls.Quote__container, {}, ['container'])}>

                <div className={cls.Quote__icon}>
                    <img src={foot} alt="foot" />
                </div>

                <div className={cls.Quote__text}>
                    <a href='#'>&larr;</a>
                    <p>
                        <img src={openMark} alt="open-mark" className={cls.Quote__openMark} />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam vulputate pharetra ante id congue. Cras feugiat, diam a placerat posuere,
                        arcu risus porta elit, sed finibus magna lorem ut turpis.
                        <img src={closeMark} alt="close-mark" className={cls.Quote__closeMark} />
                    </p>
                    <a href='#'>&rarr;</a>
                </div>

                <h2>
                    Etiam vulputate
                </h2>
            </div>
        </section>
    );
});

Quote.displayName = 'Quote';
