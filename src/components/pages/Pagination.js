import React from 'react'

function Pagination() {
    const {page, nbPages} = useg
  return (
    <>
        <div className='padination_btn'>
            <button onClick={() => getPrevPage()}>Prev</button>
                <p>{page} of {nbPages}</p>
            <button onClick={() => getNextPage()}>Next</button>
        </div>
    </>
  )
}

export default Pagination