document.getElementById("submitted-plan").textContent =
            sessionStorage.getItem("blossomPaymentPlan") || "Blossom Pro";

        document.getElementById("submitted-duration").textContent =
            sessionStorage.getItem("blossomPaymentDuration") || "1 Month";

        document.getElementById("submitted-roblox-user").textContent =
            sessionStorage.getItem("blossomPaymentRobloxUser") || "Unknown";

        document.getElementById("submitted-status").textContent =
            sessionStorage.getItem("blossomPaymentStatus") || "Awaiting Verification";