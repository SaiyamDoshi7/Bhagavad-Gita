📖 Bhagavad Gita Web Application
🧘 Project Overview

This project is a Bhagavad Gita Web Application built using HTML, CSS, JavaScript, and Bootstrap 5.
The application allows users to explore chapters of the Bhagavad Gita, read verses, and navigate between chapters dynamically using live API data.

The main goal of this project is to provide ancient spiritual knowledge with a modern, user-friendly interface.

🚀 Features

📚 Display all 18 Chapters of the Bhagavad Gita

📖 View all verses of a selected chapter

🔄 Navigate between Previous & Next chapters

🔢 Quick verse navigation buttons

🌐 Fetches live data using Vedic Scriptures API

📱 Fully responsive design using Bootstrap

🎨 Clean and modern UI with custom CSS

❓ FAQ section for common questions

📩 “Shloka of the Day” subscription section

🛠️ Technologies Used

HTML5 – Page structure

CSS3 – Styling and layout

Bootstrap 5 – Responsive design & components

JavaScript (ES6) – Logic & API handling

Bootstrap Icons – Icons

REST API – Data source

🌐 API Used

Data is fetched from the following public API:

Chapters API

https://vedicscriptures.github.io/chapters


Verses API

https://vedicscriptures.github.io/slok/{chapter}/{verse}

📂 Project Folder Structure
Bhagavad-Gita/
│
├── index.html          # Home page
├── chapters.html       # Chapter & verse details page
│
├── assets/
│   ├── css/
│   │   ├── bootstrap.min.css
│   │   └── style.css
│   │
│   └── js/
│       ├── script.js        # Chapters list logic
│       ├── chapters.js      # Verses & navigation logic
│       └── bootstrap.bundle.min.js
│
├── image/              # Images & icons
└── README.md           # Project documentation

⚙️ How It Works
🔹 Chapters Page

Fetches all chapters using API

Displays chapter number, title, summary, and verse count

🔹 Chapter Details Page

Reads chapter number from URL (?chapter=1)

Fetches all verses dynamically

Allows smooth scrolling to selected verses

Supports next/previous chapter navigation

▶️ How to Run the Project

Download or clone the project

Open the folder in VS Code

Open index.html in any modern browser

Internet connection is required (API based project)

🎓 Use Case

College Mini Project

JavaScript API Practice

Bootstrap UI Practice

Educational / Spiritual Website Demo

📝 Future Enhancements

Language switch (Hindi / English)

Search verses by keyword

User authentication

Bookmark favorite verses

Quotes section implementation

📜 Disclaimer

This project is created for educational purposes only.
All Bhagavad Gita content is fetched from a public API and belongs to their respective sources.
