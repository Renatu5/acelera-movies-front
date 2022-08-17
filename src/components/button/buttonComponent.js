import './style.css'
export const Button = ({ text = '', onClick }) => {
  return (
    <>
      <div>
        <button onClick={onClick}>{text}</button>
      </div>
    </>
  )
}
