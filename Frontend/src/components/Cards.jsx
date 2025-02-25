import React from 'react';

function Cards({ item }) {
    console.log(item);
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
                        <a href=""><div className="badge badge-outline">View</div></a>
                       <a href=""> <div className="badge badge-outline  bg-green-400 text-black">Buy</div></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;
