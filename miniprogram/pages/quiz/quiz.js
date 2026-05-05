const app = getApp();
const SUBJECTS = require('../../utils/data.js');

Page({
  data: {
    questions: [],
    answered: {},   // qid -> {ok, picked}
    marked: [],
    showAnswers: {},
    currentSubj: 'math',
    currentKp: 'all',
    currentType: 'all',
    kpOptions: [],
    searchText: '',
    showKpPanel: false,
    stats: { total: 0, done: 0, correct: 0, rate: '-' },
    toast: null
  },

  onLoad() {
    this.loadQuestions();
  },

  onShow() {
    this.setData({ marked: app.globalData.marked });
  },

  loadQuestions() {
    const g = app.globalData;
    const subj = SUBJECTS[g.currentSubject];
    if (!subj) return;
    let qs = subj.questions;
    if (g.currentKp !== 'all') qs = qs.filter(q => q.kp === g.currentKp);
    if (g.currentType !== 'all') qs = qs.filter(q => q.type === g.currentType);

    const kpOptions = (subj.knowledgePoints || []).map(k => ({
      id: k.id, name: k.name, icon: k.icon
    }));

    const done = qs.filter(q => g.answers[q.id]).length;
    const correct = qs.filter(q => g.answers[q.id]?.ok).length;

    this.setData({
      questions: qs,
      answered: g.answers,
      marked: g.marked,
      currentSubj: g.currentSubject,
      currentKp: g.currentKp,
      currentType: g.currentType,
      kpOptions,
      stats: {
        total: qs.length,
        done,
        correct,
        rate: done > 0 ? Math.round(correct / done * 100) + '%' : '-'
      }
    });
  },

  // 选择题点击
  onSelectOption(e) {
    const { qid, oidx } = e.currentTarget.dataset;
    if (app.globalData.answers[qid]) return;
    const q = this.data.questions.find(q => q.id === qid);
    if (!q) return;

    const picked = 'ABCD'[oidx];
    const ok = picked === q.answer;
    const recorded = app.recordAnswer(qid, ok);

    const answered = { ...this.data.answered };
    answered[qid] = { ok, picked };
    this.setData({ answered });

    if (ok) {
      this.showToast('✅ 正确！+10 XP', 'ok');
    } else {
      this.showToast('❌ 再想想～ +2 XP', 'no');
      // 高亮正确答案
      wx.nextTick(() => {
        const ansIdx = q.options.indexOf(q.answer);
        // setTimeout to allow DOM update
      });
    }

    // 刷新统计
    const g = app.globalData;
    const done = this.data.questions.filter(q => g.answers[q.id]).length;
    const correct = this.data.questions.filter(q => g.answers[q.id]?.ok).length;
    this.setData({
      'stats.done': done,
      'stats.correct': correct,
      'stats.rate': done > 0 ? Math.round(correct / done * 100) + '%' : '-'
    });
  },

  // 填空题提交
  onSubmitFill(e) {
    const { qid } = e.currentTarget.dataset;
    if (app.globalData.answers[qid]) return;
    const q = this.data.questions.find(q => q.id === qid);
    if (!q) return;

    // In mini program, we need to get input value another way
    const val = this.data['fill_' + qid] || '';
    if (!val.trim()) return;

    const correctVals = String(q.answer).split('；').map(v => v.trim().toLowerCase());
    const ok = correctVals.some(cv => val.trim().toLowerCase().includes(cv) || cv.includes(val.trim().toLowerCase()));
    const recorded = app.recordAnswer(qid, ok);

    const answered = { ...this.data.answered };
    answered[qid] = { ok, picked: val.trim() };
    this.setData({ answered });

    if (ok) this.showToast('✅ 正确！+10 XP', 'ok');
    else this.showToast('❌ 再想想～ +2 XP', 'no');
  },

  onFillInput(e) {
    const { qid } = e.currentTarget.dataset;
    this.setData({ ['fill_' + qid]: e.detail.value });
  },

  // 切换答案显示
  onToggleAns(e) {
    const { qid } = e.currentTarget.dataset;
    const showAnswers = { ...this.data.showAnswers };
    showAnswers[qid] = !showAnswers[qid];
    this.setData({ showAnswers });
  },

  // 收藏
  onToggleStar(e) {
    const { qid } = e.currentTarget.dataset;
    app.toggleMark(qid);
    this.setData({ marked: app.globalData.marked });
  },

  // 切换知识点
  onSwitchKp(e) {
    app.globalData.currentKp = e.currentTarget.dataset.kp;
    this.loadQuestions();
  },

  // 切换科目
  onSwitchSubj(e) {
    app.globalData.currentSubject = e.currentTarget.dataset.subj;
    app.globalData.currentKp = 'all';
    this.loadQuestions();
  },

  // 随机一题
  onRandom() {
    if (!this.data.questions.length) return;
    const q = this.data.questions[Math.floor(Math.random() * this.data.questions.length)];
    const query = wx.createSelectorQuery();
    query.select('#q-' + q.id).boundingClientRect();
    query.exec(res => {
      if (res[0]) {
        wx.pageScrollTo({ scrollTop: res[0].top + (this.data.__scrollTop || 0) - 100, duration: 300 });
      }
    });
  },

  // 展开全部答案
  onRevealAll() {
    const showAnswers = {};
    this.data.questions.forEach(q => { showAnswers[q.id] = true; });
    this.setData({ showAnswers });
  },

  showToast(msg, type) {
    this.setData({ toast: { msg, type } });
    setTimeout(() => { this.setData({ toast: null }); }, 1800);
  }
});
