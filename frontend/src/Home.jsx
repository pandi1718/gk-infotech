import React from "react";
import { useState } from "react";
import laptop from "./assets/img/laptop.avif"
import desktop from "./assets/img/desktop.webp"
import toner from "./assets/img/toner.webp"
import cctv from "./assets/img/cctv.avif"
import server from "./assets/img/server.webp"
import logo from "./assets/img/logo.webp"
import bio from "./assets/img/bio.webp"
import printer from "./assets/img/printer.avif"
import sales from "./assets/img/sales & service.webp"
import toner1 from "./assets/img/toner1.webp"
import cctv1 from "./assets/img/cctv.avif"
import door from "./assets/img/door.webp"
import brands from "./assets/img/brands.jpeg"

const Home = () => {

  const[hover,setHover]=useState(null)
  const[hovered,setHovered]=useState(null)
  const[hove,setHove]=useState(null)
  


    const handleSubmit = (e) => {
    e.preventDefault();

  const email = e.target.email.value
  const name = e.target.name.value
  const message = e.target.text.value
  const mobile = e.target.number.value

  const whatsappMessage = `Hello GK Infotech, I want to know about your services.%0A
  Name: ${name}%0A
  Email: ${email}%0A
  Mobile : ${mobile}%0A
  Message: ${message}
  `
  


  const phone = "7708211681";

  window.open(`https://wa.me/91${phone}?text=${whatsappMessage}`, "_blank")

  e.target.reset()
}

// React.useEffect(() => {
//   const toggle = document.getElementById('dark');
//   const body = document.body;

//   if (!toggle) return;

//   const handleClick = () => {
//     toggle.classList.toggle('bi-moon');

//     const navLinks = document.querySelectorAll(".nav-link")
//     const navhead = document.querySelectorAll(".nav-head")
//     const navtittle = document.querySelectorAll(".nav-tittle")
//     const contact = document.querySelectorAll(".contact")

//     if (toggle.classList.toggle('bi-brightness-high-fill')) {
//       body.style.background = '#91edffff';
//       body.style.color = 'black';

//       navLinks.forEach(a => (a.style.color = 'black'))
//       navhead.forEach(a => (a.style.background = '#0dcaf0'))
//       contact.forEach(a => (a.style.border = '1px solid #0dcaf0'))     
//       contact.forEach(a => (a.style.background = '#0dcaf0'))     
//       navtittle.forEach(a => (a.style.color = 'black'))

//     } else {
//       body.style.background = '#000';
//       body.style.color = 'white';

//       navLinks.forEach(a => (a.style.color = 'white'))
//       navhead.forEach(a => (a.style.background = 'black'))
//       navhead.forEach(a => (a.style.border = '1px solid #0dcaf0'))
//       contact.forEach(a => (div.style.border = '1px solid #0dcaf0'))
//       navtittle.forEach(a => (a.style.color = 'white'))

//     }

//     body.style.transition = '2s';
//   };

//   toggle.addEventListener('click', handleClick);

//   return () => toggle.removeEventListener('click', handleClick);
// }, []);




  const navbar=(ishover)=>({
    padding : '7px',
    borderRadius: '7px',
    border : ishover ? '1px solid #fff':'none',
    background: ishover ? '#fff' : '#0dcaf0',
    color:ishover ? '#0dcaf0' : '#000',
    fontWeight: ishover ? 'bold':'normal',
  })

  const home=(ishover)=>({
    background: ishover ? '#ffffffff' : '#0dcaf0',
    border : ishover ? '2px solid #0dcaf0':'2px solid #ffffffff',
    color : ishover ? '#0dcaf0':'#ffffffff',
    fontWeight: ishover ? 'bold':'normal',
    cursor:'pointer',
  })
  const homee=(ishover)=>({
    background: ishover ? '#ffffffff' : '#0dcaf0',
    border : ishover ? '2px solid #0dcaf0':'2px solid #ffffffff',
    color : ishover ? '#0dcaf0':'#ffffffff',
    fontWeight: ishover ? 'bold':'normal',
    cursor:'pointer',
  })

  // const ReadMore = ({ text, limit = 50 }) => {
  //   const [isExpanded, setIsExpanded] = React.useState(null);

  //   const toggleReadMore = () => {
  //     setIsExpanded(!isExpanded);
  //   };

  //   return (
  //     <p>
  //       {isExpanded ? text : text.substring(0, limit) + "... "}
  //       <span 
  //         onClick={toggleReadMore}
  //         style={{ color: "#00bbffff", cursor: "pointer", fontWeight: "bold" }}
  //       >
  //         {isExpanded ? "less" : "more"}
  //       </span>
  //     </p>
  //   );
  // };

  return (
    <div style={{background:'#9ef0ffff'}}> 
     
      <style>
{`
  .equal-card {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .equal-card .card-body {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .equal-card h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .text-limit {
    display: -webkit-box;
    -webkit-line-clamp: 2;     
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .go-btn-container {
    margin-top: auto;
  }
`}
</style>

      {/* Header  */}
     <header className='p-3 sticky-top nav-head bg-info' style={{boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)"}}>
          <div className="row">
      <div className="col d-flex">
        <img className="rounded mb-0" src={logo} alt="logo" style={{width:'5vw',height:'10vh'}} />
        <h1 className="mt-3 ms-2 nav-tittle"> GK infotech</h1>
        
      </div>
      <div className="col ">
      <nav>
          <ul className='pt-3 d-flex justify-content-md-end list-inline gap-3 pe-2 justify-content-md-start'>

          <li className='list-inline-item'><a className='text-decoration-none nav-link' href="#home" 
          style={navbar(hover===0)} onMouseEnter={()=>setHover(0)} onMouseLeave={()=>setHover(null)}>Home</a></li>

          <li className='list-inline-item'><a className='text-decoration-none nav-link' href="#about" 
          style={navbar(hover===1)} onMouseEnter={()=>setHover(1)} onMouseLeave={()=>setHover(null)}>About</a></li>

          <li className='list-inline-item'><a className='text-decoration-none nav-link' href="#service" 
          style={navbar(hover===2)} onMouseEnter={()=>setHover(2)} onMouseLeave={()=>setHover(null)}>Service</a></li>

          <li className='list-inline-item'><a className='text-decoration-none nav-link' href="#contact" 
          style={navbar(hover===3)} onMouseEnter={()=>setHover(3)} onMouseLeave={()=>setHover(null)}>Contact</a></li>
        
         {/* <i className="bi bi-brightness-high-fill" id="dark"></i> */}
        </ul>
         
      </nav>
      </div>
    </div>
     </header>

     {/* ..... */}
      <div className='container my-3 p-3' id="home">

      <h5 className="card p-2" style={{textAlign:'center',border:'2px solid #0dcaf0',background:'#00d9ffff'}}>GK Infotech – Smart Solutions for All Your Computer Needs.</h5>
      <ul className="text-center mt-3">
        <li className="list-inline-item">Sales -</li>
        <li className="list-inline-item">Service -</li>
        <li className="list-inline-item">Accessories</li>
      </ul>

      {/* carousal  */}
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel"  data-bs-interval="2000">
  
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={laptop} className="d-block w-100 rounded" alt="laptop" style={{ height: "40vh", objectFit: "cover" }}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Laptop</h5>
        <p>High-performance laptops for work, study, and everyday productivity</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={printer} className="d-block w-100 rounded" alt="printer" style={{ height: "40vh", objectFit: "cover" }}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>printer</h5>
        <p>Fast and efficient printers ideal for home, office, and business needs</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={server} className="d-block w-100 rounded" alt="server" style={{ height: "40vh", objectFit: "cover" }}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>server</h5>
        <p>Secure and scalable server solutions for business operations and data management</p>
      </div>
    </div>
  
    <div className="carousel-item">
      <img src={desktop} className="d-block w-100 rounded" alt="desktop" style={{ height: "40vh", objectFit: "cover" }}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>desktop</h5>
        <p>Powerful and reliable desktops built for smooth multitasking and long-term use</p>
      </div>
    </div>
  
    <div className="carousel-item">
      <img src={toner} className="d-block w-100 rounded" alt="toner" style={{ height: "40vh", objectFit: "cover" }}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>toner</h5>
        <p>High-quality toner cartridges that deliver sharp, clear, and long-lasting prints</p>
      </div>
    </div>
  
    <div className="carousel-item">
      <img src={cctv} className="d-block w-100 rounded" alt="cctv" style={{ height: "40vh", objectFit: "cover" }}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>cctv</h5>
        <p>Advanced CCTV security systems for complete safety and round-the-clock monitoring</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      {/* Content  */}

        <div className="text-center mb-3 mt-3">
          <h2>What We Do</h2>
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-2">

          <div className="card p-3 col-12 col-md-3" style={home(hovered===0)}
          onMouseEnter={()=>setHovered(0)} onMouseLeave={()=>setHovered(null)}>
            <p>Desktop & Laptop Sales and Service</p>
          </div>
          <div className="card p-3 col-12 col-md-3" style={home(hovered===1)}
          onMouseEnter={()=>setHovered(1)} onMouseLeave={()=>setHovered(null)}>
            <p>Server Setup & Maintenance</p>
          </div>
          <div className="card p-3 col-12 col-md-3" style={home(hovered===2)}
          onMouseEnter={()=>setHovered(2)} onMouseLeave={()=>setHovered(null)}>
            <p>Printer Service & Toner Refilling</p>
          </div>
          <div className="card p-3 col-12 col-md-3" style={home(hovered===3)}
          onMouseEnter={()=>setHovered(3)} onMouseLeave={()=>setHovered(null)}>
            <p>CCTV Camera Installation</p>
          </div>
          <div className="card p-3 col-12 col-md-3" style={home(hovered===4)}
          onMouseEnter={()=>setHovered(4)} onMouseLeave={()=>setHovered(null)}>
            <p>Biometric Attendance Systems</p>
          </div>
          <div className="card p-3 col-12 col-md-3" style={home(hovered===5)}
          onMouseEnter={()=>setHovered(5)} onMouseLeave={()=>setHovered(null)}>
            <p>Annual Maintenance (AMC)</p>
          </div>
        </div>

          {/* ABOUT CONTENT  */}
          <div className="container mt-3" id="about">
            <div className="row">
              <h4 className="text-center pt-5 pb-2 mb-4">About Me</h4>
              <div className="col">
                <h4>Company Overview</h4>
            <p>GK Infotech is a trusted technology solutions provider with over 4 years of experience in delivering top-quality IT products and services. Registered under the association, we specialize in sales, service, and accessories for computers, laptops, printers, servers, and CCTV systems. We also offer doorstep service and professional system installation, ensuring convenience and reliability for our clients.</p>
            <h4>Mission & Vision</h4>
            <p><strong>Mission: </strong> To deliver high-quality technology products and services that empower our clients to work efficiently and securely.</p>
            <p><strong>Vision: </strong> To be recognized as the go-to IT solutions provider for sales, services, accessories, and installation in our region.</p>
             <h4>Team / Staff</h4>
             <p>Our team consists of skilled professionals dedicated to offering prompt and reliable service. Each member brings technical expertise and a customer-first approach, ensuring every client receives personalized support.</p>
            <h4>History / Experience</h4>
            <p>Since our establishment, GK Infotech has been committed to providing exceptional technology solutions. Over the past <strong>4 years</strong>, we have successfully served numerous clients, offering <strong>major sales, service, accessories, doorstep service, and system installation</strong> with a focus on quality and reliability.</p>
             <h4>Certifications / Achievements</h4>
             <ul>
              <li>Registered under the relevant association</li>
              <li>Successfully completed numerous sales, service, and installation projects</li>
              <li>Trusted provider of IT accessories and solutions in the region</li>
              <li>Continually updating skills to stay ahead in technology trends</li>
             </ul>
             <h4>Our Branches</h4>
             <p><strong>LMR Complex, Opposite</strong> – Serving customers with full IT solutions, accessories, and system installations.</p>
             <p><strong>Sellappampatti, Near Nakshathira Mandapam</strong> – Providing sales, service, support, and doorstep service for computers, laptops, printers, servers, and CCTV systems.</p>
             </div>
            </div>
          </div>

        {/* Service Content  */}
      <h4 className="text-center mt-5" id="service">Sales & Service</h4>

      <h4 className="mt-3">Hardware Sales</h4>
      <p>GK Infotech offers a wide range of hardware products including laptops, desktops, printers, servers, and more, sourced from trusted brands to ensure quality and performance.</p>
      <ul>
        <li><strong>Laptops</strong> – High-performance laptops for personal and professional use.</li>
        <li><strong>Desktops</strong> – Reliable desktops for office and home setups.</li>
        <li><strong>Printers</strong> – Efficient printers for home and business use.</li>
        <li><strong>Servers</strong> – Secure and scalable server solutions.</li>
      </ul>

      <div className="row mt-4">

        <div className="col-12 col-md-2 col-sm-0 mb-2">
          <div className="card equal-card">
           <img className="img-fluid" src={laptop} alt="computer" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px",height:'25vh' }}/>
          {/* <div className="card-body">
          <h2 className="text-center">LAPTOPS</h2>
        <ReadMore
        text="Complete server trusted service."
        limit={50}
      />
      <div className="d-flex justify-content-center w-100 rounded" style={homee(hove===0)}
          onMouseEnter={()=>setHove(0)} onMouseLeave={()=>setHove(null)}>
          <button className="p-2 rounded" style={{border: 'none', background: 'transparent', }}>Go</button>
          </div>
          </div> */}
          </div>
        </div>

        <div className="col-12 col-md-2 col-sm-0 mb-2">
          <div className="card equal-card">
           <img className="img-fluid" src={desktop} alt="computer" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px",height:'25vh' }}/>
          {/* <div className="card-body">
          <h2 className="text-center">DESKTOP</h2>
          <p className="text-limit">Server service and modification.</p>
          <div className="d-flex justify-content-center w-100 rounded" style={homee(hove===1)}
          onMouseEnter={()=>setHove(1)} onMouseLeave={()=>setHove(null)}>
            <button className="p-2 rounded" style={{border: 'none', background: 'transparent', }}>Go</button>
          </div>
          </div> */}
          </div>
        </div>

        <div className="col-12 col-md-2 col-sm-0 mb-2">
          <div className="card equal-card">
           <img className="img-fluid" src={printer} alt="computer" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px",height:'25vh' }}/>
          {/* <div className="card-body">
          <h2 className="text-center">PRINTER</h2>
          <p>Quality desktop sales with fast, trusted service</p>
          <div className="d-flex justify-content-center w-100 rounded" style={homee(hove===2)}
          onMouseEnter={()=>setHove(2)} onMouseLeave={()=>setHove(null)}>
            <button className="p-2 rounded" style={{border: 'none', background: 'transparent', }}>Go</button>
          </div>
          </div> */}
          </div>
        </div>

        <div className="col-12 col-md-2 col-sm-0 mb-2">
          <div className="card equal-card">
           <img className="img-fluid" src={server} alt="computer" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px",height:'25vh' }}/>
          {/* <div className="card-body">
          <h2 className="text-center">SERVER</h2>
          <p className="text-limit">Complete server maintenance,</p>
          <div className="d-flex justify-content-center w-100 rounded" style={homee(hove===3)}
          onMouseEnter={()=>setHove(3)} onMouseLeave={()=>setHove(null)}>
            <button className="p-2 rounded" style={{border: 'none', background: 'transparent', }}>Go</button>
          </div>
          </div> */}
          </div>
        </div>

        <div className="col-12 col-md-2 col-sm-0 mb-2">
          <div className="card equal-card">
           <img className="img-fluid" src={cctv} alt="computer" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px",height:'25vh' }}/>
          {/* <div className="card-body">
          <h2 className="text-center">CCTV</h2>
          <p>Quality desktop and laptop sales service</p>
          <div className="d-flex justify-content-center w-100 rounded" style={homee(hove===4)}
          onMouseEnter={()=>setHove(4)} onMouseLeave={()=>setHove(null)}>
            <button className="p-2 rounded" style={{border: 'none', background: 'transparent', }}>Go</button>
          </div>
          </div> */}
          </div>
        </div>

        <div className="col-12 col-md-2 col-sm-0 mb-2">
          <div className="card equal-card">
           <img className="img-fluid" src={toner} alt="computer" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px",height:'25vh' }}/>
          {/* <div className="card-body">
          <h2 className="text-center">TONER</h2>
          <p className="text-limit">Complete server maintenance,</p>
          <div className="d-flex justify-content-center w-100 rounded" style={homee(hove===5)}
          onMouseEnter={()=>setHove(5)} onMouseLeave={()=>setHove(null)}>
            <button className="p-2 rounded" style={{border: 'none', background: 'transparent', }}>Go</button>
          </div>
          </div> */}
          </div>
        </div>

      </div>

      <h4 className="mt-4">Hardware Service & Maintenance</h4>
      <p>Keep your systems running smoothly with our expert service and maintenance solutions.</p>
      <img src={sales} alt="sales & service"  style={{objectFit:'cover',width:'20vw',borderRadius:'10px'}}/>
      <ul className="mt-3">
        <li><strong>Repairs</strong> – Quick and reliable repair services for all hardware.</li>
        <li><strong>Installation</strong> – Professional installation of hardware and systems at your doorstep.</li>
        <li><strong>Upgrades</strong> – Upgrade your system components for better performance.</li>
      </ul>

      <h4 className="mt-4">CCTV Installation & Maintenance</h4>
      <img src={cctv1} alt="cctv" style={{objectFit:'cover',width:'20vw',borderRadius:'10px'}} />
      <p className="mt-3">Ensure safety with our professional CCTV installation and maintenance services.</p>

    <h4 className="mt-3">Toner Refilling & Supplies</h4>
    <img src={toner1} alt="tonerfilling" style={{objectFit:'cover',width:'20vw',borderRadius:'10px'}}/>
    <p className="mt-3">High-quality toner refills and accessories to keep your printing running without interruption.</p>

    <h4 className="mt-4">Biometric Attendance System (Bio Metric)</h4>
    <p className="mt-3">Smart and reliable biometric systems for accurate attendance tracking and secure access control.</p>

    <img src={bio} alt="bio" style={{objectFit:'cover',width:'20vw',borderRadius:'10px'}}/>

            <ul className="mt-3">
              <li>Advanced biometric solutions for seamless attendance and enhanced workplace security.</li>
              <li>Fast, secure, and error-free biometric devices to manage staff attendance effortlessly.</li>
            </ul>

    <h4 className="mt-4">Optional Packages / Pricing</h4>
    <p>Custom packages for businesses or bulk services. Contact us for details.</p>

            <h4 className="mt-4">All Brand Service</h4>
            <p>Expert service and repair for all major brands to keep your systems running smoothly without interruptions.</p>
            
            <img src={brands} alt="brand" style={{objectFit:'cover',width:'20vw',borderRadius:'10px'}}/>
            <ul className="mt-3">
              <li>Reliable multi-brand service solutions to ensure consistent performance across all your devices.</li>
              <li>Comprehensive repair and support for every leading brand under one roof.</li>
              <li>Professional service for all brands, ensuring fast, smooth, and long-lasting performance.</li>
            </ul>

            <h4>Doorstep Support</h4>
            <p>Fast and convenient doorstep service for hassle-free repairs, installations, and technical support.</p>

            <img src={door} alt="door" style={{objectFit:'cover',width:'20vw',borderRadius:'10px'}}/>
            <ul className="mt-3">
              <li>Quick and reliable doorstep support to solve your IT issues without any delay.</li>
              <li>Professional repairs and installation delivered right at your doorstep.</li>
              <li>On-site service for smooth, easy, and time-saving technical assistance.</li>
            </ul>


      {/* Contact  */}
<div className="bg-info container p-3 mt-5 rounded contact" id="contact">

  <div className="row d-flex align-items-center justify-content-between mb-4">
    <h2 className="col-md-6">Contact Form</h2>
  </div>

  <div className="row">
    
    <div className="col-md-6">
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-1">
          <label htmlFor="name" className="mb-2">Name</label>
          <input type="text" name="name" id="name" className="form-control" />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="email" className="mb-2">Email Address</label>
          <input type="email" name="email" id="email" className="form-control" />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="number" className="mb-2">Mobile Number</label>
          <input type="tel" name="number" id="number" className="form-control" />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="text" className="mb-2">Message</label>
          <textarea name="text" id="text" className="form-control"></textarea>
        </div>

        <button className="mt-3 rounded bg-warning px-4 py-2">Submit</button>
      </form>
    </div>

            {/* location  */}
            
    <div className="col-md-6 mt-1 mt-md-0">
      <div style={{ width: "100%", height: "350px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233.12536668816622!2d78.16395778208972!3d11.228360465309112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babcf9eaf47b885%3A0x9b43de24d2d3cd78!2sGK%20INFOTECH!5e1!3m2!1sen!2sin!4v1765367874869!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>

  </div>
</div>


    </div>
    
    {/* Footer  */}
      <footer className='bg-info p-3 nav-head' >
        <div className="row">
          <div className="col">
            <h6>2025 GK infotech All Rights Recived</h6>
          </div>
          <div className="col">
            <address>
              50-A/2, 1st Floor,
              N.S. tower, North Street,
              MGM Theatre, SalemRoad,
              Namakkal-037001. <br></br>
              <a href="mailto:gkinfotechnmkl@gmail.com" className="white">gkinfotechnmkl@gmail.com</a><br></br>
              <strong >+91 92944 20220</strong><br></br>
              <strong>+91 92421 20220</strong>
              

              
            </address>
          </div>
          <div className="col">
            <ul className='list-inline'>
              <li className='list-inline-item'>Terms & Conditions</li>
              <li className='list-inline-item'>Service</li>
              <li className='list-inline-item'>Other Conditions</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>

  )
}

export default Home