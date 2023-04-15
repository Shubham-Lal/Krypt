import { Navbar, Welcome, Services, Transactions, Footer, Loader } from "./components";
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />

      <Toaster
        toastOptions={{
          duration: 5000
        }}
      />
    </div>
  )
}

export default App