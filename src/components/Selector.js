// ----------------------------------------------------------------------------
// p.35
// ----------------------------------------------------------------------------
// const Selector = () => {
//   return (
//     <div>
//       {/* <p>セレクター</p> */}
//       <select>
//         <option>United States</option>
//         <option>China</option>
//         <option>Japan</option>
//       </select>
//     </div>
//   );
// };

// export default Selector;

// ----------------------------------------------------------------------------
// p.50
// ----------------------------------------------------------------------------
// import countriesJson from "../countries.json";

// const Selector = () => {
//   return (
//     <div>
//       {/* <p>セレクター</p> */}
//       <select>
//         {countriesJson.map((country, index) => (
//           <option key={index} value={country.Slug}>
//             {country.Country}
//           </option>
//         ))}
//         {/* <option>United States</option>
//         <option>China</option>
//         <option>Japan</option> */}
//       </select>
//     </div>
//   );
// };

// export default Selector;

// ----------------------------------------------------------------------------
// p.59
// ----------------------------------------------------------------------------
// import { useState } from "react";
// import countriesJson from "../countries.json";

// const Selector = () => {
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
//       <select onChange={(e) => setCountry(e.target.value)}>
//         <option>Select A Country</option>
//         {countriesJson.map((country, index) => (
//           <option key={index} value={country.Slug}>
//             {country.Country}
//           </option>
//         ))}
//       </select>
//       <button onClick={getCountryData}>Get Data</button>
//     </div>
//   );
// };

// export default Selector;

// ----------------------------------------------------------------------------
// p.68
// ----------------------------------------------------------------------------

// const Selector = (props) => {
//   //   console.log("Selector props", props);
//   return (
//     <div>
//       <select onChange={(e) => props.setCountry(e.target.value)}>
//         <option>Select A Country</option>
//         {props.countriesJson.map((country, index) => (
//           <option key={index} value={country.Slug}>
//             {country.Country}
//           </option>
//         ))}
//       </select>
//       <button onClick={props.getCountryData}>Get Data</button>
//     </div>
//   );
// };

// export default Selector;

// ----------------------------------------------------------------------------
// p.87
// ----------------------------------------------------------------------------

// const Selector = (props) => {
//   return (
//     <div className="selector-container">
//       <select onChange={(e) => props.setCountry(e.target.value)}>
//         <option>Select A Country</option>
//         {props.countriesJson.map((country, index) => (
//           <option key={index} value={country.Slug}>
//             {country.Country}
//           </option>
//         ))}
//       </select>
//       <button onClick={props.getCountryData}>Get Data</button>
//     </div>
//   );
// };

// export default Selector;

// ----------------------------------------------------------------------------
// p.129:  refactoring
// ----------------------------------------------------------------------------

// const Selector = ({ setCountry, countriesJson, getCountryData }) => {
//   return (
//     <div className="selector-container">
//       <select onChange={(e) => setCountry(e.target.value)}>
//         <option>Select A Country</option>
//         {countriesJson.map((country, index) => (
//           <option key={index} value={country.Slug}>
//             {country.Country}
//           </option>
//         ))}
//       </select>
//       <button onClick={getCountryData}>Get Data</button>
//     </div>
//   );
// };

// export default Selector;

// ----------------------------------------------------------------------------
// final  p.145:  button is not required (remove button)
// ----------------------------------------------------------------------------

const Selector = ({ setCountry, countriesJson }) => {
  return (
    <div className="selector-container">
      <select onChange={(e) => setCountry(e.target.value)}>
        {countriesJson.map((country, index) => (
          <option key={index} value={country.Slug}>
            {country.Country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
