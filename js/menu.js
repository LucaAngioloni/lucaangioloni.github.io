let menuOpen = false;
function toggleMenu() {
  if (menuOpen) {
    const menu = document.getElementById("mobile-menu");
    menu.classList.add("hidden");
    const iconOpen = document.getElementById("menu-icon-open");
    iconOpen.classList.remove("block");
    iconOpen.classList.add("hidden");
    const iconClosed = document.getElementById("menu-icon-closed");
    iconClosed.classList.remove("hidden");
    iconClosed.classList.add("block");
    menuOpen = false;
  } else {
    const menu = document.getElementById("mobile-menu");
    menu.classList.remove("hidden");
    const iconOpen = document.getElementById("menu-icon-open");
    iconOpen.classList.remove("hidden");
    iconOpen.classList.add("block");
    const iconClosed = document.getElementById("menu-icon-closed");
    iconClosed.classList.remove("block");
    iconClosed.classList.add("hidden");
    menuOpen = true;
  }
}
