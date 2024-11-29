export default function Footer() {
    return (
        <footer className='flex items-center justify-center flex-col'>
            <div className="grid grid-cols-3 gap-10 w-full text-left text-white py-4 uppercase">
                <div className="text-left">
                    <h3 className="font-bold">ENIGMA</h3>
                    <ul>
                        <li><a href="https://lugvitc.net/" target="_blank" rel="noopener noreferrer">LUGVITC</a></li>
                        <li><a href="https://type.lugvitc.net/" target="_blank" rel="noopener noreferrer">LUGTYPE</a></li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="text-left">
                    <h3 className="font-bold">Socials</h3>
                    <ul>
                        <li><a href="https://x.com/lugvitc" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://instagram.com/lugvitc" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://github.com/lugvitc" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold">VIT Chennai</h3>
                    <ul>
                        <li>Kelambakkam - Vandalur Rd</li>
                        <li>Rajan Nagar, Chennai, Tamil Nadu</li>
                        <li>India</li>
                    </ul>
                </div>
            </div>
            <div className="line w-full"></div>
            <text className="text-big-xl font-calcio text-white py-0 px-0">ENIGMA</text>
        </footer>
    )
}