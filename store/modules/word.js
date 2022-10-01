export const state = {
  wordList: [],
  wordId: ''
};
export const mutations = {
  //储存单词list
  setWordList(state, data) {
    if (data) {
      state.wordList = data;
      // #ifdef H5
      window.sessionStorage.setItem('wordList', JSON.stringify(state.wordList));
      // #endif
      // #ifndef H5
      uni.setStorageSync('wordList', state.wordList);
      // #endif
    }
  },
  //储存单词id
  setWordId(state, data) {
    if (data) {
      state.wordId = data;
      // #ifdef H5
      window.sessionStorage.setItem('wordId', JSON.stringify(state.wordId));
      // #endif
      // #ifndef H5
      uni.setStorageSync('wordId', state.wordId);
      // #endif
    }
  },
  // 清空单词list
  emptyWordList() {
    state.wordList = [];
    // #ifdef H5
    window.sessionStorage.removeItem("wordList");
    // #endif
    // #ifndef H5
    uni.removeStorageSync("wordList");
    // #endif
  },
  // 清空单词id
  emptyWorId() {
    state.wordId = '';
    // #ifdef H5
    window.sessionStorage.removeItem("wordId");
    // #endif
    // #ifndef H5
    uni.removeStorageSync("wordId");
    // #endif
  },
};
export const actions = {

};
