import { useState, useEffect } from 'react';
import './Counter.css'
import Button from '../Button/Button'

const Counter = () => {
  const [ quantity, setQuantity ] = useState(0);
  const [ btnMinusStyle, setBtnMinusStyle ] = useState('minus-active')
  const [ btnPlusStyle, setBtnPlusStyle ] = useState('plus-active')
  const [ message, setMessage ] = useState('');

  useEffect(()=>{
    (quantity == 10)
      ? [setBtnPlusStyle('plus-desactive'), setMessage('Maior Valor!')]
      : (quantity == -10) 
      ? [setBtnMinusStyle('minus-desactive'), setMessage('Menor Valor!')]
      : [setBtnMinusStyle('minus-active'), setBtnPlusStyle('plus-active'), setMessage('')];
  }, [quantity])
  
  return(
    <div className='container'>
      <h1>Contador em React JS</h1>
      <div className="counter-wrapper">
        <Button style={btnMinusStyle} text='-' click={()=> (quantity > -10) ? setQuantity(quantity - 1): null} />
         
         <p>{quantity}</p>

        <Button style={btnPlusStyle} text='+' click={()=> (quantity < 10) ? setQuantity(quantity + 1): null} />
      </div>
      <button className='message'>{message}</button>
      <span className="footer">Limites do contador: <span className="negative">-10</span> & 10</span>
    </div>
  )
}
export default Counter;