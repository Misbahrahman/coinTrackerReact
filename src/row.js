export function Row(props) {
    var data = props.data;

    var name = data.name;
    var symbol = data.symbol;
    var image = data.image;
    var current_price = data.current_price;
    var market_cap = data.market_cap;
    var change = data.price_change_24h;

    return (
       <tr>
        <img src={image}/>
        <td className="bold">{symbol}</td>
        <td className="bold">{name}</td>
        <td>{current_price}</td>
        <td>{market_cap}</td>
        <td>{change.toFixed(3)}</td>
       </tr> 
    );
}