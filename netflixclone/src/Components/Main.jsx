import { NetflixRegister } from '../netflix-register/netflix-register';
import './netflix-main.css';

export function NetflixMain()
{
    return(
        <div className="text-white text-center">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <NetflixRegister />
        </div>
    )
}