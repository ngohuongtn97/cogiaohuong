const DashboardPage = {
    render: async () => {
        const container = document.createElement('div');
        container.innerHTML = `
            <div style="text-align: center; margin-bottom: 32px;">
                <h2 style="font-size: 2.2rem; color: var(--primary); margin-bottom: 8px;">Learning Journey 🗺️</h2>
                <p style="color: var(--text-secondary);">Follow the path to master English from Beginner to Advanced.</p>
            </div>
            
            <div class="roadmap-container fade-in" style="max-width: 600px; margin: 0 auto; position: relative; padding: 40px 0;">
                <!-- Vertical Line -->
                <div style="position: absolute; top: 60px; bottom: 60px; left: 50%; transform: translateX(-50%); width: 8px; background: var(--border-color); border-radius: 4px; z-index: 0;"></div>
                <div style="position: absolute; top: 60px; bottom: 70%; left: 50%; transform: translateX(-50%); width: 8px; background: var(--success); border-radius: 4px; z-index: 1;"></div>
                
                <!-- Node 1: Completed -->
                <div class="roadmap-node completed" style="position: relative; z-index: 2; margin-bottom: 60px; display: flex; flex-direction: column; align-items: center; cursor: pointer;" onclick="window.appRouter.navigate('games')">
                    <div style="width: 80px; height: 80px; background: var(--success); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 0 #047857, 0 15px 20px rgba(0,0,0,0.1); border: 4px solid white; transform: translateX(-60px);">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                    </div>
                    <div style="background: white; padding: 8px 16px; border-radius: 12px; box-shadow: var(--shadow-sm); font-weight: 700; margin-top: 12px; transform: translateX(-60px); color: var(--success);">
                        Unit 1: Introductions
                        <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 500; text-align: center; margin-top: 4px;">Completed 🌟</div>
                    </div>
                </div>

                <!-- Node 2: In Progress (Active) -->
                <div class="roadmap-node active" style="position: relative; z-index: 2; margin-bottom: 60px; display: flex; flex-direction: column; align-items: center; cursor: pointer;" onclick="window.appRouter.navigate('games')">
                    <div style="width: 90px; height: 90px; background: var(--primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 0 var(--primary-hover), 0 15px 20px rgba(79, 70, 229, 0.4); border: 4px solid white; transform: translateX(60px); animation: pulse 2s infinite;">
                        <svg width="45" height="45" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    </div>
                    <div style="background: white; padding: 12px 20px; border-radius: 12px; box-shadow: var(--shadow-md); font-weight: 800; margin-top: 12px; transform: translateX(60px); color: var(--primary); border: 2px solid var(--primary-light);">
                        Unit 2: Present Tenses
                        <div style="font-size: 0.8rem; color: var(--text-secondary); font-weight: 600; text-align: center; margin-top: 4px;">Grammar & Vocabulary <br><span style="color: var(--warning);">In Progress</span></div>
                    </div>
                </div>

                <!-- Node 3: Locked -->
                <div class="roadmap-node locked" style="position: relative; z-index: 2; margin-bottom: 60px; display: flex; flex-direction: column; align-items: center; cursor: not-allowed; opacity: 0.6;">
                    <div style="width: 70px; height: 70px; background: var(--border-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 6px 0 #cbd5e1; border: 4px solid white; transform: translateX(-40px);">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    </div>
                    <div style="background: white; padding: 8px 16px; border-radius: 12px; box-shadow: var(--shadow-sm); font-weight: 600; margin-top: 12px; transform: translateX(-40px); color: var(--text-muted);">
                        Unit 3: Daily Routines
                    </div>
                </div>

                <!-- Node 4: Locked -->
                <div class="roadmap-node locked" style="position: relative; z-index: 2; display: flex; flex-direction: column; align-items: center; cursor: not-allowed; opacity: 0.6;">
                    <div style="width: 70px; height: 70px; background: var(--border-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 6px 0 #cbd5e1; border: 4px solid white; transform: translateX(40px);">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    </div>
                    <div style="background: white; padding: 8px 16px; border-radius: 12px; box-shadow: var(--shadow-sm); font-weight: 600; margin-top: 12px; transform: translateX(40px); color: var(--text-muted);">
                        Unit 4: Past Events (A2)
                    </div>
                </div>

            </div>
            
            <style>
                @keyframes pulse {
                    0% { box-shadow: 0 8px 0 var(--primary-hover), 0 0 0 0 rgba(79, 70, 229, 0.4); }
                    70% { box-shadow: 0 8px 0 var(--primary-hover), 0 0 0 15px rgba(79, 70, 229, 0); }
                    100% { box-shadow: 0 8px 0 var(--primary-hover), 0 0 0 0 rgba(79, 70, 229, 0); }
                }
                .roadmap-node { transition: transform 0.2s; }
                .roadmap-node:not(.locked):hover { transform: scale(1.05); }
                .roadmap-node:not(.locked):active > div:first-child { transform: translateY(4px) translateX(var(--tx)); box-shadow: 0 0 0 transparent !important; }
            </style>
        `;
        return container;
    },
    init: () => {
        // Any specific logic for dashboard after rendering
    }
};
