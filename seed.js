require('dotenv').config();
require('./config/database');

const Style = require('./models/style');
const Beer = require('./models/beer');

(async function() {
  await Style.deleteMany({});
  const styles = await Style.create([
    {name: 'Ale', sortOrder: 10},
    {name: 'Brown Ale', sortOrder: 20},
    {name: 'Golden Ale', sortOrder: 30},
    {name: 'IPA', sortOrder: 40},
    {name: 'Lager', sortOrder: 50},
    {name: 'Pale Ale', sortOrder: 60},
    {name: 'Pilsner', sortOrder: 70},
    {name: 'Porter', sortOrder: 80},
    {name: 'Sour', sortOrder: 90},
    {name: 'Stout', sortOrder: 100},
    {name: 'Strong Ale', sortOrder: 110},
    {name: 'Trappist', sortOrder: 120},
    {name: 'Wheat', sortOrder: 130},
  ]);

  await Beer.deleteMany({});
  const beers = await Beer.create([
    {
      name: "Fuller's Organic Honey Dew",
      imgSrc: 'https://winevybe.com/wp-content/uploads/Fullers-Fullers-Organic-Honey-Dew.png',
      style: styles[0],
      tastingNotes: "Golden-yellow, medium-bodied, mildly hopped, grainy notes, biscuity, honey notes, hint of citrus, light herb notes"
    },
    {
      name: "Marstons Young's Special London Ale",
      imgSrc: 'https://winevybe.com/wp-content/uploads/Marstons-Youngs-Special-London-Ale.png',
      style: styles[0],
      tastingNotes: "Golden brown, amber, medium-bodied, cloudy, strongly hopped, caramel malt notes, dried fruits, ripe citrus notes, light herb notes, balanced"
    },
    {
      name: "Samuel Smith",
      imgSrc: 'https://winevybe.com/wp-content/uploads/Samuel-Smith-Samuel-Smith-Nut-Brown-Ale.png',
      style: styles[1],
      tastingNotes: "Chestnut brown, medium-bodied, medium hopped, caramel malt notes, plum notes, chocolaty, hint of peanuts, spicy"
    },
    {
      name: "Põhjala Brewing",
      imgSrc: 'https://winevybe.com/wp-content/uploads/Pohjala-Brewing-Pohjala-Kolumbus-Krisostomus-Cellar-Series.png',
      style: styles[1],
      tastingNotes: "Dark brown, extra full-bodied, strongly hopped, aromatic, fruity, caramel notes"
    },
    {
      name: "Hitachino Nipponia",
      imgSrc: 'https://winevybe.com/wp-content/uploads/Kiuchi-Brewery-Hitachino-Nest-Nipponia.png',
      style: styles[2],
      tastingNotes: "Copper-yellow, full-bodied, cloudy, medium hopped, honey malt notes, dried fruits, light baked notes, aromatic"
    },
    {
      name: "Duvel",
      imgSrc: 'https://winevybe.com/wp-content/uploads/Duvel-Moortgat-Duvel.png',
      style: styles[2],
      tastingNotes: "Pale yellow, full-bodied, cloudy, with a rich head, medium hopped, honey malt notes, fruity, light citrus notes, hint of herb, soft, smooth"
    },
    {
      name: "Rogue Batsquatch",
      imgSrc: 'https://winevybe.com/wp-content/uploads/Rogue-Rogue-Batsquatch-Hazy-India-Pale-Ale-can.png',
      style: styles[3],
      tastingNotes: "Golden-yellow, medium-bodied, cloudy, medium hopped, grapefruity, aromatic, orangey"
    },
    {
      name: "Sierra Nevada Torpedo",
      imgSrc: 'https://winevybe.com/wp-content/uploads/Sierra-Nevada-Sierra-Nevada-Torpedo-Extra-IPA.png',
      style: styles[3],
      tastingNotes: "Copper-brown, full-bodied, strongly hopped, grainy notes, fruity"
    },
    {
      name: "Bitburger",
      imgSrc: 'https://winevybe.com/wp-content/uploads/Bitburger-Bitburger-Premium.png',
      style: styles[4],
      tastingNotes: "Mild fruitiness and freshness with a hint of malty sweetness yielding to a crisp hop tone and harmonious finish."
    },
    {
      name: "Weihenstephaner Original Helles",
      imgSrc: 'https://winevybe.com/wp-content/uploads/Weihenstephan-Weihenstephaner-Original-Helles.png',
      style: styles[4],
      tastingNotes: "Pale yellow, medium-bodied, medium hopped, oat flake notes, light citrus notes, herbal notes"
    },
    {
      name: "Einstök Arctic",
      imgSrc: 'https://winevybe.com/wp-content/uploads/Einstok-Olgerd-Einstok-Arctic-Pale-Ale.png',
      style: styles[5],
      tastingNotes: "Amber-yellow, medium-bodied, with a rich head, strongly hopped, fruity, spicy"
    },
    {
      name: "Kona Fire Rock",
      imgSrc: 'https://winevybe.com/wp-content/uploads/Kona-Brewing-Kona-Fire-Rock-Pale-Ale.png',
      style: styles[5],
      tastingNotes: "Copper-yellow, full-bodied, medium hopped, malt biscuit notes, apricot notes, hint of honey, light herb notes"
    },
    {
      name: "Stone Enter Night",
      imgSrc: 'https://winevybe.com/wp-content/uploads/Stone-Brewing-Stone-Enter-Night-Pilsner-can.png',
      style: styles[6],
      tastingNotes: "Golden-yellow, medium-bodied, strongly hopped, citrus notes, malty, aromatic"
    },
    {
      name: "Kinn Bryggeri",
      imgSrc: 'https://winevybe.com/wp-content/uploads/Kinn-Bryggeri-Kinn-Pils.png',
      style: styles[6],
      tastingNotes: "Golden-yellow, medium-bodied, cloudy, medium hopped, grainy notes, hint of citrus, grassy, herbal notes"
    },
    {
      name: "Ballast Point Victory at Sea",
      imgSrc: 'https://winevybe.com/wp-content/uploads/Ballast-Point-Ballast-Point-Victory-at-Sea.png',
      style: styles[7],
      tastingNotes: "Full bodied, malty, with notes of black coffee, vanilla, chocolate, a touch of caramel."
    },
    {
      name: "Del Puerto",
      imgSrc: 'https://winevybe.com/wp-content/uploads/Cervecera-del-Puerto-SpA-Cerveza-del-Puerto-Porter.png',
      style: styles[7],
      tastingNotes: "Dark brown, medium-bodied, medium hopped, toasted malt notes, fruity, dark chocolate notes"
    },
    {
      name: "Liefmans Brouwerij",
      imgSrc: 'https://winevybe.com/wp-content/uploads/Liefmans-Brouwerij-Liefmans-Fruitesse.png',
      style: styles[8],
      tastingNotes: "Red, medium-bodied, mildly hopped, strawberry notes, raspberry notes, cherry notes, light citrus notes, fresh, refreshing"
    },
    {
      name: "Thornbridge Tart",
      imgSrc: 'https://winevybe.com/wp-content/uploads/Thornbridge-Thornbridge-Tart-Bakewell-Sour.png',
      style: styles[8],
      tastingNotes: "Golden-yellow, medium-bodied, mildly hopped, citrus notes, grapefruity"
    },
    {
      name: "Stone Xocoveza",
      imgSrc: 'https://winevybe.com/wp-content/uploads/Stone-Brewing-Stone-Xocoveza-can.png',
      style: styles[9],
      tastingNotes:"Black, full-bodied, strongly hopped, nutty, chocolate malt notes, spicy"
    },
    {
      name: "Great Divide Yeti",
      imgSrc: 'https://winevybe.com/wp-content/uploads/Great-Divide-Brewing-Great-Divide-Yeti-Imperial-Stout.png',
      style: styles[9],
      tastingNotes: "Black, extra full-bodied, with a rich head, very strongly hopped, rich malty notes, dark chocolate notes, griddle pancake notes, espresso-like, creamy, light herb notes, balanced"
    },
    {
      name: "Delirium Tremens",
      imgSrc: 'https://winevybe.com/wp-content/uploads/Brouwerij-L.-Huyghe-Huyghe-Delirium-Tremens.png',
      style: styles[10],
      tastingNotes: "Feels like the sound shot of alcohol is igniting the mouth. In reality the tongue and palate are warmed. The taste is characterized by its roundness. The aftertaste is strong, long-lasting and dry bitter."
    },
    {
      name: "N'Ice Chouffe",
      imgSrc: 'https://winevybe.com/wp-content/uploads/Brasserie-dAchouffe-NIce-Chouffe.png',
      style: styles[10],
      tastingNotes: "A dark beer, slightly hoppy, spiced with thyme and curaçao, and made using orange peel."
    },
    {
      name: "Chimay Blue",
      imgSrc: 'https://winevybe.com/wp-content/uploads/Chimay-Chimay-Blue.png',
      style: styles[11],
      tastingNotes: "Chestnut brown, full-bodied, cloudy, with a rich head, medium hopped, plum notes, liquorice notes, syrupy, light bitter almond notes, warm"
    },
    {
      name: "La Trappe Quadrupel",
      imgSrc: 'https://winevybe.com/wp-content/uploads/Bierbrouwerij-de-Koningshoeven-La-Trappe-Quadrupel.png',
      style: styles[11],
      tastingNotes: "Malty with sweet notes of dates, figs and caramel and a long, soft aftertaste."
    },
    {
      name: "Ayinger Urweisse",
      imgSrc: 'https://winevybe.com/wp-content/uploads/Brauerei-Aying-Ayinger-Urweisse.png',
      style: styles[12],
      tastingNotes: "A complex dark wheat beer with suggestions of soft fruit, apple, and, in the finish, perhaps even cloves."
    },
    {
      name: "Weihenstephaner Hefeweissbier",
      imgSrc: 'https://winevybe.com/wp-content/uploads/Weihenstephan-Weihenstephaner-Hefeweissbier.png',
      style: styles[12],
      tastingNotes: "Golden-yellow, medium-bodied, cloudy, with a rich head, mildly hopped, malty, apricot jam notes, rich banana notes, herbal notes."
    },

  ]);


  process.exit();

})();
