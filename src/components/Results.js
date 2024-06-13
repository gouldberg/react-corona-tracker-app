// ----------------------------------------------------------------------------
// p.60
// ----------------------------------------------------------------------------

// const Results = () => {
//   return (
//     <div>
//       <p>日付:</p>
//       <p>新規感染者:</p>
//       <p>感染者総数:</p>
//       <p>新規回復者:</p>
//       <p>回復者総数:</p>
//     </div>
//   );
// };

// export default Results;

// ----------------------------------------------------------------------------
// p.81
// ----------------------------------------------------------------------------

// const Results = (props) => {
//   console.log("Results props", props);
//   return (
//     <div>
//       <p>日付: {props.countryData.date}</p>
//       <p>新規感染者: {props.countryData.newConfirmed}</p>
//       <p>感染者総数: {props.countryData.totalConfirmed}</p>
//       <p>新規回復者: {props.countryData.newRecovered}</p>
//       <p>回復者総数: {props.countryData.totalRecovered}</p>
//     </div>
//   );
// };

// export default Results;

// ----------------------------------------------------------------------------
// p.84
// ----------------------------------------------------------------------------

// const Results = (props) => {
//   console.log("Results props", props);
//   return (
//     <div>
//       <p>日付: {props.countryData.date.slice(0, 10)}</p>
//       <p>新規感染者: {props.countryData.newConfirmed.toLocaleString()}</p>
//       <p>感染者総数: {props.countryData.totalConfirmed.toLocaleString()}</p>
//       <p>新規回復者: {props.countryData.newRecovered.toLocaleString()}</p>
//       <p>回復者総数: {props.countryData.totalRecovered.toLocaleSting()}</p>
//     </div>
//   );
// };

// export default Results;

// ----------------------------------------------------------------------------
// p.87
// ----------------------------------------------------------------------------

// const Results = (props) => {
//   return (
//     <div className="results-container">
//       <p>
//         日付: <span>{props.countryData.date.slice(0, 10)}</span>
//       </p>
//       <p>
//         新規感染者:
//         <span>{props.countryData.newConfirmed.toLocaleString()}</span>
//       </p>
//       <p>
//         感染者総数:
//         <span>{props.countryData.totalConfirmed.toLocaleString()}</span>
//       </p>
//       <p>
//         新規回復者:
//         <span>{props.countryData.newRecovered.toLocaleString()}</span>
//       </p>
//       <p>
//         回復者総数:
//         <span>{props.countryData.totalRecovered.toLocaleString()}</span>
//       </p>
//     </div>
//   );
// };

// export default Results;

// ----------------------------------------------------------------------------
// p.127:  refactoring
// ----------------------------------------------------------------------------

// const Results = ({ countryData }) => {
//   const { date, newConfirmed, totalConfirmed, newRecovered, totalRecovered } =
//     countryData;
//   return (
//     <div className="results-container">
//       <p>
//         日付: <span>{date.slice(0, 10)}</span>
//       </p>
//       <p>
//         新規感染者:
//         <span>{newConfirmed.toLocaleString()}</span>
//       </p>
//       <p>
//         感染者総数:
//         <span>{totalConfirmed.toLocaleString()}</span>
//       </p>
//       <p>
//         新規回復者:
//         <span>{newRecovered.toLocaleString()}</span>
//       </p>
//       <p>
//         回復者総数:
//         <span>{totalRecovered.toLocaleString()}</span>
//       </p>
//     </div>
//   );
// };

// export default Results;

// ----------------------------------------------------------------------------
// final  p.142:  loading
// ----------------------------------------------------------------------------

import Loading from "../components/Loading";

const Results = ({ countryData, loading }) => {
  const { date, newConfirmed, totalConfirmed, newRecovered, totalRecovered } =
    countryData;
  return (
    <div className="results-container">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <p>
            日付: <span>{date.slice(0, 10)}</span>
          </p>
          <p>
            新規感染者: <span>{newConfirmed.toLocaleString()}</span>
          </p>
          <p>
            感染者総数: <span>{totalConfirmed.toLocaleString()}</span>
          </p>
          <p>
            新規回復者: <span>{newRecovered.toLocaleString()}</span>
          </p>
          <p>
            回復者総数: <span>{totalRecovered.toLocaleString()}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Results;
