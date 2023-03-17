import PropTypes from 'prop-types';
import classes from './UI.module.css';

const Input = (props) =>{
    const {label, ...rest} = props;
    return(
        <>  {label ? <label>{label}</label> : null}
            <input className={classes.input} {...rest}/>
        </>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string
}

export default Input;