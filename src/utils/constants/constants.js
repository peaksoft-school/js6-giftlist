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
      name: 'электроника',
      id: '1',
   },
   {
      name: 'одежда',
      id: '2',
   },
   {
      name: 'школа',
      id: '3',
   },
   {
      name: 'дом и сад',
      id: '4',
   },
   {
      name: 'обувь',
      id: '5',
   },
   {
      category: 'транспорт',
      id: '6',
   },
]
export const filteredArray = [
   {
      name: 'электроника',
      id: '1',
      subCategory: ['телефон', 'аудиотехника', 'фото и видеокамеры'],
   },
   {
      name: 'одежда',
      id: '2',
      subCategory: ['свитер', 'сумка'],
   },
   {
      name: 'школа',
      id: '3',
      subCategory: ['школьная сумка', 'тетрадь'],
   },
   {
      name: 'дом и сад',
      id: '4',

      subCategory: ['диван', 'плитка'],
   },
   {
      name: 'обувь',
      id: '5',
      subCategory: ['кроссовки'],
   },
   {
      name: 'транспорт',
      id: '6',
      subCategory: ['велосипед'],
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
