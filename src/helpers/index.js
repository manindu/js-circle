export const getTitleLabel = tag => {
  switch(tag) {
    case 'javascript':
      return 'JavaScript';
    case 'react':
      return 'React';
    case 'angular':
      return 'Angular';
    case 'node':
      return 'Node.js';
    case 'vue':
      return 'Vue.js';
    default:
      return tag;
  }
}