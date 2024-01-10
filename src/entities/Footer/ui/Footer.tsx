import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { siteMainLinks } from 'entities/Header';
import logo from 'shared/assets/icons/logo.svg';
import { socialsData } from '../lib/footerDat';
import cls from './Footer.module.scss';

export const Footer = memo(() => {
    const socials = socialsData.map((item, id) => {
        const { img, alt } = item;

        return (
            <img src={img} alt={alt} className={cls.Footer__social} key={id} />
        )
    });

    return (
        <footer className={classNames(cls.Footer, {}, [])}>
            <div className={classNames(cls.Footer__container, {}, ['container'])}>
                <div className={cls.Footer__wrapper}>

                    <div className={cls.Footer__sitemap}>
                        <h2>Sitemap</h2>

                        <nav className={cls.Footer__menu}>
                            <ul>
                                {siteMainLinks}
                            </ul>
                        </nav>

                        <div className={cls.Footer__socials}>
                            {socials}
                        </div>
                    </div>

                    <div className={cls.Footer__vertDivider}></div>

                    <img src={logo} alt="logo" className={cls.Footer__logo} />

                    <div className={cls.Footer__vertDivider}></div>

                    <div className={cls.Footer__subscribe}>
                        <h2>
                            Treating all the pets present here like royalty.
                        </h2>

                        <div className={cls.Footer__subscribeWrapper}>
                            <input type="text" placeholder='Enter email address' />
                            <button className={classNames('', {}, ['button'])}>Subscribe</button>
                        </div>
                    </div>

                </div>

                <div className={cls.Footer__horizontalDivider}></div>

                <h3>Copyright Dotcreativemarket</h3>

            </div>
        </footer>
    );
});

Footer.displayName = 'Footer';
