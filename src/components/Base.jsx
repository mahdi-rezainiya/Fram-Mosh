import { Link } from 'react-router-dom';

export default function Base({ addBase, pizza }) {
    const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];
    // addBase([])

    return (
        <div className="base container">

            <h3>Step 1: Choose Your Base</h3>
            <ul>
                {bases.map(base => {
                    let spanClass = pizza.base === base ? 'active' : '';
                    return (
                        <li key={base} onClick={() => addBase(base)}>
                            <span className={spanClass}>{base}</span>
                        </li>
                    )
                })}
            </ul>

            {pizza.base && (
                <div className="next">
                    <Link to="/">
                        <button>Back</button>
                    </Link>
                    <Link to="/toppings">
                        <button>Next</button>
                    </Link>
                </div>
            )}

        </div>
    );
}
