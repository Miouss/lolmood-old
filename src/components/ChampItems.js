import { initializeTree, getItemImg } from "./runesImg";

import itemSetFrameSVG from "../assets/items-set-frame.svg";
import itemSetDesignSVG from "../assets/items-set-design.svg";

import "../styles/ChampItems.css";

function ChampItems(props) {
  let startItemsMP = initializeTree(
    props.startItems["mostPlayed"][0],
    "startItems",
    props.startItems["mostPlayed"][0]["startItems"].length,
    getItemImg
  );
  let startItemsMW = initializeTree(
    props.startItems["mostWinrate"][0],
    "startItems",
    props.startItems["mostWinrate"][0]["startItems"].length,
    getItemImg
  );

  let coreItemsMP = initializeTree(
    props.completedItems["coreItems"]["mostPlayed"][0],
    "coreItems",
    props.completedItems["coreItems"]["mostPlayed"][0]["coreItems"].length,
    getItemImg
  );
  let coreItemsMW = initializeTree(
    props.completedItems["coreItems"]["mostWinrate"][0],
    "coreItems",
    props.completedItems["coreItems"]["mostWinrate"][0]["coreItems"].length,
    getItemImg
  );

  let fourthItemsMP = fillMultipleItemsArray("fourthItem", "mostPlayed");
  let fifthItemsMP = fillMultipleItemsArray("fifthItem", "mostPlayed");
  let sixthItemsMP = fillMultipleItemsArray("sixthItem", "mostPlayed");

  let fourthItemsMW = fillMultipleItemsArray("fourthItem", "mostWinrate");
  let fifthItemsMW = fillMultipleItemsArray("fifthItem", "mostWinrate");
  let sixthItemsMW = fillMultipleItemsArray("sixthItem", "mostWinrate");

  function fillMultipleItemsArray(nthItem, rate) {
    let nthItems = [];

    if (props.completedItems[nthItem] === "No stats were found") {
      nthItems[0] = { id: 7050, img: getItemImg(7050), played: 0 };
    } else {
      props.completedItems[nthItem][rate].forEach((oneItem, index) => {
        nthItems[index] = oneItem;
        nthItems[index]["img"] = getItemImg(nthItems[index][nthItem]);
      });
    }

    return nthItems;
  }

  let startItems,
    coreItems,
    fourthItems,
    fifthItems,
    sixthItems,
    rate = undefined;

  if (props.displayPickRate) {
    startItems = startItemsMP;
    coreItems = coreItemsMP;
    fourthItems = fourthItemsMP;
    fifthItems = fifthItemsMP;
    sixthItems = sixthItemsMP;
    rate = "playRate";
  } else {
    startItems = startItemsMW;
    coreItems = coreItemsMW;
    fourthItems = fourthItemsMW;
    fifthItems = fifthItemsMW;
    sixthItems = sixthItemsMW;
    rate = "winRate";
  }

  function getSingleItemContainer(itemsArray) {
    let itemContainer = [];

    itemsArray.forEach((item) => {
      itemContainer.push(
        <>
          <div className="single-item-container">
            <img className="items-img" src={item["img"]} />
            <div className="single-item-container-rate">
              <span>{item[rate]}%</span>
              {props.displayPickRate ? null : (
                <span>{item["played"]} games</span>
              )}
            </div>
          </div>
        </>
      );
    });

    return itemContainer;
  }

  function getMultipleItemsContainer(itemsArray) {
    let itemContainer = [];

    let duplicateIds = {};

    itemsArray.forEach((item) => {
      if (duplicateIds[item["id"]] === undefined) {
        duplicateIds[item["id"]] = 1;
      } else {
        duplicateIds[item["id"]] += 1;
      }
    });

    itemsArray.forEach((item) => {
      if (duplicateIds[item["id"]] !== 0) {
        let duplicateItemsContainer =
          duplicateIds[item["id"]] > 1 ? (
            <>
              <span className="duplicate-items">
                x{duplicateIds[item["id"]]}
              </span>
            </>
          ) : null;

        itemContainer.push(
          <>
            <div style={{ position: "relative" }}>
              <img className="items-img" src={item["img"]} />
              {duplicateItemsContainer}
            </div>
          </>
        );
        duplicateIds[item["id"]] = 0;
      }
    });

    return itemContainer;
  }

  function getPickRateContainerForNthItems(nthItems) {
    return (
      <>
        <span className="nth-items-container" style={{ paddingLeft: "0.4rem" }}>
          ({nthItems[0]["played"]} games)
        </span>
      </>
    );
  }

  return (
    <>
      <div id="items-frame">
        <span id="items-set-title">Item Set</span>
        <div id="all-items-and-svgs-container">
          <img id="items-frame-img" src={itemSetFrameSVG} />
          <img id="items-design-img" src={itemSetDesignSVG} />
          <div id="all-items-container">
            <div id="starting-items">
              <span className="items-title">Starting Items</span>
              <div className="items-display-area">
                {getMultipleItemsContainer(startItems["startItems"])}
                <div className="single-item-container-rate">
                  <span>{startItems["rate"]}%</span>
                  <span>{startItems["played"]} games</span>
                </div>
              </div>
            </div>

            <div id="core-items">
              <span className="items-title">Core Items</span>
              <div className="items-display-area">
                {getMultipleItemsContainer(coreItems["coreItems"])}
                <div className="single-item-container-rate">
                  <span>{coreItems["rate"]}%</span>
                  <span>{coreItems["played"]} games</span>
                </div>
              </div>
            </div>

            <div id="fourth-fifth-items-container">
              <div>
                <span className="items-title">4th Item</span>
                {props.displayPickRate
                  ? getPickRateContainerForNthItems(fourthItems)
                  : null}
                <div className="fourth-fifth-items-display-container">
                  {getSingleItemContainer(fourthItems)}
                </div>
              </div>

              <div>
                <span className="items-title">5th Item </span>
                {props.displayPickRate
                  ? getPickRateContainerForNthItems(fifthItems)
                  : null}
                <div className="fourth-fifth-items-display-container">
                  {getSingleItemContainer(fifthItems)}
                </div>
              </div>
            </div>

            <div id="sixth-items">
              <span className="items-title">
                Last Item{" "}
                {props.displayPickRate
                  ? getPickRateContainerForNthItems(sixthItems)
                  : null}
              </span>

              <div id="sixth-items-display-container">
                {getSingleItemContainer(sixthItems)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChampItems;
