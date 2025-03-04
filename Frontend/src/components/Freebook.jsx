import React from 'react';
import list from '../Assistance/List.json';
import Cards from './Cards.jsx';

function Freebook() {
    const freecourse = list.filter((data) => data.catagory === 'Paid').slice(0,5);
          
    return (
        <>
            <div >
                <div>
                    <div className='font-bold px-14 md:px-20 mb-10 mt-4 text-3xl  text-purple-950'><h3>Customized Course Recommendations for You</h3></div>
                </div>
                <div className='md:flex'>
                    
                    {freecourse.map((item) => (
                        <Cards item={item} key={item.id} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Freebook;
