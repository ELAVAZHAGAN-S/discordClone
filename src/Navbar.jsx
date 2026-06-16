import { useState } from "react"

function Navbar() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            {isHovered && <div className="page-blur-overlay"></div>}
            <div className="d-flex justify-content-center align-items-center mx-5 my-1 p-3 ps-1 ms-2 navs">
                <a href="#" className="px-3 py-2">Download</a>
                <a href="#" className="px-3 py-2">Nitro</a>
                <a href="#" className="px-3 py-2">Discover</a>
                <div className="dropdown-wrap" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <a href="#" className="px-3 py-2 dropdown-togg">Safety<i className="bi bi-chevron-down ms-1"></i></a>
                    <div className="drop-menu justify-content-center" style={{ width: '400px' }}>
                        <div className="d-block w-50">
                            <a href="#" className="drop-head">Resources</a>
                            <a href="#" className="dropdown-i">Family Center</a>
                            <a href="#" className="dropdown-i">Safety Library</a>
                            <a href="#" className="dropdown-i">Safety News</a>
                            <a href="#" className="dropdown-i">Teen Charter</a>
                        </div>
                        <div className="d-block w-50">
                            <a href="#" className="drop-head">Hubs</a>
                            <a href="#" className="dropdown-i">Parent Hub</a>
                            <a href="#" className="dropdown-i">Policy Hub</a>
                            <a href="#" className="dropdown-i">Privacy Hub</a>
                            <a href="#" className="dropdown-i">Transparency Hub</a>
                            <a href="#" className="dropdown-i">Wellbeing Hub</a>
                        </div>
                        <div className="obj">
                            <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/678a4dee303240abdd278abf_Egg.webp" alt="" width="200px" height="200px" />
                        </div>
                    </div>
                </div>
                <div className="dropdown-wrap" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <a href="#" className="px-3 py-2 dropdown-togg">Quests<i className="bi bi-chevron-down ms-1"></i></a>
                    <div className="drop-menu justify-content-center">
                        <div className="d-block w-100">
                            <a href="#" className="drop-head">Resources</a>
                            <a href="#" className="dropdown-i">Advertising</a>
                            <a href="#" className="dropdown-i">Success Stories</a>
                            <a href="#" className="dropdown-i">Quests FAQ</a>
                        </div>
                        <div className="obj obj-l">
                            <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/678a4e92695af76b1f7487a3_Set%201%2015.webp" alt="" width="200px" height="200px" />
                        </div>
                    </div>
                </div>
                <div className="dropdown-wrap" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <a href="#" className="px-3 py-2 dropdown-togg">Support<i className="bi bi-chevron-down ms-1"></i></a>
                    <div className="drop-menu justify-content-center">
                        <div className="d-block w-100">
                            <a href="#" className="drop-head">Resources</a>
                            <a href="#" className="dropdown-i">Help Center</a>
                            <a href="#" className="dropdown-i">Feedback</a>
                            <a href="#" className="dropdown-i">Submit a Request</a>
                        </div>
                        <div className="obj obj3">
                            <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/678a4b31695af76b1f713594_Discord_Nelly_Pose2_Flying%201.webp" alt="" width="200px" height="200px" />
                        </div>
                    </div>
                </div>
                <div className="dropdown-wrap" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <a href="#" className="px-3 py-2 dropdown-togg">Blog<i className="bi bi-chevron-down ms-1"></i></a>
                    <div className="drop-menu justify-content-center" style={{ width: '300px' }}>
                        <div className="d-block w-100">
                            <a href="#" className="drop-head">Collections</a>
                            <a href="#" className="dropdown-i">Featured</a>
                            <a href="#" className="dropdown-i">Community</a>
                            <a href="#" className="dropdown-i">Discord HQ</a>
                            <a href="#" className="dropdown-i">Engineering & Developers</a>
                            <a href="#" className="dropdown-i">How to Discord</a>
                            <a href="#" className="dropdown-i">Policy & Safety</a>
                            <a href="#" className="dropdown-i">Product & Features</a>
                        </div>
                        <div className="obj">
                            <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/678a4c12dbf6be5d792aa920_Clyde%20Cube.webp" alt="" width="200px" height="200px" />
                        </div>
                    </div>
                </div>
                <div className="dropdown-wrap" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <a href="#" className="px-3 py-2 dropdown-togg">Developers<i className="bi bi-chevron-down ms-1"></i></a>
                    <div className="drop-menu flex-column justify-content-center gap-5" style={{ width: '300px' }}>
                        <div className="d-block w-100">
                            <a href="#" className="drop-head">Featured</a>
                            <a href="#" className="dropdown-i">Discord Social SDK</a>
                            <a href="#" className="dropdown-i">Apps and Activities</a>
                        </div>
                        <div className="d-block w-100">
                            <a href="#" className="drop-head">Documentation</a>
                            <a href="#" className="dropdown-i">Developer Home</a>
                            <a href="#" className="dropdown-i">Developer Documentation</a>
                            <a href="#" className="dropdown-i">Developer Applications</a>
                            <a href="#" className="dropdown-i">Developer Help Center</a>
                        </div>
                        <div className="obj obj-l">
                            <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/678a4aae3ee9f2e87506de82_Clyde%20(1).webp" alt="" width="200px" height="200px" />
                        </div>
                    </div>
                </div>
                <a href="#" className="px-3 py-2">Carrers</a>
            </div>
        </>
    )
}

export default Navbar