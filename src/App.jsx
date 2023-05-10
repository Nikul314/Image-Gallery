import React, { useEffect, useState } from 'react'
import './App.css';
import { ImageCards } from './Components/ImageCards';
import { ImageSearch } from './Components/ImageSearch';


function App() {
  const [images, setimages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=pretty&flowers=true`)
    .then(res => res.json())
    .then(data => {
      setimages(data.hits)
      setIsLoading(false)
    })
    .catch(err => console.log(err))
  },[term]);

  return (
    <div className='conatainer mx-auto bg-slate-200'>
      
      <h1 className='header text-center text-[midnightblue] text-5xl p-5'>Image Gallery</h1>

      {/* Search component */}
      <ImageSearch searchText={(text)=>setTerm(text)}/>

      {/* if user enter the random keyword in search input */}
      { !isLoading && images.length === 0 &&  <h1 className="text-6xl leading-normal text-center min-h-[450px] mx-auto mt-32">No Images Found !</h1> }

      {/* Image card component */}
      { isLoading
        ?
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
        : 
        <div className="grid grid-cols-3 gap-5 max-sm:grid-cols-1 max-lg:grid-cols-2 p-7">
          {images.map(image => (
            <ImageCards key={image.id} image={image} />
          ))}
        </div>
      }
    </div>
  );
}

export default App;
