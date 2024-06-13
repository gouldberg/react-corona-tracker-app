// ----------------------------------------------------------------------------
// p.60
// ----------------------------------------------------------------------------
// import Title from "../components/Title";
// import Selector from "../components/Selector";
// import Results from "../components/Results";

// const TopPage = () => {
//   return (
//     <div>
//       <Title />
//       <Selector />
//       <Results />
//     </div>
//   );
// };

// export default TopPage;

// ----------------------------------------------------------------------------
// p.68
// ----------------------------------------------------------------------------
// import Title from "../components/Title";
// import Selector from "../components/Selector";
// import Results from "../components/Results";

// const TopPage = (props) => {
//   //   console.log("TopPage props", props);
//   return (
//     <div>
//       <Title />
//       <Selector
//         countriesJson={props.countriesJson}
//         setCountry={props.setCountry}
//         getCountryData={props.getCountryData}
//       />
//       <Results />
//     </div>
//   );
// };

// export default TopPage;

// ----------------------------------------------------------------------------
// p.81
// ----------------------------------------------------------------------------
// import Title from "../components/Title";
// import Selector from "../components/Selector";
// import Results from "../components/Results";

// const TopPage = (props) => {
//   //   console.log("TopPage props", props);
//   return (
//     <div>
//       <Title />
//       <Selector
//         countriesJson={props.countriesJson}
//         setCountry={props.setCountry}
//         getCountryData={props.getCountryData}
//       />
//       <Results countryData={props.countryData} />
//     </div>
//   );
// };

// export default TopPage;

// ----------------------------------------------------------------------------
// p.119
// ----------------------------------------------------------------------------
// import Header from "../components/Header";
// import Title from "../components/Title";
// import Selector from "../components/Selector";
// import Results from "../components/Results";

// const TopPage = (props) => {
//   return (
//     <div className="top-page-container">
//       <div>
//         <Header />
//         <Title />
//         <Selector
//           countriesJson={props.countriesJson}
//           setCountry={props.setCountry}
//           getCountryData={props.getCountryData}
//         />
//         <Results countryData={props.countryData} />
//       </div>
//     </div>
//   );
// };

// export default TopPage;

// ----------------------------------------------------------------------------
// p.128: refactoring
// ----------------------------------------------------------------------------
// import Header from "../components/Header";
// import Title from "../components/Title";
// import Selector from "../components/Selector";
// import Results from "../components/Results";

// const TopPage = ({
//   countriesJson,
//   setCountry,
//   getCountryData,
//   countryData,
// }) => {
//   return (
//     <div className="top-page-container">
//       <div>
//         <Header />
//         <Title />
//         <Selector
//           countriesJson={countriesJson}
//           setCountry={setCountry}
//           getCountryData={getCountryData}
//         />
//         <Results countryData={countryData} />
//       </div>
//     </div>
//   );
// };

// export default TopPage;

// ----------------------------------------------------------------------------
// final
// p.134:  loading
// p.146:  delete getCountryData
// ----------------------------------------------------------------------------
import Header from "../components/Header";
import Title from "../components/Title";
import Selector from "../components/Selector";
import Results from "../components/Results";

const TopPage = ({ countriesJson, setCountry, countryData, loading }) => {
  return (
    <div className="top-page-container">
      <div>
        <Header />
        <Title />
        <Selector countriesJson={countriesJson} setCountry={setCountry} />
        <Results countryData={countryData} loading={loading} />
      </div>
    </div>
  );
};

export default TopPage;
