const countries = [
  { value: 'AD', label: 'Andorra', phone: '376' },
  {
    value: 'AE',
    label: 'United Arab Emirates',
    phone: '971',
  },
  { value: 'AF', label: 'Afghanistan', phone: '93' },
  {
    value: 'AG',
    label: 'Antigua and Barbuda',
    phone: '1-268',
  },
  { value: 'AI', label: 'Anguilla', phone: '1-264' },
  { value: 'AL', label: 'Albania', phone: '355' },
  { value: 'AM', label: 'Armenia', phone: '374' },
  { value: 'AO', label: 'Angola', phone: '244' },
  { value: 'AQ', label: 'Antarctica', phone: '672' },
  { value: 'AR', label: 'Argentina', phone: '54' },
  { value: 'AS', label: 'American Samoa', phone: '1-684' },
  { value: 'AT', label: 'Austria', phone: '43' },
  {
    value: 'AU',
    label: 'Australia',
    phone: '61',
    suggested: true,
  },
  { value: 'AW', label: 'Aruba', phone: '297' },
  { value: 'AX', label: 'Alland Islands', phone: '358' },
  { value: 'AZ', label: 'Azerbaijan', phone: '994' },
  {
    value: 'BA',
    label: 'Bosnia and Herzegovina',
    phone: '387',
  },
  { value: 'BB', label: 'Barbados', phone: '1-246' },
  { value: 'BD', label: 'Bangladesh', phone: '880' },
  { value: 'BE', label: 'Belgium', phone: '32' },
  { value: 'BF', label: 'Burkina Faso', phone: '226' },
  { value: 'BG', label: 'Bulgaria', phone: '359' },
  { value: 'BH', label: 'Bahrain', phone: '973' },
  { value: 'BI', label: 'Burundi', phone: '257' },
  { value: 'BJ', label: 'Benin', phone: '229' },
  { value: 'BL', label: 'Saint Barthelemy', phone: '590' },
  { value: 'BM', label: 'Bermuda', phone: '1-441' },
  { value: 'BN', label: 'Brunei Darussalam', phone: '673' },
  { value: 'BO', label: 'Bolivia', phone: '591' },
  { value: 'BR', label: 'Brazil', phone: '55' },
  { value: 'BS', label: 'Bahamas', phone: '1-242' },
  { value: 'BT', label: 'Bhutan', phone: '975' },
  { value: 'BV', label: 'Bouvet Island', phone: '47' },
  { value: 'BW', label: 'Botswana', phone: '267' },
  { value: 'BY', label: 'Belarus', phone: '375' },
  { value: 'BZ', label: 'Belize', phone: '501' },
  {
    value: 'CA',
    label: 'Canada',
    phone: '1',
    suggested: true,
  },
  {
    value: 'CC',
    label: 'Cocos (Keeling) Islands',
    phone: '61',
  },
  {
    value: 'CD',
    label: 'Congo, Democratic Republic of the',
    phone: '243',
  },
  {
    value: 'CF',
    label: 'Central African Republic',
    phone: '236',
  },
  {
    value: 'CG',
    label: 'Congo, Republic of the',
    phone: '242',
  },
  { value: 'CH', label: 'Switzerland', phone: '41' },
  { value: 'CI', label: "Cote d'Ivoire", phone: '225' },
  { value: 'CK', label: 'Cook Islands', phone: '682' },
  { value: 'CL', label: 'Chile', phone: '56' },
  { value: 'CM', label: 'Cameroon', phone: '237' },
  { value: 'CN', label: 'China', phone: '86' },
  { value: 'CO', label: 'Colombia', phone: '57' },
  { value: 'CR', label: 'Costa Rica', phone: '506' },
  { value: 'CU', label: 'Cuba', phone: '53' },
  { value: 'CV', label: 'Cape Verde', phone: '238' },
  { value: 'CW', label: 'Curacao', phone: '599' },
  { value: 'CX', label: 'Christmas Island', phone: '61' },
  { value: 'CY', label: 'Cyprus', phone: '357' },
  { value: 'CZ', label: 'Czech Republic', phone: '420' },
  {
    value: 'DE',
    label: 'Germany',
    phone: '49',
    suggested: true,
  },
  { value: 'DJ', label: 'Djibouti', phone: '253' },
  { value: 'DK', label: 'Denmark', phone: '45' },
  { value: 'DM', label: 'Dominica', phone: '1-767' },
  {
    value: 'DO',
    label: 'Dominican Republic',
    phone: '1-809',
  },
  { value: 'DZ', label: 'Algeria', phone: '213' },
  { value: 'EC', label: 'Ecuador', phone: '593' },
  { value: 'EE', label: 'Estonia', phone: '372' },
  { value: 'EG', label: 'Egypt', phone: '20' },
  { value: 'EH', label: 'Western Sahara', phone: '212' },
  { value: 'ER', label: 'Eritrea', phone: '291' },
  { value: 'ES', label: 'Spain', phone: '34' },
  { value: 'ET', label: 'Ethiopia', phone: '251' },
  { value: 'FI', label: 'Finland', phone: '358' },
  { value: 'FJ', label: 'Fiji', phone: '679' },
  {
    value: 'FK',
    label: 'Falkland Islands (Malvinas)',
    phone: '500',
  },
  {
    value: 'FM',
    label: 'Micronesia, Federated States of',
    phone: '691',
  },
  { value: 'FO', label: 'Faroe Islands', phone: '298' },
  {
    value: 'FR',
    label: 'France',
    phone: '33',
    suggested: true,
  },
  { value: 'GA', label: 'Gabon', phone: '241' },
  { value: 'GB', label: 'United Kingdom', phone: '44' },
  { value: 'GD', label: 'Grenada', phone: '1-473' },
  { value: 'GE', label: 'Georgia', phone: '995' },
  { value: 'GF', label: 'French Guiana', phone: '594' },
  { value: 'GG', label: 'Guernsey', phone: '44' },
  { value: 'GH', label: 'Ghana', phone: '233' },
  { value: 'GI', label: 'Gibraltar', phone: '350' },
  { value: 'GL', label: 'Greenland', phone: '299' },
  { value: 'GM', label: 'Gambia', phone: '220' },
  { value: 'GN', label: 'Guinea', phone: '224' },
  { value: 'GP', label: 'Guadeloupe', phone: '590' },
  { value: 'GQ', label: 'Equatorial Guinea', phone: '240' },
  { value: 'GR', label: 'Greece', phone: '30' },
  {
    value: 'GS',
    label: 'South Georgia and the South Sandwich Islands',
    phone: '500',
  },
  { value: 'GT', label: 'Guatemala', phone: '502' },
  { value: 'GU', label: 'Guam', phone: '1-671' },
  { value: 'GW', label: 'Guinea-Bissau', phone: '245' },
  { value: 'GY', label: 'Guyana', phone: '592' },
  { value: 'HK', label: 'Hong Kong', phone: '852' },
  {
    value: 'HM',
    label: 'Heard Island and McDonald Islands',
    phone: '672',
  },
  { value: 'HN', label: 'Honduras', phone: '504' },
  { value: 'HR', label: 'Croatia', phone: '385' },
  { value: 'HT', label: 'Haiti', phone: '509' },
  { value: 'HU', label: 'Hungary', phone: '36' },
  { value: 'ID', label: 'Indonesia', phone: '62' },
  { value: 'IE', label: 'Ireland', phone: '353' },
  { value: 'IL', label: 'Israel', phone: '972' },
  { value: 'IM', label: 'Isle of Man', phone: '44' },
  { value: 'IN', label: 'India', phone: '91' },
  {
    value: 'IO',
    label: 'British Indian Ocean Territory',
    phone: '246',
  },
  { value: 'IQ', label: 'Iraq', phone: '964' },
  {
    value: 'IR',
    label: 'Iran, Islamic Republic of',
    phone: '98',
  },
  { value: 'IS', label: 'Iceland', phone: '354' },
  { value: 'IT', label: 'Italy', phone: '39' },
  { value: 'JE', label: 'Jersey', phone: '44' },
  { value: 'JM', label: 'Jamaica', phone: '1-876' },
  { value: 'JO', label: 'Jordan', phone: '962' },
  {
    value: 'JP',
    label: 'Japan',
    phone: '81',
    suggested: true,
  },
  { value: 'KE', label: 'Kenya', phone: '254' },
  { value: 'KG', label: 'Kyrgyzstan', phone: '996' },
  { value: 'KH', label: 'Cambodia', phone: '855' },
  { value: 'KI', label: 'Kiribati', phone: '686' },
  { value: 'KM', label: 'Comoros', phone: '269' },
  {
    value: 'KN',
    label: 'Saint Kitts and Nevis',
    phone: '1-869',
  },
  {
    value: 'KP',
    label: "Korea, Democratic People's Republic of",
    phone: '850',
  },
  { value: 'KR', label: 'Korea, Republic of', phone: '82' },
  { value: 'KW', label: 'Kuwait', phone: '965' },
  { value: 'KY', label: 'Cayman Islands', phone: '1-345' },
  { value: 'KZ', label: 'Kazakhstan', phone: '7' },
  {
    value: 'LA',
    label: "Lao People's Democratic Republic",
    phone: '856',
  },
  { value: 'LB', label: 'Lebanon', phone: '961' },
  { value: 'LC', label: 'Saint Lucia', phone: '1-758' },
  { value: 'LI', label: 'Liechtenstein', phone: '423' },
  { value: 'LK', label: 'Sri Lanka', phone: '94' },
  { value: 'LR', label: 'Liberia', phone: '231' },
  { value: 'LS', label: 'Lesotho', phone: '266' },
  { value: 'LT', label: 'Lithuania', phone: '370' },
  { value: 'LU', label: 'Luxembourg', phone: '352' },
  { value: 'LV', label: 'Latvia', phone: '371' },
  { value: 'LY', label: 'Libya', phone: '218' },
  { value: 'MA', label: 'Morocco', phone: '212' },
  { value: 'MC', label: 'Monaco', phone: '377' },
  {
    value: 'MD',
    label: 'Moldova, Republic of',
    phone: '373',
  },
  { value: 'ME', label: 'Montenegro', phone: '382' },
  {
    value: 'MF',
    label: 'Saint Martin (French part)',
    phone: '590',
  },
  { value: 'MG', label: 'Madagascar', phone: '261' },
  { value: 'MH', label: 'Marshall Islands', phone: '692' },
  {
    value: 'MK',
    label: 'Macedonia, the Former Yugoslav Republic of',
    phone: '389',
  },
  { value: 'ML', label: 'Mali', phone: '223' },
  { value: 'MM', label: 'Myanmar', phone: '95' },
  { value: 'MN', label: 'Mongolia', phone: '976' },
  { value: 'MO', label: 'Macao', phone: '853' },
  {
    value: 'MP',
    label: 'Northern Mariana Islands',
    phone: '1-670',
  },
  { value: 'MQ', label: 'Martinique', phone: '596' },
  { value: 'MR', label: 'Mauritania', phone: '222' },
  { value: 'MS', label: 'Montserrat', phone: '1-664' },
  { value: 'MT', label: 'Malta', phone: '356' },
  { value: 'MU', label: 'Mauritius', phone: '230' },
  { value: 'MV', label: 'Maldives', phone: '960' },
  { value: 'MW', label: 'Malawi', phone: '265' },
  { value: 'MX', label: 'Mexico', phone: '52' },
  { value: 'MY', label: 'Malaysia', phone: '60' },
  { value: 'MZ', label: 'Mozambique', phone: '258' },
  { value: 'NA', label: 'Namibia', phone: '264' },
  { value: 'NC', label: 'New Caledonia', phone: '687' },
  { value: 'NE', label: 'Niger', phone: '227' },
  { value: 'NF', label: 'Norfolk Island', phone: '672' },
  { value: 'NG', label: 'Nigeria', phone: '234' },
  { value: 'NI', label: 'Nicaragua', phone: '505' },
  { value: 'NL', label: 'Netherlands', phone: '31' },
  { value: 'NO', label: 'Norway', phone: '47' },
  { value: 'NP', label: 'Nepal', phone: '977' },
  { value: 'NR', label: 'Nauru', phone: '674' },
  { value: 'NU', label: 'Niue', phone: '683' },
  { value: 'NZ', label: 'New Zealand', phone: '64' },
  { value: 'OM', label: 'Oman', phone: '968' },
  { value: 'PA', label: 'Panama', phone: '507' },
  { value: 'PE', label: 'Peru', phone: '51' },
  { value: 'PF', label: 'French Polynesia', phone: '689' },
  { value: 'PG', label: 'Papua New Guinea', phone: '675' },
  { value: 'PH', label: 'Philippines', phone: '63' },
  { value: 'PK', label: 'Pakistan', phone: '92' },
  { value: 'PL', label: 'Poland', phone: '48' },
  {
    value: 'PM',
    label: 'Saint Pierre and Miquelon',
    phone: '508',
  },
  { value: 'PN', label: 'Pitcairn', phone: '870' },
  { value: 'PR', label: 'Puerto Rico', phone: '1' },
  {
    value: 'PS',
    label: 'Palestine, State of',
    phone: '970',
  },
  { value: 'PT', label: 'Portugal', phone: '351' },
  { value: 'PW', label: 'Palau', phone: '680' },
  { value: 'PY', label: 'Paraguay', phone: '595' },
  { value: 'QA', label: 'Qatar', phone: '974' },
  { value: 'RE', label: 'Reunion', phone: '262' },
  { value: 'RO', label: 'Romania', phone: '40' },
  { value: 'RS', label: 'Serbia', phone: '381' },
  { value: 'RU', label: 'Russian Federation', phone: '7' },
  { value: 'RW', label: 'Rwanda', phone: '250' },
  { value: 'SA', label: 'Saudi Arabia', phone: '966' },
  { value: 'SB', label: 'Solomon Islands', phone: '677' },
  { value: 'SC', label: 'Seychelles', phone: '248' },
  { value: 'SD', label: 'Sudan', phone: '249' },
  { value: 'SE', label: 'Sweden', phone: '46' },
  { value: 'SG', label: 'Singapore', phone: '65' },
  { value: 'SH', label: 'Saint Helena', phone: '290' },
  { value: 'SI', label: 'Slovenia', phone: '386' },
  {
    value: 'SJ',
    label: 'Svalbard and Jan Mayen',
    phone: '47',
  },
  { value: 'SK', label: 'Slovakia', phone: '421' },
  { value: 'SL', label: 'Sierra Leone', phone: '232' },
  { value: 'SM', label: 'San Marino', phone: '378' },
  { value: 'SN', label: 'Senegal', phone: '221' },
  { value: 'SO', label: 'Somalia', phone: '252' },
  { value: 'SR', label: 'Suriname', phone: '597' },
  { value: 'SS', label: 'South Sudan', phone: '211' },
  {
    value: 'ST',
    label: 'Sao Tome and Principe',
    phone: '239',
  },
  { value: 'SV', label: 'El Salvador', phone: '503' },
  {
    value: 'SX',
    label: 'Sint Maarten (Dutch part)',
    phone: '1-721',
  },
  {
    value: 'SY',
    label: 'Syrian Arab Republic',
    phone: '963',
  },
  { value: 'SZ', label: 'Swaziland', phone: '268' },
  {
    value: 'TC',
    label: 'Turks and Caicos Islands',
    phone: '1-649',
  },
  { value: 'TD', label: 'Chad', phone: '235' },
  {
    value: 'TF',
    label: 'French Southern Territories',
    phone: '262',
  },
  { value: 'TG', label: 'Togo', phone: '228' },
  { value: 'TH', label: 'Thailand', phone: '66' },
  { value: 'TJ', label: 'Tajikistan', phone: '992' },
  { value: 'TK', label: 'Tokelau', phone: '690' },
  { value: 'TL', label: 'Timor-Leste', phone: '670' },
  { value: 'TM', label: 'Turkmenistan', phone: '993' },
  { value: 'TN', label: 'Tunisia', phone: '216' },
  { value: 'TO', label: 'Tonga', phone: '676' },
  { value: 'TR', label: 'Turkey', phone: '90' },
  {
    value: 'TT',
    label: 'Trinidad and Tobago',
    phone: '1-868',
  },
  { value: 'TV', label: 'Tuvalu', phone: '688' },
  {
    value: 'TW',
    label: 'Taiwan, Republic of China',
    phone: '886',
  },
  {
    value: 'TZ',
    label: 'United Republic of Tanzania',
    phone: '255',
  },
  { value: 'UA', label: 'Ukraine', phone: '380' },
  { value: 'UG', label: 'Uganda', phone: '256' },
  {
    value: 'US',
    label: 'United States',
    phone: '1',
    suggested: true,
  },
  { value: 'UY', label: 'Uruguay', phone: '598' },
  { value: 'UZ', label: 'Uzbekistan', phone: '998' },
  {
    value: 'VA',
    label: 'Holy See (Vatican City State)',
    phone: '379',
  },
  {
    value: 'VC',
    label: 'Saint Vincent and the Grenadines',
    phone: '1-784',
  },
  { value: 'VE', label: 'Venezuela', phone: '58' },
  {
    value: 'VG',
    label: 'British Virgin Islands',
    phone: '1-284',
  },
  {
    value: 'VI',
    label: 'US Virgin Islands',
    phone: '1-340',
  },
  { value: 'VN', label: 'Vietnam', phone: '84' },
  { value: 'VU', label: 'Vanuatu', phone: '678' },
  { value: 'WF', label: 'Wallis and Futuna', phone: '681' },
  { value: 'WS', label: 'Samoa', phone: '685' },
  { value: 'XK', label: 'Kosovo', phone: '383' },
  { value: 'YE', label: 'Yemen', phone: '967' },
  { value: 'YT', label: 'Mayotte', phone: '262' },
  { value: 'ZA', label: 'South Africa', phone: '27' },
  { value: 'ZM', label: 'Zambia', phone: '260' },
  { value: 'ZW', label: 'Zimbabwe', phone: '263' },
];
export default countries;
