// import { useLocation } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const AdminPanel = () => {

// const location = useLocation();
// const from = location.state?.from?.pathname || "/"

  return (
    <div>
       <div className="container-scroller text-yellow-500">

{/* drawer seciton */}
       <nav className="sidebar sidebar-offcanvas" id="sidebar">
         <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
           <a className="sidebar-brand brand-logo" href="index.html"><img src="assets/images/images.png" alt="logo" /></a>
         </div>
         <ul className="nav">
           <li className="nav-item nav-category">
             <span className="nav-link">Navigation</span>
           </li>
   
           <li className="nav-item menu-items">
             <a className="nav-link" href="index.html">
               <span className="menu-icon">
                 <i className="mdi mdi-speedometer"></i>
               </span>
               <span className="menu-title">Option-1</span>
             </a>
           </li>
   
   
           <li className="nav-item menu-items mt-2">
             <a className="nav-link" href="index.html">
               <span className="menu-icon">
                 <i className="mdi mdi-speedometer"></i>
               </span>
               <span className="menu-title">Option-2</span>
             </a>
           </li>
   
   
           <li className="nav-item menu-items mt-2">
             <a className="nav-link" href="index.html">
               <span className="menu-icon">
                 <i className="mdi mdi-speedometer"></i>
               </span>
               <span className="menu-title">Option-3</span>
             </a>
           </li>
   
   
           <li className="nav-item menu-items mt-2">
             <a className="nav-link" href="index.html">
               <span className="menu-icon">
                 <i className="mdi mdi-speedometer"></i>
               </span>
               <span className="menu-title">Option-4</span>
             </a>
           </li>
   
   
           <li className="nav-item menu-items mt-2">
             <a className="nav-link" href="index.html">
               <span className="menu-icon">
                 <i className="mdi mdi-speedometer"></i>
               </span>
               <span className="menu-title">Option-5</span>
             </a>
           </li>
   
   
           <li className="nav-item menu-items mt-2">
             <a className="nav-link" href="index.html">
               <span className="menu-icon">
                 <i className="mdi mdi-speedometer"></i>
               </span>
               <span className="menu-title">Option-6</span>
             </a>
           </li>
   
   
           <li className="nav-item menu-items mt-2">
             <a className="nav-link" href="index.html">
               <span className="menu-icon">
                 <i className="mdi mdi-speedometer"></i>
               </span>
               <span className="menu-title">Option-7</span>
             </a>
           </li>
   
   
           <li className="nav-item menu-items mt-2">
             <a className="nav-link" href="index.html">
               <span className="menu-icon">
                 <i className="mdi mdi-speedometer"></i>
               </span>
               <span className="menu-title">Option-8</span>
             </a>
           </li>
   
   
           <li className="nav-item menu-items mt-2">
             <a className="nav-link" href="index.html">
               <span className="menu-icon">
                 <i className="mdi mdi-speedometer"></i>
               </span>
               <span className="menu-title">Option-9</span>
             </a>
           </li>
   
   
           <li className="nav-item menu-items mt-2">
             <a className="nav-link" href="index.html">
               <span className="menu-icon">
                 <i className="mdi mdi-speedometer"></i>
               </span>
               <span className="menu-title">Option-10</span>
             </a>
           </li>
   
   
           <li className="nav-item menu-items">
             <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
               <span className="menu-icon">
                 <i className="mdi mdi-laptop"></i>
               </span>
               <span className="menu-title">Student Information</span>
               <i className="menu-arrow"></i>
             </a>
             <div className="collapse" id="ui-basic">
               <ul className="nav flex-column sub-menu">
                 <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Local Student</a></li>
                 <li className="nav-item"> <a className="nav-link" href="pages/ui-features/dropdowns.html">Out-District Student</a>
                 </li>
                 <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Foreign student</a>
                 </li>
               </ul>
             </div>
           </li>
           <li className="nav-item menu-items">
             <a className="nav-link" href="pages/forms/basic_elements.html">
               <span className="menu-icon">
                 <i className="mdi mdi-playlist-play"></i>
               </span>
               <span className="menu-title">Teachers</span>
             </a>
           </li>
           <li className="nav-item menu-items">
             <a className="nav-link" href="pages/tables/basic-table.html">
               <span className="menu-icon">
                 <i className="mdi mdi-table-large"></i>
               </span>
               <span className="menu-title">Employee</span>
             </a>
           </li>
           <li className="nav-item menu-items">
             <a className="nav-link" href="pages/charts/chartjs.html">
               <span className="menu-icon">
                 <i className="mdi mdi-chart-bar"></i>
               </span>
               <span className="menu-title">Tution Fees</span>
             </a>
           </li>
           <li className="nav-item menu-items">
             <a className="nav-link" href="pages/charts/chartjs.html">
               <span className="menu-icon">
                 <i className="mdi mdi-chart-bar"></i>
               </span>
               <span className="menu-title">Salary</span>
             </a>
           </li>
           <li className="nav-item menu-items">
             <a className="nav-link" href="pages/charts/chartjs.html">
               <span className="menu-icon">
                 <i className="mdi mdi-chart-bar"></i>
               </span>
               <span className="menu-title">Syllubus</span>
             </a>
           </li>
           <li className="nav-item menu-items">
             <a className="nav-link" href="pages/icons/mdi.html">
               <span className="menu-icon">
                 <i className="mdi mdi-contacts"></i>
               </span>
               <span className="menu-title">Routine</span>
             </a>
           </li>
           <li className="nav-item menu-items">
             <a className="nav-link" data-bs-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
               <span className="menu-icon">
                 <i className="mdi mdi-security"></i>
               </span>
               <span className="menu-title">Examinations</span>
               <i className="menu-arrow"></i>
             </a>
             <div className="collapse" id="auth">
               <ul className="nav flex-column sub-menu">
                 <li className="nav-item"> <a className="nav-link" href="pages/samples/blank-page.html"> Blank Page </a></li>
                 <li className="nav-item"> <a className="nav-link" href="pages/samples/error-404.html"> 404 </a></li>
                 <li className="nav-item"> <a className="nav-link" href="pages/samples/error-500.html"> 500 </a></li>
                 <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Login </a></li>
                 <li className="nav-item"> <a className="nav-link" href="pages/samples/register.html"> Register </a></li>
               </ul>
             </div>
           </li>
           <li className="nav-item menu-items">
             <a className="nav-link"
               href="http://www.bootstrapdash.com/demo/corona-free/jquery/documentation/documentation.html">
               <span className="menu-icon">
                 <i className="mdi mdi-file-document-box"></i>
               </span>
               <span className="menu-title">Notice</span>
             </a>
           </li>
   
         </ul>
       </nav>
   
{/*  full body  */}
       <div className="container-fluid page-body-wrapper">
   
{/* full body navbar*/}
         <nav className="navbar p-0 fixed-top d-flex flex-row">
           <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
             <a className="navbar-brand brand-logo-mini" href="index.html"><img src="assets/images/logo-mini.svg"
                 alt="logo" /></a>
           </div>
           <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
             <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
               <span className="mdi mdi-menu"></span>
             </button>
             <ul className="navbar-nav w-100">
               <li className="nav-item w-100">
                 <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
                   <input type="text" className="form-control" placeholder="Search products"/>
                 </form>
               </li>
             </ul>
             <ul className="navbar-nav navbar-nav-right">
   
               <li className="nav-item dropdown border-left">
                 <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#"
                   data-bs-toggle="dropdown" aria-expanded="false"><a/>
                   <i className="mdi mdi-email"></i>
                   <span className="count bg-success"></span>
                 </a>
{/* messages option  */}
                 <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                   aria-labelledby="messageDropdown">
                   <h6 className="p-3 mb-0">Messages</h6>
                   <div className="dropdown-divider"></div>
                   <a className="dropdown-item preview-item">
                     <div className="preview-thumbnail">
                       <img src="assets/images/faces/face4.jpg" alt="image" className="rounded-circle profile-pic"/>
                     </div>
                     <div className="preview-item-content">
                       <p className="preview-subject ellipsis mb-1">Mark send you a message</p>
                       <p className="text-muted mb-0"> 1 Minutes ago </p>
                     </div>
                   </a>
                   <div className="dropdown-divider"></div>
                   <a className="dropdown-item preview-item">
                     <div className="preview-thumbnail">
                       <img src="assets/images/faces/face2.jpg" alt="image" className="rounded-circle profile-pic"/>
                     </div>
                     <div className="preview-item-content">
                       <p className="preview-subject ellipsis mb-1">Cregh send you a message</p>
                       <p className="text-muted mb-0"> 15 Minutes ago </p>
                     </div>
                   </a>
                   <div className="dropdown-divider"></div>
                   <a className="dropdown-item preview-item">
                     <div className="preview-thumbnail">
                       <img src="assets/images/faces/face3.jpg" alt="image" className="rounded-circle profile-pic"/>
                     </div>
                     <div className="preview-item-content">
                       <p className="preview-subject ellipsis mb-1">Profile picture updated</p>
                       <p className="text-muted mb-0"> 18 Minutes ago </p>
                     </div>
                   </a>
                   <div className="dropdown-divider"></div>
                   <p className="p-3 mb-0 text-center">4 new messages</p>
                 </div>
               </li>
{/* notifincation section   */}
               <li className="nav-item dropdown border-left">
                 <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#"
                   data-bs-toggle="dropdown">
                   <i className="mdi mdi-bell"></i>
                   <span className="count bg-danger"></span>
                 </a>
                 <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                   aria-labelledby="notificationDropdown">
                   <h6 className="p-3 mb-0">Notifications</h6>
                   <div className="dropdown-divider"></div>
                   <a className="dropdown-item preview-item">
                     <div className="preview-thumbnail">
                       <div className="preview-icon bg-dark rounded-circle">
                         <i className="mdi mdi-calendar text-success"></i>
                       </div>
                     </div>
                     <div className="preview-item-content">
                       <p className="preview-subject mb-1">Event today</p>
                       <p className="text-muted ellipsis mb-0"> Just a reminder that you have an event today </p>
                     </div>
                   </a>
                   <div className="dropdown-divider"></div>
                   <a className="dropdown-item preview-item">
                     <div className="preview-thumbnail">
                       <div className="preview-icon bg-dark rounded-circle">
                         <i className="mdi mdi-settings text-danger"></i>
                       </div>
                     </div>
                     <div className="preview-item-content">
                       <p className="preview-subject mb-1">Settings</p>
                       <p className="text-muted ellipsis mb-0"> Update dashboard </p>
                     </div>
                   </a>
                   <div className="dropdown-divider"></div>
                   <a className="dropdown-item preview-item">
                     <div className="preview-thumbnail">
                       <div className="preview-icon bg-dark rounded-circle">
                         <i className="mdi mdi-link-variant text-warning"></i>
                       </div>
                     </div>
                     <div className="preview-item-content">
                       <p className="preview-subject mb-1">Launch Admin</p>
                       <p className="text-muted ellipsis mb-0"> New admin wow! </p>
                     </div>
                   </a>
                   <div className="dropdown-divider"></div>
                   <p className="p-3 mb-0 text-center">See all notifications</p>
                 </div>
               </li>
   
               <li className="nav-item dropdown">
                 <a className="nav-link" id="profileDropdown" href="#" data-bs-toggle="dropdown">
                   <div className="navbar-profile">
                     <img className="img-xs rounded-circle" src="assets/images/faces/164798-.jpg" alt=""/>
                     <p className="mb-0 d-none d-sm-block navbar-profile-name">Fresh Meal</p>
                     <i className="mdi mdi-menu-down d-none d-sm-block"></i>
                   </div>
                 </a>
                 <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                   aria-labelledby="profileDropdown">
                   <h6 className="p-3 mb-0">Profile</h6>
                   <div className="dropdown-divider"></div>
   
                   <a className="dropdown-item preview-item">
                     <div className="preview-thumbnail">
                       <div className="preview-icon bg-dark rounded-circle">
                         <i className="mdi mdi-settings text-success"></i>
                       </div>
                     </div>
                     <div className="preview-item-content">
                       <p className="preview-subject mb-1">Account Settings</p>
                     </div>
                   </a>
                   <div className="dropdown-divider"></div>
   
                   <a href="#" className="dropdown-item preview-item">
                     <div className="preview-thumbnail">
                       <div className="preview-icon bg-dark rounded-circle">
                         <i className="mdi mdi-onepassword  text-info"></i>
                       </div>
                     </div>
   
                     <div className="preview-item-content">
                       <p className="preview-subject ellipsis mb-1 text-small">Change Password</p>
                     </div>
                   </a>
                   <div className="dropdown-divider"></div>
   
   
   
                   <a className="dropdown-item preview-item">
                     <div className="preview-thumbnail">
                       <div className="preview-icon bg-dark rounded-circle">
                         <i className="mdi mdi-logout text-danger"></i>
                       </div>
                     </div>
                     <div className="preview-item-content">
                       <p className="preview-subject mb-1">Log out</p>
                     </div>
                   </a>
                   <div className="dropdown-divider"></div>
   
                 </div>
               </li>
             </ul>
             <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
               data-toggle="offcanvas">
               <span className="mdi mdi-format-line-spacing"></span>
             </button>
           </div>
         </nav>

{/* full body contant  */}
         <div className="main-panel">
           <div className="content-wrapper">
{/* full body row section   */}
             <div className="row">
               <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
                 <div className="card">
                   <div className="card-body">
                     <div className="row">
                       <div className="col-9">
                         <div className="d-flex align-items-center align-self-start">
                           <h3 className="mb-0">1012</h3>
                         </div>
                       </div>
                       <div className="col-3">
                         <div className="icon icon-box-success ">
                           <span className="mdi mdi-arrow-top-right icon-item"></span>
                         </div>
                       </div>
                     </div>
                     <h6 className="text-muted font-weight-normal">Current Students</h6>
                   </div>
                 </div>
               </div>
               <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
                 <div className="card">
                   <div className="card-body">
                     <div className="row">
                       <div className="col-9">
                         <div className="d-flex align-items-center align-self-start">
                           <h3 className="mb-0">50</h3>
                         </div>
                       </div>
                       <div className="col-3">
                         <div className="icon icon-box-success">
                           <span className="mdi mdi-arrow-top-right icon-item"></span>
                         </div>
                       </div>
                     </div>
                     <h6 className="text-muted font-weight-normal">Current Teachers</h6>
                   </div>
                 </div>
               </div>
               <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
                 <div className="card">
                   <div className="card-body">
                     <div className="row">
                       <div className="col-9">
                         <div className="d-flex align-items-center align-self-start">
                           <h3 className="mb-0">33</h3>
                         </div>
                       </div>
                       <div className="col-3">
                         <div className="icon icon-box-danger">
                           <span className="mdi mdi-arrow-bottom-left icon-item"></span>
                         </div>
                       </div>
                     </div>
                     <h6 className="text-muted font-weight-normal">Current Employee</h6>
                   </div>
                 </div>
               </div>
               <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
                 <div className="card">
                   <div className="card-body">
                     <div className="row">
                       <div className="col-9">
                         <div className="d-flex align-items-center align-self-start">
                           <h3 className="mb-0">10</h3>
                         </div>
                       </div>
                       <div className="col-3">
                         <div className="icon icon-box-success ">
                           <span className="mdi mdi-arrow-top-right icon-item"></span>
                         </div>
                       </div>
                     </div>
                     <h6 className="text-muted font-weight-normal">Upcoming Events</h6>
                   </div>
                 </div>
               </div>
             </div>
{/* transaction and event list   */}
             <div className="row">
               <div className="col-md-4 grid-margin stretch-card">
                 <div className="card">
                   <div className="card-body">
                     <h4 className="card-title">Transaction History</h4>
                     <canvas id="transaction-history" className="transaction-chart"></canvas>
                     <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                       <div className="text-md-center text-xl-left">
                         <h6 className="mb-1">Tution Fees</h6>
                         <p className="text-muted mb-0">07 Jan 2019, 09:12AM</p>
                       </div>
                       <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                         <h6 className="font-weight-bold mb-0">$236</h6>
                       </div>
                     </div>
                     <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                       <div className="text-md-center text-xl-left">
                         <h6 className="mb-1">Salary</h6>
                         <p className="text-muted mb-0">07 Jan 2019, 09:12AM</p>
                       </div>
                       <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                         <h6 className="font-weight-bold mb-0">$593</h6>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="col-md-8 grid-margin stretch-card">
                 <div className="card">
                   <div className="card-body">
                     <div className="d-flex flex-row justify-content-between">
                       <h4 className="card-title mb-1">Event List</h4>
                       <p className="text-muted mb-1">Your data status</p>
                     </div>
                     <div className="row">
                       <div className="col-12">
                         <div className="preview-list">
                           <div className="preview-item border-bottom">
                             <div className="preview-thumbnail">
                               <div className="preview-icon bg-primary">
                                 <i className="mdi mdi-file-document"></i>
                               </div>
                             </div>
                             <div className="preview-item-content d-sm-flex flex-grow">
                               <div className="flex-grow">
                                 <h6 className="preview-subject">Admin dashboard design</h6>
                                 <p className="text-muted mb-0">Broadcast web app mockup</p>
                               </div>
                               <div className="me-auto text-sm-right pt-2 pt-sm-0">
                                 <p className="text-muted">15 minutes ago</p>
                                 <p className="text-muted mb-0">30 tasks, 5 issues </p>
                               </div>
                             </div>
                           </div>
                           <div className="preview-item border-bottom">
                             <div className="preview-thumbnail">
                               <div className="preview-icon bg-success">
                                 <i className="mdi mdi-cloud-download"></i>
                               </div>
                             </div>
                             <div className="preview-item-content d-sm-flex flex-grow">
                               <div className="flex-grow">
                                 <h6 className="preview-subject">Wordpress Development</h6>
                                 <p className="text-muted mb-0">Upload new design</p>
                               </div>
                               <div className="me-auto text-sm-right pt-2 pt-sm-0">
                                 <p className="text-muted">1 hour ago</p>
                                 <p className="text-muted mb-0">23 tasks, 5 issues </p>
                               </div>
                             </div>
                           </div>
                           <div className="preview-item border-bottom">
                             <div className="preview-thumbnail">
                               <div className="preview-icon bg-info">
                                 <i className="mdi mdi-clock"></i>
                               </div>
                             </div>
                             <div className="preview-item-content d-sm-flex flex-grow">
                               <div className="flex-grow">
                                 <h6 className="preview-subject">Project meeting</h6>
                                 <p className="text-muted mb-0">New project discussion</p>
                               </div>
                               <div className="me-auto text-sm-right pt-2 pt-sm-0">
                                 <p className="text-muted">35 minutes ago</p>
                                 <p className="text-muted mb-0">15 tasks, 2 issues</p>
                               </div>
                             </div>
                           </div>
                           <div className="preview-item border-bottom">
                             <div className="preview-thumbnail">
                               <div className="preview-icon bg-danger">
                                 <i className="mdi mdi-email-open"></i>
                               </div>
                             </div>
                             <div className="preview-item-content d-sm-flex flex-grow">
                               <div className="flex-grow">
                                 <h6 className="preview-subject">Broadcast Mail</h6>
                                 <p className="text-muted mb-0">Sent release details to team</p>
                               </div>
                               <div className="me-auto text-sm-right pt-2 pt-sm-0">
                                 <p className="text-muted">55 minutes ago</p>
                                 <p className="text-muted mb-0">35 tasks, 7 issues </p>
                               </div>
                             </div>
                           </div>
                           <div className="preview-item">
                             <div className="preview-thumbnail">
                               <div className="preview-icon bg-warning">
                                 <i className="mdi mdi-chart-pie"></i>
                               </div>
                             </div>
                             <div className="preview-item-content d-sm-flex flex-grow">
                               <div className="flex-grow">
                                 <h6 className="preview-subject">UI Design</h6>
                                 <p className="text-muted mb-0">New application planning</p>
                               </div>
                               <div className="me-auto text-sm-right pt-2 pt-sm-0">
                                 <p className="text-muted">50 minutes ago</p>
                                 <p className="text-muted mb-0">27 tasks, 4 issues </p>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <div className="row">
               <div className="col-sm-4 grid-margin">
                 <div className="card">
                   <div className="card-body">
                     <h5>Total Amount Debit</h5>
                     <div className="row">
                       <div className="col-8 col-sm-12 col-xl-8 my-auto">
                         <div className="d-flex d-sm-block d-md-flex align-items-center">
                           <h2 className="mb-0">$32123</h2>
                           <p className="text-success ms-2 mb-0 font-weight-medium">+3.5%</p>
                         </div>
                         <h6 className="text-muted font-weight-normal">11.38% Since last month</h6>
                       </div>
                       <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                         <i className="icon-lg mdi mdi-codepen text-primary ms-auto"></i>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="col-sm-4 grid-margin">
                 <div className="card">
                   <div className="card-body">
                     <h5>Total Amount Credit</h5>
                     <div className="row">
                       <div className="col-8 col-sm-12 col-xl-8 my-auto">
                         <div className="d-flex d-sm-block d-md-flex align-items-center">
                           <h2 className="mb-0">$45850</h2>
                           <p className="text-success ms-2 mb-0 font-weight-medium">+8.3%</p>
                         </div>
                         <h6 className="text-muted font-weight-normal"> 9.61% Since last month</h6>
                       </div>
                       <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                         <i className="icon-lg mdi mdi-wallet-travel text-danger ms-auto"></i>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="col-sm-4 grid-margin">
                 <div className="card">
                   <div className="card-body">
                     <h5>Purchase</h5>
                     <div className="row">
                       <div className="col-8 col-sm-12 col-xl-8 my-auto">
                         <div className="d-flex d-sm-block d-md-flex align-items-center">
                           <h2 className="mb-0">$2039</h2>
                           <p className="text-danger ms-2 mb-0 font-weight-medium">-2.1% </p>
                         </div>
                         <h6 className="text-muted font-weight-normal">2.27% Since last month</h6>
                       </div>
                       <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                         <i className="icon-lg mdi mdi-monitor text-success ms-auto"></i>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
{/* debit credit purchase seciton   */}
             <div className="row ">
               <div className="col-12 grid-margin">
                 <div className="card">
                   <div className="card-body">
                     <h4 className="card-title">Payment Status</h4>
                     <div className="table-responsive">
                       <table className="table">
                         <thead>
                           <tr>
                             <th>
                               <div className="form-check form-check-muted m-0">
                                 <label className="form-check-label">
                                   <input type="checkbox" className="form-check-input"/>
                                 </label>
                               </div>
                             </th>
                             <th> Client Name </th>
                             <th> Order No </th>
                             <th> Product Cost </th>
                             <th> Project </th>
                             <th> Payment Mode </th>
                             <th> Start Date </th>
                             <th> Payment Status </th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>
                               <div className="form-check form-check-muted m-0">
                                 <label className="form-check-label">
                                   <input type="checkbox" className="form-check-input"/>
                                 </label>
                               </div>
                             </td>
                             <td>
                               <img src="assets/images/faces/face1.jpg" alt="image" />
                               <span className="ps-2">Henry Klein</span>
                             </td>
                             <td> 02312 </td>
                             <td> $14,500 </td>
                             <td> Dashboard </td>
                             <td> Credit card </td>
                             <td> 04 Dec 2019 </td>
                             <td>
                               <div className="badge badge-outline-success">Approved</div>
                             </td>
                           </tr>
                           <tr>
                             <td>
                               <div className="form-check form-check-muted m-0">
                                 <label className="form-check-label">
                                   <input type="checkbox" className="form-check-input"/>
                                 </label>
                               </div>
                             </td>
                             <td>
                               <img src="assets/images/faces/face2.jpg" alt="image" />
                               <span className="ps-2">Estella Bryan</span>
                             </td>
                             <td> 02312 </td>
                             <td> $14,500 </td>
                             <td> Website </td>
                             <td> Cash on delivered </td>
                             <td> 04 Dec 2019 </td>
                             <td>
                               <div className="badge badge-outline-warning">Pending</div>
                             </td>
                           </tr>
                           <tr>
                             <td>
                               <div className="form-check form-check-muted m-0">
                                 <label className="form-check-label">
                                   <input type="checkbox" className="form-check-input"/>
                                 </label>
                               </div>
                             </td>
                             <td>
                               <img src="assets/images/faces/face5.jpg" alt="image" />
                               <span className="ps-2">Lucy Abbott</span>
                             </td>
                             <td> 02312 </td>
                             <td> $14,500 </td>
                             <td> App design </td>
                             <td> Credit card </td>
                             <td> 04 Dec 2019 </td>
                             <td>
                               <div className="badge badge-outline-danger">Rejected</div>
                             </td>
                           </tr>
                           <tr>
                             <td>
                               <div className="form-check form-check-muted m-0">
                                 <label className="form-check-label">
                                   <input type="checkbox" className="form-check-input"/>
                                 </label>
                               </div>
                             </td>
                             <td>
                               <img src="assets/images/faces/face3.jpg" alt="image" />
                               <span className="ps-2">Peter Gill</span>
                             </td>
                             <td> 02312 </td>
                             <td> $14,500 </td>
                             <td> Development </td>
                             <td> Online Payment </td>
                             <td> 04 Dec 2019 </td>
                             <td>
                               <div className="badge badge-outline-success">Approved</div>
                             </td>
                           </tr>
                           <tr>
                             <td>
                               <div className="form-check form-check-muted m-0">
                                 <label className="form-check-label">
                                   <input type="checkbox" className="form-check-input"/>
                                 </label>
                               </div>
                             </td>
                             <td>
                               <img src="assets/images/faces/face4.jpg" alt="image" />
                               <span className="ps-2">Sallie Reyes</span>
                             </td>
                             <td> 02312 </td>
                             <td> $14,500 </td>
                             <td> Website </td>
                             <td> Credit card </td>
                             <td> 04 Dec 2019 </td>
                             <td>
                               <div className="badge badge-outline-success">Approved</div>
                             </td>
                           </tr>
                         </tbody>
                       </table>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <footer className="footer">
               <div className="d-sm-flex justify-content-center justify-content-sm-between">
                 <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © bootstrapdash.com
                   2021</span>
               </div>
             </footer>
   
           </div>
   
         </div>
   
       </div>
</div>
    </div>
  );
};

export default AdminPanel;