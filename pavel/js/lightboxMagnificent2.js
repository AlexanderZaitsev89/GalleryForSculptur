
$('.magnific-gallery').each(function(index, value) {
  var title='wtf';
  switch (index) {
    case 0:
      //console.log("was here");
      title="Source";
      break;
    case 1:
      title="Ilmarinen";
      break;
    case 2:
      title="Monumentalist";
    case 3:
      title="Donkey";
      break;
    case 4:
      title="Sunrise";
      break;
      case 5:
          title="Ferdinand Porsche";
          break;
      case 6:
          title="Harlequin";
          break;
      case 7:
          title="Harvest Festival";
          break;
      case 8:
          title="Otter";
          break;
      case 9:
          title="Messenger";
          break;
      case 10:
          title="The Maiden of Pohjola";
          break;
      case 11:
        title="David";
        break;
      case 12:
          title="Wounded Hare";
          break;
      case 13:
          title="Equilibrium";
          break;
      case 14:
          title="The Temptation of Pandora";
          break;
      case 15:
          title="Saint Christopher";
          break;

    default:
      //Statements executed when none of the values match the value of the expression
      break;
  }
  var gallery = $(this);
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





