// Calculator App

let container = document.createElement('div')
container.style.width = '320px'
container.style.margin = '20px auto'
container.style.border = '1px solid #ccc'
container.style.borderRadius = '8px'
container.style.padding = '10px'
container.style.textAlign = 'center'
container.style.backgroundColor = '#f0f0f0'
container.style.fontFamily = 'Arial, sans-serif'
container.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)'
document.body.appendChild(container)

// Calculator display area
let display = document.createElement('div')
display.style.width = '100%'
display.style.height = '80px'
display.style.backgroundColor = '#fff'
display.style.border = '1px solid #ccc'
display.style.borderRadius = '4px'
display.style.marginBottom = '10px'
display.style.display = 'flex'
display.style.alignItems = 'center'
display.style.justifyContent = 'flex-end'
display.style.padding = '0 10px'
display.style.fontSize = '32px'
container.appendChild(display)

let buttonsGrid = document.createElement('div')
buttonsGrid.style.display = 'grid'
buttonsGrid.style.gridTemplateColumns = 'repeat(4, 1fr)'
buttonsGrid.style.gap = '10px'
container.appendChild(buttonsGrid)

const buttons = [
  '%', 'CE', 'C', 'DEL',
  '1/x', 'x^2', '√', '/',
  '7', '8', '9', '*',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '00', '0', '.', '='
];

function buttonClick(button) {
    switch (button) {
      case '=':
        try {
          let result = eval(display.textContent);
          display.textContent = Number.isNaN(result) ? 'Error' : formatResult(result)
        } catch (error) {
          display.textContent = 'Error'
        }
        break
      case 'C':
        display.textContent = '0'
        break
      case 'CE':
        display.textContent = display.textContent.slice(0, -1) || '0'
        break
      case 'DEL':
        display.textContent = display.textContent.slice(0, -1) || '0'
        break
      case '1/x':
        display.textContent = `1 / (${display.textContent})`
        break
      case 'x^2':
        display.textContent = `Math.pow(${display.textContent}, 2)`
        break
      case '√':
        display.textContent = `Math.sqrt(${display.textContent})`
        break;
      case '/':
      case '*':
      case '-':
      case '+':
        if (display.textContent !== '0' && display.textContent !== 'Error') {
          display.textContent += button
        }
        break
      case '.':
        if (!display.textContent.includes('.')) {
          display.textContent += '.'
        }
        break
      default:
        // Handle numeric input
        if (/^[0-9]+$/.test(button)) {
          if (display.textContent === '0' || display.textContent === 'Error') {
            display.textContent = button;
          } else {
            display.textContent += button;
          }
        }
        break
    }
  }
  

function formatResult(result) {
  // Format result to avoid long decimals :<
  return Math.abs(result) < 1e-9 ? result.toFixed(9) : result.toString()
}

// Dynamically create buttons
buttons.forEach(buttonText => {
  let button = document.createElement('button')
  button.textContent = buttonText
  button.style.padding = '20px'
  button.style.fontSize = '18px'
  button.style.border = '1px solid #ccc'
  button.style.borderRadius = '4px'
  button.style.background = '#e0e0f0'
  button.style.cursor = 'pointer'
  button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = '#b3b3b3'
  })
  button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = '#e0e0f0'
  })
  button.addEventListener('click', () => buttonClick(buttonText));
  buttonsGrid.appendChild(button)
})


// let's learn typescript :> 

