const aboutTabs = document.
querySelectorAll('.tab');

const aboutContent = document.
querySelectorAll("tab-content");

// document.addEventListener(
//     'DOMContentLoaded',()=>{
//         if(aboutTabs){
//             aboutTabs[0].click();
//         }
//     });

aboutTabs.forEach((tab)=>{
    tab.addEventListener('click',(e) =>{
        e.preventDefault();
        aboutTabs.forEach((a)=>{
            a.classList.remove('active');
        });
        tab.classList.add('active');

        aboutContent.forEach((c) =>{
            c.classList.remove('active');
        });

        const activeTab = tab.dataset.section;


        document.getElementById(tab.dataset.section).classList.add("active");
        if(activeTab === "experience"){
            const experiences = document.querySelector(".experiences-list"); 
            const experienceList =[{
                id:1,
                date:"Dec 2025 - Present",
                position:"Cybersecurity Intern",
                company:"Persevex",
                details:"working on real-world security project ,performing vulnerability assessment & basic penetration testing "
            },
            {
                id:2,
                date:"2024 - Present",
                position:"Cybersecurity Intern",
                company:"Persevex",
                details:"working on real-world security project ,performing vulnerability assessment & basic penetration testing "

            },
            {
                id:3,
                position:"Portfolie Website",
                company:"Academic",
                details:"Designed and developed a responsive personal portfolio"

            } ];

            const experienceContent = 
            experienceList.map((ele)=>{
                return`
                
                `
            })
        
        }
    });
});