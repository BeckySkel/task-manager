document.addEventListener('DOMContentLoaded', function() {
    // sidenav imitialisation
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // datepicker initialisation
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd mmmm, yyyy",
      i18n: {done: "Select"}
    });

    // select iniitialisation
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    // collapsible iniitialisation
    let collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles);
  });