import React, { useEffect, useState } from "react";
// import Header from "./Header";
import "../Componenets/profile.css";
import { Paper, Box, Avatar, Button } from "@mui/material";



import { Link, Navigate, useNavigate } from "react-router-dom";

const Profile1 = () => {
//   const [data, setData] = useState([]);
  
  return (
    <div
      style={{
        backgroundImage:
          'url("https://t4.ftcdn.net/jpg/02/94/66/11/240_F_294661109_lmICWxfTmzfQdLZjEmXpGNRzR5BV4k2g.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "150vh",
      }}
    >
      {/* <Header type="noBack" home="nohome" about='false'  /> */}
   

      <div className="profilecontent">
        <div className="listt">
          <Box
            className="box1"
            sx={{
              "& > :not(style)": {
                width: 500,
                height: 450,
                backgroundColor: "#00003cba",
              },
            }}
          >
            <Paper elevation={10} className="paperpp">
              <div className="ava">
                
              </div>
              
             <div className="prof"><center>
              <b/><br/>
               <b> HERE ARE THE RINGTONES :</b>
                <br/><br/>
                1. CALM TUNE
                <br/><br/>
                2. TEMPLE TONE 
                <br/>
                <br/>
                3. DREAM SOUND
                <br></br>
                <br></br>
                4. HOUSE MUSIC
                <br></br>
                <br/>
                5. FRESH MORNING
                <br/><br/>
            6. HOLIDAY BEAT
                <br/>
                <br/>
                7. PLAYTIME MUSIC
                <br></br>
                <br></br>
                8. DANCE TUNES
                <br></br>
                <br/>
                9. MODERN TONE
                <br/><br/>
                10. SILENCE SOUND
                <br/>
                <br/>
                11. MEMORIES MUSIC
                <br></br>
                <br></br>
                12. NIGHT TONES
                <br></br>
                <br/>
                13. LAKESIDE SOUND
                
                <br></br>
                <br/>
                14. CHILDHOOD TUNES
                <br></br>
                <br/>
                15. SUMMER SOUND
      
                <br></br>
                <br/>
                16. CLASSIC MUSIC
                <br></br>
                <br/>
                17. BLISS TUNES
                <br></br>
                <br/>
                <Link to="/adminHome"><Button class="logout-btn" >
                    BACK TO HOME
                  </Button></Link>
             </center>

             </div>
             
            </Paper>
          </Box>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Profile1;