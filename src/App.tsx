import ArrayApp from 'components/array-app';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';

export default function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <ArrayApp />
      <Footer />
    </div>
  );
}
