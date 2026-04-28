import React from 'react'

const Rcard = ({data}) => {
  return (
    <>
        <div>
            <div className="card text-black flex flex-col justify-center items-center h-96 w-72 bg-[#697565] rounded-lg shadow-lg m-4 p-4">
                <h1 className='text-2xl font-bold text'>{data.title}</h1>
                <p className='text-lg'>{data.description}</p>
                <button className='rbutton bg-[#3C3D37] font-bold rounded-lg p-2 m-2'> {data.buttonName} </button>
            </div>
        </div>
    </>
  )
}

export default Rcard