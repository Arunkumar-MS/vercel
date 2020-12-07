import React from 'react';

const YearFilter = (props) => {
    const filerItem = (filterItem) => {
        return (
            <div key={filterItem.year}>
                {filterItem.year}
            </div>
        )
    }

    return (
        <div>
            <div>Lunch Year</div>
            {props.year.map(filerItem)}
        </div>
    )

}

export default React.memo(YearFilter);