export default function GameLayout(props) {
    return <div id="gameslayout">
        {/* Game Page content */}
        {props.children}
        {/* Team Page content */}
        {props.team}
        {/* Anaylitcs content */}
        {props.anaylitics}
    </div>
}