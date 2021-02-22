// // Cache selectors
// let lastId,
//   topMenu = $(".header-menu__ul"),
//   topMenuHeight = topMenu.outerHeight() + 15,
//   menuItems = topMenu.find(">a"),
//   scrollItems = menuItems.map(function() {
//     let item = $($(this).attr("href"));
//     if (item.length) {
//       return item;
//     }
//   });

// menuItems.click(function(e) {
//   let href = $(this).attr("href"),
//     offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
//   $('html, body').stop().animate({
//     scrollTop: offsetTop
//   }, 300);
//   e.preventDefault();
// });

// $(window).scroll(function() {
//   let fromTop = $(this).scrollTop() + topMenuHeight;

//   let cur = scrollItems.map(function() {
//     if ($(this).offset().top < fromTop)
//       return this;
//   });
//   cur = cur[cur.length - 1];
//   let id = cur && cur.length ? cur[0].id : "";

//   if (lastId !== id) {
//     lastId = id;
//     menuItems
//       .parent().removeClass("active")
//       .end().filter("[href='#" + id + "']").parent().addClass("active");
//   }
// });