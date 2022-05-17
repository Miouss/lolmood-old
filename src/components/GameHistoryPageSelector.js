function PageSelector(props) {
    return (
        <button class="page-selector" onClick={() => props.handleSwitchPage(props.indexButton, props.previousIndex)} style={{backgroundColor : props.bgColorPageSelector[props.indexButton]}}></button>
    )
}

export default PageSelector;