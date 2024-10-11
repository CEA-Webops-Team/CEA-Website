const posts = [
  {
    title: "Environmental Engineering: Innovating for a Greener Tomorrow",
    excerpt:
      "As the world faces growing problems like climate change, pollution, and the depletion of resources, environmental engineering offers practical solutions.",
    image: "HEIF_Image_4.jpg",
  },

  {
    title: "Water Resource Management: Tackling the Growing Freshwater Crisis",
    excerpt:
      "While air pollution remains a central focus, another global challenge is the increasing scarcity of freshwater. The demand for clean water continues to grow as populations rise and urbanization expands. Environmental engineers are leading the charge in developing technologies that ensure clean, safe, and abundant water supplies for communities around the world.",
    image: "img1.jpg",
  },

  {
    title: "The Fight Against Microplastics: Keeping Oceans and Food Safe",
    excerpt:
      "As the world becomes more aware of the dangers of plastic pollution, one of the emerging concerns is microplastics—tiny particles of plastic that make their way into oceans, rivers, and even the food we eat. These particles pose significant threats to marine ecosystems and human health. Environmental engineers are playing a vital role in combating this growing problem through innovative filtration and prevention technologies.",
    image: "download-4.png",
  },
   {
    title: "Renewable Energy: Powering the Future Sustainably",
    excerpt:
      "Environmental engineering doesn’t just stop at solving pollution or water-related issues—it also plays a crucial role in transforming how we produce and consume energy. Renewable energy is the cornerstone of a sustainable future, and environmental engineers are at the forefront of designing and implementing clean energy solutions that reduce reliance on fossil fuels.",
    image: "download-6.png",
  },
   {
    title: "Sustainable Geotechnics: A Path to Eco-friendly Ground Engineering",
    excerpt:
      "Sustainable geotechnics is an increasingly prominent domain within civil engineering that seeks to coordinate many engineering practices with environmental administration and supervision. As the world struggles as well as suffers with the escalating challenges posed by climate change, resource depletion, and environmental degradation, the vital importance for sustainable methodologies in civil infrastructure development has become predominant. Geotechnical engineers play a key role in ensuring the stability of infrastructure projects and greatly impact their environmental effects.",
    image: "img2.jpg",
  },
];

const newsLetterPosts = [
  {
    title: "Project X",
    excerpt:
      "The CEA of IIT Madras successfully organized an exciting competition, Project X. The challenge of Project X was to design and construct a three-storied structure using popsicle sticks. The competition’s objective was – the structure that could withstand the most stress and sustain the heaviest weight without failure would be declared the winner.",
    image: "projectX.jpg",
  },

  {
    title: "Informal Nite",
    excerpt:
      "In the evening of August 2nd, 2024, the CEA of IIT Madras hosted a lively and unforgettable Informal Night for the freshers. Designed to foster interaction and fun, this event brought together the freshie batch for an evening filled with games, tasks, performances, and, most importantly, the chance to connect with each other and the CEA team.",
    image: "Informalnite1.png",
  },
  {
    title: "Freshie Nite",
    excerpt:
      "The Civil Engineering Association hosted Freshie Nite, a fun-filled event to welcome the new batch of civil engineering students. The evening was all about making freshers feel at home. With a mix of cultural performances, games, the night was a perfect way for freshers to kickstart their journey at IIT Madras. Vox Rox, the much-anticipated fun interaction session was held before the freshie nite. Freshers are engaged in light-hearted banter and quick-fire Q&A rounds, where witty comebacks and quirky answers had everyone laughing.",
    image: "img7.jpg",
  },
  {
    title: "Career Talks",
    excerpt:
      "In a recent talk on civil engineering opportunities, Mr.Sarath and Mr. Vaibhav shared their inspiring journey from adversity to success. Coming from a financially struggling family—his father a construction worker and his mother a housemaid—Sarath took on odd jobs, including working as a bouncer and a newspaper boy, to support his family. He vividly recalled preventing his mother from committing suicide, a moment that cemented his resolve to push forward.",
    image: "img6.jpg",
  },
  {
    title: "Career Talks",
    excerpt:
      "Vaibhav offered insights into the options available after a B.Tech. He categorized career paths into three main options: 9-to-5 jobs, research, and entrepreneurship. In a job, tasks are assigned by a manager, allowing you to move past yesterday's work. However, research offers more freedom to choose your focus, but it demands dedication to build on what you’ve learned.",
    image: "img5.jpg",
  },
];

const recentPostsContainer = document.getElementById("recentPosts");
const loadMoreButton = document.getElementById("loadMore");
const recentPostsToggle = document.getElementById("recentPostsToggle");
const newsLetterToggle = document.getElementById("newsLetterToggle");
const sectionTitle = document.getElementById("sectionTitle");
let visiblePosts = 6;
let showingNewsletter = false; // Track which section is currently displayed

function createPostCard(post, index) {
    const card = document.createElement("div");
    const page = showingNewsletter?"newsLetterPage":"article";
    card.className = "post-card";
    card.innerHTML = `
        <img src="${post.image}" alt="${post.title}" class="post-image">
        <div class="post-overlay">
            <h3 class="post-title">${post.title}</h3>
            <p class="post-excerpt">${post.excerpt}</p>
            <a href=${page}.html?postIndex=${index} class="read-more">Read More</a>
        </div>
    `;
    return card;
}

function displayPosts() {
    recentPostsContainer.innerHTML = "";
    const currentPosts = showingNewsletter ? newsLetterPosts : posts;

    for (let i = 0; i < visiblePosts && i < currentPosts.length; i++) {
        recentPostsContainer.appendChild(createPostCard(currentPosts[i], i));
    }
}

loadMoreButton.addEventListener("click", (e) => {
    e.preventDefault();
    visiblePosts += 6;
    const currentPosts = showingNewsletter ? newsLetterPosts : posts;

    if (visiblePosts >= currentPosts.length) {
        loadMoreButton.style.display = "none";
    }
    displayPosts();
});

// Toggle between Posts and Newsletter
recentPostsToggle.addEventListener("click", () => {
    if (showingNewsletter) {
        showingNewsletter = false;
        sectionTitle.textContent = "Articles";
        recentPostsToggle.classList.add("active");
        newsLetterToggle.classList.remove("active");
        visiblePosts = 6; // Reset visible posts
        displayPosts(); // Display the posts
    }
});

newsLetterToggle.addEventListener("click", () => {
    if (!showingNewsletter) {
        showingNewsletter = true;
        sectionTitle.textContent = "Newsletter";
        newsLetterToggle.classList.add("active");
        recentPostsToggle.classList.remove("active");
        visiblePosts = 6; // Reset visible posts
        displayPosts(); // Display the newsletter posts
    }
});

// Initial display
displayPosts();