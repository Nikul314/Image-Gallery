import React from 'react'

export const ImageCards = ({ image }) => {
    const tags = image.tags.split(', ');

  return (
    <div className="flex justify-center">
        <div className="max-w-md rounded-lg overflow-hidden shadow-lg">
          <img src={image.webformatURL} alt="loading..." className="w-full" />
          <div className="px-6 py-4">
            <h1 className="font-bold text-[midnightblue] mb-2">
                Photo by {image.user}
            </h1>
            <ul>
              <li>
                <strong>Views:</strong> {image.views}
              </li>
              <li>
                <strong>Downloads:</strong> {image.downloads}
              </li>
              <li>
                <strong>Likes:</strong> {image.likes}
              </li>
            </ul>
          </div>
          <div className="px-6 py-4">
            {tags.map((tag, index) =>(
                <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py1 text-sm font-semibold text-gray-700">#{tag}</span>
            ))}        
          </div>
        </div>
    </div>
  )
}
