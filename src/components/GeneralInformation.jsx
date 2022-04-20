import React from 'react'

function GeneralInformation() {
    return (
    <div>
        <div className="bg-blue-700"></div>
        <section className='flex justify-between bg-gray-400 p-10'>
            <div>
                <h2 className="text-3xl font-bold">
                    Nnamdi Clement Azubuike
                </h2>
                <p className="text-2xl">
                    Front-end Engineer
                </p>
                <p className="pt-4 text-sm w-2/4">
                    Create and maintain a better code base for reusability. Passionate
                    about learning, teaching, and developing software solutions with
                    web technologies.
                </p>
            </div>
            <div>
                <p>
                    <a href="mailto:iamnnamdiclement@gmail.com">
                        iamnnamdiclement@gmail.com
                    </a>
                </p>
                <p>
                    <a href="tel:+2347034947199">
                        +2347034947199
                    </a>
                </p>
            </div>
        </section>

        
    </div>
  )
}

export default GeneralInformation
