import React, { useEffect, useState } from "react"
import type { Project } from "../types"

const MyProjects = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState<Project[]>([])

  const fetchProjects = async () => {
    // fetch logic here
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default MyProjects
