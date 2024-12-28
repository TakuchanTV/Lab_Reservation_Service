import { Route, Routes } from "react-router-dom"
import { ReservationPage1 } from "../ReservationPage/ReservationPage.tsx"
import { ReservationPage2 } from "../ReservationPage/ReservationPage2.tsx"
import { ReservationPage3 } from "../ReservationPage/ReservationPage3.tsx"
import { ReservationPage4 } from "../ReservationPage/ReservationPage4.tsx"
import { ReservationPage5 } from "../ReservationPage/ReservationPage5.tsx"
import { ReservationPage6 } from "../ReservationPage/ReservationPage6.tsx"
import { ReservationPage7 } from "../ReservationPage/ReservationPage7.tsx"
import { ReservationPage8 } from "../ReservationPage/ReservationPage8.tsx"
import { ReservationPage9 } from "../ReservationPage/ReservationPage9.tsx"
import { ReservationPage10 } from "../ReservationPage/ReservationPage10.tsx"
import { ReservationPage11 } from "../ReservationPage/ReservationPage11.tsx"
import { ReservationPage12 } from "../ReservationPage/ReservationPage12.tsx"
import { ReservationPage13 } from "../ReservationPage/ReservationPage13.tsx"
import { ReservationPage14 } from "../ReservationPage/ReservationPage14.tsx"
import { ReservationPage15 } from "../ReservationPage/ReservationPage15.tsx"
import { ReservationPage16 } from "../ReservationPage/ReservationPage16.tsx"
import { ReservationPage17 } from "../ReservationPage/ReservationPage17.tsx"
import { ShowText } from "../../Explain"
import App from "../../../App"

export const Router = () => {
    return(
        <Routes>
         <Route path="/ReservationPage1" element={<ReservationPage1  />} />
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