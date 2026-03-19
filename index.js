const durationButtons = document.querySelectorAll('.durationButton');
        const planPrices = document.querySelectorAll('.planPrice');
        const pricingCards = document.querySelectorAll('.pricingCard');

        function updatePrices(duration) {
            planPrices.forEach(price => {
                const amount = price.dataset[duration];

                if (duration === '1') {
                    price.innerHTML = `R$${amount} <span>/ month</span>`;
                } else if (duration === '3') {
                    price.innerHTML = `R$${amount} <span>/ 3 months</span>`;
                } else if (duration === '6') {
                    price.innerHTML = `R$${amount} <span>/ 6 months</span>`;
                } else if (duration === '12') {
                    price.innerHTML = `R$${amount} <span>/ year</span>`;
                }
            });
        }

        durationButtons.forEach(button => {
            button.addEventListener('click', () => {
                durationButtons.forEach(btn => btn.classList.remove('activeDuration'));
                button.classList.add('activeDuration');
                updatePrices(button.dataset.duration);
            });
        });

        pricingCards.forEach(card => {
            card.addEventListener('click', () => {
                pricingCards.forEach(item => item.classList.remove('activePlan'));
                card.classList.add('activePlan');
            });
        });

        const revealElements = document.querySelectorAll('.scrollReveal');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, {
            threshold: 0.15
        });

        revealElements.forEach(element => {
            observer.observe(element);
        });