const navbarNav = document.querySelector("header nav");
const toogleMenuBtn = document.querySelector("header .head .breadcrumb");

toogleMenuBtn.addEventListener("click",()=>{
    if(navbarNav.classList.contains("active")){
        navbarNav.classList.remove("active")
        toogleMenuBtn.innerHTML = `<i class="fa-solid fa-bars-staggered"></i>`
    }
    else{
        navbarNav.classList.add("active")
        toogleMenuBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    }
})


document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll(".form-step");
    const stepItems = document.querySelectorAll(".step-item");
    const nextBtns = document.querySelectorAll(".next-btn");
    const prevBtns = document.querySelectorAll(".prev-btn");

    let currentStep = 0;

    function showStep(step) {
        steps.forEach((stepDiv, index) => {
            stepDiv.classList.toggle("active", index === step);
            stepDiv.classList.toggle("hidden", index !== step);
        });
        stepItems.forEach((item, index) => {
            item.classList.toggle("active", index === step);
        });
    }

    nextBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            currentStep++;
            showStep(currentStep);
        });
    });

    prevBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            currentStep--;
            showStep(currentStep);
        });
    });

    stepItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            currentStep = index;
            showStep(currentStep);
        });
    });

    showStep(currentStep); // Initialize the first step as active
});


document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function () {
        // Remove 'selected' class from all cards
        document.querySelectorAll('.service-card').forEach(c => c.classList.remove('selected'));
        
        // Add 'selected' class to the clicked card
        this.classList.add('selected');
        
        // Enable the "Next" button
        const nextBtn = document.querySelector('.next-btn');
        nextBtn.disabled = false;

        // Optionally, store the selected service value
        const selectedService = this.getAttribute('data-service');
        console.log(`Selected Service: ${selectedService}`);
    });
});
