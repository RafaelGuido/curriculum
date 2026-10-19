/*==================== TRANSLATIONS ====================*/
// The Portuguese texts are the page's own HTML (read on load), so only English lives here.
// Each key matches a data-i18n / data-i18n-alt / data-i18n-content / data-i18n-href attribute in index.html
const translations = {
    en: {
        'meta.title': 'Rafael | Developer',
        'meta.description': 'Rafael Toccolini - Full-Stack Developer with over 6 years of experience in Java, Python, JavaScript and TypeScript. Brasília/DF, Brazil.',
        'meta.shortDescription': 'Full-Stack Developer with over 6 years of experience in Java, Python, JavaScript and TypeScript.',

        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.journey': 'Journey',
        'nav.services': 'Services',
        'nav.portfolio': 'Portfolio',
        'nav.testimonial': 'Testimonials',
        'nav.contact': 'Contact',

        'role': 'Full-Stack Developer',
        'home.description': "I'm a 26-year-old developer born in Brasília, passionate about technology and always looking to grow, both personally and professionally.",
        'home.cta': 'Get in touch',

        'about.title': 'About me',
        'about.subtitle': 'My introduction',
        'about.imgAlt': 'Photo of Rafael Toccolini',
        'about.description': 'Computer Scientist specialized in Artificial Intelligence, passionate about video games, sports and Gabi!',
        'about.companies': 'Companies <br> worked at',
        'about.years': 'Years of <br> experience',
        'about.projects': 'Completed <br> projects',
        'about.cv': 'Download CV',
        'about.cvFile': 'assets/pdf/Rafael_Toccolini_CV_Ingles.pdf',

        'skills.title': 'Skills',
        'skills.subtitle': 'Technologies and more',
        'skills.frontend.title': 'Frontend Developer',
        'skills.frontend.subtitle': 'More than 5 years',
        'skills.backend.title': 'Backend Developer',
        'skills.backend.subtitle': 'More than 5 years',
        'skills.tools.title': 'Tools',
        'skills.tools.subtitle': 'Used daily',
        'skills.knowledge.title': 'Knowledge',
        'skills.knowledge.subtitle': 'For personal and professional use',
        'skills.ai': 'Artificial Intelligence',
        'skills.communication': 'Communication',
        'skills.speaking': 'Writing/Public Speaking',
        'skills.english': 'English',

        'journey.title': 'Journey',
        'journey.subtitle': 'My academic and professional journey',
        'journey.education': 'Education',
        'journey.work': 'Work',
        'journey.postgrad': 'AI for Devs (Postgraduate)',
        'journey.degree': "Computer Science (Bachelor's)",
        'journey.highschool': 'High School',
        'journey.english': 'English',
        'journey.job1': 'Mid-level Application Developer',
        'journey.job2': 'Junior Programmer Analyst',
        'journey.job3': 'Administrative Assistant Intern',
        'journey.current': '2021 - Present',
        'journey.onsite': 'Brasília/DF - Brazil (On-site)',
        'journey.hybrid': 'Brasília/DF - Brazil (Hybrid)',
        'journey.remote': 'Brasília/DF - Brazil (Remote)',

        'services.title': 'Services',
        'services.subtitle': 'What I can do for you',
        'services.web': 'WEB <br> Developer',
        'services.mobile': 'Mobile <br> Developer',
        'services.more': 'See more',
        'services.web1': 'I build websites and systems for your business.',
        'services.web2': 'I know and use modern JS frameworks, always with clean code.',
        'services.mobile1': 'I build apps for Android and iOS.',
        'services.mobile2': 'I make sure it looks great on every phone model.',

        'portfolio.title': 'Portfolio',
        'portfolio.subtitle': 'Completed projects',
        'portfolio.view': 'View',
        'portfolio.m2a.alt': 'M2A Consultoria project',
        'portfolio.m2a.description': 'An online solution where participants select the business owners who will take part in the project, who then share how they manage their business by filling out a questionnaire.',
        'portfolio.siscovid.alt': 'Siscovid project',
        'portfolio.siscovid.description': 'AI system that evaluates the user\'s symptoms and gives medical recommendations, as well as "diagnosing" some diseases.',
        'portfolio.godofredo.alt': "Godofredo's Dungeon project",
        'portfolio.godofredo.description': 'The game takes place on a 4x4 grid, with the area around the player lit by the torch they carry. There is no ending and no levels, so there is no win condition: the player is forever trapped in the dungeon, which keeps getting harder as enemies grow stronger over time.',

        'project.unavailable': 'Currently not taking new projects, news coming soon!',
        'project.title': 'Have a project in mind?',
        'project.description': 'Send me an e-mail now and get <b>10% OFF</b> to bring your new project to life.',
        'project.cta': 'Send e-mail',
        'project.imgAlt': 'Project illustration',

        'testimonial.title': 'Testimonials',
        'testimonial.subtitle': 'Professionals and what they have to say',
        'testimonial.text1': 'Rafael is an exemplary professional I had the honor of working with, with a great command of today\'s web development tools and always solving problems effectively.',
        'testimonial.text2': 'More than a lifelong friend, an excellent professional. Always helpful, kind and humble, with a patience and knowledge that stand out both personally and professionally. Tech-savvy, quick to learn and build with modern frameworks, and always ready for new challenges along the way.',
        'testimonial.text3': 'Rafael is a professional with full-stack development skills, familiar with several popular libraries as well as back-end frameworks. Broad front-end knowledge, with skills in HTML5, CSS3, Angular (+) and JavaScript, and hands-on back-end experience with Java using Spring Boot and REST APIs. Solid knowledge of version control and the Agile Scrum methodology. A team player and a very dedicated, reliable and responsible professional.',

        'contact.title': 'Contact',
        'contact.subtitle': 'Send me a message',
        'contact.phone': 'Phone',
        'contact.whatsappLink': 'https://api.whatsapp.com/send/?phone=5561982750493&text=Hi%2C+I+found+your+contact+on+your+website&type=phone_number&app_absent=0',
        'contact.mailLink': 'mailto:rafatocco7@gmail.com?subject=Contact%20-%20Your%20name&body=Hi%2C%20I%20found%20your%20contact%20on%20your%20website',

        'footer.updated': 'Last updated: October 18, 2026',
        'footer.rights': '&#169; All rights reserved.',
    },
}

/*==================== LANGUAGE SWITCH ====================*/
const langButton = document.getElementById('lang-button')
const langOptions = langButton.querySelectorAll('[data-lang]')
const i18nAttrs = ['alt', 'content', 'href']
const i18nElements = document.querySelectorAll(
    ['[data-i18n]', ...i18nAttrs.map(attr => `[data-i18n-${attr}]`)].join(', ')
)

// Save the original (Portuguese) texts so we can switch back to them
translations.pt = {}
i18nElements.forEach(el => {
    if (el.dataset.i18n) translations.pt[el.dataset.i18n] = el.innerHTML.trim()
    i18nAttrs.forEach(attr => {
        const key = el.getAttribute(`data-i18n-${attr}`)
        if (key) translations.pt[key] = el.getAttribute(attr)
    })
})

function setLanguage(lang) {
    const texts = translations[lang]

    i18nElements.forEach(el => {
        const key = el.dataset.i18n
        if (key && key in texts) el.innerHTML = texts[key]

        i18nAttrs.forEach(attr => {
            const attrKey = el.getAttribute(`data-i18n-${attr}`)
            if (attrKey && attrKey in texts) el.setAttribute(attr, texts[attrKey])
        })
    })

    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    langOptions.forEach(option => option.classList.toggle('active-lang', option.dataset.lang === lang))
    localStorage.setItem('selected-lang', lang)
}

// Priority: ?lang= in the URL, then the visitor's previous choice, then the browser language
const urlLang = new URLSearchParams(window.location.search).get('lang')
const selectedLang = localStorage.getItem('selected-lang')
const browserLang = navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en'

setLanguage([urlLang, selectedLang].find(lang => lang in translations) || browserLang)

langButton.addEventListener('click', () => {
    setLanguage(document.documentElement.lang === 'pt-BR' ? 'en' : 'pt')
})
