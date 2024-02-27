import React from 'react';
// import { PieChart, Pie, Cell } from 'recharts';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#00C49F', '#FFBB28', '#FF8042', '#0088FE', '#8884d8']; // Define colors for each category


const Dashboard = () => {
    const data = [
        { name: 'Category A', value: 600 },
        { name: 'Category B', value: 300 },
        { name: 'Category C', value: 300 },
        { name: 'Category D', value: 200 },
        { name: 'Category D', value: 200 },
    ];
    return (
        <section className='container d-flex '>
            {/* first section */}
            <div className='col-6'>
                <div className='d-flex px-2 py-2 gap-3'>
                    <div className='col bg-warning p-2 '>
                        <h3 className='d-inline-block'>Inquiry succes rate</h3>
                        <div className='d-flex justify-content-between '>
                            <h1 style={{ fontSize: "4rem" }} className='my-auto   ms-2'>45</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-25 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                            </svg>

                        </div>

                    </div>
                    <div className='col bg-info p-2 '>
                        <h3 className='d-inline-block'>number of new client</h3>
                        <div className='d-flex justify-content-between '>
                            <h1 style={{ fontSize: "4rem" }} className='my-auto   ms-2'>53</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-25 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                            </svg>

                        </div>

                    </div>
                </div>

            </div>



            {/* second section */}
            <div className='col-6 '>
                <div className='d-flex px-2 py-2 gap-3'>
                    <div className='col bg-danger p-2 '>
                        <h3 className='d-inline-block'>Inquiry succes rate</h3>
                        <div className='d-flex justify-content-between '>
                            <h1 style={{ fontSize: "4rem" }} className='my-auto   ms-2'>297</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-25 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                            </svg>

                        </div>

                    </div>
                    <div className='col bg-success p-2 '>
                        <h3 className='d-inline-block'>number of new client</h3>
                        <div className='d-flex justify-content-between '>
                            <h1 style={{ fontSize: "4rem" }} className='my-auto   ms-2'>53.9M</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-25 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                            </svg>

                        </div>

                    </div>
                </div>
                <div>

              
                    <div className='shadow p-3 mb-5 bg-white rounded mt-3 mx-2' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <div className='w-100'>
                        <h2 className='my-5 text-left '>Pie Chart Title</h2>
                        </div>
                        <div className='d-flex flex-wrap'>
                            {data.map((entry, index) => (
                                <div key={`label-${index}`} style={{ display: 'flex', alignItems: 'center', margin: '5px' }}>
                                    <div style={{ width: '20px', height: '20px', backgroundColor: colors[index], marginRight: '10px' }}></div>
                                    <span>{entry.name}</span>
                                </div>
                            ))}
                        </div>
                        <PieChart width={400} height={400}>
                            <Pie
                                data={data}
                                cx={200}
                                cy={200}
                                innerRadius={40}
                                outerRadius={120}
                                fill="#8884d8"
                                dataKey="value"
                                label
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index]} /> // Use the color directly from the array
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                        
                    </div>


                </div>
            </div>


        </section>
    );
};

export default Dashboard;