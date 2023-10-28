import React from 'react';

const Info = () => {
    return (
        <div className='bg-black p-24 rounded-xl flex items-center justify-between'>
            <div>
                <div>
                    <p className='text-white'>We are open monday-friday</p>
                    <h1 className='text-2xl text-white'>7:00 am - 9:00 pm</h1>
                </div>
            </div>
            <div>
                <div>
                    <p className='text-white'>Have a question?</p>
                    <h1 className='text-2xl text-white'>+2546 251 2658</h1>
                </div>
            </div>
            <div>
                <div>
                    <p className='text-white'>Need a repair? our address</p>
                    <h1 className='text-2xl text-white'>Liza Street, New York</h1>
                </div>
            </div>
        </div>
    );
};

export default Info;