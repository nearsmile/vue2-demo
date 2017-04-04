const notepad = r => require.ensure([], () => r(require('../page/notepad')), 'notepad');

export default {
  path: '/notepad',
  name: 'Notepad',
  component: notepad
}