// Smooth scrolling for navigation
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Countdown Timer
const electionDate = new Date(2025, 2, 15, 8, 0, 0).getTime();
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = electionDate - now;

    if (timeLeft < 0) {
        document.getElementById("timer").innerHTML = "Election Day is Here!";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateCountdown, 1000);

// View More Button Functionality
document.querySelectorAll(".view-more").forEach(button => {
    button.addEventListener("click", function () {
        const candidateId = this.getAttribute("data-candidate");
        alert(`Loading details for ${candidateId}...`);
        setTimeout(() => {
            window.location.href = `candidates.html#${candidateId}`;
        }, 500);
    });
});
// Show Pop-up Ad after 5 seconds
setTimeout(() => {
    document.getElementById("popup-ad").style.display = "block";
}, 5000);

// Close Pop-up
function closePopup() {
    document.getElementById("popup-ad").style.display = "none";
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("close-video").addEventListener("click", function () {
        document.getElementById("floating-video").style.display = "none";
    });
});
// Candidate Manifestos
const manifestos = {
    manifesto1: {
        name: "Anyango Faith",
        text: `JOMO KENYATTA UNIVERSITY STUDENTS ASSOCIATION (JKUSA)
VOTE ANYANGO FAITH (NYANGII) FOR STACS DELEGATE

🔹 STRONG HYPOTHESIS, MEANINGFUL DISCOVERY! 🔹

📌 Position: STACS Delegate

🗳 Why Vote for Anyango Faith?
✅ Innovation – Bringing fresh ideas to improve student experiences.
✅ Representation – A strong voice for every STACS student.
✅ Academic Growth – Advocating for research and excellence.
✅ Leadership & Integrity – Committed to transparency and accountability.

📢 Your Vote, Your Future! Support Anyango Faith for a Stronger STACS Community!`,
    },
    manifesto2: {
        name: "Lucy Kibe",
        text: `📌 JOMO KENYATTA UNIVERSITY STUDENTS ASSOCIATION (JKUSA)
VOTE LUCY KIBE FOR SECRETARY

🔹 FRESH START, NEW VISION! 🔹

📌 Position: Secretary
📍 Venue: Assembly Hall
📅 Date: 19th March, 2025
⏰ Time: 8:00 AM

🗳 Why Vote for Lucy Kibe?
✅ Transparency – Open and honest communication.
✅ Digitisation – Modernising student services.
✅ Progression – Moving towards a better future.
✅ Equality – A voice for every student.

🗂 Manifesto: A Fresh Start for Everyone!
Your vote matters! Let’s build a more inclusive and efficient student leadership.

📢 Vote for Leadership. Vote for Change. Vote Lucy Kibe!`,
    },
    manifesto3: {
        name: "Paul Mwangangi",
        text: `📌 JOMO KENYATTA UNIVERSITY STUDENTS ASSOCIATION (JKUSA)
VOTE PAUL MWANGANGI FOR SECRETARY

🔹 STRONG LEADERSHIP, REAL IMPACT! 🔹

📌 Position: Secretary
📍 Venue: Assembly Hall
📅 Date: 19th March, 2025
⏰ Time: 8:00 AM

🗳 Why Vote for Paul Mwangangi?
✅ Accountability – Transparent and responsible leadership.
✅ Innovation – Leveraging technology for student services.
✅ Advocacy – Ensuring every student’s concerns are heard.
✅ Development – Championing better infrastructure and policies.

🗂 Manifesto: A Future That Works for You!
Your voice matters! Let's create a student leadership that delivers results.

📢 Vote for Action. Vote for Growth. Vote Paul Mwangangi!`,
    }
};

// Open Manifesto Modal
function openManifesto(id) {
    document.getElementById("candidate-name").innerText = manifestos[id].name;
    document.getElementById("candidate-manifesto").innerText = manifestos[id].text;
    document.getElementById("manifestoModal").style.display = "block";
}

// Close Manifesto Modal
function closeManifesto() {
    document.getElementById("manifestoModal").style.display = "none";
}
/*voting*/
document.addEventListener("DOMContentLoaded", function () {
    const voteBtn = document.getElementById("vote-btn");
    const popup = document.getElementById("vote-popup");
    const closeBtn = document.querySelector(".close-btn");

    // Show popup when vote button is clicked
    voteBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevents any unwanted navigation
        popup.style.display = "block"; // Show popup
    });

    // Close popup when the '×' button is clicked
    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Close popup when clicking outside the popup
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});


