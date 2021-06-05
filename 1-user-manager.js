class User {
    name = ''
    askName() {
        this.name = prompt('Your name:')
        if (this.name) {
            return this.name
        }
        return this.askName() // recursive
    }
}

class UserLoop {
    name = ''
    askName() {
        while(!this.name) {
            this.name = prompt('Your name:')
        }
        return this.name
    }
}

const user = new UserLoop()
console.log(user.askName())
