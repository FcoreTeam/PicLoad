import React from 'react'
import MemoryWarning from "./popups/memory-warning/Memory-warning";

const Page = ({children}) => {
  return (
    <>
      {children}
      {/* navbar сюда */}
      {true && <MemoryWarning />}
    </>
  )
}

export default Page