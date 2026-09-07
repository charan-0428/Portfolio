import { projects } from './site';

export { projects };

export const projectCategories = ['All', ...new Set(projects.map((p) => p.category))];

export default projects;
