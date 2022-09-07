import Twitter from '../images/107135_gray_twitter_circle_icon.png'
import Facebook from '../images/107140_gray_circle_facebook_icon (1).png'
import IG from '../images/107138_gray_circle_instagram_icon.png'
import GitHub from '../images/107108_github_gray_icon.png'

export function Footer() {
   return(
      <footer className='footer'>
         <a href="https://twitter.com/delvon_f" target="_blank"><img className='twitter'src={Twitter} /></a>
         <a href="https://www.facebook.com/delvon.fontenot/" target="_blank"><img className='facebook'src={Facebook} /></a>
         <a href="https://www.instagram.com/delvonfontenot/" target="_blank"><img className='ig'src={IG} /></a>
         <a href="https://github.com/DaSigma" target="_blank"><img className='github'src={GitHub} /></a>
      </footer>
   )
}