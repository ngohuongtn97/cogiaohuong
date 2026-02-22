const LeaderboardPage = {
    render: async () => {
        const container = document.createElement('div');
        container.innerHTML = `
            <div style="text-align: center; margin-bottom: 32px;">
                <h2 style="font-size: 2.2rem; color: var(--primary); margin-bottom: 8px;">Wall of Fame 🏆</h2>
                <p style="color: var(--text-secondary);">Top students of English Academy this month!</p>
            </div>
            
            <div class="card fade-in" style="max-width: 600px; margin: 0 auto; padding: 0; overflow: hidden;">
                <!-- Top 3 Podium -->
                <div style="background: linear-gradient(135deg, var(--primary), var(--primary-hover)); color: white; padding: 40px 24px; text-align: center;">
                    <img src="https://ui-avatars.com/api/?name=HS&background=fbbf24&color=fff&size=128" style="width: 100px; height: 100px; border-radius: 50%; border: 4px solid #fbbf24; margin-bottom: 16px; box-shadow: 0 8px 16px rgba(0,0,0,0.2);">
                    <h3 style="font-size: 1.5rem; margin-bottom: 4px;">H.S. (You)</h3>
                    <div style="color: #fbbf24; font-weight: 700; font-size: 1.2rem;"><span class="star-icon">★</span> 1,250 pts</div>
                    <span style="display: inline-block; margin-top: 12px; background: rgba(255,255,255,0.2); padding: 4px 12px; border-radius: 20px; font-size: 0.85rem; font-weight: 600;">Rank #1</span>
                </div>
                
                <!-- Others List -->
                <div style="padding: 24px;">
                    <div style="display: flex; align-items: center; padding: 16px; border-bottom: 1px solid var(--border-color);">
                        <div style="font-weight: 700; color: var(--text-muted); width: 30px; font-size: 1.2rem;">2</div>
                        <img src="https://ui-avatars.com/api/?name=AN&background=94a3b8&color=fff" style="width: 40px; height: 40px; border-radius: 50%; margin-right: 16px;">
                        <div style="flex: 1;">
                            <h4 style="font-size: 1.05rem;">An Nguyen</h4>
                        </div>
                        <div style="font-weight: 600; color: var(--warning);"><span class="star-icon">★</span> 1,120 pts</div>
                    </div>
                    
                    <div style="display: flex; align-items: center; padding: 16px; border-bottom: 1px solid var(--border-color);">
                        <div style="font-weight: 700; color: var(--text-muted); width: 30px; font-size: 1.2rem;">3</div>
                        <img src="https://ui-avatars.com/api/?name=MB&background=b45309&color=fff" style="width: 40px; height: 40px; border-radius: 50%; margin-right: 16px;">
                        <div style="flex: 1;">
                            <h4 style="font-size: 1.05rem;">Minh Bui</h4>
                        </div>
                        <div style="font-weight: 600; color: var(--warning);"><span class="star-icon">★</span> 980 pts</div>
                    </div>
                    
                    <div style="display: flex; align-items: center; padding: 16px;">
                        <div style="font-weight: 700; color: var(--text-muted); width: 30px; font-size: 1.2rem;">4</div>
                        <img src="https://ui-avatars.com/api/?name=TL&background=4f46e5&color=fff" style="width: 40px; height: 40px; border-radius: 50%; margin-right: 16px;">
                        <div style="flex: 1;">
                            <h4 style="font-size: 1.05rem;">Tuan Le</h4>
                        </div>
                        <div style="font-weight: 600; color: var(--warning);"><span class="star-icon">★</span> 845 pts</div>
                    </div>
                </div>
            </div>
        `;
        return container;
    }
};
