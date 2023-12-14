import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"

// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [people, setPeople] = useState([""])
  const handleSubmit = (event) => {
    event.preventDefault()
    if (firstName && email) {
      const person = { firstName, email }
      setPeople((people) => {
        console.log("setPeople", people)
        return [...people, person]
      })
      setEmail("")
      setFirstName("")
    } else {
      alert("Field is empty")
    }
  }
  return (
    <>
      <article>
        <form action="" className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name :</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: :</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className="btn">
            add person
          </button>
        </form>
      </article>
      {people.map((item) => {
        const { firstName, email } = item
        return (
          <div key={uuidv4()} className="item">
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        )
      })}
    </>
  )
}

export default ControlledInputs
