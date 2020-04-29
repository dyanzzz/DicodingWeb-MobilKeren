import './news-item.js';

class NewsList extends HTMLElement{

    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    set newss(newss){
        this._newss = newss;
        this.render();
    }

    renderError(message){
        this.shadowDOM.innerHTML = "";
        this.shadowDOM.innerHTML += `
            <style>
                .placeholder {
                    font-weight: lighter;
                    color: rgba(0,0,0,0.5);
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
            </style>
            <h2 class="placeholder">asdasd123123${message}</h2>
        `;
    }

    render(){
        this.shadowDOM.innerHTML = "";
        this._newss.forEach(news => {
            const newsItemElement = document.createElement("news-item");
            newsItemElement.news = news
            this.shadowDOM.appendChild(newsItemElement);
        });
        
    }
    
}

customElements.define("news-list", NewsList)
