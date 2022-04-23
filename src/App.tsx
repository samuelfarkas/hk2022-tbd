import { Flex } from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom"
import { Dashboard } from "./Dashboard"
import { Intro } from "./intro"

function App() {
  return (
    <Flex width="100%" justify="center">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </Flex>
  )
}

export default App
