import heroimg from '../assets/heroimg.jpg'
import About from '../assets/about.jpg'
import Expense from '../assets/Expense-Tracker.png'
import Github from '../assets/Github-Repo-App.png'
import Portfolio from '../assets/Portfolio.png'
import Bank from '../assets/Bank-Free.png'
import sniplink from '../assets/sniplink.png'

export const hero = {
    Image: heroimg,
    Role: 'Frontend Developer',
    Name: 'Olasunkanmi Ologun',
    Slogan: 'I write clean code'
}

export const about = {
    description: 'Aspiring software developer with a strong foundation in JavaScript, Python, and web development. Passionate about solving problems through code and transitioning from a successful career in insurance to tech. Proven ability to self-learn and build functional web applications.',
    image: About
}

export const expirience = [
    {
        year: '2024',
    }
]

export const projects = [
    {
        image: sniplink,
        name: 'SnipLink',
        githubLink: 'https://github.com/ola3107/snipLink',
        description: 'SnipLink is a web app for creating short URLs and generating QR codes, making sharing links easy and efficient',
        technologies: ['Nextjs', 'Tailwind', 'Firebase', 'shadcn ui']
    },
    {
        image: Expense,
        name: 'Expense Tracker',
        githubLink: 'https://github.com/ola3107/Expence-Tracker',
        description: 'Developed an expence tracker application using vue and local storage to save data',
        technologies: ['Vue', 'Css']
    },
    {
        image: Github,
        name: 'Github Repo App',
        githubLink: 'https://github.com/ola3107/GIthub-Repository-App',
        description: 'Built a GitHub repository application using react and GitHub rest api.',
        technologies: ['React', 'Css']
    },
    {
        image: Bank,
        name: 'video chat app',
        githubLink: 'https://github.com/ola3107/VideoChat-App',
        description: 'built a video chat application using (html, css, javascript) and agora-sdk.',
        technologies: ['HTML', 'Css', 'JavaScript']
    },
    {
        image: Portfolio,
        name: 'portfolio website',
        githubLink: '#',
        description: 'A personal portfolio website show my skills and contact information built with react',
        technologies: ['React', 'Tailwind']
    }
]

export const contact = {
    address: 'lagos, nigeria',
    phone: '+234 902 684 7871',
    email: 'olasunkanmiologun64@email.com',
}










