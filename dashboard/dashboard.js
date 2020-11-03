class Dashboard {

  loadDashboard(){

    // Invoke methods
    users.loadUsers();
    issues.loadIssues();
    header.loadHeader();
    sidebar.loadSidebar();

    console.log('Dashboard component is loaded');
  }

}

export let dashboard = new Dashboard(); 