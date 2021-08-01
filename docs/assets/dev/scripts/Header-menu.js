class FloatingMenu {
    constructor() {
        this.homeBtn = document.querySelector(".home-btn");
        this.homeMenu = document.querySelector(".home-menu");
        this.events();
    }

    events() {
        this.homeBtn.addEventListener("mouseover", this.addFloatMenu.bind(this));
        this.homeBtn.addEventListener("mouseout", this.removeFloatMenuBtn.bind(this));
        this.homeMenu.addEventListener("mouseout", this.removeFloatMenu.bind(this));
        // this.homeBtn.addEventListener("mouseout", this.addFloatMenu.bind(this));



        // this.jand.addEventListener("mouseover", this.addFloatMenu.bind(this));
        // this.jandd.addEventListener("mouseover", this.addFloatMenu.bind(this));
        // this.jand.addEventListener("mouseout", this.removeFloatMenu.bind(this));
        // this.menuFull.addEventListener("mouseout", this.removeFloatMenu.bind(this));
        // this.menuFullr.addEventListener("mouseout", this.removeFloatMenu.bind(this));
    }

    addFloatMenu() {
        this.homeMenu.classList.add("home-menu--active");
       
    }

    removeFloatMenuBtn() {
        if (this.homeMenu.classList.contains("home-menu--active")) {
            console.log("jjjjj")
        } else {
            this.homeMenu.classList.remove("home-menu--active");
        }
    }

    removeFloatMenu() {
        this.homeMenu.classList.remove("home-menu--active");
    }
}

let floatingMenu = new FloatingMenu();