const DashboardPage = {
    render: async () => {
        const container = document.createElement('div');
        container.innerHTML = `
            <div>
                <h2>Welcome back, Student! 👋</h2>
                <p style="color: var(--text-secondary); margin-top: 8px;">You've learned 45 new words this week. Keep it up!</p>
            </div>
            
            <div class="dashboard-grid fade-in" style="animation-delay: 0.1s;">
                <!-- Study Progress -->
                <div class="card">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                        <h3>Study Progress</h3>
                        <span style="background: var(--primary-light); color: var(--primary); padding: 4px 12px; border-radius: 12px; font-weight: 600; font-size: 0.875rem;">This Week</span>
                    </div>
                    
                    <div style="margin-bottom: 16px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.9rem;">
                            <span>Vocabulary</span>
                            <span style="font-weight: 600;">80%</span>
                        </div>
                        <div style="height: 8px; background: var(--border-color); border-radius: 4px; overflow: hidden;">
                            <div style="width: 80%; height: 100%; background: var(--primary); border-radius: 4px;"></div>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 16px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.9rem;">
                            <span>Grammar</span>
                            <span style="font-weight: 600;">65%</span>
                        </div>
                        <div style="height: 8px; background: var(--border-color); border-radius: 4px; overflow: hidden;">
                            <div style="width: 65%; height: 100%; background: var(--secondary); border-radius: 4px;"></div>
                        </div>
                    </div>
                    
                    <div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.9rem;">
                            <span>Speaking</span>
                            <span style="font-weight: 600;">40%</span>
                        </div>
                        <div style="height: 8px; background: var(--border-color); border-radius: 4px; overflow: hidden;">
                            <div style="width: 40%; height: 100%; background: var(--warning); border-radius: 4px;"></div>
                        </div>
                    </div>
                </div>

                <!-- Upcoming Tasks -->
                <div class="card">
                    <h3>Upcoming Assignments</h3>
                    <ul style="list-style: none; padding: 0;">
                        <li style="padding: 16px 0; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <h4 style="font-size: 1rem; color: var(--text-primary); margin-bottom: 4px;">Present Tenses Quiz</h4>
                                <span style="font-size: 0.85rem; color: var(--danger);">Due tomorrow</span>
                            </div>
                            <button style="background: var(--primary); color: white; border: none; padding: 8px 16px; border-radius: 8px; font-weight: 600; cursor: pointer;">Start</button>
                        </li>
                        <li style="padding: 16px 0; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <h4 style="font-size: 1rem; color: var(--text-primary); margin-bottom: 4px;">Read "The Lost Dog"</h4>
                                <span style="font-size: 0.85rem; color: var(--text-secondary);">Friday</span>
                            </div>
                            <button style="background: var(--bg-main); color: var(--text-primary); border: 1px solid var(--border-color); padding: 8px 16px; border-radius: 8px; font-weight: 600; cursor: pointer;">View</button>
                        </li>
                    </ul>
                </div>
            </div>
            
            <!-- Recommended Content -->
            <div style="margin-top: 32px;">
                <h3 style="margin-bottom: 16px;">Recommended For You</h3>
                <div class="dashboard-grid" style="margin-top: 0; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));">
                    <div class="card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column;">
                        <div style="height: 140px; background: linear-gradient(135deg, #10b981, #059669); display: flex; align-items: center; justify-content: center; color: white;">
                             <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                        </div>
                        <div style="padding: 20px;">
                            <span style="font-size: 0.8rem; font-weight: 700; color: var(--success); text-transform: uppercase; letter-spacing: 0.5px;">Video Lesson</span>
                            <h4 style="margin: 8px 0; font-size: 1.1rem;">Past Simple vs Continuous</h4>
                            <p style="font-size: 0.9rem; color: var(--text-secondary);">Master narrative tenses in 10 minutes.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return container;
    },
    init: () => {
        // Any specific logic for dashboard after rendering
    }
};
