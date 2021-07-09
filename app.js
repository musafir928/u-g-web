//  toggle bars and X
const toggler = document.querySelectorAll('.toggler')

const toggleNav = () => toggler.forEach(e => e.classList.toggle('visible-icon'))

toggler.forEach(e => e.addEventListener('click', () => toggleNav()))


// generate news
fetch("uyghur.json")
    .then(res => res.json())
    .then(data => generateNews(data))

const newsContainer = document.querySelector('#newsContainer')
const news_container = document.querySelector('.news-container')
const generateNews = data => {
    console.log(data)
    if (!data.news.length) {
        const noNews = document.createElement('div')
        noNews.setAttribute('class', 'container')
        noNews.setAttribute('class', 'news-title')
        noNews.innerHTML = "بۇ سەھىپىدە يېڭى مەزمۇن يوق"
        noNews.style.background = "#fff"
        noNews.style.color = "#777"
        news_container.appendChild(noNews)
    } else {
        data.news.forEach((e, i) => {
            const newsCard = document.createElement('div')
            newsCard.setAttribute('class', 'news-card')
            newsCard.setAttribute('id', `card-${i}`)
            newsCard.addEventListener('click', () => window.open(`${e.newsLink || ''}`))

            const img = document.createElement('img')
            img.src = e.imgSrc
            img.alt = e.imgAlt ?? e.newsTitle
            const div = document.createElement('div')
            div.setAttribute('class', 'card-title')
            div.innerHTML = e.newsTitle
            newsCard.appendChild(img)
            newsCard.appendChild(div)
            newsContainer.appendChild(newsCard)
        })
    }
}