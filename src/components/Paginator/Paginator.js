import React from 'react';

import './Paginator.css';

const paginator = props => (
  <div className="paginator">
    {props.children}
    <div className="paginator__controls">
      {props.currentPage > 1 && (
        <button className="paginator__control" onClick={props.onPrevious}>
          Anterior
        </button>
      )}
      {props.currentPage < props.lastPage && (
        <button className="paginator__control" onClick={props.onNext}>
          Siguiente
        </button>
      )}
    </div>
  </div>
);

export default paginator;
