import React from "react";
import CodeRepository from "./codeRepository";
import Cta from "./cta";
import PostCode from "./postCode";
import About from "./about";
function MainBody() {
  return (
    <main id="main">
      <About />
      <CodeRepository />
      <PostCode />
      <Cta />
    </main>
  );
}

export default MainBody;
