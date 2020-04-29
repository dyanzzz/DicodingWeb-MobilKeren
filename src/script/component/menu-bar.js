class MenuBar extends HTMLElement{

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
                    background-color: #ffffff;
                    position: sticky;
                    top: 0;
                }
                nav {
                    padding: 5px;
                }
                nav a {
                    font-size: 18px;
                    font-weight: 400;
                    text-decoration: none;
                    color: #062B47;
                    padding: .6em 1em;
                    transition: all .5s ease;
                    border-radius: 10px;
                }
                nav a:hover {
                    /*font-weight: bold;*/
                    background-color: #062B47;
                    color: #ffffff; 
                    border-radius: 10px;
                }
                nav li {
                    display: inline;
                    list-style-type: none;
                    margin-right: 20px;
                }
            </style>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <nav>
                <ul>
                    <li><a href="#hotNews"><i class="fa fa-newspaper-o"></i> Hot News</a></li>
                    <li><a href="https://otomurah.com/" target="_blank"><i class="fa fa-dollar"></i> Mobil Murah</a></li>
                    <li><a href="#contact"><i class="fa fa-phone"></i> Contact</a></li>
                </ul>
            </nav>
        `;
    }
}

customElements.define("menu-bar", MenuBar);