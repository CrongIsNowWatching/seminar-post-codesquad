class useDispatchInit {
  constructor() {
    this.appStore = null;
  }
  init (appStore) {
    this.appStore = appStore;
  }
  useDispatch(storeName) {
    return this.appStore[storeName].dispatch;
  }
  useSelector(selectFunc) {
    return selectFunc(this.appStore);
  }
  
  useSubscribe(storeName) {
    return this.appStore[storeName].subscribe;
  }
}

const myStore = new useDispatchInit();
const initStore = myStore.init.bind(myStore);

const useDispatch = (storeName) => {
  return myStore.useDispatch(storeName);
}

const useSelector = (selectFunc) => {
  return myStore.useSelector(selectFunc)
}

const useSubscribe = (storeName) => {
  return myStore.useSubscribe(storeName);
}

export { initStore, useDispatch, useSelector, useSubscribe };