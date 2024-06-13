// ----------------------------------------------------------------------------
// p.94
// ----------------------------------------------------------------------------

// const Card = () => {
//   return (
//     <div>
//       <h2>Card</h2>
//     </div>
//   );
// };

// export default Card;

// ----------------------------------------------------------------------------
// p.102
// ----------------------------------------------------------------------------
// import { useState } from "react";

// const Card = () => {
//   const [allCountriesData, setAllCountriesData] = useState([]);
//   const getAllCountriesData = () => {
//     fetch("https://monotein-books.vercel.app/api/corona-tracker/summary")
//       .then((res) => res.json())
//       .then((data) => setAllCountriesData(data.Countries));
//   };
//   return (
//     <div>
//       <h2>Card</h2>
//       <button onClick={getAllCountriesData}>Get All Data</button>
//       {allCountriesData.map((singleData, index) => (
//         <div key={index}>
//           <h2>{singleData.Country}</h2>
//           <p>新規感染者: {singleData.NewConfirmed}</p>
//           <p>感染者総数: {singleData.TotalConfirmed}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Card;

// ----------------------------------------------------------------------------
// p.108
// ----------------------------------------------------------------------------
// const Card = (props) => {
//   return (
//     <div>
//       <h2>Card</h2>
//       <button onClick={props.getAllCountriesData}>Get All Data</button>
//       {props.allCountriesData.map((singleData, index) => (
//         <div key={index}>
//           <h2>{singleData.Country}</h2>
//           <p>新規感染者: {singleData.NewConfirmed}</p>
//           <p>感染者総数: {singleData.TotalConfirmed}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Card;

// ----------------------------------------------------------------------------
// p.113
// ----------------------------------------------------------------------------
// const Card = (props) => {
//   return (
//     <div>
//       <h2>Card</h2>
//       <button>Get All Data</button>
//       {props.allCountriesData.map((singleData, index) => (
//         <div key={index}>
//           <h2>{singleData.Country}</h2>
//           <p>新規感染者: {singleData.NewConfirmed}</p>
//           <p>感染者総数: {singleData.TotalConfirmed}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Card;

// ----------------------------------------------------------------------------
// p.115
// ----------------------------------------------------------------------------
// const Card = (props) => {
//   return (
//     <div>
//       {props.allCountriesData.map((singleData, index) => (
//         <div key={index}>
//           <h2>{singleData.Country}</h2>
//           <p>新規感染者: {singleData.NewConfirmed.toLocaleString()}</p>
//           <p>感染者総数: {singleData.TotalConfirmed.toLocaleString()}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Card;

// ----------------------------------------------------------------------------
// p.120:  css
// ----------------------------------------------------------------------------
// const Card = (props) => {
//   return (
//     <div className="card-container">
//       {props.allCountriesData.map((singleData, index) => (
//         <div key={index} className="card">
//           <div>
//             <h2>{singleData.Country}</h2>
//             <p>
//               新規感染者:
//               <span>{singleData.NewConfirmed.toLocaleString()}</span>
//             </p>
//             <p>
//               感染者総数:
//               <span>{singleData.TotalConfirmed.toLocaleString()}</span>
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Card;

// ----------------------------------------------------------------------------
// final
// p.129:  refactoring
// ----------------------------------------------------------------------------
const Card = ({ allCountriesData }) => {
  return (
    <div className="card-container">
      {allCountriesData.map((singleData, index) => (
        <div key={index} className="card">
          <div>
            <h2>{singleData.Country}</h2>
            <p>
              新規感染者:
              <span>{singleData.NewConfirmed.toLocaleString()}</span>
            </p>
            <p>
              感染者総数:
              <span>{singleData.TotalConfirmed.toLocaleString()}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

// ----------------------------------------------------------------------------
// final
// ----------------------------------------------------------------------------
// const Card = ({ allCountriesData }) => {
//   return (
//     <div className="card-container">
//       {allCountriesData.map((singleData, index) => (
//         <div key={index} className="card">
//           <div>
//             <h2>{singleData.Country}</h2>
//             <p>
//               新規感染者:{" "}
//               <span>{singleData.NewConfirmed.toLocaleString()}</span>
//             </p>
//             <p>
//               感染者総数:{" "}
//               <span>{singleData.TotalConfirmed.toLocaleString()}</span>
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Card;
