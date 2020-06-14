let allBooks = [
    {
        'bookID': 0,
        'title': 'A Journal of the Plague Year',
        'autor': 'Daniel Defoe',
        'urlBook': 'assets/js/bookData/AJournalofthePlagueYearbyDanielDefoe.js',
        'urlCover': 'assets/images/books/AJournalofthePlagueYearbyDanielDefoe.jpg',
        'description': 'In 1665 the plague swept through London, claiming over 97,000 lives. Daniel Defoe was just five at the time of the plague, but he later called on his own memories, as well as his writing experience, to create this vivid chronicle of the epidemic and its victims. A Journal (1722) follows Defoe\'s fictional narrator as he traces the devastating progress of the plague through the streets of London. Here we see a city transformed: some of its streets suspiciously empty, some—with crosses on their doors—overwhelmingly full of the sounds and smells of human suffering. And every living citizen he meets has a horrifying story that demands to be heard. For more than seventy years, Penguin has been the leading publisher of classic literature in the English-speaking world. With more than 1,700 titles, Penguin Classics represents a global bookshelf of the best works throughout history and across genres and disciplines. Readers trust the series to provide authoritative texts enhanced by introductions and notes by distinguished scholars and contemporary authors, as well as up-to-date translations by award-winning translators.',
        'relatedBookIDs': [1, 3],
    },
    {
        'bookID': 1,
        'title': 'A Tale of Two Cities',
        'autor': 'Charles Dickens',
        'urlBook': 'assets/js/bookData/ATaleofTwoCitiesbyCharlesDickens.js',
        'urlCover': 'assets/images/books/ATaleofTwoCitiesbyCharlesDickens.jpg',
        'description': 'A Tale of Two Cities is a novel by Charles Dickens, set in London and Paris before and during the French Revolution. With 200 million copies sold, it is the most printed original English book, and among the most famous works of fiction. It depicts the plight of the French peasantry demoralized by the French aristocracy in the years leading up to the revolution, the corresponding brutality demonstrated by the revolutionaries toward the former aristocrats in the early years of the revolution, and many unflattering social parallels with life in London during the same time period. It follows the lives of several protagonists through these events, most notably Charles Darnay, a French once-aristocrat who falls victim to the indiscriminate wrath of the revolution despite his virtuous nature, and Sydney Carton, a dissipated British barrister who endeavours to redeem his ill-spent life out of love for Darnay\'s wife, Lucie Manette.',
        'relatedBookIDs': [0, 4],

    },
    {
        'bookID': 2,
        'title': 'Moby Dick Or The Whale',
        'autor': 'Herman Melville',
        'urlBook': 'assets/js/bookData/MobyDickOrTheWhalebyHermanMelville.js',
        'urlCover': 'assets/images/books/MobyDickOrTheWhalebyHermanMelville.jpg',
        'description': 'Moby-Dick; or, The Whale is a novel by Herman Melville, in which Ishmael narrates the monomaniacal quest of Ahab, captain of the whaler Pequod, for revenge on the albino sperm whale Moby Dick, which on a previous voyage destroyed Ahab\'s ship and severed his leg at the knee. Although the novel was a commercial failure and out of print at the time of the author\'s death in 1891, its reputation grew immensely during the twentieth century. D. H. Lawrence called it "one of the strangest and most wonderful books in the world," and "the greatest book of the sea ever written." Moby-Dick is considered a Great American Novel and an outstanding work of the Romantic period in America and the American Renaissance. "Call me Ishmael" is one of world literature\'s most famous opening sentences. The product of a year and a half of writing, the book is dedicated to Nathaniel Hawthorne, "in token of my admiration for his genius," and draws on Melville\'s experience at sea, on his reading in whaling literature, and on literary inspirations such as Shakespeare and the Bible. The detailed and realistic descriptions of whale hunting and of extracting whale oil, as well as life aboard ship among a culturally diverse crew, are mixed with exploration of class and social status, good and evil, and the existence of God. In addition to narrative prose, Melville uses styles and literary devices ranging from songs, poetry and catalogs to Shakespearean stage directions, soliloquies and asides. The author changed the title at the very last moment in September 1851. The work first appeared as The Whale in London in October 1851, and then under its definitive title Moby-Dick in New York in November. The whale, however, appears in both the London and New York editions as "Moby Dick," with no hyphen. The British edition of five hundred copies was not reprinted during the author\'s life, the American of almost three thousand was reprinted three times at approximately 250 copies, the last reprinting in 1871. These figures are exaggerated because three hundred copies were destroyed in a fire at Harper\'s; only 3,200 copies were actually sold during the author\'s life.',
        'relatedBookIDs': [6, 3],
    },
    {
        'bookID': 3,
        'title': 'Pride and Prejudice',
        'autor': 'Jane Austen',
        'urlBook': 'assets/js/bookData/PrideandPrejudicebyJaneAusten.js',
        'urlCover': 'assets/images/books/PrideandPrejudicebyJaneAusten.jpg',
        'description': 'Austen\'s most popular novel, the unforgettable story of Elizabeth Bennet and Mr. Darcy. Nominated as one of America’s best-loved novels by PBS’s The Great American Read Few have failed to be charmed by the witty and independent spirit of Elizabeth Bennet in Austen’s beloved classic Pride and Prejudice. When Elizabeth Bennet first meets eligible bachelor Fitzwilliam Darcy, she thinks him arrogant and conceited; he is indifferent to her good looks and lively mind. When she later discovers that Darcy has involved himself in the troubled relationship between his friend Bingley and her beloved sister Jane, she is determined to dislike him more than ever. In the sparkling comedy of manners that follows, Jane Austen shows us the folly of judging by first impressions and superbly evokes the friendships, gossip and snobberies of provincial middle-class life. This Penguin Classics edition, based on Austen`s first edition, contains the original Penguin Classics introduction by Tony Tanner and an updated introduction and notes by Viven Jones. For more than seventy years, Penguin has been the leading publisher of classic literature in the English-speaking world. With more than 1,700 titles, Penguin Classics represents a global bookshelf of the best works throughout history and across genres and disciplines. Readers trust the series to provide authoritative texts enhanced by introductions and notes by distinguished scholars and contemporary authors, as well as up-to-date translations by award-winning translators.',
        'relatedBookIDs': [1, 3],

    },
    {
        'bookID': 4,
        'title': 'The Adventures of Sherlock Holmes',
        'autor': 'Arthur Conan Doyle',
        'urlBook': 'assets/js/bookData/TheAdventuresofSherlockHolmesbyArthurConanDoyle.js',
        'urlCover': 'assets/images/books/TheAdventuresofSherlockHolmesbyArthurConanDoyle.jpg',
        'description': 'The Adventures of Sherlock Holmes is a collection of twelve stories written by Arthur Conan Doyle, featuring his famous detective. Venture back in time to Victorian London to join literature`s greatest detective team — the brilliant Sherlock Holmes and his devoted assistant, Dr. Watson — as they investigate a dozen of their best-known cases. Originally published in 1892, this is the first and best collection of stories about the legendary sleuth. It`s also the least expensive edition available. Featured tales include several of the author`s personal favorites: "A Scandal in Bohemia" — in which a king is blackmailed by a former lover and Holmes matches wits with the only woman to attract his open admiration — plus "The Speckled Band," "The Red-Headed League," and "The Five Orange Pips." Additional mysteries include "The Blue Carbuncle," "The Engineer’s Thumb," "The Beryl Coronet," "The Copper Beeches," and four others.',
        'relatedBookIDs': [2, 5],

    },
    {
        'bookID': 5,
        'title': 'The Importance of Being Earnest A Trivial Comedy for Serious People',
        'autor': 'Oscar Wilde',
        'urlBook': 'assets/js/bookData/TheImportanceofBeingEarnestATrivialComedyforSeriousPeoplebyOscarWilde.js',
        'urlCover': 'assets/images/books/TheImportanceofBeingEarnestATrivialComedyforSeriousPeoplebyOscarWilde.jpg',
        'description': 'A universal favorite, The Importance of Being Earnest displays Oscar Wilde`s theatrical genius at its brilliant best. Subtitled "A Trivial Comedy for Serious People", this hilarious attack on Victorian manners and morals turns a pompous world on its head, lets duplicity lead to happiness, and makes riposte the highest form of art. Also included in this special collection are Wilde`s first comedy success, Lady Windermere`s Fan, and his richly sensual melodrama, Salome.',
        'relatedBookIDs': [6, 4],

    },
    {
        'bookID': 6,
        'title': 'Treasure Is land',
        'autor': 'Robert Louis Stevenson',
        'urlBook': 'assets/js/bookData/TreasureIslandbyRobertLouisStevenson.js',
        'urlCover': 'assets/images/books/TreasureIslandbyRobertLouisStevenson.jpg',
        'description': '“Fifteen men on a dead man’s chest—</br> Yo-ho-ho, and a bottle of rum!”</br> For sheer storytelling delight and pure adventure, Treasure Island has never been surpassed. From young Jim Hawkins’s first encounter with the sinister beggar Pew to the climactic battle with the most memorable villain in literature, Long John Silver, this novel has fired readers’ imaginations for generations. A rousing tale of treachery, greed, and daring, Treasure Island continues to enthrall readers of all ages.</br>With an Introduction by Patrick Scott </br>and an Afterword by Sara Levine ',
        'relatedBookIDs': [4, 5],

    },
];