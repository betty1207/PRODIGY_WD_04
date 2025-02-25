import './App.css';
import { useEffect } from 'react';
import { FaUser } from 'react-icons/fa'; // Import a FontAwesome icon


function App() {
  useEffect(() => {
    const menu = document.getElementById('menu');
    const header = document.querySelector('header');
  
    // Toggle menu and header class
    const handleMenuClick = () => {
      menu.classList.toggle('fa-times');
      header.classList.toggle('toggle');
    };
  
    menu.addEventListener('click', handleMenuClick);
  
    // Remove classes on scroll or load
    const handleScrollOrLoad = () => {
      menu.classList.remove('fa-times');
      header.classList.remove('toggle');
    };
  
    window.addEventListener('scroll', handleScrollOrLoad);
    window.addEventListener('load', handleScrollOrLoad);
  
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href*="#"]');
    anchorLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth',
          });
        }
      });
    });
  
    // Cleanup event listeners on component unmount
    return () => {
      menu.removeEventListener('click', handleMenuClick);
      window.removeEventListener('scroll', handleScrollOrLoad);
      window.removeEventListener('load', handleScrollOrLoad);
      anchorLinks.forEach((link) => {
        link.removeEventListener('click', (e) => {
          e.preventDefault();
        });
      });
    };
  }, []);
  return (
    <>
  {/*header starts*/}
  <header>
    <div class="user">
      <img src="mypicture.jpg" alt='my picture'>
      <h3 class="name ">Betelhem Tsega</h3> 
      <p class="post">A software engineering student at BiT</p> 
    </div>
    
      <nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About Me</a></li>
    <li><a href="#education">Education</a></li>
    <li><a href="#contact">Contact Me</a></li>
  </ul>
</nav>

<div id="menu" class="fas fa-bars"></div>
</header>

{/*home starts*/}
  
<section class="home" id="home">
  <h3>hello</h3>
  <h1>I'm <span>Betelhem Tsega</span></h1>
  <p>a 4th year software engineering student at bahirdar university,  taking courses at well known BiT compus.</p>
<a href="#about"><button class="btn">about me<FaUser/></button></a>
</section>

{/*about section starts*/}
  
 <section class="about" id="about">
  <h1 class="heading"><span>about </span>me </h1>
  <div class="row">
    
    <div class="info">
      
      <h3><span>name: </span>Betelhem Tsega</h3>
      <h3><span>date of birth : </span>october_2001</h3>
      <h3><span>place of birtrh : </span>Ethiopia</h3>
      <h3><span>career choice: </span>full-stack developer</h3>
      
     
    </div>
  </div>
    <div class="box">

 <p>I am Software Engineering student with a passion for front-end development and a vision to
  grow into a full-stack developer and AI innovator. Driven by the desire to make a meaningful impact,
  I welcome every opportunity to learn, create, and contribute to shaping a better future through technology.
 </p>
 <p>I thrive on solving challenging problems and crafting intuitive, user-friendly interfaces that bridge the gap
   between technology and its users. With a strong foundation in programming and a keen eye for design, I am committed to
    turning ideas into impactful digital solutions. Beyond coding, I value collaboration, continuous learning, and staying 
    at the forefront of emerging technologies to drive innovation and make a lasting difference.
  </p>
 </div>

</section>
{/*education section starts*/}

<section class="education" id="education">
    <h1 class="heading"><span>education </span>status</h1>
    
    <div class="box-container">
    
      <div class="box">
           <i class="fas fa-graduation-cap"></i>
           <span>2006-2016</span>
           <h3>primary school</h3>
           <p>I attended a local private elementary school.</p>
        <p>pass each grade with good points getting a rank between 1-3</p>
          
      </div>
      <div class="box">
          <i class="fas fa-graduation-cap"></i>
          <span>2017-2020</span>
          <h3>secondary school</h3>
          <p>attended preparatory school from 9th-12th grade</p>
          <p>again by scoring good points and having good rank</p>
        
      </div>
       <div class="box">
        <i class="fas fa-graduation-cap"></i>
        <span>2021-now</span>
        <h3>higher education</h3>
        <p>currently a 4th year software engineering student learning at bahirdar institute of technology(BiT)compus</p>
        <p>good grades so far</p>
      </div>
    </div>
<div class="skills">
        <h3>Skills</h3>
        <div class="skill">
          <p>HTML</p>
          <div class="progress">
            <div class="progress-bar" style={{width: "90%"}}> 90% </div>
          </div>
        </div>
        <div class="skill">
          <p>CSS</p>
          <div class="progress">
            <div class="progress-bar" style={{width: "90%"}}>90%</div>
          </div>
        </div>
        <div class="skill">
          <p>JavaScript</p>
          <div class="progress">
            <div class="progress-bar" style={{width: "70%"}}>70%</div>
          </div>
        </div>
          <div class="skill">
            <p>c++</p>
            <div class="progress">
              <div class="progress-bar" style={{width: "40%"}}>40%</div>
            </div>
        </div>
        <div class="skill">
          <p>java</p>
          <div class="progress">
            <div class="progress-bar" style={{width: "30%"}}>30%</div>
          </div>
      </div>
      <div class="skill">
        <p>sql</p>
        <div class="progress">
          <div class="progress-bar" style={{width: "60%"}}>60%</div>
        </div>
    </div>
    <div class="skill">
        <p>react</p>
        <div class="progress">
          <div class="progress-bar" style={{width: "70%"}}>70%</div>
        </div>
    </div>
    <div class="skill">
        <p>vue</p>
        <div class="progress">
          <div class="progress-bar" style={{width: "50%"}}>50%</div>
        </div>
    </div>
    </div>

</section>

{/*contact me section status*/}     
 
 <section class="contact" id="contact">
  <h1 class="heading"> contact <span> me </span></h1>
 
 <div class="row">
  <div class="content">
      <h3 class="title">contact info</h3>
      <div class="info">
        <h3><i class="fas fa-envelope"></i>bettygatse8@gmail.com</h3>
        <h3><i class="fas fa-phone"></i>+251960934043</h3>
        <h3><i class="fa-brands fa-telegram"></i>https://t.me/ominia_sugit</h3>
        <h3><i class="fa-brands fa-github"></i>https://www.github.com/betty1207</h3>
      </div>
  </div>
<form action="">
  <input type="text" placeholder="name" class="box"/>
  <input type="email" placeholder="email" class="box"/>
  <textarea name="" id="" cols="30" rows="10" class="box message" placeholder="message"></textarea>
  <button type="submit" class="btn"> send <i class="fa-solid fa-paper-plane"></i> </button>

</form>

</div>
</section>

 
 <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
 
   
</>   
  );
}

export default App;
