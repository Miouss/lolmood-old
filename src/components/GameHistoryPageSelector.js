import PageSelectorSVG from "../assets/page-selector.svg";

function PageSelector(props) {
  return (
    <img
      className="page-selector"
      onClick={() =>
        props.handleSwitchPage(props.indexButton, props.previousIndex)
      }
      style={{ backgroundColor: props.bgColorPageSelector[props.indexButton] }}
      src={PageSelectorSVG}
      alt="page-selector-button"
    />
  );
}

export default PageSelector;
