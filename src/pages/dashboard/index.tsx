import Head from 'next/head'
import Image from 'next/image';
import styles from '../../styles/home.module.scss';
import logoImg from '../../../public/logo.svg';


import Link from 'next/link';

export default function dashboard() {
  return (
    <>
      <Head>
        <title>dashboard</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Sujeito Pizzaria" />
        <div className={styles.login}>
          <h1>Bem-vindo!</h1>
          <form>
           
          </form>
          
        </div>
      </div>
    </>
  )
}
