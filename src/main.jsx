import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "./Context/AppProvider.jsx";



// if(`serviceWorker` in navigator){
//   navigator.serviceWorker.register("/sw.js")
//   .then((res)=>{
//       console.log("service Worker Registered",res);
//   })
//   .catch(erro => console.log(`service Worker Not Registered`))
// }


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
