
$('.magnific-gallery').each(function(index, value) {
  var title='wtf';
  switch (index) {
    case 0:
      console.log("was here");
      title="Source";
      break;
    case 1:
      title="Saint Christopher";
      break;
    case 2:
      title="Harlequin";
    case 3:
      title="David";
      break;
    case 4:
      title="Temptation of Pandora";
      break;
    default:
      //Statements executed when none of the values match the value of the expression
      break;
  }
  var gallery = $(this);

  if(index==0){
    console.log("wtf");
  }
  var galleryImages = $(this).data('links').split(',');
  var items = [];
  for (var i = 0; i < galleryImages.length; i++) {
    items.push({
      src: galleryImages[i],
      title:title
    });
  }
  gallery.magnificPopup({
    mainClass: 'mfp-fade',
    items: items,
    gallery: {
      enabled: true,
      tPrev: $(this).data('prev-text'),
      tNext: $(this).data('next-text')
    },
    type: 'image'
  });
});





