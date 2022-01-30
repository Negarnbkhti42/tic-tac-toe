import PropTypes from 'prop-types';

function Cell({
    onClick,
    value
}) {

    const handleClick = () => {
        if(!value) {
            onClick();
        }
    }

    const getClass = () => {
        return `cell ${value ? `cell-${value}`: ``}`
    };

    return(
        <div className={getClass()} onClick={handleClick}></div>
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