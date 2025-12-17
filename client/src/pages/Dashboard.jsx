import React, { useEffect, useState } from "react"
import { dummyCreationData } from "../assets/assets"
import { Sparkles, Gem } from "lucide-react"
import { Protect } from "@clerk/clerk-react"
import CreationItem from "../components/CreationItem"   // ✅ missing import

const Dashboard = () => {
  const [creations, setCreation] = useState([])

  useEffect(() => {
    setCreation(dummyCreationData)
  }, [])

  return (
    <div className="h-full overflow-y-scroll p-6 bg-slate-50">
      <div className="flex gap-4 flex-wrap">
        <div className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-slate-200">
          <div className="text-slate-700">
            <p className="text-sm">Total Creation</p>
            <h2 className="text-xl font-semibold">{creations.length}</h2>
          </div>
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center">
            <Sparkles className="w-4" />
          </div>
        </div>

        <div className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-slate-200">
          <div className="text-slate-700">
            <p className="text-sm">Active Plan</p>
            <h2 className="text-xl font-semibold">
              <Protect plan="premium" fallback="Free">Premium</Protect>
            </h2>
          </div>
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-400 to-blue-500 text-white flex items-center justify-center">
            <Gem className="w-4" />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <p className="mt-6 mb-4">Recent Creations</p>
        {creations.map((item) => (
          <CreationItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Dashboard
