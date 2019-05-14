import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Template from './Template/Template';

import Members from './Members/Members';
import Contact from './Contact/Contact';

import newsIndex from './Management/News/Index/Index';
import newsNew from './Management/News/New/New';
import newsShow from './Management/News/Show/Show';
import newsEdit from './Management/News/Edit/Edit';

import publicationIndex from './Management/Publications/Index/Index';
import publicationNew from './Management/Publications/New/New';
import publicationShow from './Management/Publications/Show/Show';
import publicationEdit from './Management/Publications/Edit/Edit';

import homeSetting from './Management/HomePage/Index';

import userIndex from './Management/Users/Index/Index';
import userNew from './Management/Users/New/New';
import userShow from './Management/Users/Show/Show';

import courseIndex from './Management/Courses/Index/Index';
import courseNew from './Management/Courses/New/New';
import courseEdit from './Management/Courses/Edit/Edit';
import courseShow from './Management/Courses/Show/Show';
import contentNew from './Management/Courses/Content/New/New';
import contentShow from './Management/Courses/Content/Show/Show';
import contentEdit from './Management/Courses/Content/Edit/Edit';
import lectureNew from './Management/Courses/Content/Lecture/New/New';
import lectureShow from './Management/Courses/Content/Lecture/Show/Show';
import lectureEdit from './Management/Courses/Content/Lecture/Edit/Edit';

// import {
//   AboutPage,
//   CourseContent,
//   CoursesPage,
//   PdfPage,
//   HomePage,
//   Project,
//   ProjectsPage,
//   LoginPage,
//   Logout,
//   AccountPage,
// } from './terry/route/DynamicLoad';

import HomePage from './terry/route/Pages/HomePage';
import AboutPage from './terry/route/Pages/AboutPage';
import CoursesPage from './terry/route/Pages/CoursesPage';
import CourseContent from './terry/route/Pages/CourseContent';
import PdfPage from './terry/route/Pages/PdfPage';
import PublicationsPage from './terry/route/Pages/PublicationsPage';
import Project from './terry/route/Pages/Project';
import ProjectsPage from './terry/route/Pages/ProjectsPage';
import NewsPage from './terry/route/Pages/NewsPage';
import NewContent from './terry/route/Pages/NewContent';
import LoginPage from './terry/route/Pages/LoginPage';
import Logout from './terry/route/Pages/Logout';
import RegisterPage from './terry/route/Pages/RegisterPage';
import AccountPage from './terry/route/Pages/AccountPage';

// router setting
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Template}>
      {/* New */}
      <IndexRoute component={HomePage} />
      <Route exact path="/" component={HomePage} />
      <Route path="/courses" component={CoursesPage} />
      <Route
        path="/courses(/:course_id)/contents(/:content_id)"
        component={CourseContent}
      />
      <Route
        path="/courses(/:course_id)/contents(/:content_id)/lectures(/:lecture_id)/files(/:file_id)"
        component={PdfPage}
      />
      <Route path="/publications" component={PublicationsPage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/project(/:name)" component={Project} />
      <Route path="/news" component={NewsPage} />
      <Route path="/news(/:news_id)" component={NewContent} />
      <Route path="/about" component={AboutPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/logout" component={Logout} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/account" component={AccountPage} />

      {/* Origin */}
      <Route path="/members" component={Members} />
      <Route path="/contact" component={Contact} />
      <Route path="/management" component={userIndex} />
      <Route path="/management/news" component={newsIndex} />
      <Route path="/management/news/new" component={newsNew} />
      <Route path="/management/news/:news_id" component={newsShow} />
      <Route path="/management/news/:news_id/edit" component={newsEdit} />
      <Route path="/management/publications" component={publicationIndex} />
      <Route path="/management/publications/new" component={publicationNew} />
      <Route
        path="/management/publications/:publication_id"
        component={publicationShow}
      />
      <Route
        path="/management/publications/:publication_id/edit"
        component={publicationEdit}
      />
      <Route path="/management/home_setting" component={homeSetting} />
      <Route path="/management/users" component={userIndex} />
      <Route path="/management/user/new" component={userNew} />
      <Route path="/management/user/:user_id" component={userShow} />
      <Route path="/management/courses" component={courseIndex} />
      <Route path="/management/course/new" component={courseNew} />
      <Route
        path="/management/courses/:course_id/edit"
        component={courseEdit}
      />
      <Route path="/management/courses/:course_id" component={courseShow} />
      <Route
        path="/management/courses/:course_id/contents/new"
        component={contentNew}
      />
      <Route
        path="/management/courses(/:course_id)/contents(/:content_id)"
        component={contentShow}
      />
      <Route
        path="/management/courses(/:course_id)/contents(/:content_id)/edit"
        component={contentEdit}
      />
      <Route
        path="/management/courses(/:course_id)/contents(/:content_id)/lectures/new"
        component={lectureNew}
      />
      <Route
        path="/management/courses(/:course_id)/contents(/:content_id)/lectures(/:lecture_id)/edit"
        component={lectureEdit}
      />
      <Route
        path="/management/courses(/:course_id)/contents(/:content_id)/lectures(/:lecture_id)"
        component={lectureShow}
      />
    </Route>
  </Router>,
  document.getElementById('app')
);
