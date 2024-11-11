import React, { useState } from "react";
import home from "../../../images/home.png";
import "../AddProperty/AddProperty.css";

function AddProperty() {
  const [properties, setProperties] = useState([]);
  const [show, setShow] = useState(false);
  const [property, setProperty] = useState({
    number: "",
    address: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({ ...property, [name]: value });
  };

  const handleAddProperty = async () => {
    if (property.number && property.address && property.city) {
      // Send property data to the server
      try {
        const response = await fetch("https://your-database-api-endpoint.com/properties", { // replace with your API endpoint
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(property),
        });

        if (response.ok) {
          const savedProperty = await response.json();
          setProperties([...properties, savedProperty]);
          setProperty({ number: "", address: "", city: "" });
          setShow(!show);
        } else {
          console.error("Failed to add property:", response.status);
        }
      } catch (error) {
        console.error("Error adding property:", error);
      }
    }
  };

  return (
    <>
      <div className="homemain">
        <div className="homecontainer">
          <h2 className="heading-main">Select Property</h2>
          <h2 className="heading-secondary">Property List</h2>
          <ul className="property-list">
            {properties.map((prop, index) => (
              <li key={index} className="property-item">
                <div className="property-info">
                  <img
                    src={home}
                    alt="Property Icon"
                    className="property-icon"
                  />
                  <div>
                    <strong className="property-name">
                      Property {prop.number}
                    </strong>
                    <div className="property-address">{prop.address}</div>
                  </div>
                </div>
                <div>City: {prop.city}</div>
              </li>
            ))}
          </ul>

          <h2 className="property-overview-heading">Property Overview</h2>
          <div className="property-overview">
            <h6>Total Properties</h6>
            <div className="property-count">{properties.length}</div>
          </div>

          <button className="add-button" onClick={() => setShow(!show)}>
            Add New
          </button>

          {show && (
            <div className="form">
              <input
                type="text"
                name="number"
                placeholder="Property Number"
                value={property.number}
                onChange={handleChange}
                className="input-field"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={property.address}
                onChange={handleChange}
                className="input-field"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={property.city}
                onChange={handleChange}
                className="input-field"
              />
              <button onClick={handleAddProperty} className="add-button button">
                Add
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AddProperty;
