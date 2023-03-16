import classes from './UI.module.css'

const Button = ({ variant, children, ...rest}) => (
    <button {...rest} className={`${classes.button} ${classes[variant]}`} >
        {children}
    </button>
)
export default Button;
