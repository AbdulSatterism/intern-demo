import React from 'react';

const Info = () => {

    const information = [
        {
            id: 1,
            title: 'Henry',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consectetur ex, in facilis modi non eveniet quaerat quibusdam fuga quos deleniti cupiditate, vitae consequatur nulla'
        },
        {
            id: 2,
            title: 'Henry',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consectetur ex, in facilis modi non eveniet quaerat quibusdam fuga quos deleniti cupiditate, vitae consequatur nulla'
        },
        {
            id: 3,
            title: 'Henry',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consectetur ex, in facilis modi non eveniet quaerat quibusdam fuga quos deleniti cupiditate, vitae consequatur nulla'
        },
        {
            id: 4,
            title: 'Henry',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consectetur ex, in facilis modi non eveniet quaerat quibusdam fuga quos deleniti cupiditate, vitae consequatur nulla'
        },
        {
            id: 5,
            title: 'Henry',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consectetur ex, in facilis modi non eveniet quaerat quibusdam fuga quos deleniti cupiditate, vitae consequatur nulla'
        },
        {
            id: 6,
            title: 'Henry',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consectetur ex, in facilis modi non eveniet quaerat quibusdam fuga quos deleniti cupiditate, vitae consequatur nulla'
        },
        {
            id: 7,
            title: 'Henry',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consectetur ex, in facilis modi non eveniet quaerat quibusdam fuga quos deleniti cupiditate, vitae consequatur nulla'
        },
    ]

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-y-4 p-4'>
            {
                information.map(info =>
                    <div key={info.id} className="card w-[350px] bg-gray-700 shadow-xl ">
                        <div className="card-body text-white">
                            <h2 className="card-title">{info.title}</h2>
                            <p>{info.details}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Info;