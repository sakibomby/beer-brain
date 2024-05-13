require('dotenv').config();
require('./config/database');

const Style = require('./models/style');
const Item = require('./models/beer');

(async function() {
  await Style.deleteMany({});
  const categories = await Style.create([
    {style: 'Ale', sortOrder: 10},
    {style: 'Brown Ale', sortOrder: 20},
    {style: 'Golden Ale', sortOrder: 30},
    {style: 'IPA', sortOrder: 40},
    {style: 'Lager', sortOrder: 50},
    {style: 'Pale Ale', sortOrder: 60},
    {style: 'Pilsner', sortOrder: 70},
    {style: 'Porter', sortOrder: 80},
    {style: 'Sour', sortOrder: 90},
    {style: 'Stout', sortOrder: 100},
    {style: 'Strong Ale', sortOrder: 110},
    {style: 'Trappist', sortOrder: 120},
    {style: 'Wheat', sortOrder: 130},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {
      name: "Fuller's Organic Honey Dew",
      imgSrc: 'https://slash4.winevybe.com/wp-content/uploads/Fullers-Fullers-Organic-Honey-Dew.png',
      style: categories[0],
      tastingNotes: "Golden-yellow, medium-bodied, mildly hopped, grainy notes, biscuity, honey notes, hint of citrus, light herb notes"
    },
    {
      name: "Marstons Young's Special London Ale",
      imgSrc: 'https://slash1.winevybe.com/wp-content/uploads/Marstons-Youngs-Special-London-Ale.png',
      style: categories[0],
      tastingNotes: "Golden brown, amber, medium-bodied, cloudy, strongly hopped, caramel malt notes, dried fruits, ripe citrus notes, light herb notes, balanced"
    },
    {
      name: "Samuel Smith",
      imgSrc: 'https://slash2.winevybe.com/wp-content/uploads/Samuel-Smith-Samuel-Smith-Nut-Brown-Ale.png',
      style: categories[1],
      tastingNotes: "Chestnut brown, medium-bodied, medium hopped, caramel malt notes, plum notes, chocolaty, hint of peanuts, spicy"
    },
    {
      name: "Põhjala Brewing",
      imgSrc: 'https://slash3.winevybe.com/wp-content/uploads/Pohjala-Brewing-Pohjala-Kolumbus-Krisostomus-Cellar-Series.png',
      style: categories[1],
      tastingNotes: "Dark brown, extra full-bodied, strongly hopped, aromatic, fruity, caramel notes"
    },
    {
      name: "Hitachino Nipponia",
      imgSrc: 'https://slash3.winevybe.com/wp-content/uploads/Kiuchi-Brewery-Hitachino-Nest-Nipponia.png',
      style: categories[2],
      tastingNotes: "Copper-yellow, full-bodied, cloudy, medium hopped, honey malt notes, dried fruits, light baked notes, aromatic"
    },
    {
      name: "Duvel",
      imgSrc: 'https://slash2.winevybe.com/wp-content/uploads/Duvel-Moortgat-Duvel.png',
      style: categories[2],
      tastingNotes: "Pale yellow, full-bodied, cloudy, with a rich head, medium hopped, honey malt notes, fruity, light citrus notes, hint of herb, soft, smooth"
    },
    {
      name: "Rogue Batsquatch",
      imgSrc: 'https://slash3.winevybe.com/wp-content/uploads/Rogue-Rogue-Batsquatch-Hazy-India-Pale-Ale-can.png',
      style: categories[3],
      tastingNotes: "Golden-yellow, medium-bodied, cloudy, medium hopped, grapefruity, aromatic, orangey"
    },
    {
      name: "Sierra Nevada Torpedo",
      imgSrc: 'https://slash4.winevybe.com/wp-content/uploads/Sierra-Nevada-Sierra-Nevada-Torpedo-Extra-IPA.png',
      style: categories[3],
      tastingNotes: "Copper-brown, full-bodied, strongly hopped, grainy notes, fruity"
    },
    {
      name: "Bitburger",
      imgSrc: 'https://slash4.winevybe.com/wp-content/uploads/Bitburger-Bitburger-Premium.png',
      style: categories[4],
      tastingNotes: "Mild fruitiness and freshness with a hint of malty sweetness yielding to a crisp hop tone and harmonious finish."
    },
    {
      name: "Weihenstephaner Original Helles",
      imgSrc: 'https://slash4.winevybe.com/wp-content/uploads/Weihenstephan-Weihenstephaner-Original-Helles.png',
      style: categories[4],
      tastingNotes: "Pale yellow, medium-bodied, medium hopped, oat flake notes, light citrus notes, herbal notes"
    },
    {
      name: "Einstök Arctic",
      imgSrc: 'https://slash3.winevybe.com/wp-content/uploads/Einstok-Olgerd-Einstok-Arctic-Pale-Ale.png',
      style: categories[5],
      tastingNotes: "Amber-yellow, medium-bodied, with a rich head, strongly hopped, fruity, spicy"
    },
    {
      name: "Kona Fire Rock",
      imgSrc: 'https://slash2.winevybe.com/wp-content/uploads/Kona-Brewing-Kona-Fire-Rock-Pale-Ale.png',
      style: categories[5],
      tastingNotes: "Copper-yellow, full-bodied, medium hopped, malt biscuit notes, apricot notes, hint of honey, light herb notes"
    },
    {
      name: "Stone Enter Night",
      imgSrc: 'https://slash1.winevybe.com/wp-content/uploads/Stone-Brewing-Stone-Enter-Night-Pilsner-can.png',
      style: categories[6],
      tastingNotes: "Golden-yellow, medium-bodied, strongly hopped, citrus notes, malty, aromatic"
    },
    {
      name: "Kinn Bryggeri",
      imgSrc: 'https://slash3.winevybe.com/wp-content/uploads/Kinn-Bryggeri-Kinn-Pils.png',
      style: categories[6],
      tastingNotes: "Golden-yellow, medium-bodied, cloudy, medium hopped, grainy notes, hint of citrus, grassy, herbal notes"
    },
    {
      name: "Ballast Point Victory at Sea",
      imgSrc: 'https://slash4.winevybe.com/wp-content/uploads/Ballast-Point-Ballast-Point-Victory-at-Sea.png',
      style: categories[7],
      tastingNotes: "Full bodied, malty, with notes of black coffee, vanilla, chocolate, a touch of caramel."
    },
    {
      name: "Del Puerto",
      imgSrc: 'https://slash4.winevybe.com/wp-content/uploads/Cervecera-del-Puerto-SpA-Cerveza-del-Puerto-Porter.png',
      style: categories[7],
      tastingNotes: "Dark brown, medium-bodied, medium hopped, toasted malt notes, fruity, dark chocolate notes"
    },
    {
      name: "Liefmans Brouwerij",
      imgSrc: 'https://slash3.winevybe.com/wp-content/uploads/Liefmans-Brouwerij-Liefmans-Fruitesse.png',
      style: categories[8],
      tastingNotes: "Red, medium-bodied, mildly hopped, strawberry notes, raspberry notes, cherry notes, light citrus notes, fresh, refreshing"
    },
    {
      name: "Thornbridge Tart",
      imgSrc: 'https://slash4.winevybe.com/wp-content/uploads/Thornbridge-Thornbridge-Tart-Bakewell-Sour.png',
      style: categories[8],
      tastingNotes: "Golden-yellow, medium-bodied, mildly hopped, citrus notes, grapefruity"
    },
    {
      name: "Stone Xocoveza",
      imgSrc: 'https://slash4.winevybe.com/wp-content/uploads/Stone-Brewing-Stone-Xocoveza-can.png',
      style: categories[9],
      tastingNotes:"Black, full-bodied, strongly hopped, nutty, chocolate malt notes, spicy"
    },
    {
      name: "Great Divide Yeti",
      imgSrc: 'https://slash1.winevybe.com/wp-content/uploads/Great-Divide-Brewing-Great-Divide-Yeti-Imperial-Stout.png',
      style: categories[9],
      tastingNotes: "Black, extra full-bodied, with a rich head, very strongly hopped, rich malty notes, dark chocolate notes, griddle pancake notes, espresso-like, creamy, light herb notes, balanced"
    },
    {
      name: "Delirium Tremens",
      imgSrc: 'https://slash3.winevybe.com/wp-content/uploads/Brouwerij-L.-Huyghe-Huyghe-Delirium-Tremens.png',
      style: categories[10],
      tastingNotes: "Feels like the sound shot of alcohol is igniting the mouth. In reality the tongue and palate are warmed. The taste is characterized by its roundness. The aftertaste is strong, long-lasting and dry bitter."
    },
    {
      name: "N'Ice Chouffe",
      imgSrc: 'https://slash3.winevybe.com/wp-content/uploads/Brasserie-dAchouffe-NIce-Chouffe.png',
      style: categories[10],
      tastingNotes: "A dark beer, slightly hoppy, spiced with thyme and curaçao, and made using orange peel."
    },
    {
      name: "Chimay Blue",
      imgSrc: 'https://slash2.winevybe.com/wp-content/uploads/Chimay-Chimay-Blue.png',
      style: categories[11],
      tastingNotes: "Chestnut brown, full-bodied, cloudy, with a rich head, medium hopped, plum notes, liquorice notes, syrupy, light bitter almond notes, warm"
    },
    {
      name: "La Trappe Quadrupel",
      imgSrc: 'https://slash1.winevybe.com/wp-content/uploads/Bierbrouwerij-de-Koningshoeven-La-Trappe-Quadrupel.png',
      style: categories[11],
      tastingNotes: "Malty with sweet notes of dates, figs and caramel and a long, soft aftertaste."
    },
    {
      name: "Ayinger Urweisse",
      imgSrc: 'https://slash2.winevybe.com/wp-content/uploads/Brauerei-Aying-Ayinger-Urweisse.png',
      style: categories[12],
      tastingNotes: "A complex dark wheat beer with suggestions of soft fruit, apple, and, in the finish, perhaps even cloves."
    },
    {
      name: "Weihenstephaner Hefeweissbier",
      imgSrc: 'https://slash3.winevybe.com/wp-content/uploads/Weihenstephan-Weihenstephaner-Hefeweissbier.png',
      style: categories[12],
      tastingNotes: "Golden-yellow, medium-bodied, cloudy, with a rich head, mildly hopped, malty, apricot jam notes, rich banana notes, herbal notes."
    },

  ]);

  console.log(items)

  process.exit();

})();
