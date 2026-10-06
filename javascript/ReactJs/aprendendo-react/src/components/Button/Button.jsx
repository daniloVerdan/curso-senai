import "./Button.css"

function apertou() {

}

export function Button({ label }) {
    return (
        <button onCLick={apertou}id="button-customization">{label}</button>
    )
};