App({
  globalData: {
    xp: 0,
    answers: {},
    marked: [],
    streak: { date: '', count: 0 },
    currentSubject: 'math',
    currentKp: 'all',
    currentType: 'all'
  },

  onLaunch() {
    const xp = wx.getStorageSync('zk_xp') || 0;
    const answers = wx.getStorageSync('zk_ans') || {};
    const marked = wx.getStorageSync('zk_star') || [];
    const streak = wx.getStorageSync('zk_str') || { date: '', count: 0 };
    this.globalData.xp = xp;
    this.globalData.answers = answers;
    this.globalData.marked = marked;
    this.globalData.streak = streak;
    this.updateStreak();
  },

  updateStreak() {
    const today = this.getToday();
    const s = this.globalData.streak;
    if (s.date === today) return;
    const yday = this.getYday();
    s.date = today;
    s.count = s.date === yday ? s.count + 1 : 1;
    wx.setStorageSync('zk_str', s);
  },

  addXP(n) {
    this.globalData.xp += n;
    wx.setStorageSync('zk_xp', this.globalData.xp);
  },

  getLevel(xp) {
    const levels = [
      { name: '练习生', xp: 0 }, { name: '小秀才', xp: 100 },
      { name: '举人', xp: 300 }, { name: '进士', xp: 600 },
      { name: '状元', xp: 1000 }, { name: '学神', xp: 2000 }
    ];
    for (let i = levels.length - 1; i >= 0; i--) {
      if (xp >= levels[i].xp) {
        const nxt = levels[i + 1];
        return { ...levels[i], nextXp: nxt ? nxt.xp : levels[i].xp, nextName: nxt ? nxt.name : levels[i].name };
      }
    }
    return { ...levels[0], nextXp: 100, nextName: '小秀才' };
  },

  recordAnswer(qid, ok) {
    if (this.globalData.answers[qid]) return false;
    this.updateStreak();
    this.globalData.answers[qid] = { ok, time: Date.now() };
    this.addXP(ok ? 10 : 2);
    wx.setStorageSync('zk_ans', this.globalData.answers);
    return true;
  },

  toggleMark(qid) {
    const i = this.globalData.marked.indexOf(qid);
    if (i >= 0) this.globalData.marked.splice(i, 1);
    else this.globalData.marked.push(qid);
    wx.setStorageSync('zk_star', this.globalData.marked);
  },

  getToday() { return new Date().toISOString().slice(0, 10); },
  getYday() { return new Date(Date.now() - 864e5).toISOString().slice(0, 10); }
});
