import React from 'react';
import PropTypes from 'prop-types';

const KWItemValue = ({handleChange, value}) => {
    return(
        <div>
            <input 
                type='text' 
                value={value} 
                onChange={evt => handleChange(evt.target.value)}
            />
        </div>
    );
};

KWItemValue.propTypes = {
    handleChange: PropTypes.func,
    value: PropTypes.string
};

export default KWItemValue;