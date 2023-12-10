import React, { useState } from "react";
import Editable from "../Editabled/Editable";
import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";

import "./Board.css";

function Board(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  
  // console.log(props.board[0].id);
  let i=0;
  return (
    <div className="board">
      <div className="board_header">
        <p className="board_header_title" style={{display:"flex",justifyContent:"space-evenly"}}>
          {props.board[0].id}
        </p>
        <div
          className="board_header_title_more"
          onClick={() => setShowDropdown(true)}
          style={{backgroundColor:"orange",borderRadius:"50%"}}
        >
          user
          {showDropdown && (
            <Dropdown
              class="board_dropdown"
              onClose={() => setShowDropdown(false)}
            >
              <p onClick={() => props.removeBoard()}>Delete Board</p>
            </Dropdown>
          )}
          
        </div>
      </div>
      <div className="board_cards custom-scroll">
        
        {props.board?.map((item) => (
          <Card
            key={item.id}
            card={item.title}
            boardId={props.board.id}
            removeCard={props.removeCard}
            dragEntered={props.dragEntered}
            dragEnded={props.dragEnded}
            updateCard={props.updateCard}
          />
        ))}
         <Editable
          text="+ Add Card"
          placeholder="Enter Card Title"
          displayClass="board_add-card"
          editClass="board_add-card_edit"
          onSubmit={(value) => props.addCard(props.board?.id, value)}
        /> 
      </div>
    </div>
  );
}

export default Board;
