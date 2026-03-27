const GamesPage = {
    render: async () => {
        const container = document.createElement('div');
        container.innerHTML = `
            <div style="text-align: center; margin-bottom: 32px;">
                <h2 style="font-size: 2.2rem; color: var(--primary); margin-bottom: 8px;">Game Arcade 🎮</h2>
                <p style="color: var(--text-secondary);">Practice English through fun and engaging challenges.</p>
            </div>
            
            <!-- Category Filters -->
            <div style="display: flex; gap: 12px; margin-bottom: 24px; overflow-x: auto; padding-bottom: 8px;">
                <button style="padding: 8px 16px; border-radius: 20px; border: none; background: var(--primary); color: white; font-weight: 600; cursor: pointer; white-space: nowrap;">All Games</button>
                <button style="padding: 8px 16px; border-radius: 20px; border: 1px solid var(--border-color); background: transparent; color: var(--text-secondary); font-weight: 600; cursor: pointer; white-space: nowrap;">Vocabulary</button>
                <button style="padding: 8px 16px; border-radius: 20px; border: 1px solid var(--border-color); background: transparent; color: var(--text-secondary); font-weight: 600; cursor: pointer; white-space: nowrap;">Grammar</button>
                <button style="padding: 8px 16px; border-radius: 20px; border: 1px solid var(--border-color); background: transparent; color: var(--text-secondary); font-weight: 600; cursor: pointer; white-space: nowrap;">Listening</button>
            </div>
            
            <div class="dashboard-grid fade-in" style="animation-delay: 0.1s; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));">
                
                <!-- Grammar Quiz -->
                <div class="card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column;">
                    <div style="height: 160px; background: linear-gradient(135deg, #4f46e5, #4338ca); display: flex; align-items: center; justify-content: center; position: relative;">
                        <span style="position: absolute; top: 12px; right: 12px; background: rgba(255,255,255,0.2); color: white; padding: 4px 8px; border-radius: 8px; font-size: 0.8rem; font-weight: 600;">Grammar</span>
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    </div>
                    <div style="padding: 24px; flex-grow: 1; display: flex; flex-direction: column;">
                        <h3 style="margin-top: 0; margin-bottom: 8px;">Present Tenses Mastery</h3>
                        <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 24px; flex-grow: 1;">Challenge yourself with 20 questions on present simple and continuous.</p>
                        <button id="btn-start-grammar" style="width: 100%; padding: 12px; border-radius: 8px; border: none; background: var(--primary); color: white; font-weight: 600; font-size: 1rem; cursor: pointer; transition: transform var(--transition-fast);">Play Now 🚀</button>
                    </div>
                </div>

                <!-- Conditional & Tags Quiz -->
                <div class="card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column;">
                    <div style="height: 160px; background: linear-gradient(135deg, #ec4899, #be185d); display: flex; align-items: center; justify-content: center; position: relative;">
                        <span style="position: absolute; top: 12px; right: 12px; background: rgba(255,255,255,0.2); color: white; padding: 4px 8px; border-radius: 8px; font-size: 0.8rem; font-weight: 600;">Grammar</span>
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    </div>
                    <div style="padding: 24px; flex-grow: 1; display: flex; flex-direction: column;">
                        <h3 style="margin-top: 0; margin-bottom: 8px;">Conditionals & Tags</h3>
                        <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 24px; flex-grow: 1;">Test your knowledge on Conditional sentences and Tag questions with 20 items.</p>
                        <button id="btn-start-cond-tags" style="width: 100%; padding: 12px; border-radius: 8px; border: none; background: #ec4899; color: white; font-weight: 600; font-size: 1rem; cursor: pointer; transition: transform var(--transition-fast);">Play Now 🚀</button>
                    </div>
                </div>
                
                <!-- Vocab Word Match -->
                <div class="card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column;">
                    <div style="height: 160px; background: linear-gradient(135deg, #10b981, #059669); display: flex; align-items: center; justify-content: center; position: relative;">
                        <span style="position: absolute; top: 12px; right: 12px; background: rgba(255,255,255,0.2); color: white; padding: 4px 8px; border-radius: 8px; font-size: 0.8rem; font-weight: 600;">Vocabulary</span>
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    </div>
                    <div style="padding: 24px; flex-grow: 1; display: flex; flex-direction: column;">
                        <h3 style="margin-top: 0; margin-bottom: 8px;">Vocabulary Match</h3>
                        <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 24px; flex-grow: 1;">Match the English words to their pictures. Topic: Daily Items.</p>
                        <button style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid var(--primary); background: transparent; color: var(--primary); font-weight: 600; font-size: 1rem; cursor: pointer;">Coming Soon</button>
                    </div>
                </div>

                <!-- Listening Challenge -->
                <div class="card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column;">
                    <div style="height: 160px; background: linear-gradient(135deg, #f59e0b, #d97706); display: flex; align-items: center; justify-content: center; position: relative;">
                        <span style="position: absolute; top: 12px; right: 12px; background: rgba(255,255,255,0.2); color: white; padding: 4px 8px; border-radius: 8px; font-size: 0.8rem; font-weight: 600;">Listening</span>
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                    </div>
                    <div style="padding: 24px; flex-grow: 1; display: flex; flex-direction: column;">
                        <h3 style="margin-top: 0; margin-bottom: 8px;">Listen & Type</h3>
                        <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 24px; flex-grow: 1;">Listen to the short audio clip and type exactly what you hear.</p>
                        <button style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid var(--primary); background: transparent; color: var(--primary); font-weight: 600; font-size: 1rem; cursor: pointer;">Coming Soon</button>
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

        const condTagsBtn = document.getElementById('btn-start-cond-tags');
        if (condTagsBtn) {
            condTagsBtn.addEventListener('click', () => {
                window.open('conditional-tags-quiz.html', '_blank');
            });
        }
    }
};
