import React from 'react'

export const Posters = (props) => {
    const {src}=props
  return (
    <>
        <img className="row__poster" src={src} alt="src" />
    </>
  )
}
