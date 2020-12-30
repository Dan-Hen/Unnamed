import gsap from 'gsap'
import { ScrollTrigger, TimelineLite } from 'gsap/all'
import SplitText from './js/SplitText'

gsap.registerPlugin(ScrollTrigger)

const mainColor = 'white'

function Home () {
  const MainTypeScript = new SplitText('.subtitle', { type: 'chars' })

  const tl = new TimelineLite()
  tl
    .fromTo('.title', { opacity: 0 }, { delay: 0.4, opacity: 1, duration: 2 }, 0)
    .fromTo(MainTypeScript.chars, { backgroundColor: mainColor }, {
      backgroundColor: 'transparent',
      delay: 1,
      stagger: 0.03,
      duration: 0.03
    }, 1)
    .fromTo(MainTypeScript.chars, { opacity: 0 }, {
      delay: 0.97,
      opacity: 1,
      stagger: 0.03,
      duration: 0.03
    }, 1)

  let OptionTypeScript = new SplitText('.text', { type: 'chars' })
  let sub = new TimelineLite({
    onComplete: onComplete
  })
  sub
    .fromTo(OptionTypeScript.chars, { backgroundColor: mainColor }, {
      backgroundColor: 'transparent',
      delay: 0.03,
      stagger: 0.03,
      duration: 0.03
    }, 1)
    .fromTo(OptionTypeScript.chars, { opacity: 0 }, {
      delay: 0,
      opacity: 1,
      stagger: 0.03,
      duration: 0.03
    }, 1)

  function onComplete () {

  }
}

Home()
