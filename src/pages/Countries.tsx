import { useNavigate, useParams } from "react-router-dom";

import "../styles/countries.css";
import { useContinentQuery } from "../gql/generated/schema";

export default function Countries() {
  const navigate = useNavigate();

  let { continentCode = "" } = useParams();
  
  const { data } = useContinentQuery({
    variables: { code: continentCode },
  });

  const countriesList = data?.continent;

  return (
    <>
      <div className="countries-container">
        <h2 className="countries-title">Countries</h2>
        <div className="countries_list">
          {countriesList?.countries?.map((country) => (
            <div
              className="continents_item"
              onClick={() => navigate(`/${continentCode}/${country.name}`)}
            >
              <p>{country.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
