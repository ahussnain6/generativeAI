import "./Styles/Home.css";
import { useState } from "react";
import axios from "axios";
import TypeWriterEffect from "react-typewriter-effect";
import { IoSend } from "react-icons/io5";
const Home = () => {
  const [sprompt,setSPrompt] = useState("");
  const [promp, setPromp] = useState("");
  const [data, setData] = useState("");
  const [show, setShow] = useState(null);
  const getResponse = async (e) => {
    e.preventDefault();
    setSPrompt(promp);
    try {
      setShow(false);
      setData("");
      const response = await axios.post("https://generative-ai-by-ali.vercel.app/ai/getText",{ body: promp });
      setData(response.data.resp);setShow(true);setPromp("");
    } catch (error) {
      console.log(error); } } ;
  return (<><div className="home-1">
       <h1 className="font m-2">GENERATIVE AI CHATBOT BY ALI HUSSNAIN</h1>
    <div className="scroll-1">
          <h2 className="font cap">
            {sprompt}
          </h2>
          {show ? ( <TypeWriterEffect textStyle={{ fontFamily:"Raleway",fontWeight:"350",fontSize: "1rem" }}
              // startDelay={150}
              className="font"
              cursorColor="black" text={`${data}`} typeSpeed={1} /> ) : null}</div>
        <form action="" onSubmit={getResponse}>
          <input type="text" placeholder="Enter Your Prompt"
          className="input-22 font"
            onChange={(e)=> setPromp(e.target.value)} value={promp} />
          <button className="btn-45"><IoSend /></button>
        </form>
      </div>
    </>
  );
};

export default Home;
