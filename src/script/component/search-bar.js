class SearchBar extends HTMLElement{

    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectionCallback(){
        this.render();
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }
    get value(){
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render(){
        this.shadowDOM.innerHTML = `
            <style>
                .search-container {
                    max-width: 100%;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    padding: 16px;
                    border-radius: 5px;
                    display: flex;
                    position: sticky;
                    background-color: white;
                }
                
                .search-container > input {
                    width: 75%;
                    padding: 16px;
                    border: 0;
                    border-bottom: 1px solid cornflowerblue;
                    font-weight: bold;
                }
                
                .search-container > input:focus {
                    outline: 0;
                    border-bottom: 2px solid cornflowerblue;
                }
                
                .search-container > input:focus::placeholder {
                    font-weight: bold;
                }
                
                .search-container >  input::placeholder {
                    color: cornflowerblue;
                    font-weight: normal;
                }
                
                .search-container > button {
                    width: 23%;
                    cursor: pointer;
                    margin-left: auto;
                    padding: 16px;
                    background-color: cornflowerblue;
                    color: white;
                    border: 0;
                    text-transform: uppercase;
                }
                
                @media screen and (max-width: 550px){
                    .search-container {
                        flex-direction: column;
                        position: static;
                    }
                
                    .search-container > input {
                        width: 100%;
                        margin-bottom: 12px;
                    }
                
                    .search-container > button {
                        width: 100%;
                    }
                }
            </style>
            <div class="search-container">
                <input placeholder="Search news" id="searchElement" type="search">
                <button id="searchButtonElement" type="submit">Search</button>
            </div>
        `;
        this.shadowDOM.querySelector('#searchButtonElement').addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);