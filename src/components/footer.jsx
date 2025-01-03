export default function Footer() {
    return (
        <footer className='flex items-center justify-center flex-col p-4'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full text-left text-white py-4 font-montreal-book uppercase">
                <div className="text-left">
                    <h3 className="font-bold font-montreal-medium text-enigma-green">ENIGMA</h3>
                    <ul>
                        <li><a className="no-underline text-gray-300 hover:text-green-500 hover:underline" href="https://lugvitc.net/" target="_blank" rel="noopener noreferrer">LUGVITC</a></li>
                        <li><a className="no-underline text-gray-300 hover:text-green-500 hover:underline" href="https://type.lugvitc.net/" target="_blank" rel="noopener noreferrer">LUGTYPE</a></li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="text-left">
                    <h3 className="font-bold font-montreal-medium text-enigma-green">Socials</h3>
                    <ul>
                        <li><a className="no-underline text-gray-300 hover:text-green-500 hover:underline" href="https://x.com/lugvitc" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a className="no-underline text-gray-300 hover:text-green-500 hover:underline" href="https://instagram.com/lugvitc" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a className="no-underline text-gray-300 hover:text-green-500 hover:underline" href="https://github.com/lugvitc" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    </ul>
                </div>
                <div className="text-left">
                    <h3 className="font-bold font-montreal-medium text-enigma-green">VIT Chennai</h3>
                    <ul>
                        <li>Kelambakkam - Vandalur Rd</li>
                        <li>Rajan Nagar, Chennai, Tamil Nadu</li>
                        <li>India</li>
                    </ul>
                </div>
            </div>
            <div className="line w-full my-4"></div>
            <p className="text-big-phone-xl font-calcio text-white responsive-text lg:text-big-desktop-xl">ENIGMA</p>
        </footer>
    )
}