// ----------------------------------------------------------------------------
// p.33
// ----------------------------------------------------------------------------
// import TopPage from "./pages/TopPage";
// import "./App.css";

// function App() {
//   return (
//     <div>
//       <TopPage />
//     </div>
//   );
// }

// export default App;

// ----------------------------------------------------------------------------
// p.65
// ----------------------------------------------------------------------------
// import { useState } from "react";
// import countriesJson from "./countries.json";

// import TopPage from "./pages/TopPage";
// import "./App.css";

// function App() {
//   const [country, setCountry] = useState("");

//   const getCountryData = () => {
//     fetch(
//       `https://monotein-books.vercel.app/api/corona-tracker/country/${country}`
//     )
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//   };

//   return (
//     <div>
//       <TopPage
//         countriesJson={countriesJson}
//         setCountry={setCountry}
//         getCountryData={getCountryData}
//       />
//     </div>
//   );
// }

// export default App;

// ----------------------------------------------------------------------------
// p.80
// ----------------------------------------------------------------------------
// import { useState } from "react";
// import countriesJson from "./countries.json";

// import TopPage from "./pages/TopPage";
// import "./App.css";

// function App() {
//   const [country, setCountry] = useState("");
//   const [countryData, setCountryData] = useState({
//     date: "",
//     newConfirmed: "",
//     totalConfirmed: "",
//     newRecovered: "",
//     totalRecovered: "",
//   });

//   const getCountryData = () => {
//     fetch(
//       `https://monotein-books.vercel.app/api/corona-tracker/country/${country}`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setCountryData({
//           date: data[data.length - 1].Date,
//           newConfirmed:
//             data[data.length - 1].Confirmed - data[data.length - 2].Confirmed,
//           totalConfirmed: data[data.length - 1].Confirmed,
//           newRecovered:
//             data[data.length - 1].Recovered - data[data.length - 2].Recovered,
//           totalRecovered: data[data.length - 1].Recovered,
//         });
//       });
//   };

//   return (
//     <div>
//       {/* {console.log(countryData)} */}
//       <TopPage
//         countriesJson={countriesJson}
//         setCountry={setCountry}
//         getCountryData={getCountryData}
//       />
//     </div>
//   );
// }

// export default App;

// ----------------------------------------------------------------------------
// p.81
// ----------------------------------------------------------------------------
// import { useState } from "react";
// import countriesJson from "./countries.json";

// import TopPage from "./pages/TopPage";
// import "./App.css";

// function App() {
//   const [country, setCountry] = useState("");
//   const [countryData, setCountryData] = useState({
//     date: "",
//     newConfirmed: "",
//     totalConfirmed: "",
//     newRecovered: "",
//     totalRecovered: "",
//   });

//   const getCountryData = () => {
//     fetch(
//       `https://monotein-books.vercel.app/api/corona-tracker/country/${country}`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("getCountryData", data.length);
//         setCountryData({
//           date: data[data.length - 1].Date,
//           newConfirmed:
//             data[data.length - 1].Confirmed - data[data.length - 2].Confirmed,
//           totalConfirmed: data[data.length - 1].Confirmed,
//           newRecovered:
//             data[data.length - 1].Recovered - data[data.length - 2].Recovered,
//           totalRecovered: data[data.length - 1].Recovered,
//         });
//       });
//   };

//   return (
//     <div>
//       {/* {console.log(countryData)} */}
//       <TopPage
//         countriesJson={countriesJson}
//         setCountry={setCountry}
//         getCountryData={getCountryData}
//         countryData={countryData}
//       />
//     </div>
//   );
// }

// export default App;

// ----------------------------------------------------------------------------
// p.91
// ----------------------------------------------------------------------------
// import { useState } from "react";
// import { Route, Routes, BrowserRouter } from "react-router-dom";
// import countriesJson from "./countries.json";

// import TopPage from "./pages/TopPage";
// import "./App.css";

// function App() {
//   const [country, setCountry] = useState("");
//   const [countryData, setCountryData] = useState({
//     date: "",
//     newConfirmed: "",
//     totalConfirmed: "",
//     newRecovered: "",
//     totalRecovered: "",
//   });

//   const getCountryData = () => {
//     fetch(
//       `https://monotein-books.vercel.app/api/corona-tracker/country/${country}`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("getCountryData", data.length);
//         setCountryData({
//           date: data[data.length - 1].Date,
//           newConfirmed:
//             data[data.length - 1].Confirmed - data[data.length - 2].Confirmed,
//           totalConfirmed: data[data.length - 1].Confirmed,
//           newRecovered:
//             data[data.length - 1].Recovered - data[data.length - 2].Recovered,
//           totalRecovered: data[data.length - 1].Recovered,
//         });
//       });
//   };

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <TopPage
//               countriesJson={countriesJson}
//               setCountry={setCountry}
//               getCountryData={getCountryData}
//               countryData={countryData}
//             />
//           }
//         />
//         <Route path="/world" element={<p>ワールド</p>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// ----------------------------------------------------------------------------
// p.95:  add WorldPage
// ----------------------------------------------------------------------------
// import { useState } from "react";
// import { Route, Routes, BrowserRouter } from "react-router-dom";
// import countriesJson from "./countries.json";

// import TopPage from "./pages/TopPage";
// import WorldPage from "./pages/WorldPage";

// import "./App.css";

// function App() {
//   const [country, setCountry] = useState("");
//   const [countryData, setCountryData] = useState({
//     date: "",
//     newConfirmed: "",
//     totalConfirmed: "",
//     newRecovered: "",
//     totalRecovered: "",
//   });

//   const getCountryData = () => {
//     fetch(
//       `https://monotein-books.vercel.app/api/corona-tracker/country/${country}`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("getCountryData", data.length);
//         setCountryData({
//           date: data[data.length - 1].Date,
//           newConfirmed:
//             data[data.length - 1].Confirmed - data[data.length - 2].Confirmed,
//           totalConfirmed: data[data.length - 1].Confirmed,
//           newRecovered:
//             data[data.length - 1].Recovered - data[data.length - 2].Recovered,
//           totalRecovered: data[data.length - 1].Recovered,
//         });
//       });
//   };

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <TopPage
//               countriesJson={countriesJson}
//               setCountry={setCountry}
//               getCountryData={getCountryData}
//               countryData={countryData}
//             />
//           }
//         />
//         <Route path="/world" element={<WorldPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// ----------------------------------------------------------------------------
// p.105:
// ----------------------------------------------------------------------------
// import { useState } from "react";
// import { Route, Routes, BrowserRouter } from "react-router-dom";
// import countriesJson from "./countries.json";

// import TopPage from "./pages/TopPage";
// import WorldPage from "./pages/WorldPage";

// import "./App.css";

// function App() {
//   const [country, setCountry] = useState("");
//   const [countryData, setCountryData] = useState({
//     date: "",
//     newConfirmed: "",
//     totalConfirmed: "",
//     newRecovered: "",
//     totalRecovered: "",
//   });

//   const [allCountriesData, setAllCountriesData] = useState([]);

//   const getCountryData = () => {
//     fetch(
//       `https://monotein-books.vercel.app/api/corona-tracker/country/${country}`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("getCountryData", data.length);
//         setCountryData({
//           date: data[data.length - 1].Date,
//           newConfirmed:
//             data[data.length - 1].Confirmed - data[data.length - 2].Confirmed,
//           totalConfirmed: data[data.length - 1].Confirmed,
//           newRecovered:
//             data[data.length - 1].Recovered - data[data.length - 2].Recovered,
//           totalRecovered: data[data.length - 1].Recovered,
//         });
//       });
//   };

//   const getAllCountriesData = () => {
//     fetch("https://monotein-books.vercel.app/api/corona-tracker/summary")
//       .then((res) => res.json())
//       .then((data) => setAllCountriesData(data.Countries));
//   };

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <TopPage
//               countriesJson={countriesJson}
//               setCountry={setCountry}
//               getCountryData={getCountryData}
//               countryData={countryData}
//             />
//           }
//         />
//         <Route
//           path="/world"
//           element={
//             <WorldPage
//               allCountriesData={allCountriesData}
//               getAllCountriesData={getAllCountriesData}
//             />
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// ----------------------------------------------------------------------------
// p.115:  useEffect
// ----------------------------------------------------------------------------
// import { useState, useEffect } from "react";
// import { Route, Routes, BrowserRouter } from "react-router-dom";
// import countriesJson from "./countries.json";

// import TopPage from "./pages/TopPage";
// import WorldPage from "./pages/WorldPage";

// import "./App.css";

// function App() {
//   const [country, setCountry] = useState("");
//   const [countryData, setCountryData] = useState({
//     date: "",
//     newConfirmed: "",
//     totalConfirmed: "",
//     newRecovered: "",
//     totalRecovered: "",
//   });

//   const [allCountriesData, setAllCountriesData] = useState([]);

//   const getCountryData = () => {
//     fetch(
//       `https://monotein-books.vercel.app/api/corona-tracker/country/${country}`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("getCountryData", data.length);
//         setCountryData({
//           date: data[data.length - 1].Date,
//           newConfirmed:
//             data[data.length - 1].Confirmed - data[data.length - 2].Confirmed,
//           totalConfirmed: data[data.length - 1].Confirmed,
//           newRecovered:
//             data[data.length - 1].Recovered - data[data.length - 2].Recovered,
//           totalRecovered: data[data.length - 1].Recovered,
//         });
//       });
//   };

//   useEffect(() => {
//     fetch("https://monotein-books.vercel.app/api/corona-tracker/summary")
//       .then((res) => res.json())
//       .then((data) => setAllCountriesData(data.Countries));
//   }, []);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <TopPage
//               countriesJson={countriesJson}
//               setCountry={setCountry}
//               getCountryData={getCountryData}
//               countryData={countryData}
//             />
//           }
//         />
//         <Route
//           path="/world"
//           element={<WorldPage allCountriesData={allCountriesData} />}
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// ----------------------------------------------------------------------------
// final
// p.131:  error handling
// p.133:  loading
// p.145:  No Get Data button, default Japan
// p.146:  remove getCountryData
// ----------------------------------------------------------------------------
import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import countriesJson from "./countries.json";
import TopPage from "./pages/TopPage";
import WorldPage from "./pages/WorldPage";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("japan");
  const [countryData, setCountryData] = useState({
    date: "",
    newConfirmed: "",
    totalConfirmed: "",
    newRecovered: "",
    totalRecovered: "",
  });
  const [allCountriesData, setAllCountriesData] = useState([]);

  useEffect(() => {
    const getCountryData = () => {
      setLoading(true);
      fetch(
        `https://monotein-books.vercel.app/api/corona-tracker/country/${country}`
      )
        .then((res) => res.json())
        .then((data) => {
          setCountryData({
            date: data[data.length - 1].Date,
            newConfirmed:
              data[data.length - 1].Confirmed - data[data.length - 2].Confirmed,
            totalConfirmed: data[data.length - 1].Confirmed,
            newRecovered:
              data[data.length - 1].Recovered - data[data.length - 2].Recovered,
            totalRecovered: data[data.length - 1].Recovered,
          });
          setLoading(false);
        })
        .catch((err) =>
          alert(
            "エラーが発生しました。ページをリロードして、もう一度トライしてください。"
          )
        );
    };
    getCountryData();
  }, [country]);

  useEffect(() => {
    fetch("https://monotein-books.vercel.app/api/corona-tracker/summary")
      .then((res) => res.json())
      .then((data) => setAllCountriesData(data.Countries))
      .catch((err) =>
        alert(
          "エラーが発生しました。ページをリロードして、もう一度トライしてください。"
        )
      );
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <TopPage
              countriesJson={countriesJson}
              setCountry={setCountry}
              countryData={countryData}
              loading={loading}
            />
          }
        />
        <Route
          path="/world"
          element={<WorldPage allCountriesData={allCountriesData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
