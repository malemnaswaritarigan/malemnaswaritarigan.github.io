const skillssection = document.getElementById('skills-section');

const progressbar = document.querySelectorAll('.progress-bar');

function showProgress(){
  progressbar.forEach(progressbar => {
    const value = progressbar.dataset.progress;
    progressbar.style.opacity = 1;
    progressbar.style.width = `${value}%`;
  });
}
function hideProgress(){
  progressbar.forEach(p => {
    p.style.opacity = 0;
    p.style.width = 0;
  })
}

window.addEventListener('scroll',()=>{
  const sectionPos = skillssection.getBoundingClientRect().top;
  const screenPos = window.innerHeight;

  if(sectionPos < screenPos){
    showProgress();
  }else {
    hideProgress();
  }
});
