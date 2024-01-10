import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import first from 'shared/assets/img/contacts/first.png';
import second from 'shared/assets/img/contacts/second.png';
import contactsBg from 'shared/assets/img/contacts-bg.png';
import cls from './Contacts.module.scss';

export const Contacts = memo(() => {
    return (
        <section className={classNames(cls.Contacts, {}, [])}>
            <div className={cls.Contacts__line}></div>
            <img src={contactsBg} alt="contacts-bg" className={cls.Contacts__bg} />

            <div className={classNames(cls.Contacts__container, {}, ['container'])}>

                <div className={cls.Contacts__images}>
                    <img src={first} alt="first" />
                    <img src={second} alt="second" />
                </div>

                <div className={cls.Contacts__text}>
                    <span>Contact us</span>

                    <h2>
                        Come for the care, leave with a smile
                    </h2>

                    <div className={cls.Contacts__dates}>
                        <p>Monday/Friday 9:00-23:00</p>
                        <p>Saturday 10:00-21:00</p>
                    </div>

                    <div className={cls.Contacts__contacts}>
                        <p>+012-345-6789</p>
                        <p>TheWildKingdom@contact.com</p>
                        <p>9889 Lorem Ipsum street, Pellentesque, CA, USA</p>
                    </div>

                    <button className={classNames('', {}, ['button'])}>Contact</button>
                </div>
            </div>
        </section>
    );
});

Contacts.displayName = 'Contacts';
