import 'bulma/css/bulma.css'
import ProfileCard from "./profileCard";
import Siri from "./images/siri.png";
import Alexa from "./images/alexa.png";
import Cortana from "./images/cortana.png";

function app(){
    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>
                    Personal Digital Assistants 
                    </p>
                    </div>
            </section>
            <div className='container' >
                <section className='section'>
                 <div className='columns'>
                    <div className='column is-4'>
                    <ProfileCard title = "alexa" handle ="@alexa" image ={Alexa} discription = "alexa is made by amazon and helps to buy thing"/>
                    </div>
                    <div className='column is-4'>
                    <ProfileCard title = "cortana" handle ="@cortana" image ={Cortana} discription = "cortana is made by microsoft"/>
                    </div>
                    <div className='column is-4'>
                    <ProfileCard title = "siri" handle ="@siri" image ={Siri} discription = "alexa is made by apple"/>
                    </div>
                 </div>
                </section>
            </div>                        
        </div>
    )
}
export default app;