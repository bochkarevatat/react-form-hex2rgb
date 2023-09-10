import { ChangeEvent, useState } from 'react'
import hexToRgb from './hexToRgb.js';



const Converter = (event: ChangeEvent<HTMLInputElement>): void => {
    const [color, setValues] = useState<string>({
      hex: '#34495e',
      rgb: ''
    })

    function updateInput(ev) {
        if (/^#\w{3,6}$/.test(ev.target.value)) {
            setValues(prevColor => ({...prevColor, hex: ev.target.value}))
            setValues(prevColor => ({...prevColor, rgb: hexToRgb(ev.target.value)}))
        } else {
            setValues(prevColor => ({...prevColor, hex: '#FF0000'}))
            setValues(prevColor => ({...prevColor, rgb: 'Ошибка!'}))
        }
      }
    
    

      return (
        <div className='converter' 
        style={{backgroundColor: color.hex}} 
        ref={(target) => {
            try {
              target.value = prefix;
              target.focus();
            } catch (e) {}
          }}>
          <input type="text" onChange={updateInput}/>
          <p className='converter-rgb'>{color.rgb}</p>
        </div>
      )
}
export default Converter