import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { parseCookies } from 'nookies'

// função para páginas que só pedo ser acessadas por visitantes 
export function canSSRGuest<P>(fn: GetServerSideProps<P>) {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    // Se tentar acessar logado redirecionar
    const cookies = parseCookies(ctx);
    if (cookies['@nextauth.token']){
      return{
        redirect: {
          destination: '/dashboard',
          permanent: false,
        }
      }
    }
    return await fn(ctx);
  }
}