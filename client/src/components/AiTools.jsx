import React from 'react'
import { AiToolsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'

const AiTools = () => {

    const navigate = useNavigate()
    const {user} = useUser()


  return (
        <div className='px-6 sm:px-20 xl:px-32 py-20 bg-gray-50/30'>
            <div className='text-center mb-14'>
                <h2 className='text-gray-900 text-4xl sm:text-5xl font-semibold mb-3'>Powerful AI Tools</h2>
                <p className='text-gray-600 text-base sm:text-lg max-w-2xl mx-auto'>Everything you need to create, enhance, and optimize your content with cutting-edge AI technology.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
                {AiToolsData.map((tool, index) =>(
                    <div 
                        key={index} 
                        className='p-6 rounded-2xl bg-white shadow-sm border border-gray-200/60 hover:shadow-lg hover:border-gray-300/60 hover:-translate-y-1 transition-all duration-300 cursor-pointer group'
                        onClick={()=> user && navigate(tool.path)}
                    >
                        <tool.Icon 
                            className='w-14 h-14 p-3.5 text-white rounded-xl mb-5 group-hover:scale-105 transition-transform duration-300' 
                            style={{background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`}}
                        />
                        <h3 className='mb-2 text-lg font-semibold text-gray-900'>{tool.title}</h3>
                        <p className='text-gray-600 text-sm leading-relaxed'>{tool.description}</p>
                    </div>
                ) )}
            </div>
        </div>
  )
}

export default AiTools