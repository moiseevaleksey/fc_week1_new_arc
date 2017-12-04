class Source {
    constructor({category, country, description, id, language, name, url}) {
        this.category = category;
        this.country = country;
        this.description = description;
        this.id = id;
        this.language = language;
        this.name = name;
        this.url = url;
        this.articles = [];
        this.apiKey = '79bcf63b008145a5913ed908010d69ea';
        this.articlesUrl = 'https://newsapi.org/v1/articles' + '?apiKey=' + this.apiKey;
        this.visible = false;
    }

    loadArticles() {
        fetch(this.articlesUrl + '&source=' + this.id)
            .then(
                response => {
                    return response.json();
                }
            )
            .then(
                data => {
                    const articleList = document.getElementById('article-list');

                    this.articles = data.articles.map(article => new Article(this.name, article));
                    this.updateArticleList();
                }
            );
    }

    getDomElement() {
        const srcName = this.name;
        const checkbox = document.createElement('input');
        const name = document.createElement('span');
        const source = document.createElement('label');

        source.className = 'source';
        source.id = this.id;
        checkbox.type = 'checkbox';
        checkbox.className = 'src-chbx';
        checkbox.onclick = this.changeSourceVisibility.bind(this);
        checkbox.id = this.id;
        name.innerHTML = this.name;
        source.appendChild(checkbox);
        source.appendChild(name);

        return source;
    }

    changeSourceVisibility() {
        this.visible = !this.visible;
        this.updateArticleList();
    }


    updateArticleList() {
        const articleList = document.getElementById('article-list');

        if (this.visible) {
            this.articles.map(article => {
                const artDom = article.getDomElement();
                articleList.appendChild(artDom);
            });
        } else {
            while (articleList.getElementsByClassName(this.name).length > 0) {
                const article = document.getElementsByClassName(this.name)[0];
                articleList.removeChild(article);
            }
        }
    }
}