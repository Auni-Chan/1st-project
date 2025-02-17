document.addEventListener("DOMContentLoaded", function () {
    // Select buttons
    const instagramBtn = document.querySelector(".instagram");
    const tiktokBtn = document.querySelector(".tiktok");

    if (instagramBtn && tiktokBtn) {
        // Function to confirm before opening link
        function confirmNavigation(event, platform) {
            event.preventDefault();
            if (confirm(`Do you want to visit my ${platform}?`)) {
                window.open(event.currentTarget.href, "_blank");
            }
        }

        // Add event listeners
        instagramBtn.addEventListener("click", (event) => confirmNavigation(event, "Instagram"));
        tiktokBtn.addEventListener("click", (event) => confirmNavigation(event, "TikTok"));

        // Hover effect to change text
        function addHoverEffect(button, platform, text) {
            button.addEventListener("mouseover", function () {
                this.innerHTML = `<i class="fab fa-${platform}"></i> ${text}`;
            });
            button.addEventListener("mouseout", function () {
                this.innerHTML = `<i class="fab fa-${platform}"></i> ${platform.charAt(0).toUpperCase() + platform.slice(1)}`;
            });
        }

        addHoverEffect(instagramBtn, "instagram", "Follow Me!");
        addHoverEffect(tiktokBtn, "tiktok", "Let’s Connect!");
    }

    // Floating Elements Script
    function createFloatingElements(side) {
        const container = document.createElement("div");
        container.classList.add("floating-container", side === "left" ? "floating-left" : "floating-right");
        document.body.appendChild(container);

        setInterval(() => {
            const item = document.createElement("span");
            item.classList.add("floating-item");
            item.innerHTML = Math.random() > 0.5 ? "❤️" : "🌸"; // Randomly choose heart or flower
            item.style.left = `${Math.random() * 40}px`; // Random position inside container
            item.style.animationDuration = `${3 + Math.random() * 3}s`; // Random speed
            container.appendChild(item);

            // Remove after animation ends
            setTimeout(() => item.remove(), 6000);
        }, 700);
    }

    // Add floating elements to both sides
    createFloatingElements("left");
    createFloatingElements("right");
});
