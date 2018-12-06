import Loadable from 'react-loadable';
import React from 'react';

const Loading = () => <div>Loading...</div>;

const HomePage = Loadable({
  loader: () => import('./Pages/HomePage'),
  loading: Loading,
});

const CoursesPage = Loadable({
  loader: () => import('./Pages/CoursesPage'),
  loading: Loading,
});

const Course = Loadable({
  loader: () => import('./Pages/Course'),
  loading: Loading,
});

const ProjectsPage = Loadable({
  loader: () => import('./Pages/ProjectsPage'),
  loading: Loading,
});

const Project = Loadable({
  loader: () => import('./Pages/Project'),
  loading: Loading,
});

const AboutPage = Loadable({
  loader: () => import('./Pages/AboutPage'),
  loading: Loading,
});

export { HomePage, CoursesPage, Course, ProjectsPage, Project, AboutPage };
