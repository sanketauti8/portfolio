// data.js
const INFO = {
    main: {
      title: "Reactfolio",
      name: "Sanket Auti",
      email: "sanketauti8@gmail.com",
      logo: "../logo.png",
    },
    socials: {
      twitter: "https://twitter.com/",
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
      instagram: "https://instagram.com/",
      stackoverflow: "https://stackoverflow.com/",
      facebook: "https://facebook.com/",
    },
    homepage: {
      title: "Engineering the web, from elegant interfaces to efficient backends.",
      description:
        " Hello! I'm Sanket Auti, a Master's student in Computer Science at California State University, Fullerton. I have a solid background in software development with 1.9 years of professional experience. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.",
    },
    about: {
      title: "I am Sanket Auti, a Computer Science graduate student at California State University, Fullerton, specializing in software development",
      description:
        "I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
    },
    articles: {
      title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
      description:
        "Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
    },
    projects: [
      {
        title: "Project 1 : CampGroundsPro",
        TechnologyStack:"HTML5, CSS3, React, JavaScript, MongoDB, Express.js, Node.js",
        description:
          "I've developed an application that allows users to explore, add, and book campgrounds. Users can easily view all available campgrounds and check prices based on the number of people they plan to book for. Additionally, they can see which campsites are currently available and make bookings directly through the platform. This project was created using React for the front end, Node, Express for the backend, and MongoDB for the database.",
        logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
        linkText: "View Project",
        link: "https://github.com/sanketauti8/CampGroundsPro",
      },
      {
        title: "Project 2 : Routine-Recorder",
        TechnologyStack:": Flask, SQLAlchemy, Python",
        description:
          "I've created a web application called Routine Recorder using Flask, SQLAlchemy, and Python. This app enables users to manage their daily tasks efficiently. Users can easily add, update, or delete tasks, and track their schedule throughout the day. To ensure security, I've implemented JWT authentication. With Routine Recorder, users can streamline their daily routines and stay organized effortlessly.",
        logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
        linkText: "View Project",
        link: "https://github.com/sanketauti8/Projects/tree/main/CPSC%20449%20MidTerm%20Project/todo-list-api-project",
      },
      {
        title: "Project 3 : Inventory-Track",
        TechnologyStack:"HTML5, CSS3, React, JavaScript, Flask, Python, SQLAlchemy",
        description:
          "The Inventory Management System is a robust web application built with React, JavaScript, Flask, Python, SQLAlchemy, HTML, and CSS. It features a secure and efficient backend developed with Flask and SQLAlchemy, ensuring data integrity and security. The dynamic React frontend enhances user interactions, providing an intuitive and responsive interface for managing inventory. The system includes comprehensive admin access controls, preventing unauthorized access and ensuring accurate permission assignments. Users can seamlessly add, update, and delete inventory items, track stock levels, and generate reports. This project demonstrates advanced web development skills and a deep understanding of creating secure, user-friendly, and efficient inventory management solutions.",
        logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
        linkText: "View Project",
        link: "https://github.com/sanketauti8/Projects/tree/main/Inventory%20Management%20System",
      },
      {
        title: "Project 4 : Movie Data Analysis",
        TechnologyStack:"Hadoop, Pyspark, AWS",
        description:
          "I conducted a comprehensive analysis of a movie dataset using Hadoop, Pyspark, and AWS technologies. Through descriptive analysis, I extracted valuable insights and presented them using 11 graphical representations. By ensuring data accuracy and consistency, I enhanced the quality of generated reports by 15%. Leveraging AWS services, I stored the dataset in an S3 bucket and utilized EMR, resulting in an 80% acceleration in processing time for a 2GB dataset. This project showcases my ability to handle large-scale data analytics effectively and optimize processing efficiency.",
        logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
        linkText: "View Project",
        link: "https://github.com/sanketauti8/Projects/tree/main/CPSC_531-Final-Project",
      },
      {
        title: "Project 5 : Movie-Mania",
        TechnologyStack:"HTML5, CSS3, React, Movie API",
        description:
          "Movie-Mania is an engaging web application crafted using HTML5, CSS3, and React, leveraging the power of a movie API to offer users a dynamic and immersive movie browsing experience. With a sleek and intuitive user interface, users can explore a vast library of movies, accessing detailed information such as ratings, reviews, cast, and plot summaries. The integration of the movie API enriches the platform with real-time data, ensuring that users have access to the latest and most accurate information about their favorite films. Movie-Mania is a testament to my proficiency in frontend development and my ability to harness external APIs to create compelling and interactive web experiences.",
        logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
        linkText: "View Project",
        link: "https://github.com/sanketauti8/Projects/tree/main/React-Movies_Project/movies",
      },
      {
        title: "Project 6 : Weather-Finder",
        TechnologyStack:"HTML5, CSS3, JavaScript, Weather API",
        description:
          "WeatherTrack is a web application that provides real-time weather information based on user-specified locations. Utilizing the Weather API, this project demonstrates the integration of third-party APIs to fetch and display dynamic weather data. Users can enter the name of any city worldwide to receive the latest weather updates, including temperature and local time.",
        logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
        linkText: "View Project",
        link: "https://github.com/sanketauti8/WeatherFinder",
      },
      {
        title: "Project 7 : Map-Me",
        TechnologyStack:"HTML5, CSS3, JavaScript, Weather API",
        description:
          "MapMe is a web application designed to track and display the user's current geographical location. By utilizing the browser's geolocation API and the Weather API, MapMe fetches the user's coordinates and displays detailed location information, including the city, region, country, and local time. This project showcases the integration of geolocation services and external APIs to deliver real-time location tracking.",
        logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
        linkText: "View Project",
        link: "https://github.com/sanketauti8/MapMe",
      },
      {
        title: "Project 8 : Blogify",
        TechnologyStack:"HTML5, CSS3, JavaScript, EJS, Node.js, Express.js, AWS-elastic beanstalk",
        description:
          "Blogify is a dynamic blogging platform built with HTML5, CSS3, JavaScript, EJS, Node.js, Express.js, and deployed on AWS Elastic Beanstalk. It facilitates user authentication with JWT, allowing secure login, logout, and account creation. Users can seamlessly create, publish, and share their blogs, enriching them with multimedia elements. The platform fosters community engagement by enabling users to comment on each other's blogs, encouraging interaction and feedback exchange. With its intuitive interface and robust functionality, Blogify offers an immersive blogging experience for both creators and readers. This project showcases my expertise in full-stack web development, emphasizing user-centric design and secure authentication practices.",
        logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
        linkText: "View Project",
        link: "https://github.com/sanketauti8/Blogify",
      },
      {
        title: "Project 9 : URL-Shortner",
        TechnologyStack:"HTML5, CSS3, JavaScript, EJS, Node.js, Express.js, AWS-elastic beanstalk",
        description:
          "In URL Shortener project is a sophisticated web application that allows users to create short, manageable URLs from long web addresses while offering robust user management and analytics features. Utilizing HTML5, CSS3, and JavaScript for the frontend, and Node.js with Express.js for the backend, the application ensures a seamless user experience. Users can register and log in securely using JSON Web Tokens (JWT), enabling personalized URL management. Once logged in, users can input long URLs to generate unique short URLs, which are stored in a database. Each access to a short URL is tracked, providing detailed analytics on the number of clicks. The user dashboard displays all shortened URLs and their performance metrics. The application is hosted on AWS Elastic Beanstalk, ensuring scalability and reliability.",
        logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
        linkText: "View Project",
        link: "https://github.com/sanketauti8/URL-Shortner",
      },
      {
        title: "Project 10 : Tic-Tac-Toe",
        TechnologyStack:"HTML5, CSS3, JavaScript",
        description:
          "Tic Tac Toe Game is a classic implementation of the popular two-player game, also known as Noughts and Crosses. This web-based version allows two players to take turns marking spaces in a 3×3 grid. The first player to align three of their marks in a horizontal, vertical, or diagonal row wins the game. If all nine spaces are filled without any player forming such a row, the game ends in a draw.",
        logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
        linkText: "View Project",
        link: "https://github.com/sanketauti8/Tic-Tac-Toe",
      },
    
    ],
  };
  
  export default INFO;
  