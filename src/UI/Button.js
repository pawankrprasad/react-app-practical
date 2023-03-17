import PropTypes from 'prop-types';


import classes from './UI.module.css'

const Button = ({ variant, children, ...rest}) => (
    <button {...rest} className={`${classes.button} ${classes[variant]}`} >
        {children}
    </button>
)

Button.propTypes = {
    variant: PropTypes.string.isRequired,
}


export default Button;
