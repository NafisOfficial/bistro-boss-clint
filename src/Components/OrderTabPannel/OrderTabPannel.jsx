import Card from '../Card/Card';

const OrderTabPannel = ({ items }) => {
    return (
        <div className='grid grid-cols-3 gap-5'>
            {items.map(item => <Card key={item.id} image={item.image} name={item.name} recipe={item.recipe} price={item.price}></Card>)}
        </div>

    );
};

export default OrderTabPannel;