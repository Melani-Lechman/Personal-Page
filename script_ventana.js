  const tituloOriginal = document.title;

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      document.title = "¡Volvé ☹ !";
    } else {
      document.title = tituloOriginal;
    }
  });