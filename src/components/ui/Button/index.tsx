import { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';
import { CgSpinnerTwo } from 'react-icons/Cg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean,
  children: ReactNode,
}
export function Button({ loading, children, ...rest }: ButtonProps){
  return(
    <button 
    className={styles.button}
    disabled={loading}
    {...rest}
    >
      { loading ? (
        <CgSpinnerTwo color="#FFF" size={16} />
      ) : (
        <a className={styles.buttonText}>
          {children}
        </a>
      )}
    </button>
  )
}