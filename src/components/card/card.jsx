import React, { useState } from 'react';
import './card.css';
import { Button } from '../index';

const CourseCard = ({title, price, Image, course, onAddItem, onRemoveItem}) => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((prevState) => {
            return prevState + 1;
        });

        onAddItem(course);
    }

    const handleDecrement = () => {
        setCount((prevState) => {
            return prevState - 1;
        });

        onRemoveItem(course);
    }

    return (
        <div className='card'>
            <span className={`${count !== 0 ? 'card__badge' : 'card__badge-hidden'}`}>
                {count}
            </span>

            <div className='image__container'>
                <img src={Image} alt={title} width={'100%'} height={230} />
            </div>

            <div className='card__body'>
                <h2 className='card__title'>{title}</h2>
                <div className='card__price'>
                    {price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD"
                    })}
                </div>
            </div>

            <div className='hr'></div>

            <div className='btn__container'>
                <Button 
                    title={'+'} 
                    type={'add'} 
                    onClick={handleIncrement}
                />
                {
                    count !== 0 && (
                        <Button 
                            title={'-'} 
                            type={'remove'} 
                            onClick={handleDecrement}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default CourseCard;