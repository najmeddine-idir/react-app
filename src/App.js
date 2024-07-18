import "./components/navBar";
import "./components/counters";
import "./App.css";
import React, { useState, useRef } from "react";
import NavBar from "./components/navBar";
import Counters from "./components/counters";
import Pagination from "./components/pagination";
import DropDownList from "./components/dropDownList";

const App = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 5 },
    { id: 4, value: 0 },
    { id: 5, value: 0 },
    { id: 6, value: 0 },
    { id: 7, value: 3 },
    { id: 8, value: 0 },
    { id: 9, value: 0 },
    { id: 10, value: 0 },
    { id: 11, value: 10 },
    { id: 12, value: 0 },
  ]);

  const pageSizes = [2, 5, 10, 20];

  const [sumProduct, setSumProduct] = useState(18);
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const pageNumberListItem = useRef(null);

  let startIndexElement = pageIndex * pageSize - pageSize;
  let lastIndexElement = pageIndex * pageSize;

  const handleDelete = (counter) => {
    let _sumProduct = sumProduct - counter.value;
    const _counters = counters.filter((x) => x.id !== counter.id);
    setCounters(_counters);
    setSumProduct(_sumProduct);
  };

  const handleIncrement = (counter) => {
    let _sumProduct = sumProduct;
    const _counters = [...counters];
    const index = counters.indexOf(counter);
    _counters[index] = { ...counter };
    _counters[index].value++;
    _sumProduct++;
    setCounters(_counters);
    setSumProduct(_sumProduct);
  };

  const handleReset = () => {
    let sumProduct = 0;
    const _counters = counters.map((_counter) => {
      const counter = { ..._counter };
      counter.value = 0;
      return counter;
    });
    setCounters(_counters);
    setSumProduct(sumProduct);
  };

  const handlePreviousPage = () => {
    setPageIndex(() => {
      if (pageIndex > 1) {
        return pageIndex - 1;
      } else {
        return pageIndex;
      }
    });
  };

  const handleNextPage = () => {
    setPageIndex(() => {
      if (pageIndex * pageSize < counters.length) {
        return pageIndex + 1;
      } else {
        return pageIndex;
      }
    });
  };

  const handleChangingPageNumber = (pageNumber) => {
    const test =
      pageNumberListItem.current.parentElement.getElementsByClassName(
        "page-item active"
      );
    if (test.length !== 0) {
      test.classList.remove("active");
    }
    pageNumberListItem.current.classList.add("active");
    setPageIndex(() => {
      return pageNumber;
    });
  };

  const handlePageSizeChange = (selectedPageSize) => {
    setPageSize(() => {
      return selectedPageSize;
    });
  };

  return (
    <React.Fragment>
      <NavBar countProduct={sumProduct} />
      <main className="container">
        <DropDownList
          dropDownListName={"Page size"}
          elements={pageSizes}
          defaultElement={pageSize}
          onpageSizeChange={handlePageSizeChange}
        />
        <Counters
          counters={counters.slice(startIndexElement, lastIndexElement)}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onReset={handleReset}
        />
        <Pagination
          countElements={counters.length}
          pageSize={pageSize}
          onPreviousPage={handlePreviousPage}
          onNextPage={handleNextPage}
          onChangingPageNumber={handleChangingPageNumber}
          pageNumberListItem={pageNumberListItem}
        />
      </main>
    </React.Fragment>
  );
};

export default App;
