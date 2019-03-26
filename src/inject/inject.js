setTimeout(function() {
  Array.from(document.querySelectorAll('[href^="mailto:"]')).forEach(a => {
    a.addEventListener('click', function (e) {
      if (!confirm('Are you sure?')) {
        e.preventDefault();
      }
    })
  });
}, 1500)