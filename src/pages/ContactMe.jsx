/* eslint-disable react/no-unescaped-entities */

function ContactMe() {

  return (
    <div className="m-5 min-vh-100">
      <h1 >Let's Get in Touch!</h1>
      <p className="m-4">Thank you for visiting my portfolio and taking the time to learn a bit about me. I'm excited about the possibilities that lie ahead, and I invite you to explore my projects and get in touch. Let's connect and create something amazing together!</p>
      <div className="container text-center flex-column mb-3 justify-content-center align-items-center vh-50">
        <p>Preferred Work Location: Dallas, Texas or Remote/Hybrid</p>
        <button type="button" className="btn btn-secondary m-3 contactButton"><a href="https://github.com/crcarmen23">My Github Profile</a></button>
        <button type="button" className="btn btn-secondary m-3 contactButton"><a href="https://www.linkedin.com/in/carmen-regina/">Connect on LinkedIn</a></button>
        <button type="button" className="btn btn-secondary m-3 contactButton"><a href="https://publuu.com/flip-book/311328/719974/page/1">Resume PDF</a></button>
        <button type="button" className="btn btn-secondary m-3 contactButton"><a href="mailto:crcarmen23@yahoo.com">Email Me</a></button>
       </div>
    </div>
  );
}

export default ContactMe;
