import styles from './input.module.css'

export default function Input(props) {
    return (
        <input clasName={styles.input} {...props} />
    )
}