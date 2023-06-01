import "./CheckBox.css"

export default function CheckBox({label}) {
  return (
    <label className="check-box-label">{label}
        <input type='checkbox'/>
        <span className="checkmark"></span>
  </label>
  )
}

    