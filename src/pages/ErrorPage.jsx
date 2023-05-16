import { Link } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

function ErrorPage() {
  return (
    <section className='error'>
      <Header/>
      <div className='error__info'>
        <span className='error__number'>404</span>
        <h1 className='error__text'>Oups! La page que vous demandez n'existe pas.</h1>
        <Link to="/" className='error__link'>
          Retourner sur la page d’accueil
        </Link>
      </div>   
      <Footer/>
    </section>
  );
};

export default ErrorPage;