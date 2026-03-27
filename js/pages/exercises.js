const ExercisesPage = {
    render: async () => {
        const container = document.createElement('div');
        container.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 24px;">
                <div>
                    <h2 style="font-size: 2.2rem; color: var(--primary); margin-bottom: 8px;">Roadmap Exercises 📝</h2>
                    <p style="color: var(--text-secondary);">Complete these tasks to unlock the next level on your journey.</p>
                </div>
            </div>
            
            <div class="dashboard-grid fade-in" style="animation-delay: 0.1s; grid-template-columns: 1fr;">
                
                <!-- Current Level Tasks -->
                <div class="card" style="padding: 24px; border-left: 4px solid var(--primary);">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                        <h3 style="margin: 0;">Level 2 Required Tasks</h3>
                        <span style="background: var(--primary-light); color: var(--primary); padding: 4px 12px; border-radius: 12px; font-weight: 600; font-size: 0.85rem;">In Progress</span>
                    </div>
                    
                    <div style="display: flex; flex-direction: column; gap: 16px;">
                        
                        <div style="display: flex; align-items: center; justify-content: space-between; padding: 16px; border: 1px solid var(--border-color); border-radius: 12px; background: var(--bg-main);">
                            <div style="display: flex; align-items: center; gap: 16px;">
                                <div style="width: 48px; height: 48px; background: white; border-radius: 12px; display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-sm); color: var(--primary);">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                </div>
                                <div>
                                    <h4 style="font-size: 1.05rem; margin-bottom: 4px;">Write: Your Daily Routine</h4>
                                    <span style="font-size: 0.85rem; color: var(--danger); font-weight: 600;">Due in 2 days</span>
                                </div>
                            </div>
                            <button style="background: var(--primary); color: white; border: none; padding: 8px 24px; border-radius: 8px; font-weight: 600; cursor: pointer;">Start Writing</button>
                        </div>

                        <div style="display: flex; align-items: center; justify-content: space-between; padding: 16px; border: 1px solid var(--border-color); border-radius: 12px; background: var(--bg-main);">
                            <div style="display: flex; align-items: center; gap: 16px;">
                                <div style="width: 48px; height: 48px; background: white; border-radius: 12px; display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-sm); color: var(--success);">
                                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                                </div>
                                <div>
                                    <h4 style="font-size: 1.05rem; margin-bottom: 4px;">Grammar: Present Tenses Mastery</h4>
                                    <span style="font-size: 0.85rem; color: var(--success); font-weight: 600;">Completed (100%)</span>
                                </div>
                            </div>
                            <button style="background: transparent; color: var(--text-secondary); border: 1px solid var(--border-color); padding: 8px 24px; border-radius: 8px; font-weight: 600; cursor: pointer;">Review</button>
                        </div>

                    </div>
                </div>

                <!-- Next Level Locked Tasks -->
                <div class="card" style="padding: 24px; border-left: 4px solid var(--border-color); opacity: 0.7;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                        <h3 style="margin: 0; color: var(--text-muted);">Level 3 Tasks</h3>
                        <span style="background: var(--bg-main); color: var(--text-muted); border: 1px solid var(--border-color); padding: 4px 12px; border-radius: 12px; font-weight: 600; font-size: 0.85rem; display: flex; align-items: center; gap: 4px;">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Locked
                        </span>
                    </div>
                    
                    <div style="display: flex; flex-direction: column; gap: 16px;">
                        
                        <div style="display: flex; align-items: center; justify-content: space-between; padding: 16px; border: 1px solid var(--border-color); border-radius: 12px; background: transparent;">
                            <div style="display: flex; align-items: center; gap: 16px;">
                                <div style="width: 48px; height: 48px; background: var(--bg-main); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--text-muted);">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div>
                                    <h4 style="font-size: 1.05rem; margin-bottom: 4px; color: var(--text-muted);">Speaking: Introduce your family</h4>
                                    <span style="font-size: 0.85rem; color: var(--text-secondary);">Unlocks after Level 2</span>
                                </div>
                            </div>
                            <button style="background: transparent; color: var(--text-muted); border: 1px solid var(--border-color); padding: 8px 24px; border-radius: 8px; font-weight: 600; cursor: not-allowed;">Locked</button>
                        </div>

                    </div>
                </div>

            </div>
        `;
        return container;
    }
};
