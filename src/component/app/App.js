import React, { Component } from "react";
import "./App.css";
import Header from "../app-header/app-header";
import ItemList from "../item-list/item-list";
import Body from "../app-body/app-body";
import Login from "../app-body-login/app-body-login";
import News from "../app-body-news/app-body-news";
import ProfileContainer from "../app-body-profile/app-body-profile-container";
import Footer from "../app-footer/app-footer";
import { BrowserRouter, Route } from "react-router-dom";
import LayoutEmpty from "../../layout/layout-empty";
import LayoutMain from "../../layout/layout-main";
import MainComponent from "../main-component/main-component"
import EmptyContainer from "../empty-component/empty-container"


const AppRoute = ({component:Component, layout:Layout, ...rest }) => {
  return (
    <Route {...rest} component={props => (
      <Layout>
        <Component {...props}/>
      </Layout>
    )}></Route>
  )
}

function App(props) {
  let empty = () => <EmptyContainer/>
  return(
    <BrowserRouter>
      <AppRoute  path="/user" layout={LayoutMain} component={MainComponent}>
        {/* {props.children} */}
      </AppRoute>
      <AppRoute exact path="/register" layout={LayoutEmpty} component={empty}></AppRoute>
    </BrowserRouter>
  )
}

export default App;

// export default class App extends Component {
//   constructor(props) {
//     super(props);

//   }
//   state = {
//     user: true,
//     userData: {
//       username: "",
//       password: "",
//     },
//   };

//   onValueChangeName = (e) => {
//     this.setState({
//       userData: {
//         username: e.target.value,
//         password: this.state.userData.password,
//       },
//     });
//     // debugger;
//   };

//   onValueChangePassword = (e) => {
//     this.setState({
//       userData: { 
//         username: this.state.userData.username,
//         password: e.target.value },
//     });
//   };

//   onSubmit = (e) => {
//     e.preventDefault();
//     // debugger;
//     const { dataRegistration } = this.props.appState;
//     if (
//       dataRegistration.username === this.state.userData.username &&
//       dataRegistration.password === this.state.userData.password
//     ) {
//       this.setState(
//           {user: true}
//       );
//       // debugger;
//     }
//   };

  

//   render() {
//     const renderBody = () => <Body usersData={this.props.appState.users.usersApp} massageData = {this.props.appState.users.dialogsApp}/>;
//     // debugger;
//     const renderNews = () => <News />;
//     const renderLogin = () => (
//       <Login
//         onSend={this.onSend}
//         onValueChangePassword={this.onValueChangePassword}
//         onValueChangeName={this.onValueChangeName}
//         onSubmit={this.onSubmit}
//       />
//     );
//     const renderProfile = () => <ProfileContainer/>;
//     let userComponent = renderLogin

//     let userPath = "/login";
//     // if (!this.state.user) {
//     //   this.props.appState.dataInterface[0].hideData = false;
//     //   this.props.appState.dataInterface[1].hideData = true;
//     // } else {
      
//     //   this.props.appState.dataInterface[0].hideData = true;
//     //   this.props.appState.dataInterface[1].hideData = false;
//     //   userComponent = renderProfile;
//     //   userPath = "/profile"; 
//     // }
//     // const { dataInterface, dataRegistration } = this.props.appState;

//     return (
//       <BrowserRouter>
//         <div className="App">
//           <Header />
//           <div className="body-content">
//             <div className="nav">
//               <ItemList dataInterface={dataInterface} />
//             </div>
//             <div className="content">
//               <Route exact path="/body" render={renderBody} />
//               <Route path="/news" render={renderNews} />
//               <Route path={userPath} render={userComponent}> 
//               </Route>
//             </div>
//           </div>
//           <Footer />
//         </div>
//       </BrowserRouter>
//     );
//   }
// }
