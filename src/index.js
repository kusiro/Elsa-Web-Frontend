import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';

/* eslint-disable */
import HomePage from './route/HomePage';
import AboutPage from './route/AboutPage';
import CoursesPage from './route/CoursesPage';
import CourseContent from './route/CourseContent';
import PdfPage from './route/PdfPage';
import PublicationsPage from './route/PublicationsPage';
import Project from './route/Project';
import ProjectsPage from './route/ProjectsPage';
import NewsPage from './route/NewsPage';
import NewContent from './route/NewContent';
import LoginPage from './route/LoginPage';
import Logout from './route/Logout';
import RegisterPage from './route/RegisterPage';
import AccountPage from './route/AccountPage';

// Management
import Template from './Template/Template';
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

import publicationIndex from './Management/Publications/Index/Index';
import publicationNew from './Management/Publications/New/New';
import publicationShow from './Management/Publications/Show/Show';
import publicationEdit from './Management/Publications/Edit/Edit';

import newsIndex from './Management/News/Index/Index';
import newsNew from './Management/News/New/New';
import newsShow from './Management/News/Show/Show';
import newsEdit from './Management/News/Edit/Edit';

// router setting
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Template}>
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
