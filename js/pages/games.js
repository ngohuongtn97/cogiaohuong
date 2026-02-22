const GamesPage = {
    render: async () => {
        const container = document.createElement('div');
        container.innerHTML = `
            <div>
                <h2>Interactive Games Area 🎮</h2>
                <p style="color: var(--text-secondary); margin-top: 8px;">Learn English while having fun. Choose a game category below!</p>
            </div>
            
            <div class="dashboard-grid fade-in" style="animation-delay: 0.1s;">
                <!-- Grammar Quiz Game -->
                <div class="card" style="position: relative; overflow: hidden; border: 2px solid transparent; transition: all 0.3s ease;" onmouseover="this.style.borderColor='var(--primary)'" onmouseout="this.style.borderColor='transparent'">
                    <div style="position: absolute; top: -20px; right: -20px; width: 100px; height: 100px; background: var(--primary-light); border-radius: 50%; opacity: 0.5;"></div>
                    <h3 style="color: var(--primary); font-size: 1.4rem;">Present Tenses Mastery</h3>
                    <p style="color: var(--text-secondary); margin-bottom: 24px;">Test your knowledge on Present Simple vs Present Continuous.</p>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-size: 0.85rem; font-weight: 600; color: var(--text-muted);"><span class="star-icon" style="color: var(--warning);">★</span> 50 Points</span>
                        <button id="btn-start-grammar" style="background: var(--primary); color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: transform 0.2s;">Play Now</button>
                    </div>
                </div>

                <!-- Vocabulary Match -->
                <div class="card" style="position: relative; overflow: hidden;">
                    <h3 style="color: var(--secondary); font-size: 1.4rem;">Vocabulary Rush</h3>
                    <p style="color: var(--text-secondary); margin-bottom: 24px;">Match English words with their Vietnamese meanings before time runs out!</p>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-size: 0.85rem; font-weight: 600; color: var(--text-muted);"><span class="star-icon" style="color: var(--warning);">★</span> 100 Points</span>
                        <button style="background: var(--bg-main); color: var(--text-primary); border: 1px solid var(--border-color); padding: 10px 20px; border-radius: 8px; font-weight: 600; cursor: not-allowed; opacity: 0.7;">Coming Soon</button>
                    </div>
                </div>
            </div>
        `;
        return container;
    },
    init: () => {
        const startBtn = document.getElementById('btn-start-grammar');
        if (startBtn) {
            startBtn.addEventListener('click', () => {
                window.appRouter.navigate('grammar-quiz');
            });
        }
    }
};
