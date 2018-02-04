export const ROUTES = [
  {path: '/dashboard', title: '面板', icon: 'dashboard', children: null},
  {path: 'profile', title: '个人信息', icon: 'person', children: null},
  {
    path: '#process', id: 'process', title: '流程', icon: 'apps', children: [
      {path: 'process/price-table', title: 'Price Table', icon: 'PT'},
      {path: 'process/panels', title: 'Panels', icon: 'P'},
      {path: 'process/wizard', title: 'Wizard', icon: 'W'},
    ]
  },
  {
    path: '#permission', id: 'permission', title: '权限管理', icon: 'apps', children: [
      {path: 'permission/user', title: '用户管理', icon: 'PT'},
      {path: 'permission/role', title: '角色管理', icon: 'P'},
      {path: 'permission/permission', title: '权限管理', icon: 'W'},
    ]
  },
  {path: 'notification', title: '通知', icon: 'notifications', children: null},
  {path: 'alert', title: '报警', icon: 'warning', children: null},
  {path: 'settings', title: '设置', icon: 'settings', children: null},
];
