import { Route, Routes } from "react-router-dom"
import { ReservationPage } from "../ReservationPage/ReservationPage"
import { ReservationPage2 } from "../ReservationPage/ReservationPage2"
import { ReservationPage3 } from "../ReservationPage/ReservationPage3"
import { ReservationPage4 } from "../ReservationPage/ReservationPage4"
import { ReservationPage5 } from "../ReservationPage/ReservationPage5"
import { ReservationPage6 } from "../ReservationPage/ReservationPage6"
import { ReservationPage7 } from "../ReservationPage/ReservationPage7"
import { ReservationPage8 } from "../ReservationPage/ReservationPage8"
import { ReservationPage9 } from "../ReservationPage/ReservationPage9"
import { ReservationPage10 } from "../ReservationPage/ReservationPage10"
import { ReservationPage11 } from "../ReservationPage/ReservationPage11"
import { ReservationPage12 } from "../ReservationPage/ReservationPage12"
import { ReservationPage13 } from "../ReservationPage/ReservationPage13"
import { ReservationPage14 } from "../ReservationPage/ReservationPage14"
import { ReservationPage15 } from "../ReservationPage/ReservationPage15"
import { ReservationPage16 } from "../ReservationPage/ReservationPage16"
import { ReservationPage17 } from "../ReservationPage/ReservationPage17"
import { ShowText } from "../../Explain"
import App from "../../../App"

export const Router = () => {
    return(
        <Routes>
         <Route path="/ReservationPage" element={<ReservationPage  />} />
         <Route path="/ReservationPage2" element={<ReservationPage2 />} />
         <Route path="/ReservationPage3" element={<ReservationPage3  />} />
         <Route path="/ReservationPage4" element={<ReservationPage4  />} />
         <Route path="/ReservationPage5" element={<ReservationPage5  />} />
         <Route path="/ReservationPage6" element={<ReservationPage6  />} />
         <Route path="/ReservationPage7" element={<ReservationPage7  />} />
         <Route path="/ReservationPage8" element={<ReservationPage8  />} />
         <Route path="/ReservationPage9" element={<ReservationPage9  />} />
         <Route path="/ReservationPage10" element={<ReservationPage10  />} />
         <Route path="/ReservationPage11" element={<ReservationPage11  />} />
         <Route path="/ReservationPage12" element={<ReservationPage12 />} />
         <Route path="/ReservationPage13" element={<ReservationPage13  />} />
         <Route path="/ReservationPage14" element={<ReservationPage14  />} />
         <Route path="/ReservationPage15" element={<ReservationPage15  />} />
         <Route path="/ReservationPage16" element={<ReservationPage16 />} />
         <Route path="/ReservationPage17" element={<ReservationPage17  />} />
         <Route path="/ShowText" element={<ShowText />}/>
      </Routes>
    )
}