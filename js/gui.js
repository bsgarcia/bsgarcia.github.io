export class GUI {

    static setActivePage(page) {
        document.getElementById('portfolio').classList.remove('active');
        document.getElementById('about').classList.remove('active');
        document.getElementById(page).classList.add('active');
    }
    
    static replaceHTML(id, html) {
        document.getElementById(id).innerHTML = html;
    }
    
    static appendHTML(id, html) {
        document.getElementById(id).innerHTML += html;
    }

    static toggleLoading() {
        let el = document.getElementById('page-loading');
        if (!el.classList.contains('hide')) {
            el.classList.add('hide')
        } else {
            el.classList.remove('hide')
        }
    }
    
    static show(id) {
        let el = document.getElementById(id)
        el.setAttribute('style', 'opacity: 0')
        setTimeout(() => {
            el.setAttribute('style', 'opacity: 1;transition: opacity 800ms;')
        }, 30);
    }

    static hide(id) {
        let el = document.getElementById(id)
        el.setAttribute('style', 'opacity: 1')
        setTimeout(() => {
            el.setAttribute('style', 'opacity: 0;transition: opacity 800ms;')
        }, 30);
    }

    static slideDown(id, time) {
        // TODO: rewrite
        let el = document.getElementById(id);
        el.style.display = 'block';
        el.style.transition = `height ${time}ms ease-out`;
        let height = el.clientHeight + .3 * el.clientHeight;
        el.style.height = `0px`
        // el.style.overflow = 'hidden';
        setTimeout(() => {
            el.style.height = `${height}px`

        }, 30);
        
    }
    static toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
    }

    static addYear(year, divId) {
        // equivalent of the above line but in pure javascript
        document.querySelector(`#${divId}`).innerHTML +=
            `<div class="year">${year}</div>`;
    }
    static addPublication({ href, html, tag} = {}) {
        if (tag === 'under review') {
            tag = '<span class="tag orange"> <span class="fa fa-hourglass"> </span> under review</span>'
        } else if (tag === 'accepted' || tag === 'in press') {
            tag = '<span class="tag green"> <span class="fa fa-check"> </span> in press</span>'
        } else {
            tag = '<span class="tag blue"> <span class="fa fa-check"> </span> published</span>'
        }

        document.querySelector("#publications").innerHTML +=
            `<div class="post" onclick="window.open('${href}', '_blank').focus()"> ${tag}${html}</div>`
    }

    static showItems() {
        document.querySelectorAll('.box').forEach(el => this.show(el.id))
    }

    static hideItems() {
        document.querySelectorAll('.box').forEach(el => this.hide(el.id))
    }

    static setModal(name) {

        // Get the modal
        const modal = document.getElementById(`${name}Modal`);

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        const img = document.getElementById(`${name}`);
        const modalImg = document.getElementById(`${name}Img`);
        const captionText = document.getElementById(`${name}Caption`);
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = img.src;//this.style.backgroundImage
        }

        // Get the <span> element that closes the modal
        const span = document.getElementById(`${name}Close`);
        span.onclick = function () {
            modal.style.display = "none";
        }

    }

    static async getPage(file) {
        document.querySelector('#main').innerHTML = `
            <div id="page-loading" class="screen">
                <div class="loader">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
            </div>
       ` 
        //'<div class="spinner"><div></div><div></div><div></div></div>'
        let text = fetch(file)
            .then(response => response.text())
            .then(text => text);
        await delay(600);
        return text;
    }

}

const delay = ms => new Promise(res => setTimeout(res, ms));