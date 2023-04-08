export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    category: 'watch',
    name: 'Смарт-часы Apple Watch Series 8 45 мм Aluminum черный',
    isLikePressed: false,
    description: [
      {subdescr: '-поддержка платформ: iOS'},
      {subdescr: '-материал корпуса: алюминий'},
      {subdescr: '-цвет корпуса: черный'} ,
      {subdescr: '-технология экрана: OLED'} ,
      {subdescr: '-объем встроенной памяти: 32 Гб'} ,
      {subdescr: '-интерфейсы: Bluetooth, ,Wi-Fi, ,NFC'} ,
      {subdescr: '-время работы: в обычном режиме: 18 часов, в режиме энергосбережения: 36 часов'}
    ],
    price: 231_980,
    rating: 4.2,
    like: 3,
    link: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h69/63158968057886/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg'
  },
  {
    id: 2,
    category: 'watch',
    name: 'Смарт-часы Aimoto Element розовый',
    price: 10_442,
    isLikePressed: false,
    description: [
      {subdescr: '-поддержка платформ: Android, ,iOS'},
      {subdescr: '-материал корпуса: пластик'},
      {subdescr: '-цвет корпуса: розовый'},
      {subdescr: '-технология экрана: IPS'},
      {subdescr: '-объем оперативной памяти: 32 Мб'},
      {subdescr: '-интерфейсы: Bluetooth, ,Wi-Fi'},
      {subdescr: '-время работы: до 4 дней'}
    ],
    rating: 4.4,
    like: 3,
    link: 'https://kaspi.kz/shop/p/aimoto-element-rozovyi-100828444/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc8/h5e/33034415833118/aimoto-element-pink-100828444-1-Container.jpg'
  },
  {
    id: 3,
    category: 'phones',
    name: 'Смартфон Xiaomi Redmi Note 10 Pro 8 ГБ/256 ГБ серый',
    price: 128_350,
    isLikePressed: false,
    description: [
      {subdescr: '-технология NFC: Да'},
      {subdescr: '-цвет: серый'},
      {subdescr: '-тип экрана: цветной AMOLED, сенсорный'},
      {subdescr: '-диагональ: 6.67 дюйм'},
      {subdescr: '-размер оперативной памяти: 8 ГБ'},
      {subdescr: '-процессор: 8-ядерный Qualcomm Snapdragon 732G'},
      {subdescr: '-объем встроенной памяти: 256 ГБ'},
      {subdescr: '-емкость аккумулятора: 5020 мАч'}
    ],
    rating: 4.1,
    like: 3,
    link: 'https://kaspi.kz/shop/search/?text=%D0%A1%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD%20Xiaomi%20Redmi%20Note%2010%20Pro%208%20%D0%93%D0%91%2F256%20%D0%93%D0%91%20%D1%81%D0%B5%D1%80%D1%8B%D0%B9',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/h27/64487158087710/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg'
  },
  {
    id: 4,
    category: 'supply',
    name: 'Чехол Ala case для iPhone 11 прозрачный',
    price: 212,
    isLikePressed: false,
    description: [
      {subdescr: '-тип: спортивный'},
      {subdescr: '-совместимый бренд: Apple'},
      {subdescr: '-материал: резина, ,силикон'}
    ],
    rating: 3.3,
    like: 3,
    link: 'https://kaspi.kz/shop/p/ala-case-dlja-iphone-11-prozrachnyi-103661424/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc2/h42/48677606293534/ala-case-dla-iphone-11-prozracnyj-103661424-1.jpg'
  },
  {
    id: 5,
    category: 'supply',
    name: 'Кабель Apple USB - Lightning 1 м',
    price: 14_590,
    isLikePressed: false,
    description: [
      {subdescr: '-тип: кабель'},
      {subdescr: '-разъемы: Apple Lightning (M), ,USB 2.0 (M)'},
      {subdescr: '-длина: 1 м'}
    ],
    rating: 1.0,
    like: 3,
    link: 'https://kaspi.kz/shop/p/kabel-apple-usb-type-c---lightning-1-m-40500508/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haf/he9/32024009637918/kabel-apple-usb-type-c-lightning-1-m-40500508-1.jpg'
  },
  {
    id: 6,
    category: 'supply',
    name: 'Смарт-линзы для смартфона OEM для iPhone 11, iPhone 12, iPhone 12 mini',
    price: 546,
    isLikePressed: false,
    description: [
      {subdescr: '-количество линз в комплекте: 2'},
      {subdescr: '-типы линз: рыбий глаз'},
      {subdescr: '-установка: на тыловую камеру'}
    ],
    rating: 2.7,
    like: 3,
    link: 'https://kaspi.kz/shop/p/oem-dlja-iphone-11-iphone-12-iphone-12-mini-107405806/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7c/h82/65294314602526/oem-dlya-iphone-11-iphone-12-iphone-12-mini-107405806-1.jpg'
  },
  {
    id: 7,
    category: 'supply',
    name: 'Смарт-линзы для смартфона WAVE WL7-1',
    price: 20_998,
    isLikePressed: false,
    description: [
      {subdescr: '-количество линз в комплекте: 7'},
      {subdescr: '-типы линз: широкоугольный, ,макро, ,теле, ,рыбий глаз'},
      {subdescr: '-установка: на тыловую камеру'}
    ],
    rating: 3.3,
    like: 3,
    link: 'https://kaspi.kz/shop/p/wave-wl7-1-102860686/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc8/he8/47143374290974/wave-4k-hd-7-v-1-102860686-1.jpg'
  },
  {
    id: 8,
    category: 'laptop',
    name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    price: 480_550,
    isLikePressed: false,
    description: [
      {subdescr: '-диагональ экрана: 13.3 дюйм'},
      {subdescr: '-процессор: Apple M1'},
      {subdescr: '-видеокарта: Apple M1 7 core'},
      {subdescr: '-размер оперативной памяти: 8 ГБ'},
      {subdescr: '-тип жесткого диска: SSD'},
      {subdescr: '-общий объем накопителей: 256 ГБ'}
    ],
    rating: 4.2,
    like: 3,
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg'
  },
  {
    id: 9,
    category: 'laptop',
    name: 'Ноутбук HP 15s-eq1387ur 4Z3A4EA серебристый',
    price: 160_350,
    isLikePressed: false,
    description: [
      {subdescr: '-диагональ экрана: 15.6 дюйм'} ,
      {subdescr: '-процессор: AMD Athlon 3150U'} ,
      {subdescr: '-видеокарта: AMD Radeon Graphics'} ,
      {subdescr: '-размер оперативной памяти: 8 ГБ'} ,
      {subdescr: '-тип жесткого диска: SSD'} ,
      {subdescr: '-общий объем накопителей: 256 ГБ'}
    ],
    rating: 2.5,
    like: 3,
    link: 'https://kaspi.kz/shop/p/hp-15s-eq1387ur-4z3a4ea-serebristyi-108203227/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3f/h8f/67253149204510/hp-15s-eq1387ur-4z3a4ea-serebristyi-108203227-1.jpg'
  },
  {
    id: 10,
    category: 'laptop',
    name: 'Ноутбук ASUS TUF Gaming A15 FA506IHRB-HN084 90NR07G7-M008C0 черный',
    price: 349_350,
    isLikePressed: false,
    description: [
      {subdescr: '-технология NFC: Да'},
      {subdescr: '-цвет: серый'} ,
      {subdescr: '-тип экрана: цветной AMOLED, сенсорный'} ,
      {subdescr: '-диагональ: 6.67 дюйм'} ,
      {subdescr: '-размер оперативной памяти: 8 ГБ'} ,
      {subdescr: '-процессор: 8-ядерный Qualcomm Snapdragon 732G'} ,
      {subdescr: '-объем встроенной памяти: 256 ГБ'} ,
      {subdescr: '-емкость аккумулятора: 5020 мАч'}
    ],
    rating: 5.0,
    like: 3,
    link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6b/h33/62100002701342/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-1.jpg'
  },
  {
    id: 11,
    category: 'phones',
    name: 'Смартфон Apple iPhone 13 128Gb белый',
    price: 366_850,
    isLikePressed: false,
    description: [
      {subdescr: 'технология NFC: Да'},
      {subdescr: 'цвет: белый'},
      {subdescr: 'тип экрана: OLED, Super Retina XDR'},
      {subdescr: 'диагональ: 6.1 дюйм'},
      {subdescr: 'размер оперативной памяти: 4 ГБ'},
      {subdescr: 'процессор: 6-ядерный Apple A15 Bionic'},
      {subdescr: 'объем встроенной памяти: 128 ГБ'},
      {subdescr: 'емкость аккумулятора: 3095 мАч'}
    ],
    rating: 5.0,
    like: 3,
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h96/h3c/46392664227870/apple-iphone-13-128gb-belyj-102298420-1-Container.jpg'
  },
  {
    id: 12,
    category: 'phones',
    name: 'Смартфон Apple iPhone 14 Pro 256Gb фиолетовый',
    price: 628_800,
    isLikePressed: false,
    description: [
      {subdescr: 'технология NFC: Да'},
      {subdescr: 'цвет: фиолетовый'},
      {subdescr: 'тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы'},
      {subdescr: 'диагональ: 6.1 дюйм'},
      {subdescr: 'размер оперативной памяти: 6 ГБ'},
      {subdescr: 'процессор: 6-ядерный Apple A16 Bionic'},
      {subdescr: 'объем встроенной памяти: 256 ГБ'},
      {subdescr: 'емкость аккумулятора: 3125 мАч'}
    ],
    rating: 4.6,
    like: 3,
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-fioletovyi-106363319/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4d/h62/62948396728350/apple-iphone-14-pro-128gb-fioletovyj-106363319-1.jpg'
  },
  {
    id: 13,
    category: 'phones',
    isLikePressed: false,
    name: 'Смартфон Samsung Galaxy A13 4 ГБ/128 ГБ черный',
    price: 89_260,
    description: [
      {subdescr: 'технология NFC: Да'},
      {subdescr: 'цвет: черный'},
      {subdescr: 'тип экрана: PLS TFT LCD сенсорный, мультитач'},
      {subdescr: 'диагональ: 6.6 дюйм'},
      {subdescr: 'размер оперативной памяти: 4 ГБ'},
      {subdescr: 'процессор: 8-ядерный Exynos 850'},
      {subdescr: 'объем встроенной памяти: 128 ГБ'},
      {subdescr: 'емкость аккумулятора: 5000 мАч'}
    ],
    rating: 4.8,
    like: 3,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h90/h49/49613711966238/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-1.jpg'
  },
  {
    id: 14,
    category: 'phones',
    name: 'Смартфон Apple iPhone 14 128Gb черный',
    price: 414_389,
    isLikePressed: false,
    description: [
      {subdescr: 'технология NFC: Да'},
      {subdescr: 'цвет: черный'},
      {subdescr: 'тип экрана: OLED, Super Retina XDR display'},
      {subdescr: 'диагональ: 6.1 дюйм'},
      {subdescr: 'размер оперативной памяти: 6 ГБ'},
      {subdescr: 'процессор: 6-ядерный Apple A15 Bionic'},
      {subdescr: 'объем встроенной памяти: 128 ГБ'},
      {subdescr: 'емкость аккумулятора: 3279 мАч'}
    ],
    rating: 4.3,
    like: 3,
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h61/63072540131358/apple-iphone-14-128gb-cernyj-106363023-1.jpg'
  },
  {
    id: 15,
    category: 'watch',
    name: 'Смарт-часы Amazfit Bip U Pro черный',
    isLikePressed: false,
    description: [
      {subdescr: '-поддержка платформ: iOS'},
      {subdescr: '-материал корпуса: пластик'},
      {subdescr: '-цвет корпуса: черный'} ,
      {subdescr: '-технология экрана: OLED'} ,
      {subdescr: '-объем встроенной памяти: 32 Гб'} ,
      {subdescr: '-интерфейсы: Bluetooth, ,Wi-Fi, ,NFC'} ,
      {subdescr: '-время работы: в обычном режиме: 18 часов, в режиме энергосбережения: 36 часов'}
    ],
    price: 231_980,
    rating: 4.2,
    like: 3,
    link: 'https://kaspi.kz/shop/p/amazfit-bip-u-pro-chernyi-100914321/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h86/ha5/33549396574238/amazfit-bip-u-pro-cernyj-100914321-1-Container.jpg'
  },
  {
    id: 16,
    category: 'watch',
    name: 'Смарт-часы Apple Watch SE 2nd Gen 40 мм черный',
    isLikePressed: false,
    description: [
      {subdescr: '-поддержка платформ: iOS'},
      {subdescr: '-материал корпуса: пластик'},
      {subdescr: '-цвет корпуса: черный'} ,
      {subdescr: '-технология экрана: OLED'} ,
      {subdescr: '-объем встроенной памяти: 32 Гб'} ,
      {subdescr: '-интерфейсы: Bluetooth, ,Wi-Fi, ,NFC'} ,
      {subdescr: '-время работы: в обычном режиме: 18 часов, в режиме энергосбережения: 36 часов'}
    ],
    price: 155_980,
    rating: 4.9,
    like: 10,
    link: 'https://kaspi.kz/shop/p/apple-watch-se-2nd-gen-40-mm-chernyi-106362731/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hab/h6c/62711069311006/apple-watch-se-2nd-generation-40-mm-cernyj-106362731-1.jpg'
  },
  {
    id: 17,
    category: 'watch',
    name: 'Смарт-часы Apple Watch Series 7 45 мм черный',
    isLikePressed: false,
    description: [
      {subdescr: '-поддержка платформ: iOS'},
      {subdescr: '-материал корпуса: пластик'},
      {subdescr: '-цвет корпуса: черный'} ,
      {subdescr: '-технология экрана: OLED'} ,
      {subdescr: '-объем встроенной памяти: 32 Гб'} ,
      {subdescr: '-интерфейсы: Bluetooth, ,Wi-Fi, ,NFC'} ,
      {subdescr: '-время работы: в обычном режиме: 18 часов, в режиме энергосбережения: 36 часов'}
    ],
    price: 233_980,
    rating: 4.9,
    like: 10,
    link: 'https://kaspi.kz/shop/p/apple-watch-series-7-45-mm-chernyi-102582811/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hae/hcf/46553394249758/apple-watch-series-7-41-mm-cernyj-102582811-1.jpg'
  },
  {
    id: 18,
    category: 'supply',
    name: 'Зарядное устройство Baseus Super Si Quick Charge 20W черный',
    price: 8000,
    isLikePressed: false,
    description: [
      {subdescr: '-тип: сетевая зарядка'},
      {subdescr: '-количество подключаемых устройств: 1'},
      {subdescr: '-быстрая зарядка: Да'},
      {subdescr: '-разъем подключения: USB Type-C, ,Lightning'},
      {subdescr: '-стандарт быстрой зарядки: Quick Charge 3.0'}
    ],
    rating: 3.0,
    like: 104,
    link: 'https://kaspi.kz/shop/p/baseus-super-si-quick-charge-20w-chernyi-103557342/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc2/h21/48502979297310/baseus-super-si-quick-charge-20w-cernyj-103557342-1.jpg'
  },
  {
    id: 19,
    category: 'laptop',
    name: 'Ноутбук Lenovo IdeaPad 3 15ITL6 82H8005GRK серебристый',
    price: 169_990,
    isLikePressed: false,
    description: [
      {subdescr: '-диагональ экрана: 15.6 дюйм'},
      {subdescr: '-процессор: Intel Pentium Gold 7505'},
      {subdescr: '-видеокарта: Intel UHD Graphics'},
      {subdescr: '-размер оперативной памяти: 8 ГБ'},
      {subdescr: '-тип жесткого диска: SSD'},
      {subdescr: '-общий объем накопителей: 256 ГБ'}
    ],
    rating: 3.6,
    like: 12,
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h3a/66993674190878/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-1.jpg'
  },
  {
    id: 20,
    category: 'laptop',
    name: 'Ноутбук Lenovo IdeaPad 1 14IGL05 81VU00H3RU серый',
    price: 139_990,
    isLikePressed: false,
    description: [
      {subdescr: '-диагональ экрана: 14 дюйм'},
      {subdescr: '-процессор: Intel Celeron N4020'},
      {subdescr: '-видеокарта: Intel UHD Graphics 600'},
      {subdescr: '-размер оперативной памяти: 4 ГБ'},
      {subdescr: '-тип жесткого диска: SSD'},
      {subdescr: '-общий объем накопителей: 128 ГБ'}
    ],
    rating: 3.2,
    like: 11,
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-1-14igl05-81vu00h3ru-seryi-108464874/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5e/he2/67940461740062/lenovo-ideapad-1-14igl05-81vu00h3ru-seryi-108464874-1.jpg'
  },
];
