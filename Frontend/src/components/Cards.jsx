import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cards({ item }) {
    console.log(item);
    const navigate = useNavigate();
    const handleViewProfile = () => {
        
        navigate(`/Courses/${item.endpoint}`);
    };

    return (
        <>
            <div className="card bg-navy w-56 ml-14 md:w-96 shadow-xl m-2 mb-20 dark:bg-slate-900 dark:text-white 
                transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-200">
                <figure className="bg-black-200 mt-4">
                    <img className='w-32 rounded-full'
                        src={item.image}
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.name}
                        <div className="badge badge-secondary">{item.catagory}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-end">
                        
                        <button 
                            className="px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors duration-200 dark:bg-blue-700 dark:hover:bg-blue-800 shadow-sm"
                            onClick={handleViewProfile} 
                        >
                            View Profile
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;
