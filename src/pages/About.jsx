import "../CSS/about.css";
const About = () => {
  return (
    <section className='about-container'>
      <div className='about'>
        <h3>Hi There ...</h3>
        <h2>I'm Alexander</h2>
        <p>
          And I've built this app as part of learning &nbsp;
          <strong>React</strong>&nbsp; following &nbsp;
          <a
            href='http://hackyourfuture.net'
            target='_blank'
            rel='noopener noreferrer'
          >
            HackYourFuture
          </a>
          &nbsp; program.
        </p>
        <div className='contact'>
          <a
            href='https://bit.ly/AlexGitHub'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-github'></i>
          </a>
          <a
            href='https://bit.ly/AlexSaidLinkedin'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fa-brands fa-linkedin'></i>
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
