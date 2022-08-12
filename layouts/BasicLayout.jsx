import Header from '../components/Header';
import Footer from '../components/Footer';
import NavBar from '../components/Header/NavBar';

export default function BasicLayout({ children }) {
  return (
    <div>
      <NavBar />

      <main>{children}</main>
      <Footer />
    </div>
  );
}
