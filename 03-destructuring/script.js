
function handleMouseMove(event) {
    const {clientX, clientY} = event
    console.log(clientX, clientY);
}

const frutas = ['banana', 'uva']

const [fruta1, fruta2] = frutas

console.log(fruta1, fruta2);

const useState = ["blue", function(color){
    useState[0] = color
}]

const [color, setColor] = useState

setColor('red')


// document.documentElement.addEventListener('mousemove', handleMouseMove)


