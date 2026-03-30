import First from "./Components/Name";
import Head from "./Components/Head";
import Last from "./Components/Last";
import Female from "./Components/Female";
import Male from "./Components/Male";
import Other from "./Components/Other";
import Email from "./Components/Email";
import Password from "./Components/Password";
import Birthday from "./Components/Birthday";
import Month from "./Components/Month";
import Date from "./Components/Date";
import Year from "./Components/Year";
import Terms from "./Components/Terms";
import Submit from "./Components/Submit";




export default function App(){
  return(
    <>
    <Head />

    <First />
    <Last />
  <br />
    <Female />
     <Male />
     <Other />
     <br />
     <Email />
     <Password />
     <br />
     <Birthday />
     <Month />
     <Date />
     <Year />
     <Terms />
     <Submit />

    </>
  )
}