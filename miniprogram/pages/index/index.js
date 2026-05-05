const app = getApp();
const SUBJECTS = require('../../utils/data.js');

Page({
  data: {
    subjects: [
      { id: 'math', name: '数学', icon: '📐', color: '#ff6b6b' },
      { id: 'physics', name: '物理', icon: '⚡', color: '#4ecdc4' },
      { id: 'chemistry', name: '化学', icon: '🧪', color: '#a78bfa' },
      { id: 'politics', name: '道法', icon: '📋', color: '#f59e0b' }
    ],
    currentSubj: 'math',
    kps: [],
    currentKp: 'all',
    stats: { total: 0, correct: 0, rate: '-', marked: 0, streak: 0 },
    level: { name: '练习生', xp: 0, nextXp: 100 },
    xpPercent: 0
  },

  onLoad() { this.refresh(); },
  onShow() { this.refresh(); },
  onPullDownRefresh() { this.refresh(); wx.stopPullDownRefresh(); },

  refresh() {
    const g = app.globalData;
    const subj = g.currentSubject;
    const kps = (SUBJECTS[subj]?.knowledgePoints || []).map(k => ({
      ...k,
      count: (SUBJECTS[subj]?.questions || []).filter(q => q.kp === k.id).length
    }));
    const allQs = SUBJECTS[subj]?.questions || [];
    const filtered = g.currentKp === 'all' ? allQs : allQs.filter(q => q.kp === g.currentKp);
    const done = filtered.filter(q => g.answers[q.id]).length;
    const correct = filtered.filter(q => g.answers[q.id]?.ok).length;
    const level = app.getLevel(g.xp);
    const previewQs = allQs.slice(0, 5);
    this.setData({
      currentSubj: g.currentSubject,
      kps,
      previewQs,
      currentKp: g.currentKp,
      stats: {
        total: filtered.length,
        correct,
        rate: done > 0 ? Math.round(correct / done * 100) + '%' : '-',
        marked: g.marked.length,
        streak: g.streak.count
      },
      level,
      xpPercent: level.nextXp > level.xp ? Math.round((g.xp - level.xp) / (level.nextXp - level.xp) * 100) : 100
    });
  },

  onSwitchSubj(e) {
    app.globalData.currentSubject = e.currentTarget.dataset.subj;
    app.globalData.currentKp = 'all';
    this.refresh();
  },

  onSelectKp(e) {
    app.globalData.currentKp = e.currentTarget.dataset.kp;
    this.refresh();
  },

  onStartQuiz() {
    wx.navigateTo({ url: '/pages/quiz/quiz' });
  }
});
