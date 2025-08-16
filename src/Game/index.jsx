import React, { useState } from 'react';

function Game() {
  // Team A ane B no score
  const [teamA, setTeamA] = useState(0);
  const [teamB, setTeamB] = useState(0);

  // Kai team select kari e store thase
  const [selectedTeam, setSelectedTeam] = useState("");

 

  // Kai team select kari e store thase
  function handleReset() {
    setTeamA(0);
    setTeamB(0);
    setSelectedTeam("");


 }


  // Submit button click kare tyare point vadhe
  function handleSubmit() {
    if (selectedTeam === "A") {
      setTeamA(teamA + 1);
      setTeamB(prev => (prev > 0 ? prev - 1 : 0));
    } else if (selectedTeam === "B") {
      setTeamB(teamB + 1);
      setTeamA(prev => (prev > 0 ? prev - 1 : 0));
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px"  }}>
      <h1>Team Points</h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "30px", margin: "30px", height: "200px" }}>
        {/* Team A */}
        <div
          onClick={() => setSelectedTeam("A")}
          style={{
            border: "2px solid black",
            padding: "20px",
           
          }}
        >
          <h2>Team A</h2>
          <p>Points: {teamA}</p>
          <button onClick={handleSubmit} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Submit
      </button>
          
        </div>

        {/* Team B */}
        <div
          onClick={() => setSelectedTeam("B")}
          style={{
            border: "2px solid black",
            padding: "20px",
           
          }}
        >
          <h2>Team B</h2>
          <p>Points: {teamB}</p>
          <button onClick={handleSubmit} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Submit
      </button>
        </div>
       
      </div>
 <button onClick={handleReset} style={{  fontSize: "16px" }}>
        Reset
      </button>
    
    </div>
  );
}


export default Game;
