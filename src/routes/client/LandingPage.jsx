import { Link } from "react-router-dom";

const LandingPage = () =>
{
    return(
        <div className="container-fluid p-0">
            <nav className="navbar px-5" style={{backgroundColor: "#c2bcae",position:"fixed", width:"100vw", zIndex:100}}>
                <div className="container-fluid">
                    <div className="d-flex gap-2 flex-row align-items-center">
                        <img src="/bee.png" height="30px" />
                        <Link className="navbar-brand h1" style={{color: "#f4d12f", fontSize: "30px", textShadow:"3px 3px 0 #000"}} to="/">hive</Link>
                    </div>
                    <div className="d-flex flex-row" style={{gap: "30px"}}>
                        <Link className="nav-link" to="/listings">listings</Link>
                        <Link className="nav-link" to="/admin/register">organization login</Link>
                    </div>
                </div>
            </nav>
            <div style = {{backgroundImage:"url(../public/honeycomb.jpg)", backgroundAttachment:"fixed"}}>
                <div style = {{backgroundColor:"rgba(0, 0, 0,0.4)"}}>
                <div className="d-flex justify-content-between align-items-center" style={{paddingLeft: "300px",paddingRight: "300px",height: "90vh", filter:"brightness(100%)"}}>
                <div >
                    <h1 style = {{color:"#f4d12f", fontFamily: "Gill Sans, sans-serif", fontSize: "100px",textShadow:"5px 5px 0 #fff"}}>🐝hive</h1>
                    <h2 style = {{color:"white"}}>Connecting students to their future.</h2>
                    <p style={{marginTop: "30px", color:"white"}}>Hive is a tool for Houston high schoolers to find internship, research, and volenteer opportunites outside of the classroom</p>
                    <Link className="btn" style={{backgroundColor: "#f4d12f", color: "black", width:"250px", verticalAlign:"center", height:""}} to="/listings">View Listings</Link>
                </div>
                <img src="landing-page-img-1.jpg" height="250px" className="rounded"/>
            </div>
                </div>
            </div>

            <div className="d-flex justify-content-between align-items-center" style={{paddingLeft: "250px",paddingRight: "250px",height: "100vh", backgroundColor: "black"}}>
                <img src="landing-page-img-4.jpg" height="300px" className="rounded"/>
                <div style={{margin: "200px"}}>
                    <h1 style={{color: "#eeede9"}}>Our<span style = {{color:"#f4d12f"}}> Mission</span></h1>
                    <p style={{ color: "#eeede9"}}>Hive was made by a group of high school juniors and seniors interested in the computer science field. We found that gaining working expeirence prior to college is very difficult for teens with few corporate connections.
                    to resolve this issue, we took inspiration from websites such as LinkedIn to create a network of local internship sin various fields of study in our community. WIth this tool, teens in our community will be able to connect to oppurtunities that will help them tremendously in their futures.</p>
                </div>
            </div>
            <div className="d-flex justify-content-between align-items-center" style={{paddingLeft: "250px",paddingRight: "250px",height: "100vh", backgroundColor: "#988b6b"}}>
                <img src="landing-page-img-2.jpg" height="300px" className="rounded"/>
                <div style={{margin: "30px"}}>
                    <h3 style={{color: "#eeede9"}}>real companies,</h3>
                    <h1 style={{color: "#eeede9"}}>real <span style = {{color:"#f4d12f"}}>oppurtunities</span></h1>
                    <p style={{ color: "#eeede9"}}>Hive makes it easy to leverage your education and personal projects to gain experience</p>
                    <Link className="btn" style={{backgroundColor: "#f4d12f", color: "white"}} to="/listings">View Listings</Link>
                </div>
            </div>

            <div className="d-flex justify-content-between align-items-center" style={{paddingLeft: "250px",paddingRight: "250px",height: "100vh", backgroundColor:"#fcf2c7"}}>
                
                <div style={{margin: "30px"}}>
                    <h1 style={{}}>invest in the future.</h1>
                    <p style={{}}>With the advent of the internet, high school students are gaining knowledge and skills comparable to undergrads in vairous fields. Hive lets your organization take advantage of this large untapped labour market. </p>
                    <Link className="btn" style={{backgroundColor: "#f4d12f", color: "white"}} to="/admin/register">Sign Up</Link>
                </div>
                <img src="/landing-page-img-3.jpg" height="300px" className="rounded"/>
            </div>
            <footer className="text-center p-3" style = {{backgroundColor:"#7a683b"}}>made with ❤️ by femi, shadowstryk3r, and ooftown30
            <br></br><span><a style = {{color:"white"}}href = "https://github.com/bell-boy">bell-boy</a> , <a style = {{color:"white"}}href = "https://github.com/shadowstryk3r">shadowstryk3r</a> , <a style = {{color:"white"}}href = "https://github.com/ooftown30">ooftown30</a></span></footer>
        </div>
    );
};

export default LandingPage;