import React from 'react'
import Education from './Education'
import Experience from './Experience'

function ProfessionalInfo() {
  return (
    <div className="pt-10">
        <hr className="border-blue-400" />
        <main className="flex justify-between">
            <Experience />
            <Education />
        </main>
    </div>
  )
}

export default ProfessionalInfo