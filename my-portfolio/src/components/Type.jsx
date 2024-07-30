import TypeWriter from 'typewriter-effect'

function Type() {
    return(
        <div className="type-effect">
            <TypeWriter
                options={{
                    strings: ["Software Engineer", "CS Student", "Problem Solver"],
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