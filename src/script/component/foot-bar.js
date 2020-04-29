class FootBar extends HTMLElement{

    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }
    
    render(){
        this.shadowDOM.innerHTML = `
            <p>This is my car &#169; 2020, Where is your car?</p>
        `;
    }
}

customElements.define("foot-bar", FootBar);