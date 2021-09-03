import React from 'react';
import styles from './App.module.css';
import {Route} from "react-router-dom";
import {Header} from "../Header/Header";
import {Navbar} from "../Navbar/Navbar";
import {News} from "../News/News";
import {Music} from "../Music/Music";
import {Settings} from '../Settings/Settings';
import {Dialogs} from "../Dialogs/Dialogs";
import {Profile} from "../Profile/Profile";
import {StateType} from "../../redux/state";

type PropsType = {
    state: StateType
}

const App = (props: PropsType) => {
  return (
      <div className={styles.appWrapper}>
          <Header/>
          <Navbar state={props.state.navbar}/>
        <div className={styles.appContentWrapper}>
          <Route path="/news" component={News}/>
          <Route path="/music" component={Music}/>
          <Route path="/settings" component={Settings}/>

          <Route path="/profile"
                 render={() => <Profile
                     state={props.state.profilePage}/>}
          />
          <Route path="/dialogs"
                 render={() => <Dialogs
                     state={props.state.dialogsPage} />}
          />
        </div>
      </div>
  )
}

export default App;