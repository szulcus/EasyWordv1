const words4 = [
    {
      word: 'accomodation',
      translation: 'zakwaterowanie',
      level: 'basic',
      type: 'renting, purscharing and selling property',
      image: 'https://c.pxhere.com/photos/cd/0a/accomodation_bed_hotel_hotel_room_wine_glasses-952665.jpg!d',
    },
    {
      word: 'ad',
      word2: 'advert',
      translation: 'ogłoszenie',
      translation2: 'reklama',
      level: 'basic',
      type: 'renting, purscharing and selling property',
      image: 'https://c.pxhere.com/photos/01/c6/tobacco_sign_metal_vintage_smoke_cigarette_nicotine_smoking-869880.jpg!d',
    },
    {
      word: 'flatmate',
      word2: 'housemate',
      word3: 'roommate',
      translation: 'współlokator',
      translation2: 'współlokatorka',
      level: 'basic',
      type: 'renting, purscharing and selling property',
      image: 'https://c.pxhere.com/images/83/97/b4ce2359638604a9dde67727492f-1418479.jpg!d',
    },
    {
      word: 'for sale',
      translation: 'na sprzedaż',
      level: 'basic',
      type: 'renting, purscharing and selling property',
      image: 'https://c.pxhere.com/photos/47/61/euro_bank_notes_handshake_transaction_people_shaking_hands_fifty_50_euros-661535.jpg!d',
    },
    {
      word: 'landlord',
      translation: 'właściciel (mieszkania lub domu)',
      level: 'basic',
      type: 'renting, purscharing and selling property',
      image: 'https://c.pxhere.com/photos/91/b8/hand_key_house_keys_keys_pen_filler_fountain_pen_signature_lease-1131829.jpg!d',
    },
    {
      word: 'landlady',
      translation: 'właścicielka (mieszkania lub domu)',
      level: 'basic',
      type: 'renting, purscharing and selling property',
      image: 'https://c.pxhere.com/images/5f/ed/28036af3747e8031617cf3f1ffd6-1454051.jpg!d',
    },
    {
      word: 'live on one\'s own',
      translation: 'mieszkać samemu',
      level: 'basic',
      type: 'renting, purscharing and selling property',
      image: 'https://c.pxhere.com/images/1e/47/3f2efc5bda6dd32b3c39a68e1c22-1418483.jpg!d',
    },
    {
      word: 'move in',
      translation: 'wprowadzic się',
      level: 'basic',
      type: 'renting, purscharing and selling property',
      image: 'https://c.pxhere.com/images/5d/9d/52046f61dcd8aca113b8ac465620-1431451.jpg!d',
    },
    {
      word: 'move out',
      translation: 'wyprowadzic się',
      level: 'basic',
      type: 'renting, purscharing and selling property',
      image: 'https://c.pxhere.com/photos/a1/a7/hiker_travel_trip_wander_suitcase_traveler_go_road-539176.jpg!d',
    },
    {
      word: 'pay in advance',
      translation: 'zapłacić z góry',
      level: 'basic',
      type: 'renting, purscharing and selling property',
      image: 'https://c.pxhere.com/photos/22/d9/euro_money_pay_cash_borrowing_loan_lending_business-1335730.jpg!d',
    },
    {
      word: 'rent',
      translation: 'wynająć',
      translation2: 'czynsz',
      level: 'basic',
      type: 'renting, purscharing and selling property',
      image: 'https://c.pxhere.com/photos/8d/ba/house_keys_key_the_door_castle_the_background_safety_open-619151.jpg!d',
    },
    {
      word: 'share a room (flat / house)',
      translation: 'dzielić z kimś pokój (mieszkanie / dom)',
      level: 'basic',
      type: 'renting, purscharing and selling property',
      image: 'https://c.pxhere.com/images/f8/ff/361972f516e7043105edef223880-1432605.jpg!d',
    },
    {
      word: 'to let',
      translation: 'do wynajęcia',
      level: 'basic',
      type: 'renting, purscharing and selling property',
      image: 'https://c.pxhere.com/images/1c/c7/47aa1d38fc6e734c37663c405e69-1437945.jpg!d',
    },
    // // //
    {
      word: 'bill',
      translation: 'rachunek',
      level: 'extended',
      type: 'renting, purscharing and selling property',
      image: 'https://c.pxhere.com/photos/c4/96/taxes_count_pay_lifestyle_quandary_currency_calculator_tax_return-734389.jpg!d',
    },
    {
      word: 'budget',
      translation: 'budżet',
      level: 'extended',
      type: 'renting, purscharing and selling property',
      image: 'https://c.pxhere.com/photos/7d/94/money_dollar_cents_euro_euro_cent_the_european_union_cash_money_coin-1230051.jpg!d',
    },
    {
      word: 'charge',
      translation: 'liczyć',
      translation2: 'pobierać opłatę',
      level: 'extended',
      type: 'renting, purscharing and selling property',
      image: 'https://c.pxhere.com/photos/8a/a8/ec_cash_paymentsatm_money_cashless_credit_card_mastercard_bank_card_bank-1217999.jpg!d',
    },
    {
      word: 'deposit',
      translation: 'kaucja',
      translation2: 'zaliczka',
      level: 'extended',
      type: 'renting, purscharing and selling property',
      image: 'https://c.pxhere.com/photos/1b/bb/purse_wallet_money_20_twenty_euro_business_20_euro-778931.jpg!d',
    },
    {
      word: 'estate agent',
      translation: 'agent nieruchomości',
      translation2: 'agentka nieruchomości',
      level: 'extended',
      type: 'renting, purscharing and selling property',
      image: 'https://c.pxhere.com/photos/3a/bc/handshake_hand_give_business_man_giving_offer_cooperation-1187331.jpg!d',
    },
    {
      word: 'housewarming party',
      translation: 'parapetówka',
      level: 'extended',
      type: 'renting, purscharing and selling property',
      image: 'https://c.pxhere.com/photos/d3/e5/girl_sparklers_fireworks_blonde_celebration_happy_people_young-846319.jpg!d',
    },
    {
      word: 'instalments',
      translation: 'raty',
      level: 'extended',
      type: 'renting, purscharing and selling property',
      image: 'https://c.pxhere.com/photos/88/a0/money_euro_coin_coins_bank_note_calculator_budget_save-1021973.jpg!d',
    },
    {
      word: 'notice',
      translation: 'wypowiedzenie',
      level: 'extended',
      type: 'renting, purscharing and selling property',
      image: 'https://c.pxhere.com/photos/54/e5/writing_pen_man_boy_male_ink_paper_pencils-655321.jpg!d',
    },
    {
      word: 'payment',
      translation: 'płatność',
      level: 'extended',
      type: 'renting, purscharing and selling property',
      image: 'https://c.pxhere.com/photos/19/ce/paying_cash_transaction_payment_green_wallet_russia_moscow-610585.jpg!d',
    },
    {
      word: 'per week',
      translation: 'tygodniowo',
      level: 'extended',
      type: 'renting, purscharing and selling property',
      image: 'https://c.pxhere.com/photos/cc/8f/week_date_calendar_time-893945.jpg!d',
    },
    {
      word: 'per month',
      translation: 'miesięcznie',
      level: 'extended',
      type: 'renting, purscharing and selling property',
      image: 'https://c.pxhere.com/photos/73/94/calendar_date_time_month_week_planning_paper_planner-748014.jpg!d',
    },
    {
      word: 'take out a mortgage',
      translation: 'wziąć kredyt hipoteczny',
      level: 'extended',
      type: 'renting, purscharing and selling property',
      image: 'https://c.pxhere.com/photos/60/18/home_money_euro_coin_coins_bank_note_calculator_budget-1021953.jpg!d',
    },
    {
      word: 'tenant',
      translation: 'najemca',
      translation2: 'lokator',
      level: 'extended',
      type: 'renting, purscharing and selling property',
      image: 'https://c.pxhere.com/photos/f9/eb/hand_greeting_agreement_hand_shaking-714883.jpg!d',
    },
];