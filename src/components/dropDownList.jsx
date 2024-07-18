import React from "react";

const DropDownList = ({
  dropDownListName,
  elements,
  defaultElement,
  onpageSizeChange,
}) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {(dropDownListName += " " + defaultElement)}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        {elements.map((element) => {
          return (
            <li key={element}>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => {
                  {
                    dropDownListName += " " + element;
                    document.getElementById("dropdownMenuButton1").innerHTML =
                      dropDownListName;
                  }
                  onpageSizeChange(element);
                }}
              >
                {element}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropDownList;
