// Animate Smooth Scroll
$("#view-work").on("click", function() {
  const images = $("#images").position().top;

  $("html, body").animate(
    {
      scrollTop: images
    },
    900
  );
});

$("#view-work2").on("click", function() {
  const images = $("#why").position().top;

  $("html, body").animate(
    {
      scrollTop: images
    },
    1300
  );
});