import Link from 'next/link'
import styles from './styles.module.scss'
import Image from 'next/image'
import { FiLogOut } from 'react-icons/fi'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from 'react'
export function Header() {
  const { user, signOut } = useContext(AuthContext)
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href='/dashboard'>
          <Image src='/logo.svg' width={100} height={60} alt={'logo da sujeito pizza'} />
        </Link>
        <span>{user?.name}</span>
        <nav className={styles.menuNav}>
          <Link href='/category'>
            Categoria
          </Link>
          <Link href='/product'>
            Cardapio
          </Link>
          <button onClick={signOut}>
            <FiLogOut color='#fff' size={24} />
          </button>
        </nav>

      </div>
    </header>
  )
}