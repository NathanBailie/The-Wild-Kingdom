import { type Mods, classNames } from 'shared/lib/classNames/classNames';
import { memo, useState } from 'react';
import logo from 'shared/assets/icons/logo.svg';
import { Hamburger } from 'shared/ui/Hamburger/Hamburger';
import { linksData } from '../lib/linksData';
import cls from './Header.module.scss';

export const siteMainLinks = linksData.map((item, id) => {
    const { href, name } = item;

    return (
        <li key={id}>
            <a href={href}>{name}</a>
        </li>
    )
});

export const Header = memo(() => {
    const [active, setActive] = useState(false);
    const headerModes: Mods = {
        [cls.Header_active]: active
    };
    const containerModes: Mods = {
        [cls.Header__container_active]: active
    };

    const menuToggler = () => {
        setActive((prev) => !prev)
    };

    return (
        <header className={classNames(cls.Header, headerModes, [])}>
            <div
                className={classNames(cls.Header__container, containerModes, ['container'])}
            >
                <nav className={cls.Header__menu}>
                    <ul>
                        {siteMainLinks}
                    </ul>
                </nav>
                <img src={logo} alt="logo" className={cls.Header__logo} />
                <div className={cls.Header__actions}>
                    <a>Log in</a>
                    <a>Register</a>
                    <button className={classNames('', {}, ['button'])}>Contact</button>
                </div>

            </div>

            <Hamburger active={active} menuToggler={menuToggler} />
        </header>
    );
});

Header.displayName = 'Header';
