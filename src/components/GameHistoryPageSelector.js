function PageSelector(props) {
    return (
        <img className="page-selector" onClick={() => props.handleSwitchPage(props.indexButton, props.previousIndex)} style={{backgroundColor : props.bgColorPageSelector[props.indexButton]}} src={require("../assets/page-selector.png")} alt="page-selector-button" />
    )
}

export default PageSelector;