import React from "react";
import "hint.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// font awessome Fonts
import "@fortawesome/fontawesome-free/css/all.css";
// Layout Components
// Scenes Components Importation
import Home from "./scenes/Home/Home.jsx";
import Services from "./scenes/Services/Services.jsx";
import Blog from "./scenes/Blog/Blog.jsx";
import Contact from "./scenes/Contact/Contact.jsx";
import About from "./scenes/About/About.jsx";
import Admin from "./scenes/AdminDashbord/Admin";
import GenerlaAnalystics from "./components/GeneralAnalyDashbord/GenerlaAnalystics";
import UserInteraction from "./components/GeneralAnalyDashbord/UserInteraction";
import Finance from "./components/Finance/Finance.jsx";

import ToursManagement from "./scenes/ToursManagement/ToursManagement";
import ProductsManagement from "./scenes/ProductsManagement/ProductsManagement";
import EmployeesManagement from "./scenes/EmployeesManagement/EmployeesManagement";
import TasksManagement from "./scenes/TasksManagement/TasksManagement";
import Crm from "./scenes/Crm/Crm.jsx";
import Billing from "./components/BillingInvoiceOrder/BillingInvoiceOrder.jsx";
import ProfileEmployee from "./scenes/ProfileEmployee/ProfileEmployee.jsx";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo.jsx";
import JobEmployee from "./components/JobEmployee/JobEmployee.jsx";
import MessageProfile from "./components/MessageProfile/MessageProfile.jsx";
import ProfileTasks from "./components/ProfileTasks/ProfileTasks.jsx";
import TableTasks from "./components/ProfileTasks/TableTasks.jsx";
function App() {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/"></Route>
        <Route component={Services} path="/services"></Route>
        <Route component={Blog} path="/blog"></Route>
        <Route component={Contact} path="/contact"></Route>
        <Route component={About} path="/about"></Route>

        <Route
          path="/admin/tours"
          render={(props) => (
            <Admin
              active="Analytics and Statistics"
              content={<GenerlaAnalystics />}
            />
          )}
        />

        <Route
          path="/admin/profileEmployee"
          render={(props) => (
            <Admin
              active="Travel CRM"
              content={
                <ProfileEmployee
                  isActive="profile"
                  childContent={<PersonalInfo />}
                />
              }
            />
          )}
        />
        <Route
          path="/admin/profileTasks/new"
          render={(props) => (
            <Admin
              active="Travel CRM"
              content={
                <ProfileEmployee
                  isActive="task"
                  childContent={
                    <ProfileTasks
                      active="new"
                      childContent={
                        <TableTasks active="new" className="absolute" />
                      }
                    />
                  }
                />
              }
            />
          )}
        />
        <Route
          path="/admin/profileTasks/prog"
          render={(props) => (
            <Admin
              active="Travel CRM"
              content={
                <ProfileEmployee
                  isActive="task"
                  childContent={
                    <ProfileTasks
                      active="prog"
                      childContent={
                        <TableTasks active="prog" className="absolute" />
                      }
                    />
                  }
                />
              }
            />
          )}
        />
        <Route
          path="/admin/profileTasks/finish"
          render={(props) => (
            <Admin
              active="Travel CRM"
              content={
                <ProfileEmployee
                  isActive="task"
                  childContent={
                    <ProfileTasks
                      active="finish"
                      childContent={
                        <TableTasks active="finish" className="absolute" />
                      }
                    />
                  }
                />
              }
            />
          )}
        />
        <Route
          path="/admin/profileTasks/cancel"
          render={(props) => (
            <Admin
              active="Travel CRM"
              content={
                <ProfileEmployee
                  childContent={
                    <ProfileTasks
                      active="cancel"
                      childContent={
                        <TableTasks active="cancel" className="absolute" />
                      }
                    />
                  }
                />
              }
            />
          )}
        />
        <Route
          path="/admin/jobEmployee"
          render={(props) => (
            <Admin
              active="Travel CRM"
              content={
                <ProfileEmployee
                  isActive="job"
                  childContent={<JobEmployee />}
                />
              }
            />
          )}
        />
        <Route
          path="/admin/messages"
          render={(props) => (
            <Admin
              active="Travel CRM"
              content={
                <ProfileEmployee
                  isActive="messages"
                  childContent={<MessageProfile />}
                />
              }
            />
          )}
        />
        <Route
          path="/admin/employees"
          render={(props) => (
            <Admin active="HR management" content={<EmployeesManagement />} />
          )}
        />
        <Route
          path="/admin/billing"
          render={(props) => (
            <Admin active="Travel CRM" content={<Billing />} />
          )}
        />
        <Route
          path="/admin/crm"
          render={(props) => <Admin active="Travel CRM" content={<Crm />} />}
        />

        <Route
          path="/admin/tasks"
          render={(props) => (
            <Admin active="HR management" content={<TasksManagement />} />
          )}
        />
        {/* Mustapha Routes */}

        {/* Refactored */}
        <Route
          path="/admin/tmanagement"
          render={(props) => (
            <Admin active="HR management" content={<ToursManagement />} />
          )}
        />

        <Route
          path="/admin/pmanagement"
          render={(props) => (
            <Admin active="HR management" content={<ProductsManagement />} />
          )}
        />

        {/* --------------------------------------------- */}
        <Route
          path="/admin/finance"
          render={(props) => (
            <Admin active="Finance management" content={<Finance />} />
          )}
        />
        <Route
          path="/admin/users"
          render={(props) => (
            <Admin
              active="Analytics and Statistics"
              content={<UserInteraction />}
            />
          )}
        />
        <Redirect from="/admin" to="/admin/tours" />
      </Switch>
    </Router>
  );
}

export default App;
