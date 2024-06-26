export const Header = () => {
    return (
        <div className="bg-gray-200 p-4">
            <div className="sm:container mx-auto flex justify-between items-center">
                <h3 className="text-lg font-semibold">My Store</h3>
                <div>
                    <a href="#" className="text-blue-600 mx-2 hover:underline">Client</a>
                    <a href="#" className="text-blue-600 mx-2 hover:underline">Admin</a>
                </div>
            </div>
        </div>
    );
};