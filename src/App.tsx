import * as React from "react";
import { Column } from "./components/Column";

import { AddNewItem } from "./components/AddNewItem";
import { useAppState } from "./context/AppStateContext";
import { CustomDragLayer } from "./components/CustomDragLayer";
import { AppContainer } from "./styles";

import "./styles.css";

export default function App() {
  const { state, dispatch } = useAppState();
  return (
    <AppContainer>
      <CustomDragLayer />
      {state.lists.map((list, i) => (
        <Column id={list.id} text={list.text} key={list.id} index={i} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => dispatch({ type: "ADD_LIST", payload: text })}
      />
    </AppContainer>
  );
}
