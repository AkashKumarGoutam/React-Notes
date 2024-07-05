import { Route, Routes } from "react-router-dom";
import Mapping from "./pages/mappingCode/Mapping";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import LinkSection from "./components/linkSection/LinkSection";
import ResuableComponetCode from "./pages/resuable-component-code/ResuableComponetCode";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Navbar from "./components/navbar/Navbar";
import DefineReact from "./pages/topicPage/DefineReact";
import VirtualDom from "./pages/topicPage/VirtualDom";
import JavascriptXML from "./pages/topicPage/JavascriptXML";
import ConditionalRouting from "./pages/topicPage/ConditionalRouting";

function App() {
  return (
    <>
    <ScrollToTop/>
    <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mapping" element={<Mapping />} />
        <Route
          path="/reusable_component_code"
          element={<ResuableComponetCode />}
        />
        <Route path="/react" element={<DefineReact />} />
        <Route path="/virtual_dom" element={<VirtualDom />} />
        <Route path="/xml" element={<JavascriptXML />} />
        <Route path="/conditional_routing" element={<ConditionalRouting />} />

      </Routes>
      <LinkSection />
      <Footer />
    </>
  );
}

export default App;
