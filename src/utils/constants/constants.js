import { ReactComponent as Lenta } from '../../assets/svg/lenta.svg'
import { ReactComponent as Friends } from '../../assets/svg/friends.svg'
import { ReactComponent as Bron } from '../../assets/svg/bronIcons.svg'
import { ReactComponent as Charity } from '../../assets/svg/charityIcons.svg'
import { ReactComponent as Compolaints } from '../../assets/svg/complaints.svg'
import { ReactComponent as List } from '../../assets/svg/listIcon.svg'
import { ReactComponent as MyHalidays } from '../../assets/svg/myholidays.svg'

export const URL_BASE =
   'http://ec2-3-73-78-67.eu-central-1.compute.amazonaws.com'

export const AUTH = 'AUTH'

export const sidebarRoles = {
   USER: [
      {
         pathName: 'Лента',
         path: 'lenta',
         icon: <Lenta />,
      },
      {
         pathName: 'Друзья',
         path: 'friends',
         icon: <Friends />,
      },
      {
         pathName: 'Список желаний',
         path: 'wishlist',
         icon: <List />,
      },
      {
         pathName: 'Забронированные',
         path: 'bookedPage',
         icon: <Bron />,
      },
      {
         pathName: 'Мои праздники',
         path: 'holidays',
         icon: <MyHalidays />,
      },
      {
         pathName: 'Благотворительность',
         path: 'charity',
         icon: <Charity />,
      },
   ],
   ADMIN: [
      {
         pathName: 'Пользователи',
         path: 'users',
         icon: <Friends />,
      },
      {
         pathName: 'Благотворительность',
         path: 'charityAdmin',
         icon: <Charity />,
      },
      {
         pathName: 'Жалобы',
         path: 'complaints',
         icon: <Compolaints />,
      },
   ],
}

export const data = [
   {
      name: 'Электроника',
      id: '1',
      condition: 'category',
   },
   {
      name: 'Одежда',
      id: '2',
      condition: 'category',
   },
   {
      name: 'Школа',
      id: '3',
      condition: 'category',
   },
   {
      name: 'Дом и сад',
      id: '4',
      condition: 'category',
   },
   {
      name: 'Обувь',
      id: '5',
      condition: 'category',
   },
   {
      name: 'Транспорт',
      id: '6',
      condition: 'category',
   },
]
export const filteredArray = [
   {
      name: 'Электроника',
      id: '1',
      condition: 'subCategory',
      subCategory: [
         'Телефон',
         'Аудиотехника',
         'Фото и видеокамеры',
         'Техника для кухни',
         'Бытовая техника',
         'Тв и видео',
         'Компьютеры, ноутбуки и планшеты',
         'Автоэлектроника',
      ],
   },
   {
      condition: 'subCategory',
      name: 'Одежда',
      id: '2',
      subCategory: [
         'Свитера',
         'Сумка',
         'Брюки',
         'Юбки',
         'Шубы',
         'Пальто',
         'Головные уборы',
         'Платья',
      ],
   },
   {
      name: 'Школа',
      condition: 'subCategory',
      id: '3',
      subCategory: [
         'Школьная сумка',
         'Тетради',
         'Маркеры',
         'Ручка',
         'Фломастеры',
         'Парта',
         'Доска',
         'Рюкзак',
         'Школьная форма',
      ],
   },
   {
      name: 'Дом и сад',
      id: '4',
      condition: 'subCategory',
      subCategory: [
         'Диван',
         'Плитка',
         'Мебель',
         'Продукты питания',
         'Декор для дома',
         'Комнатные растения',
         'Гладильные доски',
         'Ремонт и строительство',
         'Кухонные принадлежности',
      ],
   },
   {
      name: 'Обувь',
      condition: 'subCategory',
      id: '5',
      subCategory: [
         'Кроссовки',
         'Ботильоны',
         'Угги',
         'Домашние тапочки',
         'Сапоги',
         'Сандали',
         'Туфли',
      ],
   },
   {
      condition: 'subCategory',
      name: 'Транспорт',
      id: '6',
      subCategory: [
         'Велосипед',
         'Автомобили',
         'Автозапчасти',
         'Мотоциклы',
         'Водный транспорт',
         'Аксессуары, шины',
         'Другой транспорт',
      ],
   },
]

export const condition = [
   {
      name: 'Б/У',
      id: '1',
   },
   {
      name: 'Новый',
      id: '2',
   },
]
export const stateOption = [
   {
      name: 'Все',
      condition: 'condition',
   },
   {
      name: 'Б/У',
      condition: 'condition',
   },

   {
      name: 'Новый',
      condition: 'condition',
   },
]

export const complainArray = [
   'Жестокость и шокирующий контент',
   'Проявление ненависти',
   'Нелегальные действия или регламентированные товары',
   'Спам',
   'Призывы к насилию, опасные действия',
   'Сцены порнографического характера',
   'Прочее',
]
