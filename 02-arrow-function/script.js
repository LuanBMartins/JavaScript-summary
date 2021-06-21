function upperName1(name) {
    return name.toUpperCase()
}

const upperName2 = function(name) {
    return name.toUpperCase()
}

const upperName3 = name => name.toUpperCase()

class Menu {
    constructor(menu) {
        this.menuElement = document.querySelector(menu)
        this.activeClass = 'active'
    }
    addActiveElement() {
        // this.menuElement.addEventListener('click', function(event) {
        //     console.log(this);
        //     event.target.classList.add(this.activeClass)
        // })
        
        this.menuElement.addEventListener('click', event => {
            console.log(this);
            event.target.classList.add(this.activeClass)
        })
    }
}

const menu = new Menu('.principal')
menu.addActiveElement()




