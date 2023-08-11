import React, { useState } from 'react';
import Form from './Form';
import PrintablePage from './PrintablePage';
import './Challan.css'
const Challan = () => {

  const [details, setDetails] = useState(null);

  const handleFormSubmit = (formData) => {
    setDetails(formData); // Update the details state in the parent component
  };

  return (
    <div style={{marginTop:"52px"}}>
      {details ? (<>
        <PrintablePage details={details} />
        <button className='printable-page-button' style={{marginLeft:"552px",marginBottom:"12px", backgroundColor:"blue",color:"white"}} onClick={() => window.print()}>Print</button></>
      ) : (
        <Form setDetails={setDetails}/>
      )}
    </div>
  )
}

export default Challan
