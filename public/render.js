/**
 * This script is loaded by the debug.html page to help troubleshoot
 * deployment issues on Render.com
 */

document.addEventListener('DOMContentLoaded', function() {
  const diagnosticsElement = document.getElementById('diagnostics');
  
  function addDiagnosticLine(text, type = 'info') {
    const line = document.createElement('div');
    line.className = `diagnostic-line ${type}`;
    line.textContent = text;
    diagnosticsElement.appendChild(line);
  }

  function addDiagnosticHeader(text) {
    const header = document.createElement('h3');
    header.textContent = text;
    diagnosticsElement.appendChild(header);
  }

  // Check if we're on Render.com
  fetch('/deployment-platform.txt')
    .then(response => response.text())
    .then(text => {
      if (text.trim() === 'render.com') {
        addDiagnosticLine('✅ Running on Render.com', 'success');
      } else {
        addDiagnosticLine('⚠️ Not running on Render.com', 'warning');
      }
    })
    .catch(() => {
      addDiagnosticLine('⚠️ Cannot determine deployment platform', 'warning');
    });

  // Check if main assets can be loaded
  addDiagnosticHeader('Testing asset loading:');
  
  // Try to load some essential assets
  const assetsToCheck = [
    { path: '/assets/index.css', name: 'Main CSS' },
    { path: '/assets/index.js', name: 'Main JavaScript' },
    { path: '/meal-images/breakfast/pancakes.jpg', name: 'Sample Image' }
  ];

  Promise.all(assetsToCheck.map(asset => {
    return new Promise(resolve => {
      const startTime = performance.now();
      fetch(asset.path)
        .then(response => {
          const loadTime = (performance.now() - startTime).toFixed(2);
          if (response.ok) {
            addDiagnosticLine(`✅ ${asset.name} loaded successfully (${loadTime}ms)`, 'success');
          } else {
            addDiagnosticLine(`❌ ${asset.name} failed to load: ${response.status} ${response.statusText}`, 'error');
          }
          resolve();
        })
        .catch(error => {
          addDiagnosticLine(`❌ ${asset.name} error: ${error.message}`, 'error');
          resolve();
        });
    });
  }))
  .then(() => {
    // Check browser information
    addDiagnosticHeader('Browser Information:');
    addDiagnosticLine(`User Agent: ${navigator.userAgent}`);
    addDiagnosticLine(`Window Size: ${window.innerWidth}x${window.innerHeight}`);
    addDiagnosticLine(`DevicePixelRatio: ${window.devicePixelRatio}`);
    
    // Display environment info
    addDiagnosticHeader('Page URLs:');
    addDiagnosticLine(`Current URL: ${window.location.href}`);
    addDiagnosticLine(`Main App URL: ${window.location.origin}/`);
    addDiagnosticLine(`Fallback URL: ${window.location.origin}/render-index.html`);
    
    // Add links for testing
    addDiagnosticHeader('Test Links:');
    const linksContainer = document.createElement('div');
    linksContainer.className = 'test-links';
    
    const links = [
      { url: '/', text: 'Main Application' },
      { url: '/render-index.html', text: 'Static Fallback Page' },
      { url: '/download.html', text: 'Download Page' }
    ];
    
    links.forEach(link => {
      const a = document.createElement('a');
      a.href = link.url;
      a.textContent = link.text;
      a.target = '_blank';
      a.className = 'test-link';
      linksContainer.appendChild(a);
    });
    
    diagnosticsElement.appendChild(linksContainer);
    
    // Add completion message
    addDiagnosticLine('Diagnostics complete. Use this information to troubleshoot deployment issues.', 'info');
  });
});