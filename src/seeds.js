import createApolloServer from './apollo-server.js'

let wweChampions = [
  {
    titleHolder: 'Drew McIntyre',
    dateWon: '04-05-2020',
    dateLost: '10-18-2020',
    show: 'WrestleMania 36 - Night 2',
    previousChampion: 'Brock Lesnar',
  },
  {
    titleHolder: 'Brock Lesnar',
    dateWon: '10-04-2019',
    dateLost: '04-05-2020',
    show: "SmackDown's Fox Debut",
    previousChampion: 'Kofi Kingston',
  },
  {
    titleHolder: 'Kofi Kingston',
    dateWon: '04-07-2019',
    dateLost: '10-04-2019',
    show: 'WrestleMania 35',
    previousChampion: 'Daniel Bryan',
  },
  {
    titleHolder: 'Daniel Bryan',
    dateWon: '11-13-2018',
    dateLost: '04-07-2019',
    show: 'SmackDown',
    previousChampion: 'AJ Styles',
  },
  {
    titleHolder: 'AJ Styles',
    dateWon: '11-07-2017',
    dateLost: '11-13-2018',
    show: 'SmackDown',
    previousChampion: 'Jinder Mahal',
  },
  {
    titleHolder: 'Jinder Mahal',
    dateWon: '05-21-2017',
    dateLost: '11-07-2017',
    show: 'Back+F7lash',
    previousChampion: 'Randy Orton',
  },
  {
    titleHolder: 'Randy Orton',
    dateWon: '04-02-2017',
    dateLost: '05-21-2017',
    show: 'WrestleMania 33',
    previousChampion: 'Bray Wyatt',
  },
  {
    titleHolder: 'Bray Wyatt',
    dateWon: '02-12-2017',
    dateLost: '04-02-2017',
    show: 'Elimination Chamber',
    previousChampion: 'John Cena',
  },
  {
    titleHolder: 'John Cena',
    dateWon: '01-29-2017',
    dateLost: '02-12-2017',
    show: 'Royal Rumble',
    previousChampion: 'AJ Styles',
  },
  {
    titleHolder: 'AJ Styles',
    dateWon: '09-11-2016',
    dateLost: '01-29-2017',
    show: 'Backlash',
    previousChampion: 'Dean Ambrose',
  },
  {
    titleHolder: 'Seth Rollins',
    dateWon: '06-19-2016',
    dateLost: '06-19-2016',
    show: 'Money in the Bank',
    previousChampion: 'Roman Reigns',
  },
  {
    titleHolder: 'Dean Ambrose',
    dateWon: '06-19-2016',
    dateLost: '09-11-2016',
    show: 'Money in the Bank',
    previousChampion: 'Seth Rollins',
  },
  {
    titleHolder: 'Roman Reigns',
    dateWon: '04-03-2016',
    dateLost: '06-19-2016',
    show: 'WrestleMania 32',
    previousChampion: 'Triple H',
  },
  {
    titleHolder: 'Triple H',
    dateWon: '01-24-2016',
    dateLost: '04-03-2016',
    show: 'Royal Rumble',
    previousChampion: 'Roman Reigns',
  },
  {
    titleHolder: 'Roman Reigns',
    dateWon: '12-14-2015',
    dateLost: '01-24-2016',
    show: 'Raw',
    previousChampion: 'Sheamus',
  },
  {
    titleHolder: 'Roman Reigns',
    dateWon: '11-22-2015',
    dateLost: '11-22-2015',
    show: 'Survivor Series',
    previousChampion: 'Vacated',
  },
  {
    titleHolder: 'Sheamus',
    dateWon: '11-22-2015',
    dateLost: '12-14-2015',
    show: 'Survivor Series',
    previousChampion: 'Roman Reigns',
  },
  {
    titleHolder: 'Vacated',
    dateWon: '11-04-2015',
    dateLost: '11-22-2015',
    show: 'The Title was Vacant',
    previousChampion: 'Seth Rollins',
  },
  {
    titleHolder: 'Seth Rollins',
    dateWon: '03-29-2015',
    dateLost: '11-04-2015',
    show: 'WrestleMania 31',
    previousChampion: 'Brock Lesnar',
  },
  {
    titleHolder: 'Brock Lesnar',
    dateWon: '08-17-2014',
    dateLost: '03-29-2015',
    show: 'SummerSlam',
    previousChampion: 'John Cena',
  },
  {
    titleHolder: 'John Cena',
    dateWon: '06-29-2014',
    dateLost: '08-17-2014',
    show: 'Money in the Bank',
    previousChampion: 'Vacated',
  },
  {
    titleHolder: 'Vacated',
    dateWon: '06-09-2014',
    dateLost: '06-29-2014',
    show: 'Raw',
    previousChampion: 'Daniel Bryan',
  },
  {
    titleHolder: 'Daniel Bryan',
    dateWon: '04-06-2014',
    dateLost: '06-09-2014',
    show: 'WrestleMania XXX',
    previousChampion: 'Randy Orton',
  },
  {
    titleHolder: 'Randy Orton',
    dateWon: '10-27-2013',
    dateLost: '04-06-2014',
    show: 'Hell in a Cell',
    previousChampion: 'Vacated',
  },
  {
    titleHolder: 'Vacated',
    dateWon: '09-16-2013',
    dateLost: '10-27-2013',
    show: 'Raw',
    previousChampion: 'Daniel Bryan',
  },
  {
    titleHolder: 'Daniel Bryan',
    dateWon: '09-15-2013',
    dateLost: '09-16-2013',
    show: 'Night of Champions',
    previousChampion: 'Randy Orton',
  },
  {
    titleHolder: 'Daniel Bryan',
    dateWon: '08-18-2013',
    dateLost: '08-18-2013',
    show: 'SummerSlam',
    previousChampion: 'John Cena',
  },
  {
    titleHolder: 'Randy Orton',
    dateWon: '08-18-2013',
    dateLost: '09-15-2013',
    show: 'SummerSlam',
    previousChampion: 'Daniel Bryan',
  },
  {
    titleHolder: 'John Cena',
    dateWon: '04-07-2013',
    dateLost: '08-18-2013',
    show: 'WrestleMania 29',
    previousChampion: 'The Rock',
  },
  {
    titleHolder: 'The Rock',
    dateWon: '01-27-2013',
    dateLost: '04-07-2013',
    show: 'Royal Rumble',
    previousChampion: 'CM Punk',
  },
  {
    titleHolder: 'CM Punk',
    dateWon: '11-20-2011',
    dateLost: '01-27-2013',
    show: 'Survivor Series',
    previousChampion: 'Alberto Del Rio',
  },
  {
    titleHolder: 'Alberto Del Rio',
    dateWon: '10-02-2011',
    dateLost: '11-20-2011',
    show: 'Hell in a Cell',
    previousChampion: 'John Cena',
  },
  {
    titleHolder: 'John Cena',
    dateWon: '09-18-2011',
    dateLost: '10-02-2011',
    show: 'Night of Champions',
    previousChampion: 'Alberto Del Rio',
  },
  {
    titleHolder: 'CM Punk',
    dateWon: '08-14-2011',
    dateLost: '08-14-2011',
    show: 'SummerSlam',
    previousChampion: 'John Cena',
  },
  {
    titleHolder: 'Alberto Del Rio',
    dateWon: '08-14-2011',
    dateLost: '09-18-2011',
    show: 'SummerSlam',
    previousChampion: 'CM Punk',
  },
  {
    titleHolder: 'Rey Mysterio',
    dateWon: '07-25-2011',
    dateLost: '07-25-2011',
    show: 'Raw',
    previousChampion: 'Vacated',
  },
  {
    titleHolder: 'John Cena',
    dateWon: '07-25-2011',
    dateLost: '08-14-2011',
    show: 'Raw',
    previousChampion: 'Rey Mysterio',
  },
  {
    titleHolder: 'Vacated',
    dateWon: '07-18-2011',
    dateLost: '07-25-2011',
    show: 'Raw',
    previousChampion: 'CM Punk',
  },
  {
    titleHolder: 'CM Punk',
    dateWon: '07-17-2011',
    dateLost: '07-18-2011',
    show: 'Money in the Bank',
    previousChampion: 'John Cena',
  },
  {
    titleHolder: 'John Cena',
    dateWon: '05-01-2011',
    dateLost: '07-17-2011',
    show: 'Extreme Rules',
    previousChampion: 'The Miz',
  },
  {
    titleHolder: 'The Miz',
    dateWon: '11-22-2010',
    dateLost: '05-01-2011',
    show: 'Raw',
    previousChampion: 'Randy Orton',
  },
  {
    titleHolder: 'Randy Orton',
    dateWon: '09-19-2010',
    dateLost: '11-22-2010',
    show: 'Night of Champions',
    previousChampion: 'Sheamus',
  },
  {
    titleHolder: 'Sheamus',
    dateWon: '06-20-2010',
    dateLost: '09-19-2010',
    show: 'Fatal 4-Way',
    previousChampion: 'John Cena',
  },
  {
    titleHolder: 'John Cena',
    dateWon: '03-28-2010',
    dateLost: '06-20-2010',
    show: 'WrestleMania XXVI',
    previousChampion: 'Batista',
  },
  {
    titleHolder: 'John Cena',
    dateWon: '02-21-2010',
    dateLost: '02-21-2010',
    show: 'Elimination Chamber',
    previousChampion: 'Sheamus',
  },
  {
    titleHolder: 'Batista',
    dateWon: '02-21-2010',
    dateLost: '03-28-2010',
    show: 'Elimination Chamber',
    previousChampion: 'John Cena',
  },
  {
    titleHolder: 'Sheamus',
    dateWon: '12-13-2009',
    dateLost: '02-21-2010',
    show: 'TLC: Tables, Ladders & Chairs',
    previousChampion: 'John Cena',
  },
  {
    titleHolder: 'John Cena',
    dateWon: '10-25-2009',
    dateLost: '12-13-2009',
    show: 'Bragging Rights',
    previousChampion: 'Randy Orton',
  },
  {
    titleHolder: 'Randy Orton',
    dateWon: '10-04-2009',
    dateLost: '10-25-2009',
    show: 'Hell in a Cell',
    previousChampion: 'John Cena',
  },
  {
    titleHolder: 'John Cena',
    dateWon: '09-13-2009',
    dateLost: '10-04-2009',
    show: 'Breaking Point',
    previousChampion: 'Randy Orton',
  },
  {
    titleHolder: 'Randy Orton',
    dateWon: '06-15-2009',
    dateLost: '09-13-2009',
    show: 'Raw',
    previousChampion: 'Vacated',
  },
  {
    titleHolder: 'Vacated',
    dateWon: '06-09-2009',
    dateLost: '06-15-2009',
    show: 'The Title was Vacant',
    previousChampion: 'Batista',
  },
  {
    titleHolder: 'Batista',
    dateWon: '06-07-2009',
    dateLost: '06-09-2009',
    show: 'Extreme Rules',
    previousChampion: 'Randy Orton',
  },
  {
    titleHolder: 'Randy Orton',
    dateWon: '04-26-2009',
    dateLost: '06-07-2009',
    show: 'Backlash',
    previousChampion: 'Triple H',
  },
  {
    titleHolder: 'Triple H',
    dateWon: '02-15-2009',
    dateLost: '04-26-2009',
    show: 'No Way Out',
    previousChampion: 'Edge',
  },
  {
    titleHolder: 'Edge',
    dateWon: '01-25-2009',
    dateLost: '02-15-2009',
    show: 'Royal Rumble',
    previousChampion: 'Jeff Hardy',
  },
  {
    titleHolder: 'Jeff Hardy',
    dateWon: '12-14-2008',
    dateLost: '01-25-2009',
    show: 'Armageddon',
    previousChampion: 'Edge',
  },
  {
    titleHolder: 'Edge',
    dateWon: '11-23-2008',
    dateLost: '12-14-2008',
    show: 'Survivor Series',
    previousChampion: 'Triple H',
  },
  {
    titleHolder: 'Triple H',
    dateWon: '04-27-2008',
    dateLost: '11-23-2008',
    show: 'Backlash',
    previousChampion: 'Randy Orton',
  },
  {
    titleHolder: 'Randy Orton',
    dateWon: '10-07-2007',
    dateLost: '10-07-2007',
    show: 'No Mercy',
    previousChampion: 'Vacated',
  },
  {
    titleHolder: 'Triple H',
    dateWon: '10-07-2007',
    dateLost: '10-07-2007',
    show: 'No Mercy',
    previousChampion: 'Randy Orton',
  },
  {
    titleHolder: 'Randy Orton',
    dateWon: '10-07-2007',
    dateLost: '04-27-2008',
    show: 'No Mercy',
    previousChampion: 'Triple H',
  },
  {
    titleHolder: 'Vacated',
    dateWon: '10-02-2007',
    dateLost: '10-07-2007',
    show: 'ECW',
    previousChampion: 'John Cena',
  },
  {
    titleHolder: 'John Cena',
    dateWon: '09-17-2006',
    dateLost: '10-02-2007',
    show: 'Unforgiven',
    previousChampion: 'Edge',
  },
  {
    titleHolder: 'Edge',
    dateWon: '07-03-2006',
    dateLost: '09-17-2006',
    show: 'Raw',
    previousChampion: 'Rob Van Dam',
  },
  {
    titleHolder: 'Rob Van Dam',
    dateWon: '06-11-2006',
    dateLost: '07-03-2006',
    show: 'ECW One Night Stand',
    previousChampion: 'John Cena',
  },
  {
    titleHolder: 'John Cena',
    dateWon: '01-29-2006',
    dateLost: '06-11-2006',
    show: 'Royal Rumble',
    previousChampion: 'Edge',
  },
  {
    titleHolder: 'Edge',
    dateWon: '01-08-2006',
    dateLost: '01-29-2006',
    show: "New Year's Revolution",
    previousChampion: 'John Cena',
  },
  {
    titleHolder: 'John Cena',
    dateWon: '04-03-2005',
    dateLost: '01-08-2006',
    show: 'WrestleMania 21',
    previousChampion: 'John Bradshaw Layfield',
  },
  {
    titleHolder: 'John Bradshaw Layfield',
    dateWon: '06-27-2004',
    dateLost: '04-03-2005',
    show: 'The Great American Bash',
    previousChampion: 'Eddie Guerrero',
  },
  {
    titleHolder: 'Eddie Guerrero',
    dateWon: '02-15-2004',
    dateLost: '06-27-2004',
    show: 'No Way Out',
    previousChampion: 'Brock Lesnar',
  },
  {
    titleHolder: 'Brock Lesnar',
    dateWon: '09-16-2003',
    dateLost: '02-15-2004',
    show: 'SmackDown!',
    previousChampion: 'Kurt Angle',
  },
  {
    titleHolder: 'Kurt Angle',
    dateWon: '07-27-2003',
    dateLost: '09-16-2003',
    show: 'Vengeance',
    previousChampion: 'Brock Lesnar',
  },
  {
    titleHolder: 'Brock Lesnar',
    dateWon: '03-30-2003',
    dateLost: '07-27-2003',
    show: 'WrestleMania XIX',
    previousChampion: 'Kurt Angle',
  },
  {
    titleHolder: 'Kurt Angle',
    dateWon: '12-15-2002',
    dateLost: '03-30-2003',
    show: 'Armageddon',
    previousChampion: 'Big Show',
  },
  {
    titleHolder: 'Big Show',
    dateWon: '11-17-2002',
    dateLost: '12-15-2002',
    show: 'Survivor Series',
    previousChampion: 'Brock Lesnar',
  },
  {
    titleHolder: 'Brock Lesnar',
    dateWon: '08-25-2002',
    dateLost: '11-17-2002',
    show: 'SummerSlam',
    previousChampion: 'The Rock',
  },
  {
    titleHolder: 'The Rock',
    dateWon: '07-21-2002',
    dateLost: '08-25-2002',
    show: 'Vengeance',
    previousChampion: 'The Undertaker',
  },
  {
    titleHolder: 'The Undertaker',
    dateWon: '05-19-2002',
    dateLost: '07-21-2002',
    show: 'Judgment Day',
    previousChampion: 'Hollywood Hulk Hogan',
  },
  {
    titleHolder: 'Hollywood Hulk Hogan',
    dateWon: '04-21-2002',
    dateLost: '05-19-2002',
    show: 'Backlash',
    previousChampion: 'Triple H',
  },
  {
    titleHolder: 'Triple H',
    dateWon: '03-17-2002',
    dateLost: '04-21-2002',
    show: 'WrestleMania X8',
    previousChampion: 'Chris Jericho',
  },
  {
    titleHolder: 'Chris Jericho',
    dateWon: '12-09-2001',
    dateLost: '03-17-2002',
    show: 'Vengeance',
    previousChampion: 'Stone Cold Steve Austin',
  },
  {
    titleHolder: 'Stone Cold Steve Austin',
    dateWon: '10-08-2001',
    dateLost: '12-09-2001',
    show: 'Raw',
    previousChampion: 'Kurt Angle',
  },
  {
    titleHolder: 'Kurt Angle',
    dateWon: '09-23-2001',
    dateLost: '10-08-2001',
    show: 'Unforgiven',
    previousChampion: 'Stone Cold Steve Austin',
  },
  {
    titleHolder: 'Stone Cold Steve Austin',
    dateWon: '04-01-2001',
    dateLost: '09-23-2001',
    show: 'WrestleMania X-Seven',
    previousChampion: 'The Rock',
  },
  {
    titleHolder: 'The Rock',
    dateWon: '02-25-2001',
    dateLost: '04-01-2001',
    show: 'No Way Out',
    previousChampion: 'Kurt Angle',
  },
  {
    titleHolder: 'Kurt Angle',
    dateWon: '10-22-2000',
    dateLost: '02-25-2001',
    show: 'No Mercy',
    previousChampion: 'The Rock',
  },
  {
    titleHolder: 'The Rock',
    dateWon: '06-25-2000',
    dateLost: '10-22-2000',
    show: 'King of the Ring',
    previousChampion: 'Triple H',
  },
  {
    titleHolder: 'Triple H',
    dateWon: '05-21-2000',
    dateLost: '06-25-2000',
    show: 'Judgment Day',
    previousChampion: 'The Rock',
  },
  {
    titleHolder: 'The Rock',
    dateWon: '04-30-2000',
    dateLost: '05-21-2000',
    show: 'Backlash',
    previousChampion: 'Triple H',
  },
  {
    titleHolder: 'Triple H',
    dateWon: '01-03-2000',
    dateLost: '04-30-2000',
    show: 'Raw',
    previousChampion: 'Big Show',
  },
  {
    titleHolder: 'Big Show',
    dateWon: '11-14-1999',
    dateLost: '01-03-2000',
    show: 'Survivor Series',
    previousChampion: 'Triple H',
  },
  {
    titleHolder: 'Triple H',
    dateWon: '09-26-1999',
    dateLost: '11-14-1999',
    show: 'Unforgiven',
    previousChampion: 'Vacated',
  },
  {
    titleHolder: 'Vacated',
    dateWon: '09-20-1999',
    dateLost: '09-26-1999',
    show: 'Raw',
    previousChampion: 'Vince McMahon',
  },
  {
    titleHolder: 'Vince McMahon',
    dateWon: '09-14-1999',
    dateLost: '09-20-1999',
    show: 'SmackDown!',
    previousChampion: 'Triple H',
  },
  {
    titleHolder: 'Triple H',
    dateWon: '08-23-1999',
    dateLost: '09-14-1999',
    show: 'Raw',
    previousChampion: 'Mankind',
  },
  {
    titleHolder: 'Mankind',
    dateWon: '08-22-1999',
    dateLost: '08-23-1999',
    show: 'SummerSlam',
    previousChampion: 'Stone Cold Steve Austin',
  },
  {
    titleHolder: 'Stone Cold Steve Austin',
    dateWon: '06-28-1999',
    dateLost: '08-22-1999',
    show: 'Raw',
    previousChampion: 'The Undertaker',
  },
  {
    titleHolder: 'The Undertaker',
    dateWon: '05-23-1999',
    dateLost: '06-28-1999',
    show: 'Over the Edge',
    previousChampion: 'Stone Cold Steve Austin',
  },
  {
    titleHolder: 'Stone Cold Steve Austin',
    dateWon: '03-28-1999',
    dateLost: '05-23-1999',
    show: 'WrestleMania XV',
    previousChampion: 'The Rock',
  },
  {
    titleHolder: 'The Rock',
    dateWon: '02-15-1999',
    dateLost: '03-28-1999',
    show: 'Raw',
    previousChampion: 'Mankind',
  },
  {
    titleHolder: 'Mankind',
    dateWon: '01-26-1999',
    dateLost: '02-15-1999',
    show: 'Halftime Heat',
    previousChampion: 'The Rock',
  },
  {
    titleHolder: 'The Rock',
    dateWon: '01-24-1999',
    dateLost: '01-26-1999',
    show: 'Royal Rumble',
    previousChampion: 'Mankind',
  },
  {
    titleHolder: 'Mankind',
    dateWon: '12-29-1998',
    dateLost: '01-24-1999',
    show: 'Raw',
    previousChampion: 'The Rock',
  },
  {
    titleHolder: 'The Rock',
    dateWon: '11-15-1998',
    dateLost: '12-29-1998',
    show: 'Survivor Series',
    previousChampion: 'Vacated',
  },
  {
    titleHolder: 'Vacated',
    dateWon: '09-27-1998',
    dateLost: '11-15-1998',
    show: 'Breakdown: In Your House',
    previousChampion: 'Stone Cold Steve Austin',
  },
  {
    titleHolder: 'Stone Cold Steve Austin',
    dateWon: '06-29-1998',
    dateLost: '09-27-1998',
    show: 'Raw',
    previousChampion: 'Kane',
  },
  {
    titleHolder: 'Kane',
    dateWon: '06-28-1998',
    dateLost: '06-29-1998',
    show: 'King of the Ring',
    previousChampion: 'Stone Cold Steve Austin',
  },
  {
    titleHolder: 'Stone Cold Steve Austin',
    dateWon: '03-29-1998',
    dateLost: '06-28-1998',
    show: 'WrestleMania XIV',
    previousChampion: 'Shawn Michaels',
  },
  {
    titleHolder: 'Shawn Michaels',
    dateWon: '11-09-1997',
    dateLost: '03-29-1998',
    show: 'Survivor Series',
    previousChampion: 'Bret Hart',
  },
  {
    titleHolder: 'Bret Hart',
    dateWon: '08-03-1997',
    dateLost: '11-09-1997',
    show: 'SummerSlam',
    previousChampion: 'The Undertaker',
  },
  {
    titleHolder: 'The Undertaker',
    dateWon: '03-23-1997',
    dateLost: '08-03-1997',
    show: 'WrestleMania 13',
    previousChampion: 'Sycho Sid',
  },
  {
    titleHolder: 'Sycho Sid',
    dateWon: '02-17-1997',
    dateLost: '03-23-1997',
    show: 'Raw',
    previousChampion: 'Bret Hart',
  },
  {
    titleHolder: 'Bret Hart',
    dateWon: '02-16-1997',
    dateLost: '02-17-1997',
    show: 'In Your House 13: Final Four',
    previousChampion: 'Vacated',
  },
  {
    titleHolder: 'Vacated',
    dateWon: '02-13-1997',
    dateLost: '02-16-1997',
    show: 'Raw',
    previousChampion: 'Shawn Michaels',
  },
  {
    titleHolder: 'Shawn Michaels',
    dateWon: '01-19-1997',
    dateLost: '02-13-1997',
    show: 'Royal Rumble',
    previousChampion: 'Sycho Sid',
  },
  {
    titleHolder: 'Sycho Sid',
    dateWon: '11-17-1996',
    dateLost: '01-19-1997',
    show: 'Survivor Series',
    previousChampion: 'Shawn Michaels',
  },
  {
    titleHolder: 'Shawn Michaels',
    dateWon: '03-31-1996',
    dateLost: '11-17-1996',
    show: 'WrestleMania XII',
    previousChampion: 'Bret Hart',
  },
  {
    titleHolder: 'Bret Hart',
    dateWon: '11-19-1995',
    dateLost: '03-31-1996',
    show: 'Survivor Series',
    previousChampion: 'Diesel',
  },
  {
    titleHolder: 'Diesel',
    dateWon: '11-26-1994',
    dateLost: '11-19-1995',
    show: 'House show',
    previousChampion: 'Bob Backlund',
  },
  {
    titleHolder: 'Bob Backlund',
    dateWon: '11-23-1994',
    dateLost: '11-26-1994',
    show: 'Survivor Series',
    previousChampion: 'Bret Hart',
  },
  {
    titleHolder: 'Bret Hart',
    dateWon: '03-20-1994',
    dateLost: '11-23-1994',
    show: 'WrestleMania X',
    previousChampion: 'Yokozuna',
  },
  {
    titleHolder: 'Yokozuna',
    dateWon: '06-13-1993',
    dateLost: '03-20-1994',
    show: 'King of the Ring',
    previousChampion: 'Hulk Hogan',
  },
  {
    titleHolder: 'Yokozuna',
    dateWon: '04-04-1993',
    dateLost: '04-04-1993',
    show: 'WrestleMania IX',
    previousChampion: 'Bret Hart',
  },
  {
    titleHolder: 'Hulk Hogan',
    dateWon: '04-04-1993',
    dateLost: '06-13-1993',
    show: 'WrestleMania IX',
    previousChampion: 'Yokozuna',
  },
  {
    titleHolder: 'Bret Hart',
    dateWon: '10-12-1992',
    dateLost: '04-04-1993',
    show: 'House show',
    previousChampion: 'Ric Flair',
  },
  {
    titleHolder: 'Ric Flair',
    dateWon: '09-01-1992',
    dateLost: '10-12-1992',
    show: 'Prime Time Wrestling',
    previousChampion: 'Randy Savage',
  },
  {
    titleHolder: 'Randy Savage',
    dateWon: '04-05-1992',
    dateLost: '09-01-1992',
    show: 'WrestleMania VIII',
    previousChampion: 'Ric Flair',
  },
  {
    titleHolder: 'Ric Flair',
    dateWon: '01-19-1992',
    dateLost: '04-05-1992',
    show: 'Royal Rumble',
    previousChampion: 'Vacated',
  },
  {
    titleHolder: 'Vacated',
    dateWon: '12-04-1991',
    dateLost: '01-19-1992',
    show: 'Superstars of Wrestling',
    previousChampion: 'Hulk Hogan',
  },
  {
    titleHolder: 'Hulk Hogan',
    dateWon: '12-03-1991',
    dateLost: '12-04-1991',
    show: 'This Tuesday in Texas',
    previousChampion: 'The Undertaker',
  },
  {
    titleHolder: 'The Undertaker',
    dateWon: '11-27-1991',
    dateLost: '12-03-1991',
    show: 'Survivor Series',
    previousChampion: 'Hulk Hogan',
  },
  {
    titleHolder: 'Hulk Hogan',
    dateWon: '03-24-1991',
    dateLost: '11-27-1991',
    show: 'WrestleMania VII',
    previousChampion: 'Sgt. Slaughter',
  },
  {
    titleHolder: 'Sgt. Slaughter',
    dateWon: '01-19-1991',
    dateLost: '03-24-1991',
    show: 'Royal Rumble',
    previousChampion: 'The Ultimate Warrior',
  },
  {
    titleHolder: 'The Ultimate Warrior',
    dateWon: '04-01-1990',
    dateLost: '01-19-1991',
    show: 'WrestleMania VI',
    previousChampion: 'Hulk Hogan',
  },
  {
    titleHolder: 'Hulk Hogan',
    dateWon: '04-02-1989',
    dateLost: '04-01-1990',
    show: 'WrestleMania V',
    previousChampion: 'Randy Savage',
  },
  {
    titleHolder: 'Randy Savage',
    dateWon: '03-27-1988',
    dateLost: '04-02-1989',
    show: 'WrestleMania IV',
    previousChampion: 'Vacated',
  },
  {
    titleHolder: 'Vacated',
    dateWon: '02-13-1988',
    dateLost: '03-27-1988',
    show: 'Superstars of Wrestling',
    previousChampion: 'Ted DiBiase',
  },
  {
    titleHolder: 'Andr� the Giant',
    dateWon: '02-05-1988',
    dateLost: '02-05-1988',
    show: 'The Main Event I',
    previousChampion: 'Hulk Hogan',
  },
  {
    titleHolder: 'Ted DiBiase',
    dateWon: '02-05-1988',
    dateLost: '02-13-1988',
    show: 'The Main Event I',
    previousChampion: 'Andr� the Giant',
  },
  {
    titleHolder: 'Hulk Hogan',
    dateWon: '01-23-1984',
    dateLost: '02-05-1988',
    show: 'WWF on MSG Network',
    previousChampion: 'The Iron Sheik',
  },
  {
    titleHolder: 'The Iron Sheik',
    dateWon: '12-26-1983',
    dateLost: '01-23-1984',
    show: 'WWF on MSG Network',
    previousChampion: 'Bob Backlund',
  },
  {
    titleHolder: 'Bob Backlund',
    dateWon: '12-17-1979',
    dateLost: '12-26-1983',
    show: 'WWF on MSG Network',
    previousChampion: 'Vacated',
  },
  {
    titleHolder: 'Vacated',
    dateWon: '12-06-1979',
    dateLost: '12-17-1979',
    show: 'The Title was Vacant',
    previousChampion: 'Antonio Inoki',
  },
  {
    titleHolder: 'Antonio Inoki',
    dateWon: '11-30-1979',
    dateLost: '12-06-1979',
    show: 'Toukon Series',
    previousChampion: 'Bob Backlund',
  },
  {
    titleHolder: 'Bob Backlund',
    dateWon: '02-20-1978',
    dateLost: '11-30-1979',
    show: 'WWF on MSG Network',
    previousChampion: 'Superstar Billy Graham',
  },
  {
    titleHolder: 'Superstar Billy Graham',
    dateWon: '04-30-1977',
    dateLost: '02-20-1978',
    show: 'House show',
    previousChampion: 'Bruno Sammartino',
  },
  {
    titleHolder: 'Bruno Sammartino',
    dateWon: '12-10-1973',
    dateLost: '04-30-1977',
    show: 'House show',
    previousChampion: 'Stan Stasiak',
  },
  {
    titleHolder: 'Stan Stasiak',
    dateWon: '12-01-1973',
    dateLost: '12-10-1973',
    show: 'House show',
    previousChampion: 'Pedro Morales',
  },
  {
    titleHolder: 'Pedro Morales',
    dateWon: '02-08-1971',
    dateLost: '12-01-1973',
    show: 'House show',
    previousChampion: 'Ivan Koloff',
  },
  {
    titleHolder: 'Ivan Koloff',
    dateWon: '01-18-1971',
    dateLost: '02-08-1971',
    show: 'House show',
    previousChampion: 'Bruno Sammartino',
  },
  {
    titleHolder: 'Bruno Sammartino',
    dateWon: '05-17-1963',
    dateLost: '01-18-1971',
    show: 'House show',
    previousChampion: 'Buddy Rogers',
  },
  {
    titleHolder: 'Buddy Rogers',
    dateWon: '04-11-1963',
    dateLost: '05-17-1963',
    show: 'House show',
    previousChampion: 'The First Champion. ',
  },
]

const updatedChampions = (champions) => {
  const x = champions.reverse().map((champion, index) => {
    return {
      ...champion,
      titleHolderNumber: index === 0 ? 1 : index + 1,
    }
  })

  return x
}

const dateDiff = (dateOne, dateTwo) => {
  const oneDay = 24 * 60 * 60 * 1000 // hours*minutes*seconds*milliseconds
  const firstDate = new Date(dateOne)
  const secondDate = new Date(dateTwo)

  return Math.round(Math.abs((firstDate - secondDate) / oneDay))
}

const championUpdate = async (prisma) => {
  await prisma.champion.updateMany({
    data: {
      currentChampion: false,
    },
  })

  console.log('updated')
  return Promise.resolve(undefined)
}

const addChampions = async (champion, prisma) => {
  const daysAsChampion = dateDiff(
    new Date(champion.dateWon),
    new Date(champion.dateLost)
  )

  await prisma.champion.create({
    data: {
      titleHolder: champion.titleHolder,
      titleHolderNumber: champion.titleHolderNumber,
      dateWon: new Date(champion.dateWon),
      dateLost: new Date(champion.dateLost),
      show: champion.show,
      previousChampion: champion.previousChampion,
      currentChampion: champion.currentChampion,
    },
  })

  console.log('updated')
  return Promise.resolve(undefined)
}

// ;(async () => {
//   const { prismaClient } = await createApolloServer()

//   const championsToInsert = await updatedChampions(wweChampions)
//   await Promise.all(
//     championsToInsert.map(async (champion) => {
//       await addChampions(champion, prismaClient)
//     })
//   )

//   prismaClient.$disconnect()
//   Promise.resolve(true)
// })()

;(async () => {
  const { prismaClient } = await createApolloServer()

  // const championsToInsert = await updatedChampions(wweChampions)
  // await Promise.all(
  //   championsToInsert.map(async (champion) => {
  //     await addChampions(champion, prismaClient)
  //   })
  // )

  await prismaClient.champion.updateMany({
    data: {
      currentChampion: false,
    },
  })

  console.log('updated')

  prismaClient.$disconnect()
  Promise.resolve(true)
})()

// ;(async () => {
//   await prisma.champion.deleteMany()

//   prisma.$disconnect()
//   Promise.resolve(true)
// })()

export default wweChampions
