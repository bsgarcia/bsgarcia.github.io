import { GUI } from "./gui.js";
//import { createPGGGame } from "./requests.js";

$(document).ready(main);

let indexPage;
let portfolioPage;


function main() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
        particlesJS.load('particles-js', 'particlesjs-config.json', function () {
            console.log('callback - particles.js config loaded');
        });
    }
    index();
    $('#about').click(index);
    $('#portfolio').click(portfolio);
}

async function index() {
    if (indexPage === undefined) {
        indexPage = await GUI.getPage('html/index.html');
    }

    // $('#main').show(200)
    $('#main').html(indexPage);
    GUI.hideItems();
    $('#portfolio').removeClass('active');

    GUI.addYear(2022, 'publications');
    GUI.addPublication(
        {
            href: 'https://psyarxiv.com/d59tz/',
            html: `<h1> The impassable gap between experiential and symbolic values</h1>
                        <h2><b>Garcia, B.</b>, Lebreton, M., Bourgeois-Gironde, S. & Palminteri, S. </h2>
                        <h3>Nature Human Behaviour</h3>`,

            tag: 'under review'
        }
    );

    GUI.addYear(2021, 'publications');
    GUI.addPublication(
        {
            href: 'https://royalsocietypublishing.org/doi/full/10.1098/rstb.2019.0665',
            html: `<h1>The descriptionâ€“experience gap: a challenge for the neuroeconomics of decision-making under
                            uncertainty</h1>
                        <h2><b>Garcia, B.</b>, Cerrotti, F., & Palminteri, S. (2021)</h2>
                        <h3>Philosophical Transactions of the Royal Society B 376 (1819), 20190665 10</h3>`
        }
    );

    GUI.addYear(2019, 'publications');
    GUI.addPublication(
        {
            href: 'https://www.nature.com/articles/s41599-019-0362-2',
            html: `<h1>Coordination over a unique medium of exchange under information scarcity</h1>
                        <h2>Nioche, A.*, <b>Garcia, B.*</b>, Lefebvre, G., Boraud, T., Rougier, N. P., &
                            Bourgeois-Gironde, S. (2019)</h2>
                        <h3>Palgrave Communications (Humanities and Social Sciences Communications - Nature), 5(1),
                            1-11.</h3>`
        }
    );

    GUI.addPublication(
        {
            href: 'https://www.nature.com/articles/s41599-019-0241-x',
            html: `<h1 style="max-width: 550px;">Interaction effects between consumer information and firms' decision rules in a duopoly: how
                    cognitive features can impact market dynamics</h1>
                        <h2>Nioche, A.*, <b>Garcia, B.*</b>, Boraud, T., Rougier, N. P., & Bourgeois-Gironde, S. (2019)
                        </h2>
                        <h3>Palgrave Communications (Humanities and Social Sciences Communications - Nature), 5(1),
                            1-11.</h3>`
        }
    );

    // $('#main').show();

    GUI.showItems();
}


async function portfolio() {
    GUI.toggleDarkMode();
    $('#about').removeClass('active');

    if (portfolioPage === undefined) {
        portfolioPage = await GUI.getPage('html/portfolio.html');
    }

    $('#main').hide();
    $('#main').html(portfolioPage);
    $('#main').fadeIn(50);
    $('#duopolyBox').hide();
    $('#pggBox').hide();


    $('#duopolyBox').slideDown(800);
    $('#pggBox').slideDown(1000);

    // await GUI.showPage('html/portfolio.html');

    GUI.setModal('space');
    GUI.setModal('pgg');
    GUI.setModal('duopoly')

    // $('#demoPGG').click(createPGGGame);
}