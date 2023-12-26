import React, { useState, useReducer } from "react"
import { reducer } from "./Reducer"
import Modal from "./Modal"
import { v4 as uuidv4 } from "uuid"

// reducer function
const Index = () => {
  const defaultState = {
    id: uuidv4(),
    people: [],
    isModalOpen: false,
    modalContent: " ",
  }

  const [name, setName] = useState("")
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
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" })
  }
  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
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
        // const { id } = person
        return (
          <div className="item" key={uuidv4()}>
            <h4>{person.name}</h4>
            <button
              className="btn"
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: person.id })
              }
            >
              Remove
            </button>
          </div>
        )
      })}
    </>
  )
}

export default Index
