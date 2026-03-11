export default function Button({children, textOnly, className, ...props}){
    let cssClasses = textOnly ? 'text-button' : 'button'          // Use 'text-button' when the button is text-only; otherwise use 'button'.
    cssClasses += ' ' + className                                

    return <button className={cssClasses} {...props}>
        {children}
    </button>
}