import React from 'react'
import GeneralInformation from '../components/GeneralInformation'
import ProfessionalInfo from '../components/ProfessionalInfo'

function Homepage() {
    return (
    <div className="p-14">
        < GeneralInformation />
        <ProfessionalInfo />
    </div>
)
}

export default Homepage
