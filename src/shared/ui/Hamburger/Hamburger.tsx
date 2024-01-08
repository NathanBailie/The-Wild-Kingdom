import { type Mods, classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Hamburger.module.scss';

interface HamburgerProps {
    className?: string
    active: boolean
    menuToggler: () => void
}

export const Hamburger = memo((props: HamburgerProps) => {
    const { className, active, menuToggler } = props;

    const hamburgerModes: Mods = {
        [cls.Hamburger_active]: active
    };

    return (
        <div
            className={classNames(cls.Hamburger, hamburgerModes, [className])}
        >
            <div
                className={classNames(cls.Hamburger__container, {}, [className])}
                onClick={() => { menuToggler() }}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

        </div>
    );
});

Hamburger.displayName = 'Hamburger';
