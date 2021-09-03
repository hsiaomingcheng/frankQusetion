import React from 'react';

export const routes = [
  {
    name: '首頁',
    path: '/',
    component: React.lazy(() =>
      import(
        /*webpackChunkName:"Home"*/ /*webpackMode:"lazy"*/ '@page/Home/Home'
      )
    ),
    exact: true,
  },
  {
    name: '最新消息',
    path: '/news',
    component: React.lazy(() =>
      import(
        /*webpackChunkName:"NetWork"*/ /*webpackMode:"lazy"*/ '@page/NetWork/NetWork'
      )
    ),
  },
  {
    name: '登入頁',
    path: '/login',
    component: React.lazy(() =>
      import(
        /*webpackChunkName:"Job"*/ /*webpackMode:"lazy"*/ '@page/Job/Job'
      )
    ),
  },
  {
    name: '註冊頁',
    path: '/register',
    component: React.lazy(() =>
      import(
        /*webpackChunkName:"Message"*/ /*webpackMode:"lazy"*/ '@page/Message/Message'
      )
    ),
  },
  {
    name: '找不到頁面',
    path: '*',
    component: React.lazy(() =>
      import(
        /*webpackChunkName:"Notice"*/ /*webpackMode:"lazy"*/ '@page/Notice/Notice'
      )
    ),
  },
];