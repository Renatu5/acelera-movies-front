export const Input = ({ label, type, placeholder = '', value, onChange }) => {
  return (
    <>
    <label>{label}</label>
    <input type={type} value={value} placeholder={placeholder} onChange={onChange}></input>
    </>
  )
}
