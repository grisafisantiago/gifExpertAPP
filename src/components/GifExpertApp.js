import React, { useState } from 'react';
import { InputSearchField } from './InputTermField';
import { CardsItems } from './CardsItems';
import logo from '../assets/martina.jpg';

export const GifExpertAPP = () => {

    let examples = [];

    const [categories, setCategory] = useState(examples);

    return (
        <>
            <div className='text-center pt-5'><img src={logo} className='logo img img-thumbnail'></img></div>
            <div className='container text-center col'>
                <InputSearchField setCategory={setCategory} />
            </div>
            <div className='container pt-5'>
            
                <ul>
                    {
                        categories.map(category =>
                            <CardsItems key={category} category={category} />
                        )
                    }
                </ul>
            </div>
        </>
    );
};
