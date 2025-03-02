import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cards({ item }) {
<<<<<<< Updated upstream
    console.log(item);
    const navigate = useNavigate();
    const handleViewProfile = () => {
        
        navigate(`/Courses/${item.endpoint}`);
=======


    const navigate = useNavigate(); // Initialize navigation hook

    const handleViewProfile = () => {
        if (!item || !item.id) return;
        navigate(`/course/CourseDescription/${item.id}`);
>>>>>>> Stashed changes
    };

    return (
        
        <div className="card w-64 md:w-80 mx-4 mb-8 group relative transition-all duration-300 hover:scale-105 dark:bg-slate-900 dark:text-white">
            {/* Glow effect container */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300 dark:from-gray-600 dark:to-gray-700"></div>
            
            {/* Card content */}
            <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-slate-700 h-full">
                <figure className="relative pt-8 px-8">
                    <img 
                        className='w-40 h-40 rounded-full object-cover mx-auto border-4 border-white dark:border-slate-800 shadow-lg hover:ring-2 hover:ring-gray-200 dark:hover:ring-gray-600 transition-all'
                        src={item.image}
                        alt={item.name}
                    />
                </figure>
<<<<<<< Updated upstream
                <div className="card-body">
                    <h2 className="card-title">
                        {item.name}
                        <div className="badge badge-secondary">{item.catagory}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-end">
                        
                        <button 
=======
                
                <div className="p-6 space-y-4">
                    <div className="text-center">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                            {item.name}
                        </h2>
                        <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-600 bg-gray-100 dark:bg-slate-700 dark:text-gray-300 rounded-full">
                            {item.category}
                        </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-center text-sm leading-relaxed">
                        {item.title}
                    </p>
                    
                    <div className="flex justify-center pt-4">
                    <button 
>>>>>>> Stashed changes
                            className="px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors duration-200 dark:bg-blue-700 dark:hover:bg-blue-800 shadow-sm"
                            onClick={handleViewProfile} 
                        >
                            View Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
