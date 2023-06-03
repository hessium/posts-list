import React from 'react';
import {getPagesArray} from "../../../utils/pages";

const MyPagination = ({totalPages, page, changePage}) => {
    const pagesArray = getPagesArray(totalPages);
    return (
        <div className="pages">
            {
                pagesArray.map(p =>
                    <span key={p}
                          onClick={() => changePage(p)}
                          className={page === p ? 'page page--current' : 'page'}
                    >
                            {p}
                        </span>)
            }
        </div>
    );
};

export default MyPagination;