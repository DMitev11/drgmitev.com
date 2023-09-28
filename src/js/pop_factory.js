
const PopSectionData =  {
    bithotel: {
        banner: "https://www.youtube.com/embed/CJmrsUfoLi4",
        title: 'Bit Hotel',
        role: "dasddadadadad",
        link: {text: "Play.Bithotel.IO", link: "https://play.bithotel.io"},
        description: "dasddadadadad",
        tasks: [
            {title: "adsad", description: ""},
            {title: "adsad2", description: ""},
            {title: "adsad3", description: ""}
        ]
    },
    audi: {
        banner: "../assets/img/audi_background.avif",
        title: 'Audi',
        role: "dasddadadadad",
        link: {text: "OpenSea", link: "https://opensea.io/AudiBulgaria"},
        description: "dasddadadadad",
        tasks: [
            {title: "adsad", description: "asdasdad"},
            {title: "adsad2", description: "asdasds"},
            {title: "adsad3", description: "asdadasda"},
            {title: "adsad3", description: "asdadasda"},
            {title: "adsad3", description: "asdadasda"},
            {title: "adsad3", description: "asdadasda"}
        ]
    },
    pigletz: {
        banner: "https://www.youtube.com/embed/kzdDbAKmmow",
        title: 'Pigletz',
        role: "dasddadadadad",
        link: {text: "Pigletz.com", link: "https://pigletz.com"},
        description: "dasddadadadad",
        tasks: [
            {title: "adsad", description: ""},
            {title: "adsad2", description: ""},
            {title: "adsad3", description: ""}
        ]
    },
    befaster: {
        banner: "https://www.youtube.com/embed/4ENWDrWJ_ik",
        title: 'BeFaster',
        role: "dasddadadadad",
        link: {text: "BeFaster.Fit", link: "https://befaster.fit"},
        description: "dasddadadadad",
        tasks: [
            {title: "adsad", description: ""},
            {title: "adsad2", description: ""},
            {title: "adsad3", description: ""}
        ]
    },
    tivoros: {
        banner: "../assets/img/tivoros-1_background.png",
        title: 'Tivoros-1',
        role: "dasddadadadad",
        link: {text: "Tivoros.com", link: "https://www.tivoros.com/"},
        description: "dasddadadadad",
        tasks: [
            {title: "adsad", description: ""},
            {title: "adsad2", description: ""},
            {title: "adsad3", description: ""}
        ]
    },
    last_resort: {
        banner: "https://www.youtube.com/embed/ejPTK7T9AUk",
        title: 'Last Resort',
        role: "dasddadadadad",
        link: {text: "Steam", link: "https://store.steampowered.com/app/1491650/Last_Resort/"},
        description: "dasddadadadad",
        tasks: [
            {title: "adsad", description: ""},
            {title: "adsad2", description: ""},
            {title: "adsad3", description: ""}
        ]
    },
    parallel: {
        banner: "https://www.youtube.com/embed/GoCahCyDuNA",
        title: 'Parallel',
        role: "dasddadadadad",
        link: {text: "Itch.io", link: "https://buas.itch.io/runningoutontime"},
        description: "dasddadadadad",
        tasks: [
            {title: "adsad", description: "asdadad"},
            {title: "adsad2", description: "asdadsasd"},
            {title: "adsad3", description: "asdasda"}
        ]
    },
}
class PopSectionFactory{
    static generateNode (id) { 
        const data = PopSectionData[id]; 

        const wrapper = document.createElement('div');
        wrapper.classList.add("wrapper");

        const inner = document.createElement('div');
        inner.classList.add("inner");

        let banner;
        if(data['banner'].includes('https://')){ 
            banner = document.createElement('iframe'); 
            banner.setAttribute('src', data['banner']);
        } else {
            banner = document.createElement('img');
            banner.setAttribute('src', data['banner']);
        }
        banner.classList.add('banner');
        
        const content = document.createElement('div');
        content.classList.add('content');

        const title = document.createElement('h2');
        title.classList.add('mb-3')
        title.classList.add("title");
        title.appendChild(document.createTextNode(data.title));

        const role = document.createElement('h4');
        role.classList.add('mb-1') 
        role.appendChild(document.createTextNode("Role: " + data.role));

        const link = document.createElement('a');
        link.setAttribute('href', data.link.link)
        link.appendChild(document.createTextNode(`Link: ${data.link.text}`));

        const description = document.createElement('p');
        description.classList.add('mt-4')  
        description.classList.add('mb-2')
        description.classList.add('description');
        description.appendChild(document.createTextNode(data.description));

        const tasks = document.createElement('div'); 
        const task_title = document.createElement('h4'); 
        task_title.appendChild(document.createTextNode("Tasks: "));  
        tasks.appendChild(task_title);

        const tasks_list = document.createElement('ul'); 
        data['tasks'].forEach(task => {
            const task_el = document.createElement('li');  
            task_el.classList.add('mb-3');
            const title = document.createElement('h5');
            title.appendChild(document.createTextNode(task.title))
            const description = document.createElement("span");
            description.appendChild(document.createTextNode(task.description))
            task_el.appendChild(title)
            task_el.appendChild(description);
            tasks_list.appendChild(task_el);
        });

        tasks.appendChild(tasks_list);
        content.appendChild(title);
        content.appendChild(role);
        content.appendChild(link);
        content.appendChild(description);
        content.appendChild(tasks);
        inner.appendChild(banner);
        inner.appendChild(content);
        wrapper.appendChild(inner);

        return wrapper;
    }
} 