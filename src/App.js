import React, { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
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
        <Main data={data} setData={setData} lang={lang} setLang={setLang} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
