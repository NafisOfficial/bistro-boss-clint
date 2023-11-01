import { Link } from 'react-router-dom';
import MenuItem from '../../Pages/Shared/MenuItem/MenuItem';

const Items = ({ Item,title }) => {
    return (
        <div>
            <div className='grid md:grid-cols-2 gap-4 mb-4'>
                {Item?.map(dt => <MenuItem key={dt._id} name={dt.name} image={dt.image} recipe={dt.recipe} price={dt.price}></MenuItem>)}
            </div>
            {title && <Link to={`/order/${title}`}><button className="btn block mx-auto border-0 border-b-4 btn-outline text-center mb-4 uppercase">Offer your favorite food</button></Link>}
        </div>
    );
};

export default Items;