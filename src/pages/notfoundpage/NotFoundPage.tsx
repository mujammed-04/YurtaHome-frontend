import { e404 } from '../../shared/icons'
import './not-found.css'

export default function NotFoundPage(){
    return(
        <section className="not-found">
            <div className="container">
                <div className="notfound__wrapper">
                    <img src={e404} alt="" />
                    <h1>Cтраница не найдена</h1>
                </div>
            </div>
        </section>
    )
}