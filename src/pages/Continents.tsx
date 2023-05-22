import { useNavigate } from "react-router-dom";
import { useContinentsQuery } from "../gql/generated/schema";
import "../styles/continents.css";

export default function Continents() {
  const navigate = useNavigate();
  const { data } = useContinentsQuery();

  const continentsList = data?.continents;

  return (
    <>
      <div className="continents-container">
        <h2 className="continents-title">Continents</h2>
        <div className="continents_list">
          {continentsList?.map((continent) => (
            <div
              className="continents_item"
              onClick={() =>
                navigate(`/${continent.code}`)
              }
            >
              <p>{continent.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
