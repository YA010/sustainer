import Tabs from './_components/Tabs';
import Header from './_components/Header';
import Footer from './_components/Footer';

export default async function Page() {
  return (
      <>
      <Header />
      <div className="py-6 md:py-10 px-4 md:px-6 lg:px-14">
        
        <Tabs  />
      </div>
      <Footer />
      </>
  )
}
