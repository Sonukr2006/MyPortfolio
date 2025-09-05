// Set initial theme before React mounts so Tailwind dark styles render correctly
(function(){
  try{
    const ls = localStorage.getItem('theme')
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const theme = ls || (prefersDark ? 'dark' : 'light')
    if(theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }catch(e){ /* ignore */ }
})()
