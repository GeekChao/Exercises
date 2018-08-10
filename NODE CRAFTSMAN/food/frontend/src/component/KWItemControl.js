import React from 'react';
import PropTypes from 'prop-types';

const KWItemControl = ({handleUpdateKW, handleDeleteKW, id}) => {
    return(
        <div>
            <button onClick={evt => handleUpdateKW(id)}>Update</button>
            <button onClick={evt => handleDeleteKW(id)}>Delete</button>
        </div>
    );
};

KWItemControl.propTypes = {
    id: PropTypes.number,
    handleUpdateKW: PropTypes.func,
    handleDeleteKW: PropTypes.func,
};

export default KWItemControl;