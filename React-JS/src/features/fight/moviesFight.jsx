import AutoComplete from "../../ui/AutoComplete";

export default function MoviesFight() {
  return (
    <div>
      <header className="header"></header>
      <div className="columns">
        <div className="column">
          <div className="left-autocomplete">
            <AutoComplete />
          </div>
          <div className="left-summary"></div>
        </div>

        <div className="column">
          <div className="right-autocomplete"></div>
          <div className="right-summary"></div>
        </div>
      </div>
    </div>
  );
}
