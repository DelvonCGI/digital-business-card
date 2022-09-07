import ProfilePic from '../images/LI2.jpg'

export function Info() {
   return (
      <>
      <header className='info'>
         <img className='profile-pic' src= {ProfilePic}/>
         <h1 className='name'>Delvon Fontenot</h1>
         <h3 className='role'>Fullstack Software Developer</h3>
         <a className='website' href="https://delvonfontenot.com">delvonfontenot.com</a>
         <div className='button-container'>
            <a href="mailto: delvonf@gmail.com"><button className='email-button'>Email</button></a>
            <a href="http://www.linkedin.com/in/delvon-fontenot" target="_blank"><button className='linkedin-button'>LinkedIn</button></a>
         </div>
      </header>
      </>


   )
}