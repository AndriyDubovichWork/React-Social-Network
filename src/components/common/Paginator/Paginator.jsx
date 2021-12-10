// eslint-disable-next-line
import styles from './Paginator.module.css';
import React, { useState } from 'react';
import cn from 'classnames';

let Paginator = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChange,
  portionSize = 15,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  // return <div>
  //         {pages.map(p => {
  //             return <span className={currentPage === p && styles.selectedPage}
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          PREV
        </button>
      )}

      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              className={cn(
                {
                  [styles.selectedPage]: currentPage === p,
                },
                styles.pageNumber
              )}
              key={p}
              onClick={(e) => {
                onPageChange(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {/* </div> */}
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};
export default Paginator;
