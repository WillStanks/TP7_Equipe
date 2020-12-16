$(function () {
  $("#accordion-1").accordion({
    active: 1,
    animate: {
      duration: 2000,
      down: {
        easing: "easeOutBounce",
        duration: 2000,
      },
    },
    collapsible: true,
    header: "h3",
    heightStyle: "fill", 
    icons: { header: "ui-icon-plus", activeHeader: "ui-icon-minus" }

    /* Options */
    /* active, animate, collapsible, disabled,
      event, header, heightStyle, icons */
  });
});
