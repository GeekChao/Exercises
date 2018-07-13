import React from 'react';
import PropTypes from 'prop-types';

const List = (props) => {
    return (
        <ul>
            {props.people.map((p, i) => <li key={i}>{p.name}{` (${p.email}) -- ${p.department}: ${p.course}`}</li>)}
        </ul>
    );
}

List.propTypes = {
    people: PropTypes.array
};

export default List;
