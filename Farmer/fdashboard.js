function changeTab(event, tabName) {
    // Remove 'active' class from all menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));
    
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.style.display = 'none');
    
    // Add 'active' class to the clicked menu item
    event.target.classList.add('active');
    
    // Show the corresponding tab content
    const tabContent = document.getElementById(tabName);
    tabContent.style.display = 'block';
  }
  