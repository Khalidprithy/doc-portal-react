import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {

    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Will Clean everything ha ha ha ha ha ha',
            img: fluoride,
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'Will fill everything hi hi hi hi hi hi',
            img: cavity,
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Pure white like charcoal hu hu hu hu hu hu hu',
            img: whitening,
        },
    ]


    return (
        <div className='my-28'>
            <section>
                <div className='text-center'>
                    <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                    <h2 className='text-4xl'>Services We Provide</h2>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }

                </div>
            </section>
        </div>
    );
};

export default Services;