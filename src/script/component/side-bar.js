class SideBar extends HTMLElement{

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
                
                .profile img {
                    width: 200px;
                }
                 
                .profile header {
                    text-align: center;
                }

                .card {
                    padding: 10px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 5px;
                    margin-bottom: 10px;
                    background-color: #ffffff;
                }
            </style>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <article id="contact" class="profile card">
                <header>
                    <h2>About My Self</h2>
                    <p>Hello, my name is dyan</p>
                    <figure>
                        <img src="src/image/speed.png">
                    </figure>
                </header>
                <section>
                    
                    <table>
                        <tr>
                            <th><i class="fa fa-envelope"></i> : </th>
                            <td>dyanzzz@gmail.com</td>
                        </tr>
                        <tr>
                            <th><i class="fa fa-map"></i> : </th>
                            <td>Perum. Graha Cisait</td>
                        </tr>
                        <tr>
                            <th><i class="fa fa-phone"></i> : </th>
                            <td>+62 896 5312 1977</td>
                        </tr>
                    </table>
                    </section>
            </article>
        `;
    }
}

customElements.define("side-bar", SideBar);