import React from 'react';
import './App.css';
import { getData } from './constants/db';
import { Card } from './components/index';

const App = () => {
    const courses = getData();

    return (
        <>
            <h1 className='heading'>Akobir's courses</h1>
            <div className='cards__container'>
                {
                    courses.map((course) => {
                        return (
                            <Card
                                key={course.id}
                                {...course}
                            />
                        );
                    })
                }
            </div>
        </>
    );
}

export default App;