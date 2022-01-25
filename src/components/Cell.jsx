import PropTypes from 'prop-types';

function Cell({
    onclick,
    value
}) {

    const getClass = () => {
        return `cell ${value ? `cell-${value}`: ``}`
    };

    return(
        <div className={getClass()} onClick={onclick}></div>
    )
}

export default Cell;

Cell.propTypes = {
    onclick: PropTypes.func,
    value: PropTypes.string
};

Cell.defaultProps = {
    onclick: null,
    value: ''
};