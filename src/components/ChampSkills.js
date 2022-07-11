import { getSpellImg, getPassiveImg } from "./runesImg";

import runesJSON from "../assets/loldata/current/data/en_US/runesReforged.json";
import champJSON from "../assets/loldata/current/data/en_US/championFull.json";

import "../styles/ChampSkills.css";

function ChampSkills(props) {
  let idP = champJSON["data"][props.champName]["passive"]["image"][
    "full"
  ].slice(0, -4);

  let qImg = getSpellImg(champJSON["data"][props.champName]["spells"][0]["id"]);
  let wImg = getSpellImg(champJSON["data"][props.champName]["spells"][1]["id"]);
  let eImg = getSpellImg(champJSON["data"][props.champName]["spells"][2]["id"]);
  let rImg = getSpellImg(champJSON["data"][props.champName]["spells"][3]["id"]);

  let skillsOrderMP = props.skills["mostPlayed"];
  let skillsOrderMW = props.skills["mostWinrate"];

  let skillPriorityMP = [
    { Q: skillsOrderMP["order"].lastIndexOf("1") },
    { W: skillsOrderMP["order"].lastIndexOf("2") },
    { E: skillsOrderMP["order"].lastIndexOf("3") },
  ];

  skillPriorityMP.sort((a, b) => Object.values(a)[0] > Object.values(b)[0]);

  let skillPriorityMW = [
    { Q: skillsOrderMW["order"].lastIndexOf("1") },
    { W: skillsOrderMW["order"].lastIndexOf("2") },
    { E: skillsOrderMW["order"].lastIndexOf("3") },
  ];

  skillPriorityMW.sort((a, b) => Object.values(a)[0] > Object.values(b)[0]);

  let skillPriorityToDisplay,
    skillsOrderToDisplay = undefined;

  if (props.displayPickrate) {
    skillPriorityToDisplay = skillPriorityMP;
    skillsOrderToDisplay = skillsOrderMP;
  } else {
    skillPriorityToDisplay = skillPriorityMW;
    skillsOrderToDisplay = skillsOrderMW;
  }

  function getSkillPriorityContainer(index) {
    let container = undefined;

    switch (Object.keys(skillPriorityToDisplay[index - 1])[0]) {
      case "Q":
        container = (
          <>
            <img src={qImg} alt="slt" />
            <span>Q</span>
          </>
        );
        break;
      case "W":
        container = (
          <>
            <img src={wImg} alt="slt" />
            <span>W</span>
          </>
        );
        break;
      case "E":
        container = (
          <>
            <img src={eImg} alt="slt" />
            <span>E</span>
          </>
        );
        break;
      default:
    }

    return container;
  }

  function getSkillsOrderContainer(skillIndex) {
    let container = [];

    Array.from(skillsOrderToDisplay["order"]).forEach((skillUped, index) => {
      if (skillUped === skillIndex) {
        container.push(
          <span
            style={{ background: "rgba(247, 247, 255, 0.1)", color: "white" }}
          >
            {index + 1}
          </span>
        );
      } else {
        container.push(<span style={{ background: "#7878B4" }}></span>);
      }
    });

    return container;
  }

  return (
    <>
      <div id="skills-frame">
        <div id="champ-skills-path-frame">
          <div className="skill-container">
            <img src={qImg} alt="slt" />
            <div className="skill-path">{getSkillsOrderContainer("1")}</div>
          </div>
          <div className="skill-container">
            <img src={wImg} alt="slt" />
            <div className="skill-path">{getSkillsOrderContainer("2")}</div>
          </div>
          <div className="skill-container">
            <img src={eImg} alt="slt" />
            <div className="skill-path">{getSkillsOrderContainer("3")}</div>
          </div>
          <div className="skill-container">
            <img src={rImg} alt="slt" />
            <div className="skill-path">{getSkillsOrderContainer("4")}</div>
          </div>
        </div>

        <div id="skills-and-evolutions-priority-frame">
          <div id="skills-priority-frame">
            <span>Skills priority</span>
            <div className="skills-priority-container">
              <div className="single-skill-priority-container">
                {getSkillPriorityContainer(1)}
              </div>
              <div className="skill-priority-separator">
                <span>{">"}</span>
              </div>
              <div className="single-skill-priority-container">
                {getSkillPriorityContainer(2)}
              </div>
              <div className="skill-priority-separator">
                <span>{">"}</span>
              </div>
              <div className="single-skill-priority-container">
                {getSkillPriorityContainer(3)}
              </div>
            </div>
          </div>
          <div id="skills-speciality-frame">
            <span>Evolution Priority</span>
            <div className="skills-priority-container">
              <div className="single-skill-priority-container">
                <img src={qImg} alt="slt" />
                <span>Q</span>
              </div>
              <div className="skill-priority-separator">
                <span>{">"}</span>
              </div>
              <div className="single-skill-priority-container">
                <img src={wImg} alt="slt" />
                <span>W</span>
              </div>
              <div className="skill-priority-separator">
                <span>{">"}</span>
              </div>
              <div className="single-skill-priority-container">
                <img src={eImg} alt="slt" />
                <span>E</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChampSkills;
