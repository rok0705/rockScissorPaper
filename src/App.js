import { useState } from "react";
import "./App.css";
import Box from "./components/Box";
// roadmap
// 1) draw UI
// 2) add logics
//
// 1. 2 boxes (title, photo, result)
// 2. rock paper scissors buttons
// 3. on button click, display clicked button inside box
// 4. computer randomly choose decision
// 5. using 3. and 4., display winner and loser
// 6. per winner or loser, change border color (winner: green, loser: red, tie: black)

const choice = {
  rock: {
    name: "Rock",
    img: "https://m.media-amazon.com/images/I/51WaIVrgYvL.jpg",
  },
  scissor: {
    name: "Scissor",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Standard_household_scissors.jpg/800px-Standard_household_scissors.jpg",
  },
  paper: {
    name: "Paper",
    img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState(null);
  const [computerResult, setComputerResult] = useState(null);

  const play = (decision) => {
    setUserSelect(choice[decision]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    let myResult = judgement(choice[decision], computerChoice);
    console.log("myResult:", myResult);
    setResult(myResult);
    let opponentResult = computerJudgement(myResult);
    console.log("opponentResult:", opponentResult);
    setComputerResult(opponentResult);
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    //console.log(itemArray);
    let randomPick = Math.floor(Math.random() * itemArray.length);
    //console.log(itemArray[randomPick]);
    return choice[itemArray[randomPick]];
  };

  const computerJudgement = (result) => {
    if (result === "tie") {
      return "tie";
    } else if (result === "win") {
      return "lose";
    } else {
      return "win";
    }
  };

  const judgement = (user, computer) => {
    //console.log(user);
    //console.log(computer);

    let result = null;

    if (user.name == computer.name) {
      result = "tie";
    } else if (user.name == "Scissor") {
      result = computer.name == "Rock" ? "lose" : "win";
    } else if (user.name == "Rock") {
      result = computer.name == "Scissor" ? "win" : "lose";
    } else if (user.name == "Paper") {
      result = computer.name == "Rock" ? "win" : "lose";
    }

    //console.log("myresult:", result);
    return result;
  };

  return (
    <div>
      <div className="main">
        <Box title="You" mychoice={userSelect} result={result}></Box>
        <Box
          title="Computer"
          mychoice={computerSelect}
          result={computerResult}
        ></Box>
      </div>
      <div className="main">
        <button onClick={() => play("scissor")}>scissor</button>
        <button onClick={() => play("rock")}>rock</button>
        <button onClick={() => play("paper")}>paper</button>
      </div>
    </div>
  );
}

export default App;
