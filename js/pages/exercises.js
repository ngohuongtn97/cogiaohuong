const ExercisesPage = {
    render: async () => {
        const container = document.createElement('div');
        container.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 24px;">
                <div>
                    <h2>Homework & Exercises 📝</h2>
                    <p style="color: var(--text-secondary); margin-top: 8px;">Complete your assignments and track your progress.</p>
                </div>
            </div>
            
            <div class="card fade-in" style="padding: 32px; animation-delay: 0.1s;">
                <div style="display: flex; gap: 40px; border-bottom: 1px solid var(--border-color); padding-bottom: 16px; margin-bottom: 24px;">
                    <div style="color: var(--primary); font-weight: 600; font-size: 1.1rem; border-bottom: 2px solid var(--primary); padding-bottom: 16px; margin-bottom: -17px; cursor: pointer;">Pending (2)</div>
                    <div style="color: var(--text-muted); font-weight: 500; font-size: 1.1rem; cursor: pointer;">Completed</div>
                </div>
                
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <!-- Homework Item 1 -->
                    <div style="border: 1px solid var(--border-color); border-radius: 12px; padding: 24px; display: flex; justify-content: space-between; align-items: center; transition: all 0.2s ease; cursor: pointer;" onmouseover="this.style.borderColor='var(--primary)'" onmouseout="this.style.borderColor='var(--border-color)'">
                        <div style="display: flex; gap: 20px; align-items: center;">
                            <div style="width: 48px; height: 48px; background: #fee2e2; color: #ef4444; border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                            </div>
                            <div>
                                <h4 style="font-size: 1.1rem; margin-bottom: 4px; color: var(--text-primary);">Write an Essay: My Dream Holiday</h4>
                                <div style="display: flex; gap: 16px; font-size: 0.9rem; color: var(--text-secondary);">
                                    <span>Type: Writing</span>
                                    <span style="color: var(--danger); font-weight: 600;">Due: Tomorrow at 11:59 PM</span>
                                </div>
                            </div>
                        </div>
                        <button style="background: var(--primary); color: white; border: none; padding: 10px 24px; border-radius: 8px; font-weight: 600; cursor: pointer;">Submit Work</button>
                    </div>

                    <!-- Homework Item 2 -->
                    <div style="border: 1px solid var(--border-color); border-radius: 12px; padding: 24px; display: flex; justify-content: space-between; align-items: center; transition: all 0.2s ease; cursor: pointer;" onmouseover="this.style.borderColor='var(--primary)'" onmouseout="this.style.borderColor='var(--border-color)'">
                        <div style="display: flex; gap: 20px; align-items: center;">
                            <div style="width: 48px; height: 48px; background: var(--primary-light); color: var(--primary); border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                            </div>
                            <div>
                                <h4 style="font-size: 1.1rem; margin-bottom: 4px; color: var(--text-primary);">Grammar Workbook Page 45-46</h4>
                                <div style="display: flex; gap: 16px; font-size: 0.9rem; color: var(--text-secondary);">
                                    <span>Type: Grammar</span>
                                    <span>Due: This Friday</span>
                                </div>
                            </div>
                        </div>
                        <button style="background: white; color: var(--text-primary); border: 1px solid var(--border-color); padding: 10px 24px; border-radius: 8px; font-weight: 600; cursor: pointer;">Open Quiz</button>
                    </div>
                </div>
            </div>
        `;
        return container;
    }
};
