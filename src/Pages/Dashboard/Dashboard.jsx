import React from 'react';

const Dashboard = () => {
    return (
        <section className='container d-flex '>

            <div className='col-6'>
                <div className='d-flex px-2 py-2 gap-3'>
                    <div className='col bg-warning p-2 '>
                        <h3 className='d-inline-block'>Inquiry succes rate</h3>
                        <div className='d-flex justify-content-between '>
                            <h1 style={{fontSize: "4rem"}} className='my-auto   ms-2'>45</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-25 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                            </svg>

                        </div>

                    </div>
                    <div className='col bg-info p-2 '>
                        <h3 className='d-inline-block'>number of new client</h3>
                        <div className='d-flex justify-content-between '>
                            <h1 style={{fontSize: "4rem"}} className='my-auto   ms-2'>53</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-25 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                            </svg>

                        </div>

                    </div>                   
                </div>
                <div>

                </div>
            </div>

            <div className='col-6'>f </div>
        </section>
    );
};

export default Dashboard;