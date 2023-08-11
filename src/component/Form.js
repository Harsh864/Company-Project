import React, { useState } from 'react';
import "./Form.css"; // Import the CSS file for styling

const Form = ({ setDetails }) => {
  const [formData, setFormData] = useState({
    place: "",
    vehicleNumber: "",
    date: "",
    challanNumber: "",
    phoneNumber: "",
    driverName: "",
    items: [], // Array to store the dynamically entered items
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleItemChange = (index, field, value) => {
    // Update the item at the given index with the new value for the specified field
    setFormData((prevState) => {
      const updatedItems = [...prevState.items];
      updatedItems[index][field] = value;
      return { ...prevState, items: updatedItems };
    });
  };

  const handleAddItem = () => {
    // Add a new item to the items array with default values for fields
    setFormData((prevState) => ({
      ...prevState,
      items: [...prevState.items, { description: "", uom: "", qty: "", remark: "" }],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDetails(formData);
  };

  return (
    <div className="form-container">
      <h2>Enter Details</h2>
      <form onSubmit={handleSubmit}>
        {/* ... form fields for place, vehicleNumber, date, challanNumber, phoneNumber, driverName ... */}
        <label htmlFor="place">Place:</label>
        <input
          type="text"
          id="place"
          name="place"
          value={formData.place}
          onChange={handleChange}
        />

        <label htmlFor="vehicleNumber">Vehicle Number:</label>
        <input
          type="text"
          id="vehicleNumber"
          name="vehicleNumber"
          value={formData.vehicleNumber}
          onChange={handleChange}
        />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />

        <label htmlFor="challanNumber">Challan Number:</label>
        <input
          type="text"
          id="challanNumber"
          name="challanNumber"
          value={formData.challanNumber}
          onChange={handleChange}
        />

        <label htmlFor="phoneNumber">Contact Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />

        <label htmlFor="driverName">Driver Name:</label>
        <input
          type="text"
          id="driverName"
          name="driverName"
          value={formData.driverName}
          onChange={handleChange}
        />
        <div>
          <h4>Add Items:</h4>
          {formData.items.map((item, index) => (
            <div key={index}>
              <input
                type="text"
                name="description"
                value={item.description}
                onChange={(e) => handleItemChange(index, "description", e.target.value)}
                placeholder="Item Description"
              />
              <input
                type="text"
                name="uom"
                value={item.uom}
                onChange={(e) => handleItemChange(index, "uom", e.target.value)}
                placeholder="UOM"
              />
              <input
                type="text"
                name="qty"
                value={item.qty}
                onChange={(e) => handleItemChange(index, "qty", e.target.value)}
                placeholder="Quantity"
              />
              <input
                type="text"
                name="remark"
                value={item.remark}
                onChange={(e) => handleItemChange(index, "remark", e.target.value)}
                placeholder="Remark"
              />
            </div>
          ))}
          <button type="button" onClick={handleAddItem}>Add Item</button>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
