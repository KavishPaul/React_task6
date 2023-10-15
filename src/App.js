import Kavish1 from './images/Kavish1.jpeg';
import Kavish01 from './images/Kavish01.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
        <div class="container">
        <header>
            <h1 class="name">Kavish Paul</h1>
            <nav class="nav">
                <a href="#">Home</a>
                <a href="#main2">About</a>
                <a href="#main3">Experience</a>
                <a href="#main4">Contact me</a>
            </nav>
        </header>
        <main class="main1">
            <section class="section1">
                <h1>I am a Web Developer</h1>
                <p>Welcome to a world where code becomes art, and your website becomes an immersive canvas for your digital aspirations.</p>
            </section>
            <section class="section2">
            <img src={Kavish1} className="Kavish-photo" alt="This is Kavish Paul" />
            </section>
        </main>
        <main class="main2" id="main2">
            <h1>About</h1>
            <div class="about">
                <section class="section3">
                <img src={Kavish01} className="Kavish-photo" alt="This is Kavish Paul" />
                </section>
                <section class="section4">
                    <p>I am a B.Tech CSE undergrad at Vellore Institute of Technology, Chennai. Also, I have completed my web development 
                        internship at Oasis Infobyte. I am currently studying MERN stack development taught by ethnus. I have done my 
                        schooling at Amity International School and secured 95.6% and 95.4% in classes 10th and 12th, respectively. My current 
                        CGPA in college is 8.40. Also, I am a member of Microsoft Innovations Club's Web development department, where I have 
                        worked on a contact book project and have a few more projects to work on in the upcoming days. I am passionate about 
                        Data Structures and Algorithms. My interests also include Data Science and Machine Learning. My hobbies are playing 
                        basketball and listening to music.
                    </p>
                    </section>
            </div>
        </main>
        <main class="main3" id="main3">
            <h1>Experience</h1>
            <div class="card">
                <p>I am a Web Development Intern at Oasis Infobyte, working on three projects where I had to create a landing page, 
                    a personal portfolio website and a temperature converter. Apart from this,  I am also a member of Microsoft Innovations 
                    Club's Web Development department, where I have worked on a project called contact book. I was assigned the backend part 
                    for this project. I used Python, Flask, MongoDB and Postman for this project. Apart from this, I also have a project on 
                    hotel management system where I have used and integrated Python and MySQL for frontend and backend purposes, respectively.
                </p>
            </div>
        </main>
        <main class="main4" id="main4">
            <h1>Contact Me</h1>
            <div class="buttons">
                <button class="button1"><a href="Files/Kavish Paul resume.pdf" target="_blank">View Resume</a></button>
                <button class="button2"><a href="Files/Kavish Paul resume.pdf" download>Download Resume</a></button>
            </div>
            <div class="icons">
                <a href="https://linkedin.com/in/Kavish-Paul" target="_blank" class="fa fa-linkedin"></a>
                <a href="https://twitter.com/KavishPaul" target="_blank" class="fa fa-twitter"></a>
                <a href="https://www.instagram.com/paulkavish/" target="_blank" class="fa fa-instagram"></a>
                <a href="https://github.com/KavishPaul" target="_blank" class="fa fa-github"></a>
            </div>
        </main>
        <footer>
            &copy; 2023 | Kavish Paul
        </footer>
    </div>
    </div>
  );
}

export default App;
