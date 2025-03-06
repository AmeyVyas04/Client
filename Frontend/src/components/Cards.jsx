import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cards({ item }) {
    console.log(item);
    const navigate = useNavigate();
    const handleViewProfile = () => {
        
        navigate(`/Courses/${item.endpoint}`);
    };

    return (
        
        <div className="card w-72 md:w-96 mx-4 mb-10 group relative transition-all duration-300 hover:scale-105 dark:bg-slate-900 dark:text-white ml-14">
            {/* Glow effect container */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300 dark:from-gray-600 dark:to-gray-700"></div>
            
            {/* Card content */}
            <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden border-4 border-gray-300 dark:border-gray-600 h-full">
                <figure className="relative">
                    <img 
                        className='w-full h-72 object-cover border-b-4 border-gray-300 dark:border-gray-600'
                        src={item.image}
                        alt={item.name}
                    />
                </figure>
                <div className="card-body text-center">
                    <h2 className="card-title justify-center">
                        {item.endpoint}
                    </h2>
                    <p className="text-center"></p>
                    <div className="card-actions justify-center">
                        <button 
                            className="px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors duration-200 dark:bg-blue-700 dark:hover:bg-blue-800 shadow-sm"
                            onClick={handleViewProfile} 
                        >
                            View 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
