const TeacherPanelPage = {
    render: async () => {
        const container = document.createElement('div');
        container.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 24px;">
                <div>
                    <h2>Teacher Dashboard 👨‍🏫</h2>
                    <p style="color: var(--text-secondary); margin-top: 8px;">Manage your classes, assign activities, and monitor progress.</p>
                </div>
                <button style="background: var(--primary); color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: transform 0.2s;">+ Create Assignment</button>
            </div>
            
            <div class="dashboard-grid fade-in" style="animation-delay: 0.1s; grid-template-columns: 2fr 1fr;">
                
                <!-- Class Overview -->
                <div class="card" style="padding: 24px;">
                    <h3 style="margin-bottom: 20px;">Class Progress Overview</h3>
                    <div style="display: flex; flex-direction: column; gap: 16px;">
                        
                        <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 12px;">
                            <div style="display: flex; align-items: center; gap: 16px;">
                                <img src="https://ui-avatars.com/api/?name=NV&background=10b981&color=fff" style="width: 40px; height: 40px; border-radius: 50%;">
                                <div>
                                    <h4 style="font-size: 1.05rem; margin-bottom: 4px;">Nguyen Van A</h4>
                                    <span style="font-size: 0.85rem; color: var(--text-secondary);">Grade 10 - Completed 12/15 assignments</span>
                                </div>
                            </div>
                            <div style="text-align: right;">
                                <div style="font-weight: 700; color: var(--success); font-size: 1.1rem;">A (88%)</div>
                                <button style="background: none; border: none; color: var(--primary); font-size: 0.8rem; font-weight: 600; cursor: pointer;">View Detail</button>
                            </div>
                        </div>

                        <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 12px;">
                            <div style="display: flex; align-items: center; gap: 16px;">
                                <img src="https://ui-avatars.com/api/?name=LT&background=f59e0b&color=fff" style="width: 40px; height: 40px; border-radius: 50%;">
                                <div>
                                    <h4 style="font-size: 1.05rem; margin-bottom: 4px;">Le Thi B</h4>
                                    <span style="font-size: 0.85rem; color: var(--text-secondary);">Grade 10 - Completed 9/15 assignments</span>
                                </div>
                            </div>
                            <div style="text-align: right;">
                                <div style="font-weight: 700; color: var(--warning); font-size: 1.1rem;">B (74%)</div>
                                <button style="background: none; border: none; color: var(--primary); font-size: 0.8rem; font-weight: 600; cursor: pointer;">View Detail</button>
                            </div>
                        </div>

                        <div style="display: flex; align-items: center; justify-content: space-between;">
                            <div style="display: flex; align-items: center; gap: 16px;">
                                <img src="https://ui-avatars.com/api/?name=TM&background=ef4444&color=fff" style="width: 40px; height: 40px; border-radius: 50%;">
                                <div>
                                    <h4 style="font-size: 1.05rem; margin-bottom: 4px;">Tran Minh C</h4>
                                    <span style="font-size: 0.85rem; color: var(--text-secondary);">Grade 10 - Completed 4/15 assignments</span>
                                </div>
                            </div>
                            <div style="text-align: right;">
                                <div style="font-weight: 700; color: var(--danger); font-size: 1.1rem;">D (52%)</div>
                                <button style="background: none; border: none; color: var(--primary); font-size: 0.8rem; font-weight: 600; cursor: pointer;">Send Reminder</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Recent Submissions -->
                <div class="card" style="padding: 24px; background: var(--primary); color: white;">
                    <h3 style="margin-bottom: 20px; color: white;">Needs Grading</h3>
                    
                    <div style="background: rgba(255,255,255,0.1); padding: 16px; border-radius: 12px; margin-bottom: 12px; cursor: pointer;">
                        <span style="font-size: 0.8rem; background: rgba(255,255,255,0.2); padding: 2px 8px; border-radius: 4px;">Essay</span>
                        <h4 style="margin: 8px 0; font-size: 1rem;">My Summer Vacation</h4>
                        <div style="font-size: 0.85rem; opacity: 0.8;">Submitted by Nguyen Van A • 2h ago</div>
                    </div>

                    <div style="background: rgba(255,255,255,0.1); padding: 16px; border-radius: 12px; cursor: pointer;">
                        <span style="font-size: 0.8rem; background: rgba(255,255,255,0.2); padding: 2px 8px; border-radius: 4px;">Audio Recording</span>
                        <h4 style="margin: 8px 0; font-size: 1rem;">Pronunciation Task 4</h4>
                        <div style="font-size: 0.85rem; opacity: 0.8;">Submitted by Le Thi B • 5h ago</div>
                    </div>
                </div>
            </div>
        `;
        return container;
    }
};
