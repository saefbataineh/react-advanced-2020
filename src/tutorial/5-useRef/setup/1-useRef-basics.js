import React, { useEffect, useRef } from "react"

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null)
  // useEffect(() => {
  //   if (refContainer.current) {
  //     refContainer.current.defaultValue = "saif"
  //   }
  // }, [])
  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(refContainer.current.value)
    console.log(refContainer.current)
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} value={"saif"} />
          <button type="submit">submit</button>
        </div>
      </form>
    </>
  )
}

export default UseRefBasics
