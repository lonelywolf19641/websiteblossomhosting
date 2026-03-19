const plans = {
    starter: {
        name: "Starter",
        badge: "",
        description: "A simple starter plan for small Discord bots and lightweight web apps.",
        features: {
            ramTitle: "512MB RAM",
            ramSub: "DDR4 ECC Memory",
            storageTitle: "1GB Storage",
            storageSub: "NVMe SSD",
            cpuTitle: "Unlimited CPU",
            cpuSub: "No throttling",
            trafficTitle: "Unlimited Traffic",
            trafficSub: "No bandwidth limits"
        },
        prices: {
            1: 200,
            3: 500,
            6: 950,
            12: 1800
        },
        gamepassUrls: {
            1: "https://www.roblox.com/game-pass/1753246652/Starter-1-Month",
            3: "https://www.roblox.com/game-pass/1752216787/Starter-3-Months",
            6: "https://www.roblox.com/game-pass/1755291319/Starter-6-Months",
            12: "https://www.roblox.com/game-pass/1752766789/Starter-12-Months"
        }
    },

    "blossom-pro": {
        name: "Blossom Pro",
        badge: "Most Popular",
        description: "Our most popular plan for Discord bots and web apps. Includes premium resources, automatic backups, and priority support.",
        features: {
            ramTitle: "1 GB RAM",
            ramSub: "DDR4 ECC Memory",
            storageTitle: "2 GB Storage",
            storageSub: "NVMe SSD",
            cpuTitle: "Unlimited CPU",
            cpuSub: "No throttling",
            trafficTitle: "Unlimited Traffic",
            trafficSub: "No bandwidth limits"
        },
        prices: {
            1: 500,
            3: 1250,
            6: 2400,
            12: 4500
        },
        gamepassUrls: {
            1: "https://www.roblox.com/game-pass/1755495257/Blossom-Pro-1-Month",
            3: "https://www.roblox.com/game-pass/1754663503/Blossom-Pro-3-Months",
            6: "https://www.roblox.com/game-pass/1755495258/Blossom-Pro-6-Months",
            12: "https://www.roblox.com/game-pass/1754200528/Blossom-Pro-12-Months"
        }
    },

    ultimate: {
        name: "Ultimate",
        badge: "Best Value",
        description: "Maximum performance for bigger bots, advanced projects, and higher resource usage.",
        features: {
            ramTitle: "2 GB RAM",
            ramSub: "DDR4 ECC Memory",
            storageTitle: "5 GB Storage",
            storageSub: "NVMe SSD",
            cpuTitle: "Unlimited CPU",
            cpuSub: "Priority performance",
            trafficTitle: "Unlimited Traffic",
            trafficSub: "No bandwidth limits"
        },
        prices: {
            1: 700,
            3: 1800,
            6: 3350,
            12: 6300
        },
        gamepassUrls: {
            1: "https://www.roblox.com/game-pass/1752038919/Ultimate-1-Month",
            3: "https://www.roblox.com/game-pass/1753172818/Ultimate-3-Months",
            6: "https://www.roblox.com/game-pass/1750355555/Ultimate-6-Months",
            12: "https://www.roblox.com/game-pass/1754569493/Ultimate-12-Months"
        }
    }
};

    const urlParams = new URLSearchParams(window.location.search);
    let currentPlan = urlParams.get("plan") || "blossom-pro";
    let currentDuration = "1";

    if (!plans[currentPlan]) {
        currentPlan = "blossom-pro";
    }

    const planTabs = document.querySelectorAll(".planTab");
    const durationButtons = document.querySelectorAll(".durationButton");

    const planTitle = document.getElementById("plan-title");
    const planBadge = document.getElementById("plan-badge");
    const planDescription = document.getElementById("plan-description");

    const featureRamTitle = document.getElementById("feature-ram-title");
    const featureStorageTitle = document.getElementById("feature-storage-title");
    const featureCpuTitle = document.getElementById("feature-cpu-title");
    const featureTrafficTitle = document.getElementById("feature-traffic-title");

    const summaryPlan = document.getElementById("summary-plan");
    const summaryDuration = document.getElementById("summary-duration");
    const summaryPrice = document.getElementById("summary-price");
    const summaryTotal = document.getElementById("summary-total");
    const summaryBillingNote = document.getElementById("summary-billing-note");

    const paymentModal = document.getElementById("payment-modal");
    const continuePaymentBtn = document.getElementById("continue-payment");
    const closePaymentModalBtn = document.getElementById("close-payment-modal");
    const modalPlan = document.getElementById("modal-plan");
    const modalDuration = document.getElementById("modal-duration");
    const buyGamepassBtn = document.getElementById("buy-gamepass-btn");
    const goToVerifyBtn = document.getElementById("go-to-verify");
    const submitPaymentBtn = document.getElementById("submit-payment-btn");
    const robloxUsernameInput = document.getElementById("roblox-username");

    const step1Content = document.getElementById("step-1-content");
    const step2Content = document.getElementById("step-2-content");
    const stepIndicator1 = document.getElementById("step-indicator-1");
    const stepIndicator2 = document.getElementById("step-indicator-2");

    function getDurationLabel(duration) {
        if (duration === "1") return "1 Month";
        if (duration === "3") return "3 Months";
        if (duration === "6") return "6 Months";
        if (duration === "12") return "1 Year";
        return "";
    }

    function getBillingNote(duration) {
        if (duration === "1") return "Billed monthly";
        if (duration === "3") return "Billed every 3 months";
        if (duration === "6") return "Billed every 6 months";
        if (duration === "12") return "Billed yearly";
        return "";
    }

    function renderPlan() {
        const plan = plans[currentPlan];
        const price = plan.prices[currentDuration];

        planTitle.textContent = plan.name;
        planDescription.textContent = plan.description;

        if (plan.badge) {
            planBadge.textContent = plan.badge;
            planBadge.style.display = "inline-flex";
        } else {
            planBadge.style.display = "none";
        }

        featureRamTitle.textContent = plan.features.ramTitle;
        featureStorageTitle.textContent = plan.features.storageTitle;
        featureCpuTitle.textContent = plan.features.cpuTitle;
        featureTrafficTitle.textContent = plan.features.trafficTitle;

        summaryPlan.textContent = plan.name;
        summaryDuration.textContent = getDurationLabel(currentDuration);
        summaryPrice.textContent = `R$${price}`;
        summaryTotal.textContent = `R$${price}`;
        summaryBillingNote.textContent = getBillingNote(currentDuration);

        modalPlan.textContent = plan.name;
        modalDuration.textContent = getDurationLabel(currentDuration);
        buyGamepassBtn.href = plan.gamepassUrls[currentDuration];
    }

    function syncActivePlanTab() {
        planTabs.forEach(tab => {
            tab.classList.toggle("activePlan", tab.dataset.plan === currentPlan);
        });
    }

    function openPaymentModal() {
        paymentModal.classList.add("show");
        document.body.classList.add("modalOpen");

        step1Content.classList.remove("hidden");
        step2Content.classList.add("hidden");
        stepIndicator1.classList.add("active");
        stepIndicator2.classList.remove("active");
    }

    function closePaymentModal() {
        paymentModal.classList.remove("show");
        document.body.classList.remove("modalOpen");
    }

    function goToVerifyStep() {
        step1Content.classList.add("hidden");
        step2Content.classList.remove("hidden");
        stepIndicator1.classList.remove("active");
        stepIndicator2.classList.add("active");
    }

    function submitPayment() {
        const username = robloxUsernameInput.value.trim();

        if (!username) {
            alert("Please enter your Roblox username.");
            return;
        }

        const plan = plans[currentPlan];
        const price = plan.prices[currentDuration];

        sessionStorage.setItem("blossomPaymentPlan", plan.name);
        sessionStorage.setItem("blossomPaymentDuration", getDurationLabel(currentDuration));
        sessionStorage.setItem("blossomPaymentPrice", `R$${price}`);
        sessionStorage.setItem("blossomPaymentRobloxUser", username);
        sessionStorage.setItem("blossomPaymentStatus", "Awaiting Verification");

        window.location.href = "submitted.html";
    }

    planTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            currentPlan = tab.dataset.plan;
            syncActivePlanTab();
            renderPlan();
        });
    });

    durationButtons.forEach(button => {
        button.addEventListener("click", () => {
            durationButtons.forEach(item => item.classList.remove("activeDuration"));
            button.classList.add("activeDuration");
            currentDuration = button.dataset.duration;
            renderPlan();
        });
    });

    continuePaymentBtn.addEventListener("click", openPaymentModal);
    closePaymentModalBtn.addEventListener("click", closePaymentModal);
    goToVerifyBtn.addEventListener("click", goToVerifyStep);
    submitPaymentBtn.addEventListener("click", submitPayment);

    paymentModal.addEventListener("click", (e) => {
        if (e.target === paymentModal) {
            closePaymentModal();
        }
    });

    syncActivePlanTab();
    renderPlan();