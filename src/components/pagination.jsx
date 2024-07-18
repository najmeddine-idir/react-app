import React from "react";

const Pagination = ({
  countElements,
  pageSize,
  onPreviousPage,
  onNextPage,
  onChangingPageNumber,
  pageNumberListItem,
}) => {
  const pageNumbers = [];

  for (let index = 1; index <= Math.ceil(countElements / pageSize); index++) {
    pageNumbers.push(index);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#" onClick={() => onPreviousPage()}>
            Previous
          </a>
        </li>
        {pageNumbers.map((pageNumber) => {
          return (
            <li className="page-item" key={pageNumber} ref={pageNumberListItem}>
              <a
                className="page-link"
                href="#"
                onClick={(e) => {
                  document
                    .getElementsByClassName("page-item active")
                    ?.item(0)
                    ?.classList.remove("active");
                  onChangingPageNumber(pageNumber);
                }}
              >
                {pageNumber}
              </a>
            </li>
          );
        })}
        <li className="page-item">
          <a className="page-link" href="#" onClick={() => onNextPage()}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
