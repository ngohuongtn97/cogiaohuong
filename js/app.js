// Temporary placeholders for missing pages
const PlaceholderPage = (title) => ({
    render: async () => {
        const container = document.createElement('div');
        container.innerHTML = `
            <div style="text-align: center; margin-top: 100px; color: var(--text-muted);">
                <span style="font-size: 4rem; display: block; margin-bottom: 24px;">🚧</span>
                <h2>${title} Area</h2>
                <p style="margin-top: 16px;">This module is currently under construction.</p>
            </div>
        `;
        return container;
    }
});

// Route Configuration
const routes = {
    'dashboard': DashboardPage,
    'games': GamesPage,
    'grammar-quiz': GrammarQuizPage,
    'videos': VideosPage,
    'stories': StoriesPage,
    'mock-exams': MockExamsPage,
    'exercises': ExercisesPage,
    'leaderboard': LeaderboardPage,
    'teacher-panel': TeacherPanelPage
};

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.appRouter = new Router(routes, 'dashboard');

    // Mobile Sidebar Logic
    const menuBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const navLinks = document.querySelectorAll('.nav-links li');

    const toggleMenu = () => {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
    };

    if (menuBtn && sidebar && overlay) {
        menuBtn.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);

        // Close menu when clicking a link on mobile
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('open');
                    overlay.classList.remove('active');
                }
            });
        });
    }
});
