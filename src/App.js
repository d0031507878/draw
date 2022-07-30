import Header from "./components/Layout/Header";
import React, { useState, Fragment } from "react";
import Draw from "./components/Draw_Item/Draw";

function App() {
  // fetch("https://ro.gnjoy.com.tw/notice/notice_view.aspx?id=175415", {
  //   method: "GET",
  //   mode: "no-cors",
  //   headers: {
  //     "Access-Control-Allow-Origin": "https://testro.gnjoy.com.tw",
  //   },
  //   referrer: "https://ro.gnjoy.com.tw/notice/notice_view.aspx?id=175415",
  // })
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log(`${error}`);
  //   });

  return (
    <React.Fragment>
      <Header />
      <Draw />
    </React.Fragment>
  );
}

export default App;
