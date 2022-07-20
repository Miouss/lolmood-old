import { getSpellImg } from "./runesImg";

import champJSON from "../assets/loldata/current/data/en_US/championFull.json";

import "../styles/ChampSkills.css";

function ChampSkills(props) {
  let qImg = getSpellImg(champJSON["data"][props.champName]["spells"][0]["id"]);
  let wImg = getSpellImg(champJSON["data"][props.champName]["spells"][1]["id"]);
  let eImg = getSpellImg(champJSON["data"][props.champName]["spells"][2]["id"]);
  let rImg = getSpellImg(champJSON["data"][props.champName]["spells"][3]["id"]);

  let evolvePriority = props.displayPickrate
    ? getEvolvesPriority(props.evolves["mostPlayed"]["order"])
    : getEvolvesPriority(props.evolves["mostWinrate"]["order"]);

    console.log(evolvePriority)
  let skillsOrder = props.displayPickrate
    ? props.skills["mostPlayed"]
    : props.skills["mostWinrate"];

  while (skillsOrder["order"].length < 17) {
    skillsOrder["order"] += "0";
  }

  let skillPriority = getSkillsPriority(skillsOrder["order"]);

  function getSkillPriorityContainer(index, array) {
    let container = undefined;
    console.log(Object.keys(array[index - 1])[0]);
    switch (Object.keys(array[index - 1])[0]) {
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
      case "R":
        container = (
          <>
            <img src={rImg} alt="slt" />
            <span>R</span>
          </>
        );
        break;
      default:
    }

    return container;
  }

  function getSkillsOrderContainer(skillIndex) {
    let container = [];

    Array.from(skillsOrder["order"]).forEach((skillUped, index) => {
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
                {getSkillPriorityContainer(1, skillPriority)}
              </div>
              <div className="skill-priority-separator">
                <span>{">"}</span>
              </div>
              <div className="single-skill-priority-container">
                {getSkillPriorityContainer(2, skillPriority)}
              </div>
              <div className="skill-priority-separator">
                <span>{">"}</span>
              </div>
              <div className="single-skill-priority-container">
                {getSkillPriorityContainer(3, skillPriority)}
              </div>
            </div>
          </div>
          <div id="skills-speciality-frame">
            <span>Evolution Priority</span>
            <div className="skills-priority-container">
              <div className="single-skill-priority-container">
                {getSkillPriorityContainer(1, evolvePriority)}
              </div>
              <div className="skill-priority-separator">
                <span>{">"}</span>
              </div>
              <div className="single-skill-priority-container">
                {getSkillPriorityContainer(2, evolvePriority)}
              </div>
              <div className="skill-priority-separator">
                <span>{">"}</span>
              </div>
              <div className="single-skill-priority-container">
                {getSkillPriorityContainer(3, evolvePriority)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function getSkillsPriority(skillsPath) {
  return [
    {
      Q: skillsPath.match(/1/g).length < 5 ? 17 : skillsPath.lastIndexOf("1"),
    },
    {
      W: skillsPath.match(/2/g).length < 5 ? 17 : skillsPath.lastIndexOf("2"),
    },
    {
      E: skillsPath.match(/3/g).length < 5 ? 17 : skillsPath.lastIndexOf("3"),
    },
  ].sort((a, b) => Object.values(a)[0] > Object.values(b)[0]);
}

function getEvolvesPriority(evolvesPath) {
  let qIndex = evolvesPath.indexOf("1");
  let wIndex = evolvesPath.indexOf("2");
  let eIndex = evolvesPath.indexOf("3");
  let rIndex = evolvesPath.indexOf("4");

  if(qIndex === -1) qIndex = 4;
  if(wIndex === -1) wIndex = 4;
  if(eIndex === -1) eIndex = 4;
  if(rIndex === -1) rIndex = 4;


  return [
    {
      Q: qIndex,
    },
    {
      W: wIndex,
    },
    {
      E: eIndex,
    },
    {
      R: rIndex,
    }
  ].sort((a, b) => Object.values(a)[0] > Object.values(b)[0]);
}

export default ChampSkills;
