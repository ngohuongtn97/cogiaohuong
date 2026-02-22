const MockExamsPage = {
    render: async () => {
        const container = document.createElement('div');
        container.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 24px;">
                <div>
                    <h2>Mock Exams (Thi Thử) ⏳</h2>
                    <p style="color: var(--text-secondary); margin-top: 8px;">Test your knowledge under real exam conditions to prepare for the real thing.</p>
                </div>
            </div>
            
            <div class="dashboard-grid fade-in" style="animation-delay: 0.1s;">
                <!-- General English Test -->
                <div class="card" style="position: relative; overflow: hidden; display: flex; flex-direction: column;">
                    <div style="margin-bottom: 16px;">
                        <span style="background: var(--primary-light); color: var(--primary); padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.5px; display: inline-block; margin-bottom: 12px;">B1 PRELIMINARY</span>
                        <h3 style="font-size: 1.4rem; color: var(--text-primary); margin-bottom: 8px;">Mid-Term Mock Test</h3>
                        <p style="color: var(--text-secondary); line-height: 1.5; font-size: 0.95rem;">Comprehensive test covering Grammar, Vocabulary, and Reading comprehension chapters 1-5.</p>
                    </div>
                    
                    <div style="background: var(--bg-main); border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.9rem;">
                            <span style="color: var(--text-muted);">Duration:</span>
                            <span style="font-weight: 600;">45 Minutes</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.9rem;">
                            <span style="color: var(--text-muted);">Questions:</span>
                            <span style="font-weight: 600;">50 MCQ</span>
                        </div>
                    </div>
                    
                    <div style="margin-top: auto;">
                        <button style="width: 100%; background: var(--primary); color: white; border: none; padding: 12px 20px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: transform 0.2s;">Start Exam Now</button>
                    </div>
                </div>

                <!-- IELTS Practice -->
                <div class="card" style="position: relative; overflow: hidden; display: flex; flex-direction: column;">
                    <div style="margin-bottom: 16px;">
                        <span style="background: #e0e7ff; color: #4338ca; padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.5px; display: inline-block; margin-bottom: 12px;">IELTS ACADEMIC</span>
                        <h3 style="font-size: 1.4rem; color: var(--text-primary); margin-bottom: 8px;">Reading Practice Test 1</h3>
                        <p style="color: var(--text-secondary); line-height: 1.5; font-size: 0.95rem;">Full-length reading test with 3 passages and 40 questions to simulate the IELTS exam format.</p>
                    </div>
                    
                    <div style="background: var(--bg-main); border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.9rem;">
                            <span style="color: var(--text-muted);">Duration:</span>
                            <span style="font-weight: 600;">60 Minutes</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.9rem;">
                            <span style="color: var(--text-muted);">Questions:</span>
                            <span style="font-weight: 600;">40 Questions</span>
                        </div>
                    </div>
                    
                    <div style="margin-top: auto;">
                        <button style="width: 100%; background: var(--bg-main); color: var(--text-primary); border: 1px solid var(--border-color); padding: 12px 20px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: transform 0.2s;">Start Exam Now</button>
                    </div>
                </div>
            </div>
            
            <div style="margin-top: 40px;">
                <h3 style="margin-bottom: 16px; color: var(--text-primary);">Your Exam History 📊</h3>
                <div class="card" style="padding: 0; overflow: hidden;">
                    <table style="width: 100%; border-collapse: collapse; text-align: left;">
                        <thead>
                            <tr style="background: var(--bg-main); border-bottom: 1px solid var(--border-color);">
                                <th style="padding: 16px 24px; font-weight: 600; color: var(--text-muted); font-size: 0.85rem; text-transform: uppercase;">Exam Name</th>
                                <th style="padding: 16px 24px; font-weight: 600; color: var(--text-muted); font-size: 0.85rem; text-transform: uppercase;">Date Taken</th>
                                <th style="padding: 16px 24px; font-weight: 600; color: var(--text-muted); font-size: 0.85rem; text-transform: uppercase;">Score</th>
                                <th style="padding: 16px 24px; font-weight: 600; color: var(--text-muted); font-size: 0.85rem; text-transform: uppercase;">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 16px 24px; font-weight: 500;">Unit 1-3 Diagnostic Test</td>
                                <td style="padding: 16px 24px; color: var(--text-secondary);">Oct 12, 2023</td>
                                <td style="padding: 16px 24px;">
                                    <span style="background: #d1fae5; color: #065f46; padding: 4px 8px; border-radius: 4px; font-weight: 600; font-size: 0.9rem;">85/100</span>
                                </td>
                                <td style="padding: 16px 24px;">
                                    <button style="background: none; border: none; color: var(--primary); font-weight: 600; cursor: pointer;">Review</button>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 16px 24px; font-weight: 500;">Vocabulary Quiz: Travel</td>
                                <td style="padding: 16px 24px; color: var(--text-secondary);">Oct 05, 2023</td>
                                <td style="padding: 16px 24px;">
                                    <span style="background: #fee2e2; color: #991b1b; padding: 4px 8px; border-radius: 4px; font-weight: 600; font-size: 0.9rem;">45/100</span>
                                </td>
                                <td style="padding: 16px 24px;">
                                    <button style="background: none; border: none; color: var(--primary); font-weight: 600; cursor: pointer;">Review</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `;
        return container;
    }
};
