import './App.css'
import GiftCard from './components/UI/GiftCard'
import userimage from './assets/images/bookedCards/userImage.png'
import userspost from './assets/images/bookedCards/userPost.png'
import points from './assets/images/bookedCards/points.svg'

function App() {
   return (
      <div className="App">
         <GiftCard
            usersName="Erlan"
            postName="Письма Элджертона"
            newGift="Новый"
            userImage={userimage}
            userPost={userspost}
            postDate="06.10.22"
            booked="Забронтрован"
            vector={points}
         />
         <GiftCard
            usersName="Erlan"
            postName="Письма Элджертона"
            newGift="Новый"
            userImage={userimage}
            userPost={userspost}
            postDate="06.10.22"
            booked="Забронтрован"
            vector={points}
         />
         <GiftCard
            usersName="Erlan"
            postName="Письма Элджертона"
            newGift="Новый"
            userImage={userimage}
            userPost={userspost}
            postDate="06.10.22"
            booked="Забронтрован"
            vector={points}
         />
      </div>
   )
}

export default App
