import { ReactComponent as Lenta } from '../../assets/svg/lenta.svg'
import { ReactComponent as Friends } from '../../assets/svg/friends.svg'
import { ReactComponent as Bron } from '../../assets/svg/bronIcons.svg'
import { ReactComponent as Charity } from '../../assets/svg/charityIcons.svg'
import { ReactComponent as Compolaints } from '../../assets/svg/complaints.svg'
import { ReactComponent as List } from '../../assets/svg/listIcon.svg'
import { ReactComponent as MyHalidays } from '../../assets/svg/myholidays.svg'

export const URL_BASE = 'http://3.70.207.7'
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
