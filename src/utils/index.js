function postedAt(date) {
  const now = new Date();
  const posted = new Date(date);
  const diff = now - posted;
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diff / (1000 * 60 * 60));
  const diffMinutes = Math.floor(diff / (1000 * 60));
  const diffSeconds = Math.floor(diff / 1000);

  if (diffDays > 0) {
    return `${diffDays} d ago`;
  } if (diffHours > 0) {
    return `${diffHours} h ago`;
  } if (diffMinutes > 0) {
    return `${diffMinutes} m ago`;
  } if (diffSeconds > 0) {
    return `${diffSeconds} s ago`;
  }
  return 'just now';
}

function setTheme(theme) {
  localStorage.setItem('themeKuora', theme);
}

function getTheme() {
  localStorage.getItem('themeKuora');
}

export { postedAt, setTheme, getTheme };
