export const ROUTES = [
  {path: '/dashboard', title: '面板', icon: 'dashboard', children: null},
  {path: 'profile', title: '个人信息', icon: 'person', children: null},
  {
    path: '#project', id: 'project', title: '标的', icon: 'apps', children: [
      {path: 'project/loanApply', title: '借款申请', icon: 'W'},
      {path: 'project/firstCheck', title: '待初审', icon: 'PT'},
      {path: 'project/secondCheck', title: '待复审', icon: 'P'},
      {path: 'project/tendering', title: '招标中', icon: 'W'},
      {path: 'project/repay', title: '还款中', icon: 'W'},
      {path: 'project/finished', title: '已结束', icon: 'W'}

    ]
  },
  {
    path: '#process', id: 'process', title: '流程', icon: 'apps', children: [
      {path: 'processes/my', title: '发起的流程', icon: 'PT'},
      {path: 'processes/unhandled', title: '未处理的流程', icon: 'P'},
      {path: 'processes/handled', title: '已处理的流程', icon: 'W'},
      {path: 'processes/end', title: '已结束', icon: 'W'},
      {path: 'processes/loan', title: '借款申请', icon: 'W'},
      {path: 'processes/project', title: '项目', icon: 'W'},
    ]
  },
  {
    path: '#permission', id: 'permission', title: '权限管理', icon: 'apps', children: [
      {path: 'permissions/user', title: '用户管理', icon: 'PT'},
      {path: 'permissions/role', title: '角色管理', icon: 'P'},
      {path: 'permissions/permission', title: '权限管理', icon: 'W'},
    ]
  },
  {path: 'notification', title: '通知', icon: 'notifications', children: null},
  {path: 'alert', title: '报警', icon: 'warning', children: null},
  {path: 'settings', title: '设置', icon: 'settings', children: null},
];
