import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginPage from "pages/LoginPage";
import { URLs } from "common/constants";
import { MainPageWrapper } from "pages/common";
import RegistrationPage from "pages/RegistrationPage";
import SubjectsPage from "pages/SubjectsPage";
import SubjectPage from "./pages/SubjectPage";
import EumkPage from "./pages/EUMKPage";
import UsersPage from "./pages/UsersPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import CreateEumkPage from "./pages/CreateEumkPage";

function App() {
  return (
    <Router>
      <Switch>
        <MainPageWrapper>
          <Route path={ URLs.LOGIN }>
            <LoginPage/>
          </Route>
          <Route path={ URLs.REGISTRATION }>
            <RegistrationPage/>
          </Route>
          <Route exact path={ URLs.SUBJECTS + ":subjectId/:eumkId" }>
            <EumkPage/>
          </Route>
          <Route exact path={ URLs.SUBJECTS + ":subjectId" }>
            <SubjectPage/>
          </Route>
          <Route exact path={ URLs.SUBJECTS }>
            <SubjectsPage/>
          </Route>
          <Route exact path={ URLs.USERS }>
            <UsersPage/>
          </Route>
          <Route exact path={ URLs.USERS + ":userLogin" }>
            <UserDetailsPage/>
          </Route>
          <Route exact path={ URLs.EUMKS }>
            <CreateEumkPage/>
          </Route>
        </MainPageWrapper>
      </Switch>
    </Router>
  );
}

export default App;
