import React from 'react';
import KWHeader from './KWHeader';
import KWItem from './KWItem';
import PropTypes from 'prop-types';

const KWList = ({keywords, handleDeleteKW, handleUpdateKW}) => {
    return(
        <table>
            <thead>
                <KWHeader />
            </thead>
            <tbody>
                {keywords.map(
                    kw => <KWItem 
                            id={kw.k_id} 
                            key={kw.k_id}
                            category={kw.category}
                            keyword={kw.keyword}
                            handleDeleteKW={handleDeleteKW}
                            handleUpdateKW={handleUpdateKW}
                        />
                )}
            </tbody>
        </table>
    );
};

KWList.propTypes = {
    keywords: PropTypes.arrayOf(
        PropTypes.shape({
            k_id: PropTypes.number,
            category: PropTypes.string,
            keyword: PropTypes.string
        })
    ),
    handleUpdateKW: PropTypes.func,
    handleDeleteKW: PropTypes.func,
};

export default KWList;