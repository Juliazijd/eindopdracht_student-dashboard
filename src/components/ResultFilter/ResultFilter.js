import React from 'react';
import resultFilterOptions from '../../constants/resultFilterOptions';
import './ResultFilter.css';

function ResultFilter({activeResultFilter, setActiveResultFilter}) {

    return (
        <div className='result-filter'>
            <form>
              {
                Object.values(resultFilterOptions).map((filterOption) => {
                  return (<label key={filterOption}>
                              <input
                                className='radio-button'
                                type='radio'
                                name={filterOption}
                                id={filterOption}
                                value={filterOption}
                                checked={filterOption === activeResultFilter}
                                onChange={(e) => setActiveResultFilter(e.target.value)}
                              />
                          {filterOption}
                  </label>)
                })
              }

            </form>
        </div>
    )
}

export default ResultFilter;
