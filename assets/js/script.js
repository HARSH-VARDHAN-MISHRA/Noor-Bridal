const navbarNav = document.querySelector("header nav");
const toogleMenuBtn = document.querySelector("header .head .breadcrumb");

toogleMenuBtn.addEventListener("click", () => {
    if (navbarNav.classList.contains("active")) {
        navbarNav.classList.remove("active")
        toogleMenuBtn.innerHTML = `<i class="fa-solid fa-bars-staggered"></i>`
    }
    else {
        navbarNav.classList.add("active")
        toogleMenuBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    }
})



// About us Counter

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".count");

    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        const updateCounter = () => {
            const current = +counter.innerText;
            const increment = target / 200;

            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 10);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
});



// Book Appointment Form

// document.addEventListener("DOMContentLoaded", () => {
//     const steps = document.querySelectorAll(".form-step");
//     const stepItems = document.querySelectorAll(".step-item");
//     const serviceCards = document.querySelectorAll(".service-card");
//     const timeSlots = document.querySelectorAll(".time-slot");
//     const appointmentDate = document.querySelector(".calendar-container");
//     const prevButtons = document.querySelectorAll(".prev-btn");
//     const nextButtons = document.querySelectorAll(".next-btn");

//         // Get today's date in YYYY-MM-DD format
//         const today = new Date().toISOString().split('T')[0];

//         // Set the default value of the date input to today's date
//         appointmentDate.value = today;


//     let currentStep = 0;
//     let appointmentData = {
//         service: "",
//         date: today,
//         time: "",
//         firstName : "",
//         lastName : "",
//         email : "",
//         phoneNumber : "",
//         notes : "",
//     };

//     const updateSteps = () => {
//         steps.forEach((step, index) => {
//             step.classList.toggle("active", index === currentStep);
//         });

//         // If we've reached the summary step (last step), update the summary content
//         if (currentStep === steps.length - 1) {
//             updateSummary();
//         }
//     };

//     // Handle "Go Back"
//     prevButtons.forEach((button) => {
//         button.addEventListener("click", () => {
//             if (currentStep > 0) {
//                 currentStep--;
//                 updateSteps();
//             }
//         });
//     });

//     // Handle "Next"
//     nextButtons.forEach((button) => {
//         button.addEventListener("click", () => {
//             if (currentStep < steps.length - 1) {
//                 if (currentStep === 1) {

//                     console.log("appointmentData.dateee : ",appointmentData.date)




//                     // Validation for Date & Time
//                     if (!appointmentData.date || !appointmentData.time) {
//                         alert("Please select a date and time.");
//                         return;
//                     }
//                 }
//                 currentStep++;
//                 updateSteps();
//             }
//         });
//     });

//     // Service selection
//     serviceCards.forEach((card) => {
//         card.addEventListener("click", () => {
//             serviceCards.forEach((c) => c.classList.remove("selected"));
//             card.classList.add("selected");
//             appointmentData.service = card.dataset.service;
//             currentStep++;
//             updateSteps();
//         });
//     });


//     // Date selection
//     appointmentDate.addEventListener("change", (e) => {
//         appointmentData.date = e.target.value;
//         console.log("Selected Dateee:", appointmentData.date); // Log selected date
//     });

//     timeSlots.forEach((slot) => {
//         slot.addEventListener("click", () => {
//             // Clear active state for all time slots
//             timeSlots.forEach((s) => s.classList.remove("active"));
//             // Set active state for clicked slot
//             slot.classList.add("active");
//             // Update appointment data
//             appointmentData.time = slot.textContent.trim();
//             console.log("Selected Time Slot:", appointmentData.time); // Log selected time slot
//         });
//     });



//     // Basic details
//     appointmentForm.addEventListener("submit", (e) => {
//         e.preventDefault();

//         appointmentData.firstName = document.getElementById("firstName").value;
//         appointmentData.lastName = document.getElementById("lastName").value;
//         appointmentData.email = document.getElementById("email").value;
//         appointmentData.phoneNumber = document.getElementById("phoneNumber").value;
//         appointmentData.notes = document.getElementById("notes").value;

//         console.log("Appointment Data:", appointmentData);
//         alert("Booking Confirmed!");
//     });

//     const updateSummary = () => {
//         summaryContent.innerHTML = `
//         <p class="text-muted">Your appointment booking summary</p>

//         <div class="mt-4">
//         <div class="row">
//             <div class="col-6 text-start">
//                 <p class="mb-1"><strong>Customer</strong></p>
//                 <p class="mb-1"><strong>Service</strong></p>
//             </div>
//             <div class="col-6 text-end">
//                 <p class="mb-1">${appointmentData.firstName} ${appointmentData.lastName}</p>
//                 <p class="mb-1">${appointmentData.service}</p>
//             </div>
//         </div>
//         <div class="row mt-3">
//             <div class="col-6 text-start">
//                 <p class="mb-1"><strong>Date & Time</strong></p>
//             </div>
//             <div class="col-6 text-end">
//                 <p class="mb-1">${appointmentData.date}, ${appointmentData.time}</p>
//             </div>
//         </div>
//     </div>

//     `;
// };

//     // <p><strong>Service:</strong> ${appointmentData.service}</p>
//     // <p><strong>Date:</strong> ${appointmentData.date}</p>
//     // <p><strong>Time:</strong> ${appointmentData.time}</p>
//     // <p><strong>Name:</strong> ${appointmentData.firstName} ${appointmentData?.lastName}</p>
//     // <p><strong>Phone:</strong> ${appointmentData.phoneNumber}</p>
//     // <p><strong>Email:</strong> ${appointmentData.email}</p>

//     // Sidebar step navigation: When a sidebar item is clicked, navigate to that step
//     stepItems.forEach((item) => {
//         item.addEventListener("click", () => {
//             const stepIndex = parseInt(item.dataset.step);
//             if (stepIndex <= currentStep) {
//                 currentStep = stepIndex;
//                 updateSteps();
//             }
//         });
//     });



//     // Initial setup
//     updateSteps();



// });



document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".form-step");
    const stepItems = document.querySelectorAll(".step-item");
    const serviceCards = document.querySelectorAll(".service-card");
    const timeSlots = document.querySelectorAll(".time-slot");
    const appointmentDate = document.querySelector(".calendar-container");
    const prevButtons = document.querySelectorAll(".prev-btn");
    const nextButtons = document.querySelectorAll(".next-btn");


    //   Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];

    // Set the default value of the date input to today's date
    appointmentDate.value = today;

    let currentStep = 0;
    let appointmentData = {
        service: "",
        date: today,
        time: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        notes: "",
    };

    const updateSteps = () => {
        steps.forEach((step, index) => {
            step.classList.toggle("active", index === currentStep);
        });
    
        stepItems.forEach((item, index) => {
            item.classList.toggle("active", index <= currentStep);
        });
    
        if (currentStep === steps.length - 1) {
            updateSummary(); // Update the summary content
        }
    
        validateStep(); // Validate the current step
    };
    
    
    
    const validateStep = () => {
        const currentStepElement = steps[currentStep];
        const nextButton = currentStepElement.querySelector(".next-btn");
    
        if (currentStep === 0) {
            nextButton.disabled = !appointmentData.service;
        } else if (currentStep === 1) {
            nextButton.disabled = !appointmentData.date || !appointmentData.time;
        } else if (currentStep === 2) {
            const firstName = document.getElementById("firstName").value.trim();
            const lastName = document.getElementById("lastName").value.trim();
            const email = document.getElementById("email").value.trim();
            const phoneNumber = document.getElementById("phoneNumber").value.trim();
            nextButton.disabled = !(firstName && email && phoneNumber);
        } else if (currentStep === 3) {
            nextButton.disabled = false; // Summary step, no validation required
        }
    };
    
    prevButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (currentStep > 0) {
                currentStep--;
                updateSteps();
            }
        });
    });

    nextButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (currentStep < steps.length - 1) {
                currentStep++;
                updateSteps();
            }
        });
    });

    serviceCards.forEach((card) => {
        card.addEventListener("click", () => {
            serviceCards.forEach((c) => c.classList.remove("selected"));
            card.classList.add("selected");
            appointmentData.service = card.dataset.service;
            validateStep();
        });
    });


    // Date selection
    appointmentDate.addEventListener("change", (e) => {
        appointmentData.date = e.target.value;
        console.log("Selected Dateee:", appointmentData.date); // Log selected date
    });

    timeSlots.forEach((slot) => {
        slot.addEventListener("click", () => {
            timeSlots.forEach((s) => s.classList.remove("active"));
            slot.classList.add("active");
            appointmentData.time = slot.textContent.trim();
            validateStep();
        });
    });

    document.getElementById("firstName").addEventListener("input", validateStep);
    document.getElementById("lastName").addEventListener("input", validateStep);
    document.getElementById("email").addEventListener("input", validateStep);
    document.getElementById("phoneNumber").addEventListener("input", validateStep);

    const updateSummary = () => {
        const summaryContent = document.getElementById("summaryContent");
        summaryContent.innerHTML = `
        <p class="text-muted">Your appointment booking summary</p>

        <div class="mt-4">
            <div class="row">
                <div class="col-6 text-start">
                    <p class="mb-1"><strong>Customer</strong></p>
                    <p class="mb-1"><strong>Service</strong></p>
                </div>
                <div class="col-6 text-end">
                    <p class="mb-1">${appointmentData.firstName} ${appointmentData.lastName}</p>
                    <p class="mb-1">${appointmentData.service}</p>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-6 text-start">
                    <p class="mb-1"><strong>Date & Time</strong></p>
                </div>
                <div class="col-6 text-end">
                    <p class="mb-1">${appointmentData.date}, ${appointmentData.time}</p>
                </div>
            </div>
        </div>`;
    };

    document.querySelector("#appointmentForm").addEventListener("submit", (e) => {
        e.preventDefault();
        appointmentData.firstName = document.getElementById("firstName").value;
        appointmentData.lastName = document.getElementById("lastName").value;
        appointmentData.email = document.getElementById("email").value;
        appointmentData.phoneNumber = document.getElementById("phoneNumber").value;
        appointmentData.notes = document.getElementById("notes").value;

        console.log("Appointment Data:", appointmentData);
        alert("Booking Confirmed!");
    });

    stepItems.forEach((item) => {
        item.addEventListener("click", () => {
            const stepIndex = parseInt(item.dataset.step);
    
            // Check if all previous steps are valid
            const isValid = validateAllStepsUpTo(stepIndex);
    
            if (isValid) {
                currentStep = stepIndex; // Navigate to the selected step
                updateSteps(); // Update UI for the steps
            } else {
                alert("Please complete the required fields in the earlier steps before proceeding.");
            }
        });
    });
    
    
    // Disable steps that are not yet accessible
    const updateSidebarAccessibility = () => {
        stepItems.forEach((item, index) => {
            if (index <= currentStep) {
                item.classList.remove("disabled");
                item.style.pointerEvents = "auto"; // Enable clicks
            } else {
                item.classList.add("disabled");
                item.style.pointerEvents = "none"; // Disable clicks
            }
        });
    };
    
    const validateAllStepsUpTo = (stepIndex) => {
        for (let i = 0; i < stepIndex; i++) {
            if (!validateCurrentStep(i)) {
                return false; // If any step is invalid, return false
            }
        }
        return true;
    };
    
    const validateCurrentStep = (stepIndex) => {
        if (stepIndex === 0) {
            return !!appointmentData.service; // Service must be selected
        } else if (stepIndex === 1) {
            return !!(appointmentData.date && appointmentData.time); // Date and time must be selected
        } else if (stepIndex === 2) {
            const firstName = document.getElementById("firstName").value.trim();
            const email = document.getElementById("email").value.trim();
            const phoneNumber = document.getElementById("phoneNumber").value.trim();
            return !!(firstName && email && phoneNumber); // First name, email, and phone number must be filled
        } else if (stepIndex === 3) {
            return true; // Summary step, always accessible
        }
        return false;
    };
    

    updateSteps();
});



