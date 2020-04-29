class AppBar extends HTMLElement{

    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }
    
    render(){
        this.shadowDOM.innerHTML = `
            <style>
               
                :host {
                    display: block;
                    font-size: 20px;
                    background-color: #062B47;
                    text-align: center;
                    color: white;
                }
                .jumbotron {
                    padding: 60px;
                }
            </style>
            <div class="jumbotron">
                <h1>MobilKeren.Com</h1>
                <p>Berita Otomotif Keren Yang Lagi Viral</p>
            </div>
        `;
    }
}

customElements.define("app-bar", AppBar);