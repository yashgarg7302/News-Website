// Get the navigation links
const navLinks = document.querySelectorAll('nav a');

// Add an event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the section ID from the href attribute
    const sectionID = link.getAttribute('href');

    // Scroll to the section with a smooth animation
    document.querySelector(sectionID).scrollIntoView({ behavior: 'smooth' });
  });
});

// Get the top stories articles
const topStories = document.querySelectorAll('#top-stories article');

// Loop through the articles and add a click event listener
topStories.forEach(article => {
  article.addEventListener('click', () => {
    // Get the article link and open it in a new tab
    const articleLink = article.querySelector('a').getAttribute('href');
    window.open(articleLink, '_blank');
  });
});

// Get the current year and add it to the footer
const currentYear = new Date().getFullYear();
const footer = document.querySelector('footer');
footer.innerHTML += `&copy; News Website ${currentYear}`;
