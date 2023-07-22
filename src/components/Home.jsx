import '../App.css';
import studentImg from '../sctStudents.jpg'

function Home() {
    return(
        <div className="mainSection">
            <img src={studentImg} />
            <div className='text'>
                <h1>She Codes Too</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi cupiditate, expedita nulla voluptas natus fugit unde obcaecati ipsum nam possimus velit vero porro atque illo quos, placeat laboriosam pariatur nisi!</p>
            </div>
            
        </div>
    );
}
export default Home