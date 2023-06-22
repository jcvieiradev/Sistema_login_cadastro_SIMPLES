import styles from './button.module.css'

export default function Button({children, ...props}) {
    return (
        <button clasName={styles.button} {...props}>
            {children}
        </button>
    )
}