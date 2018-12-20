import Loadable from 'react-loadable';
import React from 'react';

export const Loading = () => <div>Loading...</div>;

export const HomePage = Loadable({
  loader: () => import('./Pages/HomePage'),
  loading: Loading,
});

export const CoursesPage = Loadable({
  loader: () => import('./Pages/CoursesPage'),
  loading: Loading,
});

export const CourseContent = Loadable({
  loader: () => import('./Pages/CourseContent'),
  loading: Loading,
});

export const PdfPage = Loadable({
  loader: () => import('./Pages/PdfPage'),
  loading: Loading,
});

export const ProjectsPage = Loadable({
  loader: () => import('./Pages/ProjectsPage'),
  loading: Loading,
});

export const Project = Loadable({
  loader: () => import('./Pages/Project'),
  loading: Loading,
});

export const AboutPage = Loadable({
  loader: () => import('./Pages/AboutPage'),
  loading: Loading,
});

export const LoginPage = Loadable({
  loader: () => import('./Pages/LoginPage'),
  loading: Loading,
});

export const Logout = Loadable({
  loader: () => import('./Pages/Logout'),
  loading: Loading,
});
