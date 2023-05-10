import React, { useState } from 'react'

export const ImageSearch = ({ searchText }) => {
    const [text, setText] = useState('');

    const onSubmit= (e) => {
        e.preventDefault();
        searchText(text);
    }

  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
        <form onSubmit={onSubmit} className="w-full max-w-sm">
            <div className="flex items-center border-b border-b2 border-[midnightblue] py-2 ">
                <input onChange={e =>setText(e.target.value)} type="text" className="shadow appearance-none bg-transparent border-none w-full text-[midnightblue]  mr-3 py-2 px-3 leading-tight focus:outline-none rounded-md" placeholder='Search Image...'/>
                <button className="btn-shadow flex-shrink-0 m-3 text-sm border-0 text-black px-4 py-2 rounded-md" type='submit'>
                    Search
                </button>
            </div>
        </form>

    </div>
  )
}
