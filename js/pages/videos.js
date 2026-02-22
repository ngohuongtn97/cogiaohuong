const VideosPage = {
    render: async () => {
        const container = document.createElement('div');
        container.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 24px;">
                <div>
                    <h2>Video Lessons Gallery 📺</h2>
                    <p style="color: var(--text-secondary); margin-top: 8px;">Watch, listen, and learn from our curated collection of English lessons.</p>
                </div>
                <div style="display: flex; gap: 8px;">
                    <button style="background: var(--primary); color: white; border: none; padding: 8px 16px; border-radius: 20px; font-weight: 600; cursor: pointer;">All</button>
                    <button style="background: var(--bg-card); color: var(--text-secondary); border: 1px solid var(--border-color); padding: 8px 16px; border-radius: 20px; font-weight: 600; cursor: pointer;">Grammar</button>
                    <button style="background: var(--bg-card); color: var(--text-secondary); border: 1px solid var(--border-color); padding: 8px 16px; border-radius: 20px; font-weight: 600; cursor: pointer;">Vocabulary</button>
                    <button style="background: var(--bg-card); color: var(--text-secondary); border: 1px solid var(--border-color); padding: 8px 16px; border-radius: 20px; font-weight: 600; cursor: pointer;">Speaking</button>
                </div>
            </div>
            
            <div class="dashboard-grid fade-in" style="animation-delay: 0.1s;">
                <!-- Video 1 -->
                <div class="card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column; cursor: pointer;">
                    <div style="height: 180px; background: #e2e8f0; position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                        <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800&h=400" alt="Video Thumbnail" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.8;">
                        <div style="position: absolute; width: 60px; height: 60px; background: rgba(0,0,0,0.6); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                        </div>
                        <span style="position: absolute; bottom: 12px; right: 12px; background: rgba(0,0,0,0.8); color: white; padding: 4px 8px; border-radius: 6px; font-size: 0.8rem; font-weight: 600;">12:05</span>
                    </div>
                    <div style="padding: 20px;">
                        <span style="font-size: 0.8rem; font-weight: 700; color: var(--primary); text-transform: uppercase;">Grammar</span>
                        <h3 style="margin: 8px 0; font-size: 1.1rem; line-height: 1.4;">Master the Present Continuous Tense</h3>
                        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 16px;">Learn exactly when and how to use the present continuous tense in English conversation.</p>
                        <div style="display: flex; align-items: center; gap: 8px; font-size: 0.85rem; color: var(--text-muted);">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            1.2k views
                        </div>
                    </div>
                </div>

                <!-- Video 2 -->
                <div class="card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column; cursor: pointer;">
                    <div style="height: 180px; background: #e2e8f0; position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                        <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800&h=400" alt="Video Thumbnail" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.8;">
                        <div style="position: absolute; width: 60px; height: 60px; background: rgba(0,0,0,0.6); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                        </div>
                        <span style="position: absolute; bottom: 12px; right: 12px; background: rgba(0,0,0,0.8); color: white; padding: 4px 8px; border-radius: 6px; font-size: 0.8rem; font-weight: 600;">08:30</span>
                    </div>
                    <div style="padding: 20px;">
                        <span style="font-size: 0.8rem; font-weight: 700; color: var(--secondary); text-transform: uppercase;">Vocabulary</span>
                        <h3 style="margin: 8px 0; font-size: 1.1rem; line-height: 1.4;">50 Essential Travel Words</h3>
                        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 16px;">Everything you need to know when traveling abroad. Airports, hotels, and emergencies.</p>
                        <div style="display: flex; align-items: center; gap: 8px; font-size: 0.85rem; color: var(--text-muted);">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            3.4k views
                        </div>
                    </div>
                </div>

                <!-- Video 3 -->
                <div class="card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column; cursor: pointer;">
                    <div style="height: 180px; background: #e2e8f0; position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800&h=400" alt="Video Thumbnail" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.8;">
                        <div style="position: absolute; width: 60px; height: 60px; background: rgba(0,0,0,0.6); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                        </div>
                        <span style="position: absolute; bottom: 12px; right: 12px; background: rgba(0,0,0,0.8); color: white; padding: 4px 8px; border-radius: 6px; font-size: 0.8rem; font-weight: 600;">15:45</span>
                    </div>
                    <div style="padding: 20px;">
                        <span style="font-size: 0.8rem; font-weight: 700; color: var(--warning); text-transform: uppercase;">Speaking</span>
                        <h3 style="margin: 8px 0; font-size: 1.1rem; line-height: 1.4;">How to Sound Like a Native</h3>
                        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 16px;">Tips on pronunciation, intonation, and linking words naturally.</p>
                        <div style="display: flex; align-items: center; gap: 8px; font-size: 0.85rem; color: var(--text-muted);">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            8.9k views
                        </div>
                    </div>
                </div>
            </div>
        `;
        return container;
    }
};
