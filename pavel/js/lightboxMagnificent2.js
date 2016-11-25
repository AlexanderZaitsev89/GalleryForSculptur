
$('.magnific-gallery').each(function(index, value) {
  var title='wtf';
  switch (index) {
    case 0:
      //console.log("was here");
      title="The Source";
      break;
    case 1:
      title="Saint Christopher";
      break;
    case 2:
      title="Monumentalist";
      break;
    case 3:
      title="Donkey";
      break;
      case 4:
          title="Klaudia";
          break;
    case 5:
      title="Sunrise";
      break;
      case 6:
          title="Ferdinand Porsche";
          break;
      case 7:
          title="Harlequin";
          break;
      case 8:
          title="The Feast of the Transfiguration";
          break;
      case 9:
          title="Gorgon";
          break;
      case 10:
          title="Harvest Festival";
          break;
      case 11:
          title="Otter";
          break;
      case 12:
          title="Messenger";
          break;
      case 13:
          title="The Maiden of Pohjola";
          break;
      case 14:
        title="David";
        break;
      case 15:
          title="Equilibrium";
          break;
      case 16:
          title="Wounded Hare";
          break;
      case 17:
          title="The Temptation of Pandora";
          break;
      case 18:
          title="Ilmarinen";
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





