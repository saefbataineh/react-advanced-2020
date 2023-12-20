import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"

// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState("")
  // const [email, setEmail] = useState("")
  // const [age, setAge] = useState("")
  //      ||
  //      ||
  //      ||
  //      \/
  //To make the solution more easy we have to make the above state in on state
  //      ||
  //      ||
  //      ||
  //      \/

  const [people, setPeople] = useState([])
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" })

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   if (firstName && email) {
  //     const person = { id: new Date().getTime().toString(), firstName, email }
  //     console.log(person)
  //     setPeople((people) => {
  //       return [...people, person]
  //     })
  //     setFirstName("")
  //     setEmail("")
  //   } else {
  //     console.log("empty values")
  //   }
  // }
  const handelChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setPerson({ ...person, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: uuidv4() }
      setPeople(...people, newPerson)
      setPerson({ firstName: "", email: "", age: "" })
    }
  }
  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handelChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handelChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Age : </label>
            <input
              type="text"
              id="age"
              name="age"
              value={person.age}
              onChange={handelChange}
            />
          </div>
          <button onClick={() => handleSubmit} type="submit">
            add person
          </button>
        </form>
        {people.map((user) => {
          const { id, firstName, email, age } = user
          return (
            <div className="item" key={id}>
              {firstName}
              <p>{email}</p>
              <p>{age}</p>
            </div>
          )
        })}
      </article>
    </>
  )
}

export default ControlledInputs
