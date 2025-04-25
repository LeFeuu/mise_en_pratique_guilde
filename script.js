document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'trail';
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;
  
    document.body.appendChild(trail);
  
    // Supprimer l'élément après un petit moment
    setTimeout(() => {
      trail.remove();
    }, 800);
  });
  