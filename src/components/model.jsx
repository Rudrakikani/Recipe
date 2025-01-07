import React from 'react'
export default function model({children, onclose}) {
  return (
    <>
        
         <div className='baqckdrop' onClick={onclose}></div>
            <dialog className='model' open>
               {children}
            </dialog>
         
    </>
  )
}