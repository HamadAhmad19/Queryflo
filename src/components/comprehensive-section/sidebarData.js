// Sidebar navigation data array
export const sidebarItems = [
  { id: 'introduction-of-sql', title: 'Introduction of SQL', component: 'IntroductionOfSQL' },
  { id: 'sql-terminologies', title: 'SQL Terminologies', component: 'SQLTerminologies' },
  { id: 'sql-data-types', title: 'SQL Data Types', component: 'SQLDataTypes' },
  { id: 'er-diagram-data-model', title: 'ER Diagram & Data Model', component: 'ERDiagramDataModel' },
  { id: 'categories-of-sql-command', title: 'Categories Of SQL Command', component: 'CategoriesOfSQLCommand' },
  { id: 'basic-sql-command', title: 'Basic SQL Command', component: 'BasicSQLCommand' },
  { id: 'intermediate-sql-command', title: 'Intermediate SQL Command', component: 'IntermediateSQLCommand' },
  { id: 'acid-properties-of-transaction', title: 'ACID Properties Of Transaction', component: 'ACIDPropertiesOfTransaction' },
  { id: 'advanced-sql-command', title: 'Advanced SQL Command', component: 'AdvancedSQLCommand' },
  { id: 'common-window-functions', title: 'Common Window Functions', component: 'CommonWindowFunctions' }
];

// Dynamic component mapping
export const componentMap = {
  'introduction-of-sql': () => import('./content/IntroductionOfSQL'),
  'sql-terminologies': () => import('./content/SQLTerminologies'),
  'sql-data-types': () => import('./content/SQLDataTypes'),
  'er-diagram-data-model': () => import('./content/ERDiagramDataModel'),
  'categories-of-sql-command': () => import('./content/CategoriesOfSQLCommand'),
  'basic-sql-command': () => import('./content/BasicSQLCommand'),
  'intermediate-sql-command': () => import('./content/IntermediateSQLCommand'),
  'acid-properties-of-transaction': () => import('./content/ACIDPropertiesOfTransaction'),
  'advanced-sql-command': () => import('./content/AdvancedSQLCommand'),
  'common-window-functions': () => import('./content/CommonWindowFunctions')
};