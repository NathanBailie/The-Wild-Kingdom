import { type Mods, classNames } from 'shared/lib/classNames/classNames';
import { memo, useState } from 'react';
import logo from 'shared/assets/icons/logo.svg';
import cls from './Header.module.scss';

export const Header = memo(() => {
    const [active, setActive] = useState(false);

    const hamburgerModes: Mods = {
        [cls.Header__hamburger_active]: active
    };
    const containerModes: Mods = {
        [cls.Header__container_active]: active
    };

    const menuToggler = () => {
        setActive((prev) => !prev)
    };

    return (
        <header className={classNames(cls.Header, {}, [])}>
            <div
                className={classNames(cls.Header__container, containerModes, ['container'])}
            >
                <nav className={cls.Header__menu}>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Products</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                    </ul>
                </nav>
                <img src={logo} alt="logo" className={cls.Header__logo} />
                <div className={cls.Header__actions}>
                    <a>Log in</a>
                    <a>Register</a>
                    <button className={classNames('', {}, ['button'])}>Contact</button>
                </div>

            </div>

            <div
                className={classNames(cls.Header__hamburger, hamburgerModes, [])}
                onClick={() => { menuToggler() }}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
});

Header.displayName = 'Header';
