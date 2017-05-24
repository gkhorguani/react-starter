import React from 'react'

/*
  Example of react's state less functional components
  State is handled on the upper level
  All the data and methods are passed down through props
  This example is waiting props.id and props.name and then it's just
  using es6's destruct feature
*/

const NameRow = ({ id, name }) => {

  return <div className="name-row">Name row {id} - {name}</div>
};

export default NameRow;
