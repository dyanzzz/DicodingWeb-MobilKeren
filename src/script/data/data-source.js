class DataSource{

    static newsList(baseUrl){
        return fetch(baseUrl)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.status=='ok'){
                return Promise.resolve(responseJson.articles);
            }else{
                return Promise.reject(`news is not found`);
            }
        })
    }

    static search(baseUrl, keyword){
        return fetch(baseUrl+`&q=${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.status=='ok'){
                return Promise.resolve(responseJson.articles);
            }else{
                return Promise.reject(`${keyword} is not found`);
            }
        })

    }
    
}

export default DataSource;