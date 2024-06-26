
export const Footer = () => {
    return (
        <footer className="bg-gray-200 p-4 mt-8">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <h4 className="text-lg font-semibold">Contact Us</h4>
                    <p className="text-gray-600">Email: info@example.com</p>
                    <p className="text-gray-600">Phone: +1234567890</p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold">Follow Us</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="text-blue-600 hover:underline">Facebook</a>
                        <a href="#" className="text-blue-600 hover:underline">Twitter</a>
                        <a href="#" className="text-blue-600 hover:underline">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};