document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            window.scrollTo({ top: targetSection.offsetTop - 80, behavior: 'smooth' });
        }
    });
});

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) { reveals[i].classList.add("active"); }
    }
}
window.addEventListener("scroll", reveal);
reveal();