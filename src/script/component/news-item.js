class NewsItem extends HTMLElement{
    
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set news(news){
        this._news = news;
        this.render();

    }

    render(){
        this.shadowDOM.innerHTML = `
            <style>
                
                h2 {
                    color: #062B47
                }

                .featured-image {
                    width: 100%;
                    max-height: 300px;
                    object-fit: cover;
                    object-position: center;
                }

                .card {
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 5px;
                    padding: 10px;
                    margin-bottom: 10px;
                    background-color: #ffffff;
                    
                }

                @media screen and (min-width: 810px) {
                    .card {
                        flex-basis: 32%;
                    }
                }
                
            </style>

            <article id="news_card" class="card">
                <h2 id="news">${this._news.title}</h2>
                <img height="40%" src="${this._news.urlToImage}" class="featured-image" alt="news">
                <p>${this._news.description} <a target="_blank" href="${this._news.url}">Source</a></p>
            </article>
        `;
    }
}

customElements.define('news-item', NewsItem);