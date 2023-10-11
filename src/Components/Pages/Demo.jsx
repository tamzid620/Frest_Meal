// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Demo = () => {
  
    return (
      <div>
         <div className="container-scroller text-yellow-500">
  
  {/* drawer seciton */}
<nav className="bg-gray-800 text-white h-screen fixed w-64 top-0 left-0">
  <div className="flex items-center justify-center h-16">
    <a href="index.html" className="text-2xl font-bold text-white">
      <img src="src/assets/images/images.png" alt="logo" />
    </a>
  </div>
  <ul className="mt-8">
    <li className="text-sm text-gray-400">Navigation</li>
    <li className="mt-2">
      <a href="index.html" className="flex items-center space-x-2">
        <i className="mdi mdi-speedometer"></i>
        Option-1
      </a>
    </li>
    <li className="mt-2">
      <a href="index.html" className="flex items-center space-x-2">
        <i className="mdi mdi-speedometer"></i>
        Option-2
      </a>
    </li>

    <li className="mt-2">
      <a data-toggle="collapse" href="#ui-basic" className="flex items-center space-x-2">
        <i className="mdi mdi-laptop"></i>
        Student Information
        <i className="menu-arrow"></i>
      </a>
      <div className="collapse" id="ui-basic">
        <ul className="pl-8 mt-2">
          <li><a href="pages/ui-features/buttons.html">Local Student</a></li>
          <li><a href="pages/ui-features/dropdowns.html">Out-District Student</a></li>
          <li><a href="pages/ui-features/typography.html">Foreign student</a></li>
        </ul>
      </div>
    </li>
    
    <li className="mt-2">
      <a data-toggle="collapse" href="#auth" className="flex items-center space-x-2">
        <i className="mdi mdi-security"></i>
        Examinations
        <i className="menu-arrow"></i>
      </a>
      <div className="collapse" id="auth">
        <ul className="pl-8 mt-2">
          <li><a href="pages/samples/blank-page.html">Blank Page</a></li>
          <li><a href="pages/samples/error-404.html">404</a></li>
          <li><a href="pages/samples/error-500.html">500</a></li>
          <li><a href="pages/samples/login.html">Login</a></li>
          <li><a href="pages/samples/register.html">Register</a></li>
        </ul>
      </div>
    </li>
    <li className="mt-2">
      <a href="http://www.bootstrapdash.com/demo/corona-free/jquery/documentation/documentation.html" className="flex items-center space-x-2">
        <i className="mdi mdi-file-document-box"></i>
        Notice
      </a>
    </li>
  </ul>
</nav>

     
  {/*  full body  */}
  <div className="container mx-auto p-4">
  <div className="page-body-wrapper">

     
  {/* full body navbar*/}
  <nav className="fixed top-0 flex flex-row">
  <div className="hidden lg:flex items-center justify-center">
    <a href="index.html" className="navbar-brand-wrapper">
      <img src="src/assets/images/logo-mini.svg" alt="logo" className="navbar-brand brand-logo-mini" />
    </a>
  </div>
  <div className="flex-grow flex items-stretch">
    <button className="navbar-toggler align-self-center" type="button" data-toggle="minimize">
      <span className="mdi mdi-menu"></span>
    </button>
    <ul className="w-100 navbar-nav">
      <li className="w-100">
        <form className="nav-link mt-2 mt-md-0 hidden lg:flex search">
          <input type="text" className="form-control" placeholder="Search products" />
        </form>
      </li>
    </ul>
    <ul className="navbar-nav navbar-nav-right">
      <li className="dropdown border-left">
        <a className="count-indicator dropdown-toggle" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
          <i className="mdi mdi-email"></i>
          <span className="count bg-success"></span>
        </a>
        {/* <!-- Messages option --> */}
        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
          <h6 className="p-3 mb-0">Messages</h6>
          <div className="dropdown-divider"></div>
          {/* <!-- Message items (customize as needed) --> */}
        </div>
      </li>
      {/* <!-- Notification section --> */}
      <li className="dropdown border-left">
        <a className="count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
          <i className="mdi mdi-bell"></i>
          <span className="count bg-danger"></span>
        </a>
        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
          <h6 className="p-3 mb-0">Notifications</h6>
          <div className="dropdown-divider"></div>
          {/* <!-- Notification items (customize as needed) --> */}
        </div>
      </li>
      <li className="dropdown">
        <a id="profileDropdown" href="#" data-toggle="dropdown" className="nav-link">
          <div className="navbar-profile">
            <img src="src/assets/images/faces/164798-.jpg" alt="" className="img-xs rounded-circle" />
            <p className="mb-0 d-none d-sm-block navbar-profile-name">Fresh Meal</p>
            <i className="mdi mdi-menu-down d-none d-sm-block"></i>
          </div>
        </a>
        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="profileDropdown">
          <h6 className="p-3 mb-0">Profile</h6>
          <div className="dropdown-divider"></div>
          {/* <!-- Profile options (customize as needed) --> */}
        </div>
      </li>
    </ul>
    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
      <span className="mdi mdi-format-line-spacing"></span>
    </button>
  </div>
</nav>

  
  {/* full body contant  */}
           <div className="main-panel">
             <div className="content-wrapper">
  {/* full body row section   */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
  <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
    <div className="card">
      <div className="card-body">
        <div className="flex flex-row items-center justify-between">
          <h3 className="mb-0">1012</h3>
          <div className="icon icon-box-success">
            <span className="mdi mdi-arrow-top-right icon-item"></span>
          </div>
        </div>
        <h6 className="text-muted font-normal">Current Students</h6>
      </div>
    </div>
  </div>
  <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
    <div className="card">
      <div className="card-body">
        <div className="flex flex-row items-center justify-between">
          <h3 className="mb-0">50</h3>
          <div className="icon icon-box-success">
            <span className="mdi mdi-arrow-top-right icon-item"></span>
          </div>
        </div>
        <h6 className="text-muted font-normal">Current Teachers</h6>
      </div>
    </div>
  </div>
  <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
    <div className="card">
      <div className="card-body">
        <div className="flex flex-row items-center justify-between">
          <h3 className="mb-0">33</h3>
          <div className="icon icon-box-danger">
            <span className="mdi mdi-arrow-bottom-left icon-item"></span>
          </div>
        </div>
        <h6 className="text-muted font-normal">Current Employee</h6>
      </div>
    </div>
  </div>
  <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
    <div className="card">
      <div className="card-body">
        <div className="flex flex-row items-center justify-between">
          <h3 className="mb-0">10</h3>
          <div className="icon icon-box-success">
            <span className="mdi mdi-arrow-top-right icon-item"></span>
          </div>
        </div>
        <h6 className="text-muted font-normal">Upcoming Events</h6>
      </div>
    </div>
  </div>
</div>

  {/* transaction and event list   */}
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
  <div className="col-span-1 md:col-span-1 xl:col-span-1 grid-margin">
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Transaction History</h4>
        <canvas id="transaction-history" className="transaction-chart"></canvas>
        <div className="bg-gray-dark flex flex-col md:flex-row xl:flex-col py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
          <div className="text-center md:text-left xl:text-left">
            <h6 className="mb-1">Tuition Fees</h6>
            <p className="text-muted mb-0">07 Jan 2019, 09:12 AM</p>
          </div>
          <div className="md:flex-grow xl:flex-grow text-right md:text-center xl:text-right py-md-2 py-xl-0">
            <h6 className="font-bold mb-0">$236</h6>
          </div>
        </div>
        <div className="bg-gray-dark flex flex-col md:flex-row xl:flex-col py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
          <div className="text-center md:text-left xl:text-left">
            <h6 className="mb-1">Salary</h6>
            <p className="text-muted mb-0">07 Jan 2019, 09:12 AM</p>
          </div>
          <div className="md:flex-grow xl:flex-grow text-right md:text-center xl:text-right py-md-2 py-xl-0">
            <h6 className="font-bold mb-0">$593</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-span-1 md:col-span-1 xl:col-span-2 grid-margin">
    <div className="card">
      <div className="card-body">
        <div className="flex flex-row justify-between">
          <h4 className="card-title mb-1">Event List</h4>
          <p className="text-muted mb-1">Your data status</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1">
          <div className="preview-list">
            <div className="preview-item border-b mb-4">
              <div className="preview-thumbnail">
                <div className="preview-icon bg-primary">
                  <i className="mdi mdi-file-document"></i>
                </div>
              </div>
              <div className="preview-item-content flex flex-col md:flex-row">
                <div className="flex-grow">
                  <h6 className="preview-subject">Admin dashboard design</h6>
                  <p className="text-muted mb-0">Broadcast web app mockup</p>
                </div>
                <div className="md:flex-grow text-right md:text-center pt-2 pt-md-0">
                  <p className="text-muted">15 minutes ago</p>
                  <p className="text-muted mb-0">30 tasks, 5 issues</p>
                </div>
              </div>
            </div>
            <div className="preview-item border-b mb-4">
              <div className="preview-thumbnail">
                <div className="preview-icon bg-success">
                  <i className="mdi mdi-cloud-download"></i>
                </div>
              </div>
              <div className="preview-item-content flex flex-col md:flex-row">
                <div className="flex-grow">
                  <h6 className="preview-subject">Wordpress Development</h6>
                  <p className="text-muted mb-0">Upload new design</p>
                </div>
                <div className="md:flex-grow text-right md:text-center pt-2 pt-md-0">
                  <p className="text-muted">1 hour ago</p>
                  <p className="text-muted mb-0">23 tasks, 5 issues</p>
                </div>
              </div>
            </div>
            <div className="preview-item border-b mb-4">
              <div className="preview-thumbnail">
                <div className="preview-icon bg-info">
                  <i className="mdi mdi-clock"></i>
                </div>
              </div>
              <div className="preview-item-content flex flex-col md:flex-row">
                <div className="flex-grow">
                  <h6 className="preview-subject">Project meeting</h6>
                  <p className="text-muted mb-0">New project discussion</p>
                </div>
                <div className="md:flex-grow text-right md:text-center pt-2 pt-md-0">
                  <p className="text-muted">35 minutes ago</p>
                  <p className="text-muted mb-0">15 tasks, 2 issues</p>
                </div>
              </div>
            </div>
            <div className="preview-item border-b mb-4">
              <div className="preview-thumbnail">
                <div className="preview-icon bg-danger">
                  <i className="mdi mdi-email-open"></i>
                </div>
              </div>
              <div className="preview-item-content flex flex-col md:flex-row">
                <div className="flex-grow">
                  <h6 className="preview-subject">Broadcast Mail</h6>
                  <p className="text-muted mb-0">Sent release details to team</p>
                </div>
                <div className="md:flex-grow text-right md:text-center pt-2 pt-md-0">
                  <p className="text-muted">55 minutes ago</p>
                  <p className="text-muted mb-0">35 tasks, 7 issues</p>
                </div>
              </div>
            </div>
            <div className="preview-item">
              <div className="preview-thumbnail">
                <div className="preview-icon bg-warning">
                  <i className="mdi mdi-chart-pie"></i>
                </div>
              </div>
              <div className="preview-item-content flex flex-col md:flex-row">
                <div className="flex-grow">
                  <h6 className="preview-subject">UI Design</h6>
                  <p className="text-muted mb-0">New application planning</p>
                </div>
                <div className="md:flex-grow text-right md:text-center pt-2 pt-md-0">
                  <p className="text-muted">50 minutes ago</p>
                  <p className="text-muted mb-0">27 tasks, 4 issues</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  <div className="col-span-1 sm:col-span-1 md:col-span-1 grid-margin">
    <div className="card">
      <div className="card-body">
        <h5 className="mb-2">Total Amount Debit</h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1">
          <div className="col-span-1 sm:col-span-1 xl:col-span-1 my-auto">
            <div className="flex flex-row sm:flex-col md:flex-row md:items-center">
              <h2 className="mb-0 text-2xl sm:text-3xl xl:text-2xl"> $32123 </h2>
              <p className="text-success ms-2 mb-0 font-medium">+3.5%</p>
            </div>
            <h6 className="text-muted font-normal sm:text-xs xl:text-sm">11.38% Since last month</h6>
          </div>
          <div className="col-span-1 sm:col-span-1 xl:col-span-1 text-center sm:text-center xl:text-right">
            <i className="icon-lg mdi mdi-codepen text-primary sm:ms-auto"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-span-1 sm:col-span-1 md:col-span-1 grid-margin">
    <div className="card">
      <div className="card-body">
        <h5 className="mb-2">Total Amount Credit</h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1">
          <div className="col-span-1 sm:col-span-1 xl:col-span-1 my-auto">
            <div className="flex flex-row sm:flex-col md:flex-row md:items-center">
              <h2 className="mb-0 text-2xl sm:text-3xl xl:text-2xl"> $45850 </h2>
              <p className="text-success ms-2 mb-0 font-medium">+8.3%</p>
            </div>
            <h6 className="text-muted font-normal sm:text-xs xl:text-sm">9.61% Since last month</h6>
          </div>
          <div className="col-span-1 sm:col-span-1 xl:col-span-1 text-center sm:text-center xl:text-right">
            <i className="icon-lg mdi mdi-wallet-travel text-danger sm:ms-auto"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-span-1 sm:col-span-1 md:col-span-1 grid-margin">
    <div className="card">
      <div className="card-body">
        <h5 className="mb-2">Purchase</h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1">
          <div className="col-span-1 sm:col-span-1 xl:col-span-1 my-auto">
            <div className="flex flex-row sm:flex-col md:flex-row md:items-center">
              <h2 className="mb-0 text-2xl sm:text-3xl xl:text-2xl"> $2039 </h2>
              <p className="text-danger ms-2 mb-0 font-medium">-2.1%</p>
            </div>
            <h6 className="text-muted font-normal sm:text-xs xl:text-sm">2.27% Since last month</h6>
          </div>
          <div className="col-span-1 sm:col-span-1 xl:col-span-1 text-center sm:text-center xl:text-right">
            <i className="icon-lg mdi mdi-monitor text-success sm:ms-auto"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  {/* debit credit purchase seciton   */}
  <div className="row">
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
                      <input type="checkbox" className="form-check-input" />
                    </label>
                  </div>
                </th>
                <th>Client Name</th>
                <th>Order No</th>
                <th>Product Cost</th>
                <th>Project</th>
                <th>Payment Mode</th>
                <th>Start Date</th>
                <th>Payment Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="form-check form-check-muted m-0">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" />
                    </label>
                  </div>
                </td>
                <td>
                  <img src="src/assets/images/faces/face1.jpg" alt="image" />
                  <span className="ps-2">Henry Klein</span>
                </td>
                <td>02312</td>
                <td>$14,500</td>
                <td>Dashboard</td>
                <td>Credit card</td>
                <td>04 Dec 2019</td>
                <td>
                  <div className="badge badge-outline-success">Approved</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-check form-check-muted m-0">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" />
                    </label>
                  </div>
                </td>
                <td>
                  <img src="src/assets/images/faces/face2.jpg" alt="image" />
                  <span className="ps-2">Estella Bryan</span>
                </td>
                <td>02312</td>
                <td>$14,500</td>
                <td>Website</td>
                <td>Cash on delivered</td>
                <td>04 Dec 2019</td>
                <td>
                  <div className="badge badge-outline-warning">Pending</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-check form-check-muted m-0">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" />
                    </label>
                  </div>
                </td>
                <td>
                  <img src="src/assets/images/faces/face5.jpg" alt="image" />
                  <span className="ps-2">Lucy Abbott</span>
                </td>
                <td>02312</td>
                <td>$14,500</td>
                <td>App design</td>
                <td>Credit card</td>
                <td>04 Dec 2019</td>
                <td>
                  <div className="badge badge-outline-danger">Rejected</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-check form-check-muted m-0">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" />
                    </label>
                  </div>
                </td>
                <td>
                  <img src="src/assets/images/faces/face3.jpg" alt="image" />
                  <span className="ps-2">Peter Gill</span>
                </td>
                <td>02312</td>
                <td>$14,500</td>
                <td>Development</td>
                <td>Online Payment</td>
                <td>04 Dec 2019</td>
                <td>
                  <div className="badge badge-outline-success">Approved</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-check form-check-muted m-0">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" />
                    </label>
                  </div>
                </td>
                <td>
                  <img src="src/assets/images/faces/face4.jpg" alt="image" />
                  <span className="ps-2">Sallie Reyes</span>
                </td>
                <td>02312</td>
                <td>$14,500</td>
                <td>Website</td>
                <td>Credit card</td>
                <td>04 Dec 2019</td>
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
  <div className="d-sm-flex justify-center sm:justify-between">
    <span className="text-muted text-center sm:text-left d-sm-inline-block">Copyright © bootstrapdash.com 2021</span>
  </div>
</footer>

     
             </div>
     
           </div>
     
         </div>
  </div>
  </div>
      </div>
    );
  };
  
  export default Demo;