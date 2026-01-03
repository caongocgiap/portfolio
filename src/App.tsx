import Layout from "./components/Layout";
import Home from "./components/sections/Home";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Connect from "./components/sections/Connect";
import { ToastContainer } from 'react-toastify';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <Layout>
        <Home />
        <Experience />
        <Projects />
        <Connect />
      </Layout>
      <Analytics />
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;
