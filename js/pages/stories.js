const StoriesPage = {
    render: async () => {
        const container = document.createElement('div');
        container.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 24px;">
                <div>
                    <h2>Reading & Short Stories 📚</h2>
                    <p style="color: var(--text-secondary); margin-top: 8px;">Improve your reading comprehension and vocabulary with engaging stories.</p>
                </div>
            </div>
            
            <div class="dashboard-grid fade-in" style="animation-delay: 0.1s;">
                <!-- Story 1 -->
                <div class="card" style="display: flex; gap: 20px; grid-column: 1 / -1; align-items: center; padding: 20px;">
                    <div style="width: 120px; height: 160px; background: linear-gradient(135deg, #4f46e5, #4338ca); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; flex-shrink: 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                    </div>
                    <div style="flex: 1;">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                            <div>
                                <span style="background: var(--primary-light); color: var(--primary); padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.5px;">LEVEL A2</span>
                                <h3 style="margin: 12px 0 8px; font-size: 1.4rem;">The Secret of the Old Mansion</h3>
                                <p style="color: var(--text-secondary); line-height: 1.5; margin-bottom: 16px; max-width: 800px;">Three friends discover a map leading to an abandoned mansion at the edge of town. What secrets does it hold inside? A great story to practice past tenses and mystery vocabulary.</p>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 16px;">
                            <button style="background: var(--primary); color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: transform 0.2s;">Read Story</button>
                            <span style="font-size: 0.85rem; color: var(--text-muted); display: flex; align-items: center; gap: 6px;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                10 min read
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Story 2 -->
                <div class="card" style="display: flex; gap: 20px; grid-column: 1 / -1; align-items: center; padding: 20px;">
                    <div style="width: 120px; height: 160px; background: linear-gradient(135deg, #10b981, #059669); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; flex-shrink: 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                    </div>
                    <div style="flex: 1;">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                            <div>
                                <span style="background: #d1fae5; color: #065f46; padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.5px;">LEVEL B1</span>
                                <h3 style="margin: 12px 0 8px; font-size: 1.4rem;">The Future We Built</h3>
                                <p style="color: var(--text-secondary); line-height: 1.5; margin-bottom: 16px; max-width: 800px;">A short sci-fi story about a world where AI robots do all the manual labor. Perfect for practicing will/going to and technology-related terminology.</p>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 16px;">
                            <button style="background: var(--bg-main); color: var(--text-primary); border: 1px solid var(--border-color); padding: 10px 20px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: transform 0.2s;">Read Story</button>
                            <span style="font-size: 0.85rem; color: var(--text-muted); display: flex; align-items: center; gap: 6px;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                15 min read
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return container;
    }
};
