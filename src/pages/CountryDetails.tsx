import { useParams } from "react-router-dom";
import { useCountryQuery } from "../gql/generated/schema";
import "../styles/country.css";

export default function CountryDetails() {
  let { countryCode = "" } = useParams();

  const { data } = useCountryQuery({
    variables: { code: countryCode },
  });

  const countryDetails = data?.country;

  return (
    <>
      <div className="country-container">
        <h2 className="country-title">{countryDetails?.name}</h2>
        <ul className="country_list">
          <li>{countryDetails?.currency}</li>
          <li>{countryDetails?.capital}</li>
        </ul>
      </div>
    </>
  );
}
