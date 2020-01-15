class Chrono {
    constructor() {
        this.chronoId;
        this.mins = 0;
        this.secs = 0;
    }

    display() {
        if (this.secs<59){
            this.secs++; 
        } else {
            this.secs=0;
            this.mins++;
        }
        console.log(`secs:${this.secs} mins:${this.mins}`);
    }

    start() {
        this.chronoId = setInterval(() => { this.display() }, 1000);
    }

    stop(){
        clearInterval(this.chronoId)
    }

    reset(){
        this.mins=0;
        this.secs=0;
    }
}

myChrono = new Chrono();