import { GUI } from "./gui.js";


// run main when the page is loaded
document.addEventListener('DOMContentLoaded', main);


let indexPage;
let portfolioPage;
let goToPortfolio = new URLSearchParams(window.location.search).get('portfolio');
// alert("hello")

function main() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
        // particlesJS.load('particles-js', 'particlesjs-config.json', function () {
            // console.log('callback - particles.js config loaded');
        // });
    }
    index();
    // equivalent in pure javascript
    document.getElementById('about').addEventListener('click', index);
    document.getElementById('portfolio').addEventListener('click', portfolio);
    if (goToPortfolio) {
        portfolio();
    }
}

async function index() {
    GUI.setActivePage('about')

    if (indexPage === undefined) {
        indexPage = await GUI.getPage('html/index.html');
    }

    GUI.replaceHTML('main', indexPage);

    // GUI.hideItems();

    GUI.addYear(2026, 'publications');
    GUI.addPublication(
        {
            href: 'https://deepmind.google/research/publications/118955/',
            html: `<h1>A moral Turing test: How belief and source shape detection of and agreement with LLM judgments</h1>
                        <h2><b>Garcia, B.</b>, Qian, C., & Palminteri, S. </h2>
                        <h3><b>PLoS ONE</b></h3>`
        }
    );
    GUI.addPublication(
        {
            href: 'https://www.nature.com/articles/s41467-026-72644-w',
            html: `<h1>Context induces distortions in value representations: a test across multiple elicitation
                        methods</h1>
                        <h2>Soukupova, M., <b>Garcia, B.</b>, & Palminteri, S. </h2>
                        <h3><b>Nature Communications</b></h3>`
        }
    );
    GUI.addPublication(
        {
            href: 'https://assets-eu.researchsquare.com/files/rs-9140831/v1_covered_e3c76d74-24be-48da-bdcf-cb623af7e34d.pdf',
            html: `<h1>Biased yet flexible weighting of perceptual and value information during
                        decision-making</h1>
                        <h2><b>Garcia, B.</b>, Wyart, V., & Bavelier, D. </h2>
                        <h3><b>Nature Communications</b></h3>`,
            tag: 'under review'
        }
    );

    GUI.addYear(2025, 'publications');
    GUI.addPublication(
        {
            href: 'https://ccneuro.org/',
            html: `<h1>Experiential value neglect is robust to changes in learning architecture and nature of
                        outcomes</h1>
                        <h2>Pioger, C., <b>Garcia, B.</b>, & Palminteri, S. </h2>
                        <h3><b>Cognitive Computational Neuroscience (CCN)</b></h3>`
        }
    );

    GUI.addYear(2023, 'publications');
    GUI.addPublication(
        {
            href: 'https://www.nature.com/articles/s41562-022-01496-3',
            html: `<h1> Experiential values are underweighted in decisions involving symbolic options</h1>
                        <h2><b>Garcia, B.</b>, Lebreton, M., Bourgeois-Gironde, S. & Palminteri, S. </h2>
                        <h3><b>Nature Human Behaviour</b></h3>`

            // tag: 'in press'
        }
    );

    GUI.addYear(2021, 'publications');
    GUI.addPublication(
        {
            href: 'https://royalsocietypublishing.org/doi/full/10.1098/rstb.2019.0665',
            html: `<h1>The description–experience gap: a challenge for the neuroeconomics of decision-making under
                            uncertainty</h1>
                        <h2><b>Garcia, B.</b>, Cerrotti, F., & Palminteri, S. (2021)</h2>
                        <h3><b>Philosophical Transactions of the Royal Society B.</b></h3>`
        }
    );

    GUI.addYear(2019, 'publications');
    GUI.addPublication(
        {
            href: 'https://www.nature.com/articles/s41599-019-0362-2',
            html: `<h1>Coordination over a unique medium of exchange under information scarcity</h1>
                        <h2>Nioche, A.*, <b>Garcia, B.*</b>, Lefebvre, G., Boraud, T., Rougier, N. P., &
                            Bourgeois-Gironde, S. (2019)</h2>
                        <h3><b>Palgrave Communications (Humanities and Social Sciences Communications - Nature)</b></h3>`
        }
    );

    GUI.addPublication(
        {
            href: 'https://www.nature.com/articles/s41599-019-0241-x',
            html: `<h1 style="max-width: 550px;">Interaction effects between consumer information and firms' decision rules in a duopoly: how
                    cognitive features can impact market dynamics</h1>
                        <h2>Nioche, A.*, <b>Garcia, B.*</b>, Boraud, T., Rougier, N. P., & Bourgeois-Gironde, S. (2019)
                        </h2>
                        <h3><b>Palgrave Communications (Humanities and Social Sciences Communications - Nature)</b></h3>`
        }
    );

    GUI.showItems();

    // GUI.toggleLoading()
}


async function portfolio() {
    // GUI.toggleDarkMode();
    GUI.setActivePage('portfolio')

    if (portfolioPage === undefined) {
        portfolioPage = await GUI.getPage('html/portfolio.html')
    }

    GUI.replaceHTML('main', portfolioPage);

    GUI.setModal('space');
    GUI.setModal('pgg');
    GUI.setModal('duopoly')
    
    GUI.showItems()
}