import React, { useState } from "react";

import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";

function App() {
  let [data, setData] = useState(null);

  let [lang, setLang] = useState("fr");

  let [frFlagWidth, setFrFlag] = useState("100%");
  let [enFlagWidth, setEnFlag] = useState("50%");

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
      <main>
        <MainPage data={data} setData={setData} lang={lang} setLang={setLang} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
