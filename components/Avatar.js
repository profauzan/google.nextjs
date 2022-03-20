import React from 'react'

function Avatar({ url, className }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img
    className={`h-10 w-10 rounded-full 
    cursor-pointer transition 
    duration-150 hover:scale-110 ${className}`}
    src={url}
    loading="lazy"
    alt="profile pic"
  />

}

export default Avatar