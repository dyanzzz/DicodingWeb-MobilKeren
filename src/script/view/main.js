import "../component/search-bar.js";
import "../component/news-list.js"
import DataSource from "../data/data-source.js";

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const newsListElement = document.querySelector("news-list");

    const apiKey = "10eb3f188a854b7c84ace080c6db4a6c";
    const baseUrl = `http://newsapi.org/v2/top-headlines?country=id&apiKey=${apiKey}`;

    const getNews = async () => {
        try {
            const response = await DataSource.newsList(baseUrl);
            renderResult(response);
        } catch(message) {
            fallbackResult(message);
        }
    };

    
    
    const onButtonSearchClicked = async() => {
        try {
            const result = await DataSource.search(`${baseUrl}&sortBy=popularity`, searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    const renderResult = results => {
        newsListElement.newss = results;
    };

    const fallbackResult = message => {
        newsListElement.renderError(message)
    };

    getNews();
    searchElement.clickEvent = onButtonSearchClicked;
    
};

export default main;