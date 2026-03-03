import React from 'react';
import './card.css';
import { Button } from '../index';

const CourseCard = ({title, price, Image, course, onAddItems, onRemoveItems}) => {
    return (
        <div className='card'>
            <span className='card__badge'>1</span>

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
                    onClick={() => onAddItems(course)} 
                />
                <Button 
                    title={'-'} 
                    type={'remove'} 
                    onClick={() => onRemoveItems(course)}
                />
            </div>
        </div>
    );
}

export default CourseCard;