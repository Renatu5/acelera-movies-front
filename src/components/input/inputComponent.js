import './input.css'
export const Input = ({ name = '', label = '', type = '', placeholder = '', onChange, className }) => {
  return (
    <>
      <label>{label}</label>
      <input name={name} type={type} placeholder={placeholder} onChange={onChange} className={className}></input>
    </>
  )
}
