class Article {
    constructor(source, {author, title, description, url, urlToImage, publishedAt}) {
        this.source = source;
        this.author = author;
        this.title = title;
        this.description = description;
        this.url = url;
        this.urlToImage = urlToImage;
        this.publishedAt = new Date(publishedAt);

    }

    getDomElement() {
        let article = document.createElement('div');
        let header = document.createElement('h3');
        let description = document.createElement('p');
        let linkToArticle = document.createElement('a');
        let date = document.createElement('span');
        let img = document.createElement('img');

        article.className = this.source;
        article.classList.add('article');
        article.setAttribute('timestamp', this.publishedAt.valueOf());
        header.innerHTML = this.title;
        description.innerHTML = this.description;
        linkToArticle.href = this.url;
        linkToArticle.innerHTML = `Readt details at the ${this.source}`;
        date.innerHTML = this.publishedAt.toLocaleDateString();
        img.src = this.urlToImage;

        article.appendChild(img);
        article.appendChild(header);
        article.appendChild(description);
        article.appendChild(date);
        article.appendChild(linkToArticle);

        return article;
    }
}