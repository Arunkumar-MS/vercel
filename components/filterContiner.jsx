import React from 'react';
import YearFilter from './yearFilter';

const FilterContiner = (props) => {
return(
    <div>
        <YearFilter year={props.filters.yearFilter}/>
    </div>
    
)

    

}



export default React.memo(FilterContiner);