import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitText from './js/SplitText'

gsap.registerPlugin(ScrollTrigger)

function Home () {
  let typescript = new SplitText('.subtitle', { type: 'chars' }),
    chars = typescript.chars
  gsap.fromTo(chars, { opacity: 0 }, { opacity: 1, stagger: 0.03, duration: 0.03 })
}

Home()
