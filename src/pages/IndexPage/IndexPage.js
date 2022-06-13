import React from 'react';
import './IndexPage.scss';

const cardsInfoArray = [
    {
        label: 'hey',
        imgSrc: '/images/snow-on-mountain.jpg',
        alt: 'snow-on-mountain'
    },
    {
        label: `let's`,
        imgSrc: '/images/lake.jpg',
        alt: 'lake'
    },
    {
        label: 'give',
        imgSrc: '/images/human-rising-on-mountain.jpg',
        alt: 'human-rising-on-mountain'
    },
    {
        label: 'all',
        imgSrc: '/images/fox.jpg',
        alt: 'fox'
    },
    {
        label: 'you can',
        imgSrc: '/images/clouds.jpg',
        alt: 'clouds'
    },
]

export default function IndexPage() {
    const blockName = 'IndexPage';
    return(
        <div className={blockName}>
            {cardsInfoArray.map((card, index) => (
                <div key={index} className={`${blockName}__card`}>
                    <img
                        className={`${blockName}__card-image`}
                        src={card.imgSrc}
                        alt={card.alt}
                    />
                    <p className={`${blockName}__card-label`}>
                        {card.label.toUpperCase()}
                    </p>
                </div>
            ))}
        </div>
    )
}
