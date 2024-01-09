import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import fullStar from 'shared/assets/img/products/stars/full-star.svg';
import emptyStar from 'shared/assets/img/products/stars/empty-star.svg';
import { productsData } from '../lib/productsData';
import cls from './Products.module.scss';

export const Products = memo(() => {
    const products = productsData.map((item, id) => {
        const { img, alt, name, price, fullStarsAmount, emptyStarsAmount } = item;

        const fullStarContent = Array.from({ length: fullStarsAmount }, (_, id) => (
            <img src={fullStar} alt="full-star" key={id} />
        ));

        const emptyStarContent = Array.from({ length: emptyStarsAmount }, (_, id) => (
            <img src={emptyStar} alt="empty-star" key={id} />
        ));

        return (
            <div className={cls.Products__item} key={id}>
                <div className={cls.Products__itemImg}>
                    <img src={img} alt={alt} />
                    <div className={cls.Products__overlay}></div>
                    <button className={classNames(cls.Products__cartBtn, {}, ['button'])}>Add to cart</button>
                </div>

                <div className={cls.Products__itemInfo}>
                    <span>{name}</span>
                    <span>{price}</span>
                </div>

                <div className={cls.Products__itemStars}>
                    {fullStarContent}
                    {emptyStarContent}
                </div>
            </div>
        )
    });

    return (
        <section className={classNames(cls.Products, {}, [])}>
            <div className={classNames(cls.Products__container, {}, ['container'])}>
                <p>
                    Our Products
                </p>
                <h2>
                    For all your pet needs
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras aliquam mi id augue ultrices, in tempus elit.
                </p>

                <div className={cls.Products__items}>
                    {products}
                </div>

            </div>
        </section>
    );
});

Products.displayName = 'Products';
