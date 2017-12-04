class Application {
    constructor() {
        this.sourcesListUrl = 'https://newsapi.org/v1/sources?country=us';
        this.sourceList = [];
    }

    loadSources() {
        fetch(this.sourcesListUrl)
            .then(
                response => {
                    return response.json();
                }
            )
            .then(
                data => {
                    this.sourceList = data.sources.map(src => new Source(src));
                    this.sourceList.map(src => src.loadArticles());
                    this.renderSourceList();
                }
            );
    }

    renderSourceList() {
        this.sourceList.map(src => {
            const divSourceList = document.getElementById('source-list');
            divSourceList.appendChild(src.getDomElement());
        });
    }
}

