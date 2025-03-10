import { useNavigate } from 'react-router-dom';

function Cards({ item }) {
    console.log(item);
    const navigate = useNavigate();

    const handleViewProfile = () => {
        navigate(`/Courses/${item.endpoint}`);
    };

    return (
        <div 
            className="card w-9/8 md:w-96 lg:w-96 mx-4 mb-8 group relative transition-all duration-300 
                 dark:bg-slate-900 dark:text-white ml-8 "
            title={`Explore ${item.name} Course`}
        >
            {/* Glow effect container */}
            <div 
                className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-300 
                    rounded-2xl opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300 
                    dark:from-gray-600 dark:to-gray-700"
            ></div>

            {/* Card content */}
            <div 
                className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden 
                    border-4 border-gray-300 dark:border-gray-600 h-auto md:h-90 lg:h-90"
            >
                {/* Course Image */}
                <figure className="relative">
                    <img 
                        className="md:w-full w-96 justify-center h-56 md:h-40 lg:h-60 object-cover border-b-4 border-gray-300 dark:border-gray-600"
                        src={item.image}
                        alt={`${item.name} Course Image`}
                        loading="lazy"
                    />
                </figure>

                {/* Course Details */}
                <div className="card-body text-center py-4">
                    <h2 className="card-title justify-center text-lg font-semibold">
                        {item.name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Learn more about {item.name} and explore in-depth content.
                    </p>
                    
                    {/* View Course Button */}
                    <div className="card-actions justify-center mt-3">
                        <button 
                            className="px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold 
                                hover:bg-blue-700 transition-colors duration-200 dark:bg-blue-700 dark:hover:bg-blue-800 shadow-sm"
                            onClick={handleViewProfile} 
                            aria-label={`View ${item.name} Course`}
                        >
                            View Course
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
