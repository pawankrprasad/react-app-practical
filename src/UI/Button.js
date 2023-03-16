import classes from './UI.module.css'


const Button = (props) => {
    // const { variant, onClick, children} = props;
    const { variant, children, ...rest} = props;
    return (
        <button {...rest} className={`${classes.button} ${classes[variant]}`} >
            {children}
        </button>
    )
}
export default Button;
