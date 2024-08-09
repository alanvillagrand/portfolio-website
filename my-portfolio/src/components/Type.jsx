import TypeWriter from 'typewriter-effect'

function Type() {
    return(
        <div className="type-effect">
            <TypeWriter
                options={{
                    strings: ["Fullstack Developer", "CS Student", "Problem Solver", "Collaborator"],
                    autoStart: true,
                    loop: true,
                    delay: 70,
                    deleteSpeed: 20,
                }}
            />
        </div>
    )
}

export default Type;