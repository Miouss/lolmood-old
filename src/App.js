import React, { useState } from "react";

import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";

function App() {
  let [data, setData] = useState(null);

  let [lang, setLang] = useState("fr");

  let [frFlagWidth, setFrFlag] = useState("100%");
  let [enFlagWidth, setEnFlag] = useState("50%");


  let mainPageHeight = (data === null) ? "84%" : "fit-content";
  let footerPageHeight = (data === null) ? "16%" : "fit-content";

  return (
    <>
      <header>
        <Header
          data={data}
          setData={setData}
          lang={lang}
          setLang={setLang}
          frFlagWidth={frFlagWidth}
          enFlagWidth={enFlagWidth}
          setFrFlag={setFrFlag}
          setEnFlag={setEnFlag}
        />
      </header>
      <main style={{height : mainPageHeight}}>
        <MainPage data={data} setData={setData} lang={lang} setLang={setLang} />
      </main>
      <footer style={{height : footerPageHeight}}>
        <Footer />
      </footer>
    </>
  );
}

export default App;
