import React, { useState, useEffect } from "react";
import "./CheckboxList.css";

const CheckboxList = () => {
  const [checked, setChecked] = useState({
    allPages: false,
    page1: false,
    page2: false,
    page3: false,
    page4: false,
  });

  // Update "All Pages" checkbox state automatically based on other checkboxes
  useEffect(() => {
    const allSelected =
      checked.page1 && checked.page2 && checked.page3 && checked.page4;
    
    if (allSelected !== checked.allPages) {
      setChecked((prevState) => ({ ...prevState, allPages: allSelected }));
    }
  }, [checked.page1, checked.page2, checked.page3, checked.page4, checked.allPages]);

  const handleCheckboxChange = (event) => {
    const { name, checked: isChecked } = event.target;

    if (name === "allPages") {
      // When "All Pages" is clicked, toggle all checkboxes
      setChecked({
        allPages: isChecked,
        page1: isChecked,
        page2: isChecked,
        page3: isChecked,
        page4: isChecked,
      });
    } else {
      // Update individual checkboxes
      setChecked((prevState) => ({
        ...prevState,
        [name]: isChecked,
      }));
    }
  };

  // Create label click handler to ensure the checkbox toggles properly
  const handleLabelClick = (name) => {
    const newValue = !checked[name];
    
    if (name === "allPages") {
      setChecked({
        allPages: newValue,
        page1: newValue,
        page2: newValue,
        page3: newValue,
        page4: newValue,
      });
    } else {
      setChecked((prevState) => ({
        ...prevState,
        [name]: newValue,
      }));
    }
  };

  return (
    <div className="selection-modal">
      <div className="selection-list">
        <div className="selection-item all-pages">
          <label onClick={() => handleLabelClick("allPages")}>All pages</label>
          <div 
            className="checkbox-container" 
            onClick={() => handleLabelClick("allPages")}
          >
            <input
              type="checkbox"
              name="allPages"
              checked={checked.allPages}
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
          </div>
        </div>
        <div className="selection-item">
          <label onClick={() => handleLabelClick("page1")}>Page 1</label>
          <div 
            className="checkbox-container"
            onClick={() => handleLabelClick("page1")}
          >
            <input
              type="checkbox"
              name="page1"
              checked={checked.page1}
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
          </div>
        </div>
        <div className="selection-item">
          <label onClick={() => handleLabelClick("page2")}>Page 2</label>
          <div 
            className="checkbox-container"
            onClick={() => handleLabelClick("page2")}
          >
            <input
              type="checkbox"
              name="page2"
              checked={checked.page2}
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
          </div>
        </div>
        <div className="selection-item">
          <label onClick={() => handleLabelClick("page3")}>Page 3</label>
          <div 
            className="checkbox-container"
            onClick={() => handleLabelClick("page3")}
          >
            <input
              type="checkbox"
              name="page3"
              checked={checked.page3}
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
          </div>
        </div>
        <div className="selection-item">
          <label onClick={() => handleLabelClick("page4")}>Page 4</label>
          <div 
            className="checkbox-container"
            onClick={() => handleLabelClick("page4")}
          >
            <input
              type="checkbox"
              name="page4"
              checked={checked.page4}
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
          </div>
        </div>
      </div>
      <button
        className="done-button"
        onClick={() =>
          alert(`Current selection: ${JSON.stringify(checked, null, 2)}`)
        }
      >
        Done
      </button>
    </div>
  );
};

export default CheckboxList;