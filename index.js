document.addEventListener('DOMContentLoaded', function () {
            const skillsSection = document.getElementById('Skills');
            const paths = document.querySelectorAll('.redial-bars svg .path');
        
            window.addEventListener('scroll', function () {
                const sectionTop = skillsSection.getBoundingClientRect().top;
                const screenHeight = window.innerHeight;
        
                if (sectionTop < screenHeight - 150) {
                    paths.forEach((path, index) => {
                        setTimeout(() => {
                            path.classList.add('active');
                        }, index * 300); // كل واحدة تتأخر 300ms
                    });
                }
            });
        });

        document.addEventListener('DOMContentLoaded', function () {
    const skillsSection = document.getElementById('Skills');
    const paths = document.querySelectorAll('.redial-bars svg .path');
    const progressSpans = document.querySelectorAll('.progress-line span');
    let animationDone = false; // عشان يتحرك بس مرة وحدة مش كل سكرول

    window.addEventListener('scroll', function () {
        const sectionTop = skillsSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionTop < screenHeight - 150 && !animationDone) {
            paths.forEach((path, index) => {
                setTimeout(() => {
                    path.classList.add('active');
                }, index * 300);
            });

            progressSpans.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.add('active');
                }, index * 200);
            });

            animationDone = true; // نوقف الإعادة
        }
    });
});