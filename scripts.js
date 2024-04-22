document.addEventListener('DOMContentLoaded', function() {
    const timelineData = [
        {
            date: 'March 2023 - Present',
            title: 'Full Stack Software Developer',
            description: 'At Amentum, I built software for the FAA as a US government contractor'
        }
    ];
    
        const timeline = document.getElementById('timeline');
    
        timelineData.forEach((item, index) => {
            let entry = document.createElement('div');
            entry.classList.add('timeline-entry');
            entry.setAttribute('id', 'entry-' + index);
    
            let date = document.createElement('div');
            date.textContent = item.date;
            date.classList.add('timeline-date');
    
            let content = document.createElement('div');
            content.classList.add('timeline-content');
            content.setAttribute('id', 'content-' + index);
    
            let title = document.createElement('h3');
            title.textContent = item.title;
    
            let description = document.createElement('p');
            description.textContent = item.description;
            description.style.display = 'block'; // Initially show the description
    
            // Click event to toggle the description visibility
            entry.addEventListener('click', function() {
                description.style.display = description.style.display === 'none' ? 'block' : 'none';
            });
    
            content.appendChild(title);
            content.appendChild(description);

            entry.appendChild(date);
            entry.appendChild(content);
    
            timeline.appendChild(entry);
        });
    });
    