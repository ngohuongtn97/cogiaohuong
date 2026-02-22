class Router {
    constructor(routes, defaultRoute) {
        this.routes = routes;
        this.defaultRoute = defaultRoute;
        this.contentArea = document.getElementById('content-area');
        
        this.init();
    }

    init() {
        // Listen for navigation clicks
        document.querySelectorAll('.nav-links li').forEach(link => {
            link.addEventListener('click', (e) => {
                const route = e.currentTarget.getAttribute('data-route');
                this.navigate(route);
                
                // Update active state
                document.querySelectorAll('.nav-links li').forEach(l => l.classList.remove('active'));
                e.currentTarget.classList.add('active');
            });
        });

        // Load default route
        this.navigate(this.defaultRoute);
    }

    async navigate(route) {
        if (!this.routes[route]) {
            console.error(`Route ${route} not found`);
            return;
        }

        // Add fade-out effect
        this.contentArea.classList.remove('fade-in');
        
        setTimeout(async () => {
            // Clear content
            this.contentArea.innerHTML = '';
            
            // Render new content
            const content = await this.routes[route].render();
            this.contentArea.appendChild(content);
            
            // Execute attached scripts if any
            if (this.routes[route].init) {
                this.routes[route].init();
            }

            // Trigger animation
            this.contentArea.classList.add('fade-in');
        }, 50);
    }
}
