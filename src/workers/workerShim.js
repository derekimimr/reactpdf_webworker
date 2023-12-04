if (typeof WorkerGlobalScope !== 'undefined') {
  self.global = self;
  self.window = self;
}

import RefreshRuntime from '/@react-refresh';
if (import.meta.env.DEV) {
  RefreshRuntime.injectIntoGlobalHook(window);
  window.$RefreshReg$ = () => {};
  window.$RefreshSig$ = () => (type) => type;
  window.__vite_plugin_react_preamble_installed__ = true;
}

//! If using create-react-app
// import RefreshRuntime from 'react-refresh/runtime';
// if (process.env.NODE_ENV === 'development') {
//   RefreshRuntime.injectIntoGlobalHook(window);
//   window.$RefreshReg$ = () => {};
//   window.$RefreshSig$ = () => (type) => type;
//   window.__vite_plugin_react_preamble_installed__ = true;