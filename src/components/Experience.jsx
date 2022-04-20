import React from 'react'

function Experience() {
    return (
    <div>
        <main>
            <section className="p-10 ">
                <div>
                    <h2 className="text-3xl font-bold">
                        Professional Experience
                    </h2>
                </div>

                <div className="kwarabuild">
                    <div className="pt-6">
                        <h3 className="text-2xl font-bold text-gray-500">
                            Team Lead
                        </h3>
                    
                        <p className="text-gray-700">
                            Kwarabuild | January 2022 - present
                        </p>
                    </div>

                    <div className="w-3/4 pt-5">
                        <ul>
                            <li className="">
                                Establish efficient workflow process, monitor daily productivity,
                                and implemented modifications to improve overall effectives of activities.
                            </li>
                            <li className="pt-5">
                                Communicate cooperate objectives across all divisions through regular correspondence,
                                and schedled status update.

                            </li>
                        </ul>
                    </div>
                </div>

                <div className="astratech">
                    <div className="pt-6">
                        <h3 className="text-2xl font-bold text-gray-500">
                            Front-end Engineer Intern
                        </h3>
                    
                        <p className="text-gray-700">
                            Astratech | November 2020 - February 2021
                        </p>
                    </div>

                    <div className="w-3/4 pt-5">
                        <ul>
                            <li className="">
                                Design and implemented web application along with 3rd-party integration.
                                Learnt a lot about JavaScript
                            </li>
                            <li className="pt-5">
                                Developed communication skill where I not only ask clear questions when needed,
                                but also helped review PRs, assited team members who needed my skillset.

                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        </main>
    </div>
  )
}

export default Experience