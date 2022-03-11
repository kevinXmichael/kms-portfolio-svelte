function doHTMLvoodoo() {
  window.addEventListener("resize", setInnerViewport)

  const hacker = "%cHey hacker 🔥"
  console.info(hacker, "color: red; font-size: medium")

  // https://patorjk.com/software/taag/#p=display&f=Small&t=kms695
  const kms695_ = String.raw`
  _              __ ___ ___ 
 | |___ __  ___ / // _ \ __|
 | / / '  \(_-</ _ \_, /__ \
 |_\_\_|_|_/__/\___//_/|___/
`
  console.info(`%c${kms695_}`, `color: #feef37; font-size: medium`)
  const kms695 = document.createComment(kms695_)
  document.prepend(kms695)
}

function setInnerViewport() {
  const vh = window.innerHeight * 0.01
  const vw = window.innerWidth * 0.01
  document.documentElement.style.setProperty("--vh", `${vh}px`)
  document.documentElement.style.setProperty("--vw", `${vw}px`)
}

export default async function boot() {
  return await Promise.allSettled([
    doHTMLvoodoo(),
    setInnerViewport(),
    window.addEventListener("resize", setInnerViewport)
  ])
}
