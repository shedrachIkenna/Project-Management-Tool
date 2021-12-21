import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, aliquam porro dicta assumenda quasi quod temporibus amet vitae! Fugit minima iusto officia voluptatum amet magnam ex ea ratione, sit deserunt.</p>
                </div>

                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by SheddFx</div>
                    <div>20th September, 2021</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
