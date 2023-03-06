import React from 'react';
// Styling
import './Pager.css';
// Components
import Button from '../Button/Button';

type TPagerProps = {
  page: number,
  hasNextPage: boolean,
  hasPreviousPage: boolean,
  callbackNext: (page: number) => any,
  callbackPrev: (page: number) => any,
};

const Pager = ({
  page,
  callbackNext,
  callbackPrev,
  hasNextPage,
  hasPreviousPage,
}: TPagerProps) => {
  return (<div className='Pager'>
    {
      hasPreviousPage && (
        <Button text="<" callback={callbackPrev} />
      )
    }
    <span>Page: {page}</span>
    {
      hasNextPage && (
        <Button text=">" callback={callbackNext} />
      )
    }
  </div>);
};

export default Pager;
