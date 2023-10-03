import React from 'react'

const SearchData = ({data}) => {
    console.log(data);
  return (
  <>
    <div>{data.name}</div>
    <div>{data.email}</div>
    </>
  )
}

export default SearchData