// ----------------------------------------------------------------------------
// p.94
// ----------------------------------------------------------------------------

// import Card from "../components/Card";

// const WorldPage = () => {
//   return (
//     <div>
//       <Card />
//     </div>
//   );
// };

// export default WorldPage;

// ----------------------------------------------------------------------------
// p.107
// ----------------------------------------------------------------------------

// import Card from "../components/Card";

// const WorldPage = (props) => {
//   return (
//     <div>
//       <Card
//         getAllCountriesData={props.getAllCountriesData}
//         allCountriesData={props.allCountriesData}
//       />
//     </div>
//   );
// };

// export default WorldPage;

// ----------------------------------------------------------------------------
// p.113
// ----------------------------------------------------------------------------

// import Card from "../components/Card";

// const WorldPage = (props) => {
//   return (
//     <div>
//       <Card allCountriesData={props.allCountriesData} />
//     </div>
//   );
// };

// export default WorldPage;

// ----------------------------------------------------------------------------
// p.120:  Title, Header, css
// ----------------------------------------------------------------------------
// import Header from "../components/Header";
// import Title from "../components/Title";
// import Card from "../components/Card";

// const WorldPage = (props) => {
//   return (
//     <div className="world-page-container">
//       <Header />
//       <Title />
//       <Card allCountriesData={props.allCountriesData} />
//     </div>
//   );
// };

// export default WorldPage;

// ----------------------------------------------------------------------------
// final p.128:  refactoring
// ----------------------------------------------------------------------------
import Header from "../components/Header";
import Title from "../components/Title";
import Card from "../components/Card";

const WorldPage = ({ allCountriesData }) => {
  return (
    <div className="world-page-container">
      <Header />
      <Title />
      <Card allCountriesData={allCountriesData} />
    </div>
  );
};

export default WorldPage;
