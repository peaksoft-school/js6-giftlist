import './App.css'
import HolidayCard from './components/UI/HolidayCard'
import mothersDay from './assets/images/Rectangle8.png'
import GiftCard from './components/UI/GiftCard'
import userPost from './assets/images/bookedCards/userPost.png'
import bookedImage from './assets/images/bookedCards/footerImage.png'
import userImage from './assets/images/bookedCards/userImage.png'

function App() {
   return (
      <div className="App">
         <GiftCard
            ribbonDate="120412"
            ribbonBooked="bron"
            ribbonBirthday="ДЕНЬ РОЖДЕНИЯ"
            leftImg={userPost}
            ribbonBookingImg={bookedImage}
            giftName="Название подарка"
            headerImg={userImage}
            ribbonUserName="Albert Flores"
         />
      </div>
   )
}

export default App
