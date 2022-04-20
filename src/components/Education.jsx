import React from 'react'
import Skills from './Skills'

function Education() {
    return (
    <div className="w-2/3">
        <main>
            <section className="p-10">
                <div>
                    <h2 className="text-3xl font-bold">
                        Educational Experience
                    </h2>
                </div>

                <div className="pt-6">
                    <h3 className="text-2xl font-bold text-gray-500">
                        Kwara State University
                    </h3>
                    
                    <p>
                        Computer Science, BSc | 2017 -2022
                    </p>
                </div>
            </section>

            <section>
                <Skills />
            </section>
        </main>
    </div>
    
)
}

export default Education