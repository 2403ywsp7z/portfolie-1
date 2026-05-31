const toggle = document.getElementById('menu-toggle');

if (toggle) {
    toggle.addEventListener('change', () => {
        document.body.classList.toggle("no-scroll", toggle.checked);
    });
}

const words = [
    "Student",
    "Engineer",
    "Coder",
    "Developer",
    "Creator",
];

const typingText = document.getElementById('typing-span');

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 100;
let nextWordDelay = 1000;

const type = () => {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingText.textContent = currentWord.
            substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.
            length) {
            isDeleting = true;
            setTimeout(type, nextWordDelay);
        } else {
            setTimeout(type, typingDelay);
        }
    } else {
        typingText.textContent = currentWord.
            substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) %
                words.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, erasingDelay);
        }
    }
};

document.addEventListener
    ('DOMContentLoaded', () => {
        if (words?.length) type();
    });

const navlinks = document.
    querySelectorAll(".navlink");
const tabs = document.querySelectorAll
    (".content");

navlinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        navlinks.forEach((l) => {
            if (l === link) {
                link.classList.add("active");
            } else {
                l.classList.remove("active");
            }
        });

        const tabName = link.dataset.tab;

        tabs.forEach((tab) => {
            if (tab.id === tabName) {
                tab.classList.add("active");
            } else {
                tab.classList.remove("active");
            }
        });

        if(tabName === "services"){
            const serviceList = [{
                id:1,
                icon:"ph-code",
                text:"website Development",
                para:"I build responsive and modern websites using the latest technologies like HTML,CSS,javascript,react.",
            },
            {
                id:2,
                icon:"",
                text:"UI/UX Design Improvement",
                para:"I enhance website interfaces with better color combinations, spacing, typography, and layout structure. My goal is to make websites not just functional, but visually engaging and user-friendly.",
            },
            {
                id:3,
                icon:"",
                text:"Backend & API Integration",
                para:"I connect frontend applications with backend services like Supabase and REST APIs. I implement authentication, database integration, and real-time features to make web applications fully functional.",
            },
             {
                id:4,
                icon:"",
                text:"Academic & Mini Projects",
                para:"I develop creative academic and personal projects such as landing pages, dashboards, and portfolio websites, focusing on practical implementation and real-world design standards",
            },
             {
                id:5,
                icon:"",
                text:"Offline Teaching",
                para:"I provide offline Science coaching to students from primary level up to 10th standard. I focus on building strong conceptual understanding rather than rote learning. My teaching method includes clear explanations, real-life examples, regular revision, and practice sessions to strengthen fundamentals and improve exam performance.",
            },
             {
                id:6,
                icon:"",
                text:"Communication & Presentation Skills",
                para:"I possess strong communication and presentation skills developed through teaching and technical project work. I can explain complex concepts in a simple and understandable manner, making it easier for both students and clients to grasp ideas clearly.",
            },
           
        ];

        const services = document.
        getElementsByClassName
        ("service-list");

        const innerContent = serviceList.
        map((item)=>{
            return`
            <div class="box">
             <h3>${item.text}</h3>
             <p>${item.para}</p>
        </div>
          `;
        }).join("");

        Array.from(services).forEach
        ((ele)=>{
            ele.innerHTML = innerContent;
        });
        }

        toggle.checked = false;
    });
});




