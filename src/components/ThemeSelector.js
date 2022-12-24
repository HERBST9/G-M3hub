import { useTheme } from "../hooks/useTheme"
import modeIcon from '../assets/modeIcon.svg'

// styles
import './ThemeSelector.css'

const themeColors = ['black', 'purple', 'green']

export default function ThemeSelector() {
  const { changeColor,changeMode,mode } = useTheme()

  const handleClick = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark')
    console.log(mode)

  }

  return (
    <div className="theme-selector">
       <div className="mode-toggle">
           <img 
           src={modeIcon} 
           onClick={handleClick}
           alt="light-dark mode" 
           />
        </div>
      <div className="theme-buttons">
        {themeColors.map(color => (
          <div 
            key={color} 
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  )
}