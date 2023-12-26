import React, { useState, useReducer, useEffect } from "react"
import Modal from "./Modal"
import { data } from "../../../data"
import { v4 as uuidv4 } from "uuid"

// reducer function
const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload]
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "Item Added",
    }
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Please Enter value",
    }
  }
  throw new Error("no matching action type")
}
const Index = () => {
  const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: " ",
  }
  const [name, setName] = useState("")

  // const [people, setPeople] = useState(data)
  // const [showModal, setShowModal] = useState(false)

  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      const newItem = { id: uuidv4(), name }
      dispatch({ type: "ADD_ITEM", payload: newItem })
      setName("")
    } else {
      dispatch({ type: "NO_VALUE" })
    }
  }

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="btn">
          Add Item
        </button>
      </form>
      {state.people.map((person) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              justifyContent: "center",
              alignItems: "baseline",
            }}
            key={uuidv4()}
          >
            <h4 style={{ marginRight: 15 }}>{person.name}</h4>
            <span className="btn"> Remove</span>
          </div>
        )
      })}
    </>
  )
}

export default Index
