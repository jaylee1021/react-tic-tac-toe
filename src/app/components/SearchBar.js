export default function SearchBar() {
    return (
        <form>
            <input type="text" placeholder="Search..." />
            <p></p>
            <label>
                <input type="checkbox" />
                {' '}
                Only show products in stock
            </label>
        </form>
    );
}